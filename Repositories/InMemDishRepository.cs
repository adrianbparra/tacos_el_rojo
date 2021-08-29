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
            new Dish { Id = Guid.NewGuid(), Name = "Tacos", Price = 5, CreatedDate = DateTimeOffset.UtcNow },
            new Dish { Id = Guid.NewGuid(), Name = "Burritos", Price = 6, CreatedDate = DateTimeOffset.UtcNow },
            new Dish { Id = Guid.NewGuid(), Name = "Quesadillas", Price = 6, CreatedDate = DateTimeOffset.UtcNow },


        };

        public IEnumerable<Dish> GetDishes()
        {
            return dishes;
        }

        public Dish GetDish(Guid id)
        {
            return dishes.Where(dishes => dishes.Id == id).SingleOrDefault();
        }

        public void CreateDish(Dish dish)
        {
            throw new NotImplementedException();
        }
    }
}