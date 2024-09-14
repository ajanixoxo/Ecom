import ShopAll from '../AllClothing/clothing.component';
import Navbar from '../../routes/navigation/navbar.component';


import "./greeting.styles.css";

const Greeting = () => {
    return(
        <div className="allgreet">

     
    <div className="greeting">
      <Navbar/>
       
    </div>
    <h1 className='shopall'>Shop All</h1>
    <ShopAll/>
    </div>
    )
}

export default Greeting