using System;
using System.Linq;
using System.Collections.Generic;
using tacos_el_rojo.Models;

namespace tacos_el_rojo.Repositories
{

    public class InMemDishRepository : IDishRepository
    {
        private readonly List<Dish> dishes = new()
        {
            new Dish { Name = "Tacos", Price = 5, CreatedDate = DateTimeOffset.UtcNow },
            new Dish { Name = "Burritos", Price = 6, CreatedDate = DateTimeOffset.UtcNow },
            new Dish { Name = "Quesadillas", Price = 6, CreatedDate = DateTimeOffset.UtcNow },


        };

        public IEnumerable<Dish> GetDishes()
        {
            return dishes;
        }

        public Dish GetDish(int id)
        {
            return dishes.Where(dishes => dishes.Id == id).SingleOrDefault();
        }

        public void CreateDish(Dish dish)
        {
            dishes.Add(dish);
        }

        public void UpdateDish(Dish dish)
        {
            var index = dishes.FindIndex(existingDish => existingDish.Id == dish.Id);

            dishes[index] = dish;
        }

        public void DeleteDish(int id)
        {
            var index = dishes.FindIndex(existingDish => existingDish.Id == id);

            dishes.RemoveAt(index);
        }
    }
}