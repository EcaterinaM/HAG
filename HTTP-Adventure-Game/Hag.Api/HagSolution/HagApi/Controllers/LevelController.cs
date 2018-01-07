using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HagBusinessLayer.DomainModels.Dto;
using HagBusinessLayer.ImplementRepository;
using Microsoft.AspNetCore.Mvc;

namespace HagApi.Controllers
{
    [Route("api/level")]
    public class LevelController:Controller
    {
        private readonly ILevelRepository _levelRepository;

        public LevelController(ILevelRepository levelRepository)
        {
            _levelRepository = levelRepository;
        }

        [HttpGet("{planetName}/{numberLevel}")]
        public IActionResult GetQuestionsForLevel(string planetName, int numberLevel)
        {
            var result =
                _levelRepository.GetQuestionListLevelPlanetName(new GetLevelQuestionsDto(planetName, numberLevel));
            return Ok(result);
        }
    }
}
