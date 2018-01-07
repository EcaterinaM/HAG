using System;
using System.Linq;
using HagBusinessLayer.ImplementRepository;
using HagDataLayer.Context;

namespace HagBusinessLayer.InterfaceRepository
{
    public class PlanetRepository : IPlanetRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public PlanetRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void UpdateNumberRightAnswers(Guid id)
        {
            var result = _databaseContext.Planets.FirstOrDefault(p => p.PlanetId == id);
            result.NumberRightAnswers = result.NumberRightAnswers + 1;
            _databaseContext.SaveChanges();
        }
    }
}
