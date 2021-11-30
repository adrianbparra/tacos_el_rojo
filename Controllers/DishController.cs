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
        private readonly AzureDbDishRepository _context;

        public DishController(AzureDbDishRepository context)
        {
            _context = context;
        }
        
        // Get /dishes
        [HttpGet]
        public ActionResult<IEnumerable<DishDto>> GetDishes()
        {
            Console.WriteLine("get dishes");
            
            var dishes = _context.Dishes.AsEnumerable();

            return Ok(dishes);

        }

        // Get /dishes/{id}
        [HttpGet("{id}")]
        public ActionResult<DishDto> GetDish(Guid id)
        {
            var dish = _context.GetDish(id);

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
                Name = dishDto.Name,
                Toppings = dishDto.Toppings,
                Price = dishDto.Price,
                CreatedDate = DateTimeOffset.UtcNow
            };

            _context.Add(dish);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetDish), new { id = dish.Id}, dish.AsDto());
        }

        // PUT /dishes/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateDish(Guid id, UpdateDishDto dishDto)
        {
            var existingDish = _context.GetDish(id);

            if (existingDish is null)
            {
                return NotFound();
            }

            Dish updatedDish = existingDish with {
                Name = dishDto.Name,
                Price = dishDto.Price,
                Toppings = dishDto.Toppings,

            };

            _context.UpdateDish(updatedDish);

            return NoContent();
        }
        
        // DELETE /dishes/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteDish(Guid id)
        {
            var existingDish = _context.GetDish(id);

            if (existingDish is null)
            {
                return NotFound();
            }

            _context.DeleteDish(id);

            return NoContent();
        }

    }
    
}