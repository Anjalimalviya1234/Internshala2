// Services/IOrderService.cs
namespace GroceryApi.Services;

public interface IOrderService
{
    Task PlaceOrderAsync(int productId, int quantity);
}
