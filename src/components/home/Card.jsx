
import { Tile, ClickableTile, Button, Column } from '@carbon/react';
import { Link } from "react-router-dom"
import "/src/css/card.css"
import "/src/ibm-plex.css"
const tileStyle = {
  "padding": "0px",
  
  "padding-right":"0pc"
  // Otros estilos necesarios
};

const buttomStyle = {
  "justify-content": "space-between",
  "padding-right":"revert"
  
}



const Card = ({ area, proyecto, img, id }) => {

  return <ClickableTile href={`/details/${id}`} id="clickable-tile-1" style={tileStyle} className="cds--tile">

    <img className="imge" src={img} alt="No disponible" width="100%" height="100%" />

    <div className='footCard'>
      <div className="descripcion">
        <p>{area}</p>
        <h5>{proyecto}</h5>
      </div>

      <div className='verMasHome'>
        <Link className='textlink' to={`/details/${id}`}><Button style={buttomStyle} className='cds--btn'>Ver más<img src="/src/addwhite.svg"  height="20%" width="20%"/></Button></Link>
      </div>

    </div>



  </ClickableTile>;
}


export default Card;