using HagDataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace HagDataLayer.Context
{
    public class DatabaseContext : DbContext, IDatabaseContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<Planets> Planets { get; set; }

        public DbSet<Levels> Levels { get; set; }

        public DbSet<Questions> Questions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Planets>()
                .HasKey(x => x.PlanetId);

            modelBuilder.Entity<Planets>()
                .HasMany(p => p.Levels);

            modelBuilder.Entity<Planets>()
                .HasOne(p => p.Level);

            modelBuilder.Entity<Levels>()
                .HasKey(x => x.LevelId);

            modelBuilder.Entity<Levels>()
                .HasMany(p => p.QuestionsList);

            modelBuilder.Entity<Levels>()
                .HasOne(p => p.Planet);

            modelBuilder.Entity<Questions>()
                .HasKey(x => x.QuestionId);

            modelBuilder.Entity<Questions>()
                .HasMany(x => x.Planet);

            modelBuilder.Entity<Questions>()
                .HasOne(x => x.Level);


            //modelBuilder.Entity<Questions>()
            //    .HasMany(x => x.Planets);

            //modelBuilder.Entity<Questions>()
            //    .HasMany(x => x.Levels);

            ////modelBuilder.Entity<Questions>()
            ////    .HasOne(x => x.Level)
            ////    .WithMany(x => x.QuestionsList);

        }
    }
}
