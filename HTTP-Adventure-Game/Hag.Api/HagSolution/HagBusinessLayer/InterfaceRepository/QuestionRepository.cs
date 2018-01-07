using System;
using System.Collections.Generic;
using System.Linq;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.DomainModels.Results;
using HagBusinessLayer.ImplementRepository;
using HagDataLayer.Context;
using HagDataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace HagBusinessLayer.InterfaceRepository
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly IDatabaseContext _databaseContext;
        private readonly IPlanetRepository _planetRepository;

        public QuestionRepository(IDatabaseContext databaseContext, IPlanetRepository planetRepository)
        {
            _databaseContext = databaseContext;
            _planetRepository = planetRepository;
        }

        public IList<Questions> GetAll()
        {
            var result = _databaseContext.Questions
                .Include(u => u.Level)
                .Include(u => u.Planet).ToList();
            return result;
        }

        public GetLevelQuestionsResult GetById(Guid id)
        {
            var result = _databaseContext.Questions.FirstOrDefault(x => x.QuestionId == id);
            var r = new GetLevelQuestionsResult()
            {
                QuestionText = result.QuestionText,
                RightAnswer = result.RightAnswer,
                FirstWrongAnswer = result.FirstWrongAnswer,
                SecondWrongAnswer = result.SecondWrongAnswer,
                ThirdWrongAnswer = result.ThirdWrongAnswer,
                QuestionId = result.QuestionId
            };
            return r;
        }

        public IList<GetLevelQuestionsResult> GetQuestionListLevelPlanetName(GetLevelQuestionsDto getLevelQuestions)
        {
            var resultPlanet = _databaseContext.Planets.FirstOrDefault(p => p.PlanetName == getLevelQuestions.PlanetName);

            var result = GetAll().Where(x => x.Level.NumberLevel == getLevelQuestions.NumberLevel && x.Level.Planet.PlanetId == resultPlanet?.PlanetId);

            var resultList = new List<GetLevelQuestionsResult>();

            foreach (var q in result)
            {
                resultList.Add(new GetLevelQuestionsResult()
                {
                    QuestionText = q.QuestionText,
                    RightAnswer = q.RightAnswer,
                    FirstWrongAnswer = q.FirstWrongAnswer,
                    SecondWrongAnswer = q.SecondWrongAnswer,
                    ThirdWrongAnswer = q.ThirdWrongAnswer,
                    QuestionId = q.QuestionId
                });
            }

            return resultList;
        }

        public GetLevelQuestionsResult GetRandomQuestionForLevelPlanetName(GetLevelQuestionsDto getLevelQuestions)
        {
            var questionList = GetQuestionListLevelPlanetName(getLevelQuestions);
            
            var position = new Random().Next(0, questionList.Count);
            return questionList[position];
        }

        public bool CheckIfAnswerIsCorrect(CheckCorrectAnswerDto checkCorrectAnswerDto)
        {
            var question = _databaseContext.Questions
                .Include(x => x.Planet)
                .FirstOrDefault(x => x.QuestionId == checkCorrectAnswerDto.Id);

            var planet = _databaseContext.Planets.FirstOrDefault(x => x.PlanetName == checkCorrectAnswerDto.PlanetName);

            if (string.Equals(question.RightAnswer, checkCorrectAnswerDto.AnswerCheck))
            {
                _planetRepository.UpdateNumberRightAnswers(planet.PlanetId);
                return true;
                /// daca e corect trebuie crescut numarul de rasp corecte la planeta
            }

            return false;
        }
    }
}
