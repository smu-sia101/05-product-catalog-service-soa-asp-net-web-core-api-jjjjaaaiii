namespace ProductCatalogService.Models
{
    public class ProductDatabaseSetting
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string ProductCollectionName { get; set; } = string.Empty;
    }
}
