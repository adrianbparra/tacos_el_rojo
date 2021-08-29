using System;

//  https://youtu.be/ZXdFisA_hOY?t=2125

namespace tacos_el_rojo.Models
{
    // main dishes add, edit, delete
    // these are like taco, burrito, quesadilla
    public record Dish
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