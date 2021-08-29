using tacos_el_rojo.Dtos;
using tacos_el_rojo.Models;

namespace tacos_el_rojo
{
    public static class Extensions{
        public static DishDto AsDto(this Dish dish)
        {
            return new DishDto {
                Id = dish.Id,
                Name = dish.Name,
                Price = dish.Price,
                Toppings = dish.Toppings,
                CreatedDate = dish.CreatedDate
            };
        }
    }
}