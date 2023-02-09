import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = ({processedRegions}) => {
  console.log("processedRegions", processedRegions);
  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>

        {processedRegions && processedRegions.map((region) => (
          <li key={region.regionId}>
            <Link to={`/region/${region.regionId}`}>
              {region.NOAAFisheriesRegion}
            </Link>
          </li>
        ))}
      </ul>
    </nav>);
}

export default Nav;