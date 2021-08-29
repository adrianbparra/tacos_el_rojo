using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using tacos_el_rojo.Repositories;
using tacos_el_rojo.Models;
using System.Linq;
using tacos_el_rojo.Dtos;

namespace tacos_el_rojo.Controllers
{
    [ApiController]
    // [controller] is what ever name of controller ie: Dish
    [Route("dishes")]

    public class DishController : ControllerBase
    {
        private readonly IDishRepository repository;

        public DishController(IDishRepository repository)
        {
            this.repository = repository;
        }
        
        // Get /dishes
        [HttpGet]
        public ActionResult<IEnumerable<DishDto>> GetDishes()
        {
            var dishes = repository.GetDishes().Select( dish => dish.AsDto());

            return Ok(dishes);
        }

        // Get /dishes/{id}
        [HttpGet("{id}")]
        public ActionResult<DishDto> GetDish(Guid id)
        {
            var dish = repository.GetDish(id);

            if (dish is null)
            {
                return NotFound();
            }

            return Ok(dish.AsDto());
        }
        

    }
    
}