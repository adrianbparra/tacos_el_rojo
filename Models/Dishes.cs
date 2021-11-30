using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//  https://youtu.be/ZXdFisA_hOY?t=2125

namespace tacos_el_rojo.Models
{
    // main dishes add, edit, delete
    // these are like taco, burrito, quesadilla
    public record Dish
    {

        //  can not modify with init
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id {get; init;}
        public string Name {get; init;}
        // it will be toppings of meats that can be on dish
        // toppings would be another model and it will be one to many ie: toppings can be on many dishes
        [NotMapped]
        public string[] Toppings {get; init;}
        public double Price {get; init;}
        public DateTimeOffset CreatedDate {get; init;}

    }
    
}