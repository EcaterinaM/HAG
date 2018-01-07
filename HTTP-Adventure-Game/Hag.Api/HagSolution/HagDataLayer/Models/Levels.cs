using System;
using System.Collections.Generic;

namespace HagDataLayer.Models
{
    public class Levels
    {
        public Guid LevelId { get; set; }

        public int NumberLevel { get; set; }

        public IList<Questions> QuestionsList { get; set; }

        public Planets Planet { get; set; }

        ///public Questions Questions { get; set; }
    }
}
