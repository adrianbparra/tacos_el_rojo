using System;
using System.Collections.Generic;
using tacos_el_rojo.Models;

namespace tacos_el_rojo.Repositories
{

    public interface IDishRepository
    {
        Dish GetDish(int id);
        IEnumerable<Dish> GetDishes();
        void CreateDish(Dish dish);
        void UpdateDish(Dish dish);
        void DeleteDish(int id);
    }
        
}