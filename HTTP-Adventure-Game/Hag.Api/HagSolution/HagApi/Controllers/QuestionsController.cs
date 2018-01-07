using System;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.ImplementRepository;
using Microsoft.AspNetCore.Mvc;

namespace HagApi.Controllers
{
    [Route("api/questions")]
    public class QuestionsController : Controller
    {
        private readonly IQuestionRepository _questionRepository;

        public QuestionsController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        [HttpGet("{planetName}/{numberLevel}")]
        public IActionResult GetQuestionForLevel(string planetName, int numberLevel)
        {
            var result =
                _questionRepository.GetQuestionListLevelPlanetName(new GetLevelQuestionsDto(planetName, numberLevel));
            return Ok(result);
        }

        [HttpGet("{planetName}/{numberLevel}/random")]
        public IActionResult GetRandomQuestionForLevel(string planetName, int numberLevel)
        {
            var result =
                _questionRepository.GetRandomQuestionForLevelPlanetName(new GetLevelQuestionsDto(planetName,numberLevel));
            return Ok(result);
        }

        [HttpGet("{id}/{answer}/{planetName}/check")]
        public IActionResult CheckAnswer(Guid id, string answer,string planetName)
        {
            var result =
                _questionRepository.CheckIfAnswerIsCorrect(new CheckCorrectAnswerDto(id, answer, planetName));
            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult CheckAnswer(Guid id)
        {
            var result =
                _questionRepository.GetById(id);
            return Ok(result);
        }
    }
}
