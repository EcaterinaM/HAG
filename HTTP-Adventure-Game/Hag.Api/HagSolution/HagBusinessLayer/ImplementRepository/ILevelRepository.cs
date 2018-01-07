using System.Collections.Generic;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.DomainModels.Results;

namespace HagBusinessLayer.ImplementRepository
{
    public interface ILevelRepository
    {
        IList<GetLevelQuestionsResult> GetQuestionListLevelPlanetName(GetLevelQuestionsDto getLevelQuestions);
    }
}
