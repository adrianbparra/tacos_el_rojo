using System;
using System.Collections.Generic;
using tacos_el_rojo.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace tacos_el_rojo.Repositories
{
    // we will later use an only database since I am trying to
    // keep it free and not use my creadit card
    public class AzureDbDishRepository : DbContext
    {
        // Constructor for client
        public AzureDbDishRepository (DbContextOptions<AzureDbDishRepository> options) : base(options)
        {
            
        }

        public virtual DbSet<Dish> Dishes { get; set; }
        
        public void CreateDish(Dish dish)
        {
            throw new NotImplementedException();
        }

        public void DeleteDish(Guid id)
        {
            throw new NotImplementedException();
        }

        public Dish GetDish(Guid id)
        {
            throw new NotImplementedException();
        }

        //public IEnumerable<Dish> GetDishes()
        //{
            

            // var dishes = new List<Dish>();

            // using (var con = new SqlConnection("Data Source=localhost; Initial Catalog=TestDB; User ID=sa; Password=Tac053lr0j0"))
            // {
            //     var sql = "SELECT Id,Name,Price,CreatedDate FROM Dish";

            //     con.Open();
            //     using SqlCommand command = new SqlCommand(sql,con);
            //     using SqlDataReader reader = command.ExecuteReader();

            //     while (reader.Read())
            //     {
            //         var dish = new Dish()
            //         {
            //             Id = (Guid)reader["Id"],
            //             Name = reader["Name"].ToString(),
            //             Price = (Double)reader["Price"],
            //             CreatedDate = (DateTime)reader["CreatedDAte"]
            //         };

            //         dishes.Add(dish);
            //     }

            // }

            // return dishes;

       // }

        public void UpdateDish(Dish dish)
        {
            throw new NotImplementedException();
        }
    }
}