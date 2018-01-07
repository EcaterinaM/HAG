using HagDataLayer.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HagDataLayer.PersistencyMappings
{
    public class LevelMapping
    {
        public LevelMapping(EntityTypeBuilder<Levels> entityBuilder)
        {
            entityBuilder.HasMany<Questions>();
        }
    }
}
