using Google.Cloud.Firestore;
using ProductCatalogService.Models;

namespace ProductCatalogService.Services
{
    public class ProductService
    {
        private readonly CollectionReference _products;

        public ProductService()
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", "FirebaseKey.json");
            FirestoreDb db = FirestoreDb.Create("your-project-id");
            _products = db.Collection("products");
        }

        public async Task<List<Product>> GetAllAsync()
        {
            var snapshot = await _products.GetSnapshotAsync();
            return snapshot.Documents.Select(doc => doc.ConvertTo<Product>()).ToList();
        }

        public async Task<Product> GetByIdAsync(string id)
        {
            var doc = await _products.Document(id).GetSnapshotAsync();
            return doc.Exists ? doc.ConvertTo<Product>()! : null!;
        }

        public async Task AddAsync(Product product)
        {
            await _products.AddAsync(product);
        }

        public async Task UpdateAsync(string id, Product product)
        {
            await _products.Document(id).SetAsync(product);
        }

        public async Task DeleteAsync(string id)
        {
            await _products.Document(id).DeleteAsync();
        }
    }
}
