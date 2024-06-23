import { Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div className="HomeParentDiv">
    <div className="Homebg"></div>

    <div className="HomeChildFstDiv">
      <h1>Beej-Patakha </h1>

      <p className="HomePara">
        The Product is called Beej-Patakha or seed crackers. The packaging
        design thematic is to replicate the idea of vintage firecracker
        packaging. The objective was to enhance this idea with the effect of
        halftones, vintage colors and textures, and offset printing, that
        occurred as a screen-printing mistake. The concept is to show a sapling
        emerging from a coir pot and creating an aura that generally a cracker
        creates when lit. Plants are emerging from the fire-crackers thus
        showing what the product really is. Beej Patakha translates to Seed
        Crackers. Beej-Patakha are not firecrackers. They are plantable seed
        crackers that have been given the shape of different crackers like a
        flower pot, rocket, etc. India Celebrates Diwali as a festival of lights
        and the triumph of good over evil. This festival of Diwali, 21fools
        celebrates new beginnings and the triumph of good over evil, and light
        over darkness by sowing a seed in the soil instead of bursting
        fire-crackers. This packaging is a Gift to your friends, family,
        parents, and kids a pack of Seed Crackers and keeps your planet
        pollution-free.
      </p>
    </div>

    <div className="HomeBtnDiv">
      <Link to="/buy" className="HomeLinkComp">
        <button type="button" className="HomeBtn">
          Buy Beej-Patakha
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
