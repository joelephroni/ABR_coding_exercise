import './Regions.css';

const Regions = ({processedRegions}) => {
  return (<ul className="region-list">
      {processedRegions && processedRegions.map(region => (
        <li key={region.NOAAFisheriesRegion}>
          <div className="region-container">
            <div className="region-name">
              {region.NOAAFisheriesRegion}
            </div>
            <div className="region-data">
              <div>
                Avg. Cal./Serving: {region.AverageCaloriesPerServing.toFixed(2)}
              </div>
              <div>
                Avg. Fat/Serving: {region.AverageFatPerServing.toFixed(2)}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Regions;