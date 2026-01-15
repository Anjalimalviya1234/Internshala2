// Repositories/OrderRepository.cs
using GroceryApi.Data;
using GroceryApi.Models;

namespace GroceryApi.Repositories;

public class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _context;
    public OrderRepository(AppDbContext context) => _context = context;

    public async Task AddAsync(Order order)
    {
        await _context.Orders.AddAsync(order);
    }
}
