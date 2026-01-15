// Repositories/IOrderRepository.cs
using GroceryApi.Models;

namespace GroceryApi.Repositories;

public interface IOrderRepository
{
    Task AddAsync(Order order);
}
