using System;

//  https://youtu.be/ZXdFisA_hOY?t=2125

namespace tacos_el_rojo.Models
{
    // main dishes add, edit, delete
    // these are like taco, burrito, quesadilla
    public record Toppings
    {

        //  can not modify with init
        public Guid Id {get; init;}
        public string Name {get; init;}
        public DateTimeOffset CreatedDate {get; init;}

    }
    
}