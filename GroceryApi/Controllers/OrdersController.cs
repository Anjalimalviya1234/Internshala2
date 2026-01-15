// Controllers/OrdersController.cs
using GroceryApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace GroceryApi.Controllers;

[ApiController]
[Route("orders")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _service;
    public OrdersController(IOrderService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> Post(OrderRequest request)
    {
        await _service.PlaceOrderAsync(request.ProductId, request.Quantity);
        return Ok(new { message = "Order placed successfully" });
    }
}

public record OrderRequest(int ProductId, int Quantity);
