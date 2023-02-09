import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import './Region.css'

const Region = () => {
  const [region, setRegion] = useState([]);
  const routeParams = useParams();
  const processedRegions = window.processedRegions;
  console.log(region, window.processedRegions);

  useEffect(() => {
    setRegion(processedRegions?.find(region => region.regionId === routeParams.id));
  }, [processedRegions, routeParams]);

  return (<>
    <h1>Region: {region?.NOAAFisheriesRegion}</h1>
    Fish species registered: {region?.species?.length}<br />
    Avg. Fat content per serving: {`${region?.AverageFatPerServing?.toFixed(2)} gr.`}<br />
    Avg. Cal. per serving: {`${region?.AverageCaloriesPerServing?.toFixed(2)}`}
      <ul class="fish-list">
        {region?.species?.map(fish => (
          <li>
            <div className="fish-box">
              <div className="fish-title">
                <div className="fish-name">{fish.SpeciesName}</div>
                <div className="fish-sci-name">{fish.ScientificName}</div>
              </div>
              <div className="fish-body-layout">
                <div className="fish-image-container">
                  <img
                    className="fish-thumbnail"
                    src={fish.SpeciesIllustrationPhoto.src}
                    alt={fish.SpeciesIllustrationPhoto.alt}
                    title={fish.SpeciesIllustrationPhoto.title}
                  />
                </div>
                <div className="fish-content-container">
                  <div className="fish-fat">Fat per Serving: {fish.FatTotal}</div>
                  <div className="fish-cal">kcal per serving: {fish.Calories}</div>
                </div>
                <div className="fish-desc" dangerouslySetInnerHTML={{__html: fish.Taste}} />
              </div>


            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Region;