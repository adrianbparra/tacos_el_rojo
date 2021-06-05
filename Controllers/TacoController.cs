using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using tacos_el_rojo.Models;
using tacos_el_rojo.Services;

namespace tacos_el_rojo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TacoController : ControllerBase
    {
        public TacoController()
        {

        }
        // GET all action
        [HttpGet]
        public ActionResult<List<Taco>> GetAll() =>
            TacoServices.GetAll();

        // GET by Id action
        [HttpGet("{id}")]
        public ActionResult<Taco> Get(int id)
        {
            var taco = TacoServices.Get(id);

            if(taco == null)
                return NotFound();

            return taco;
        }

        // POST action
        [HttpPost]
        public IActionResult Create(Taco taco)
        {
            TacoServices.Add(taco);

            return CreatedAtAction(nameof(Create),new {id = taco.Id}, taco);
        }
        
        // PUT action
        [HttpPut("{id}")]
        public IActionResult Update(int id, Taco taco)
        {
            if(id != taco.Id)
                return BadRequest();
            var existingTaco = TacoServices.Get(id);
            if(existingTaco is null)
                return NotFound();

            TacoServices.Update(taco);
                return NoContent();
        }

        // DELETE action
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var taco = TacoServices.Get(id);

            if (taco is null)
                return NotFound();
            
            TacoServices.Delete(id);
            
            return NoContent();
        }
    }
}