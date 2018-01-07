using HagDataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace HagDataLayer.Context
{
    public interface IDatabaseContext
    {
         DbSet<Planets> Planets { get; set; }

         DbSet<Levels> Levels { get; set; }

         DbSet<Questions> Questions { get; set; }

         int SaveChanges();
    }
}
