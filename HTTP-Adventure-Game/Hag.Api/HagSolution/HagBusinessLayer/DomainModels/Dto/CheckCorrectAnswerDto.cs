using System;

namespace HagBusinessLayer.DomainModels.Dto
{
    public class CheckCorrectAnswerDto
    {
        public Guid Id { get; set; }
        public string AnswerCheck { get; set; }
        public string PlanetName { get; set; }

        public CheckCorrectAnswerDto(Guid id, string answer, string planetName)
        {
            Id = id;
            AnswerCheck = answer;
            PlanetName = planetName;
        }

    }
}
