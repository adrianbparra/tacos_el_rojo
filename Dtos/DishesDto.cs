using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace  tacos_el_rojo.Dtos
{
    public record DishDto
    {

        //  can not modify with init
        public int Id {get; init;}
        public string Name {get; init;}
        // it will be toppings of meats that can be on dish
        [NotMapped]
        public string[] Toppings {get; init;}
        public double Price {get; init;}
        public DateTimeOffset CreatedDate {get; init;}

    }
}