using System;

namespace  tacos_el_rojo.Dtos
{
    public record DishDto
    {

        //  can not modify with init
        public Guid Id {get; init;}
        public string Name {get; init;}
        // it will be toppings of meats that can be on dish
        public string[] Toppings {get; init;}
        public double Price {get; init;}
        public DateTimeOffset CreatedDate {get; init;}

    }
}