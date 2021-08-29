using System;
using System.Collections.Generic;
using tacos_el_rojo.Models;

namespace tacos_el_rojo.Repositories
{

    public interface IDishRepository
    {
        Dish GetDish(Guid id);
        IEnumerable<Dish> GetDishes();
        void CreateDish(Dish dish);
    }
        
}