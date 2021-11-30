namespace tacoelrojo.Settings
{
    public class AzureDbSettings
    {
        public string Host {get;set;}
        public int Port {get; set;}

        public string ConnectionString { 
            get {
                return $"Data Source={Host};Initial Catalog=tacoselrojobe;Integrated Security=SSPI";
            } 
        }
    }
}