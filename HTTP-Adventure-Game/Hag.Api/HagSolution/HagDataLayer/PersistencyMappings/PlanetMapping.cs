using HagDataLayer.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HagDataLayer.PersistencyMappings
{
    public class PlanetMapping
    {
        public PlanetMapping(EntityTypeBuilder<Planets> entityBuilder)
        {
            entityBuilder.HasMany<Levels>();
        }
    }
}
