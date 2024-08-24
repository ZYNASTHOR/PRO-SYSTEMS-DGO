import viteLogo from "/vite.svg";
import ITS01 from "../../assets/ITS01.png";
import ITS02 from "../../assets/ITS02.png";
import ITS03 from "../../assets/ITS03.png";
import ITS04 from "../../assets/ITS04.png";
import { Link } from "react-router-dom";
import "../../base.css";

const ITServices = () => {
  return (
    <div className="card-container" >
      <Link to={"/"}>
        <img src={ITS01} className="image-card" alt="Paquete #1" />
      </Link>
      <Link to={"/"}>
        <img src={ITS02} className="image-card" alt="Paquete #2" />
      </Link>
      <Link to={"/"}>
        <img src={ITS03} className="image-card" alt="Paquete #3" />
      </Link>
      <Link to={"/"}>
        <img src={ITS04} className="image-card" alt="Paquete #4" />
      </Link>
    </div>
  );
};

export default ITServices;
