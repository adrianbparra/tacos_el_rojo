using System.ComponentModel.DataAnnotations;

namespace tacos_el_rojo.Dtos
{
    
    public record CreateDishDto
    {
        [Required]
        public string Name {get; init;}
        // it will be toppings of meats that can be on dish
        public string[] Toppings {get; init;}
        
        [Required]
        [Range(1,1000)]
        public double Price {get; init;}
    }
}