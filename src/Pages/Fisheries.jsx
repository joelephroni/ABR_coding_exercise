import {useEffect, useState} from "react";
import { GetFisheries } from '../data/Fisheries/fisheries_data';

const Fisheries = () => {
  const [fisheriesData, setFisheriesData] = useState({});

  useEffect(() => {
    GetFisheries().then((data) => setFisheriesData(data));
  }, []);

  return (<>
      <div>  </div>
      {/*{fisheriesData?.places?.map((place) => {*/}
      {/*  return (*/}
      {/*    <div key={place["place name"]}>*/}
      {/*      ({place.latitude}), ({place.longitude}) : {place["place name"]}, {place.state}<br /><br />*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </>
  );
};

export default Fisheries;