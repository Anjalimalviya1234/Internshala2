// Services/OrderService.cs
using GroceryApi.Data;
using GroceryApi.Models;
using GroceryApi.Repositories;

namespace GroceryApi.Services;

public class OrderService : IOrderService
{
    private readonly AppDbContext _context;
    private readonly IProductRepository _productRepo;
    private readonly IOrderRepository _orderRepo;

    public OrderService(
        AppDbContext context,
        IProductRepository productRepo,
        IOrderRepository orderRepo)
    {
        _context = context;
        _productRepo = productRepo;
        _orderRepo = orderRepo;
    }

    public async Task PlaceOrderAsync(int productId, int quantity)
    {
        using var transaction = await _context.Database.BeginTransactionAsync();

        var product = await _productRepo.GetByIdAsync(productId)
            ?? throw new Exception("Product not found");

        if (product.Stock < quantity)
            throw new Exception("Insufficient stock");

        product.Stock -= quantity;

        var order = new Order
        {
            ProductId = productId,
            Quantity = quantity,
            TotalPrice = product.Price * quantity,
            CreatedAt = DateTime.UtcNow
        };

        await _orderRepo.AddAsync(order);
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
    }
}
