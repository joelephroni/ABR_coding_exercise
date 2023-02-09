import {averageValues, removeSpaces} from '../../Utils';

const GetRegions = async () => {
  const response = await fetch('http://localhost:5001/gofish?apikey=abrradiology');

  return response.json();
};

const groupByRegion = (fisheryData) => {
  return fisheryData.reduce((group, region) => {
    const { NOAAFisheriesRegion } = region;
    group[NOAAFisheriesRegion] = group[NOAAFisheriesRegion] ?? [];
    group[NOAAFisheriesRegion].push(region);

    return group;
  }, {});
};

const processRegion = (region, NOAAFisheriesRegion) => {
  const AverageFatPerServing = averageValues(region.map((fish) => parseFloat(fish.FatTotal)))
  const AverageCaloriesPerServing = averageValues(region.map((fish) => parseInt(fish.Calories)))

  return {
    regionId: removeSpaces(NOAAFisheriesRegion),
    NOAAFisheriesRegion,
    AverageFatPerServing,
    AverageCaloriesPerServing,
    species: region
  };
};

const getProcessedRegions = () => {
  return GetRegions().then(data => {
    const groupedData = groupByRegion(data);
    return Object
      .keys(groupedData)
      .map((region, idx) => {
          return processRegion(groupedData[region], region);
        }
      );
  });
};


export {
  GetRegions,
  groupByRegion,
  processRegion,
  getProcessedRegions
};
