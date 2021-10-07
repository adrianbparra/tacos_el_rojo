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

        // POST /dishes
        [HttpPost]
        public ActionResult<DishDto> CreateDish(CreateDishDto dishDto)
        {
            Dish dish = new(){
                Id = Guid.NewGuid(),
                Name = dishDto.Name,
                Toppings = dishDto.Toppings,
                Price = dishDto.Price,
                CreatedDate = DateTimeOffset.UtcNow
            };

            repository.CreateDish(dish);

            return CreatedAtAction(nameof(GetDish), new { id = dish.Id}, dish.AsDto());
        }

        // PUT /dishes/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateDish(Guid id, UpdateDishDto dishDto)
        {
            var existingDish = repository.GetDish(id);

            if (existingDish is null)
            {
                return NotFound();
            }

            Dish updatedDish = existingDish with {
                Name = dishDto.Name,
                Price = dishDto.Price,
                Toppings = dishDto.Toppings,

            };

            repository.UpdateDish(updatedDish);

            return NoContent();
        }
        
        // DELETE /dishes/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteDish(Guid id)
        {
            var existingDish = repository.GetDish(id);

            if (existingDish is null)
            {
                return NotFound();
            }

            repository.DeleteDish(id);

            return NoContent();
        }

    }
    
}