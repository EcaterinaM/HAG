using System;
using System.Collections.Generic;

namespace HagDataLayer.Models
{
   public class Questions
    {
        public Guid QuestionId { get; set; }

        public string QuestionText { get; set; }

        public string RightAnswer { get; set; }

        public string FirstWrongAnswer { get; set; }

        public string SecondWrongAnswer { get; set; }

        public string ThirdWrongAnswer { get; set; }

        public Levels Level { get; set; }

        //cred
        public IList<Planets> Planet { get; set; }
    }
}
