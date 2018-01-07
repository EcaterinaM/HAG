namespace HagBusinessLayer.DomainModels.Dto
{
    public class GetLevelQuestionsDto
    {
        public string PlanetName { get; set; }

        public int NumberLevel { get; set; }

        public GetLevelQuestionsDto(string planetName,int numberLevel)
        {
            PlanetName = planetName;
            NumberLevel = numberLevel;
        }
    }
}
