using System;

namespace HagBusinessLayer.DomainModels.Results
{
    public class GetLevelQuestionsResult
    {
        public string QuestionText { get; set; }

        public string RightAnswer { get; set; }

        public string FirstWrongAnswer { get; set; }

        public string SecondWrongAnswer { get; set; }

        public string ThirdWrongAnswer { get; set; }

        public Guid QuestionId { get; set; }

    }
}
