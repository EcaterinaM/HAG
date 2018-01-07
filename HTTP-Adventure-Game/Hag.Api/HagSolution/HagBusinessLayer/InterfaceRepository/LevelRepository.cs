using System.Collections.Generic;
using System.Linq;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.DomainModels.Results;
using HagBusinessLayer.ImplementRepository;
using HagDataLayer.Context;
using Microsoft.EntityFrameworkCore;

namespace HagBusinessLayer.InterfaceRepository
{
    public class LevelRepository : ILevelRepository
    {

        private readonly IDatabaseContext _databaseContext;
        private readonly IPlanetRepository _planetRepository;

        public LevelRepository(IDatabaseContext databaseContext, IPlanetRepository planetRepository)
        {
            _databaseContext = databaseContext;
            _planetRepository = planetRepository;
        }

        public IList<GetLevelQuestionsResult> GetQuestionListLevelPlanetName(GetLevelQuestionsDto getLevelQuestions)
        { 
            var result = _databaseContext.Levels
                        .Include(l => l.QuestionsList)
                        .Include(l => l.Planet)
                        .Where(l => l.NumberLevel == getLevelQuestions.NumberLevel && l.Planet.PlanetName == getLevelQuestions.PlanetName).ToList();

            var resultList = new List<GetLevelQuestionsResult>();

            foreach (var q in result)
            {
                resultList.Add(new GetLevelQuestionsResult()
                {
                    QuestionText = q.QuestionsList[0].QuestionText,
                    QuestionId = q.QuestionsList[0].QuestionId
                });
            }

            return resultList;
        }
    }
}
