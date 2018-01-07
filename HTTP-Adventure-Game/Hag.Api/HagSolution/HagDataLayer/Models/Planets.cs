using System;
using System.Collections.Generic;

namespace HagDataLayer.Models
{
    public class Planets
    {
         public Guid PlanetId { get; set; }

        public string PlanetName { get; set; }

        public int NumberRightAnswers { get; set; }

        public IList<Levels> Levels { get; set; }

        public Levels Level { get; set; }

        public Questions Questions { get; set; }
        
    }
}
