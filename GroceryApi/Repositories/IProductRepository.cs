using GroceryApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GroceryApi.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();           // Already added
        Task<Product?> GetByIdAsync(int id);     // <-- Add this
    }
}
