using tacos_el_rojo.Models;
using System.Collections.Generic;
using System.Linq;

namespace tacos_el_rojo.Services
{
    public static class TacoServices
    {
        static List<Taco> Tacos { get; }
        static int nextId = 3;
        static TacoServices()
        {
            Tacos = new List<Taco>
            {
                new Taco { Id = 1, Name = "Carne Asada", isVeg = false},
                new Taco { Id = 2, Name = "Chicken", isVeg = false}
            };
        }
        public static List<Taco> GetAll() => Tacos;
        public static Taco Get(int id) => Tacos.FirstOrDefault(t => t.Id == id);
        public static void Add(Taco taco)
        {
            taco.Id = nextId++;
            Tacos.Add(taco);
        }
        public static void Delete(int id)
        {
            var taco = Get(id);
            if(taco is null)
                return;
            Tacos.Remove(taco);
        }

        public static void Update(Taco taco)
        {
            var index = Tacos.FindIndex(t => t.Id == taco.Id);
            if(index == -1)
                return;
            Tacos[index] = taco;
        }
    }
}