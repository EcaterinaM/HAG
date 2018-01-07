using System;
using System.Collections.Generic;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.DomainModels.Results;
using HagDataLayer.Models;

namespace HagBusinessLayer.ImplementRepository
{
   public interface IQuestionRepository
   {
      IList<GetLevelQuestionsResult> GetQuestionListLevelPlanetName(GetLevelQuestionsDto getLevelQuestions);

      GetLevelQuestionsResult GetRandomQuestionForLevelPlanetName(GetLevelQuestionsDto getLevelQuestions);

       bool CheckIfAnswerIsCorrect(CheckCorrectAnswerDto checkCorrectAnswerDto);

       GetLevelQuestionsResult GetById(Guid id);
   }
}
