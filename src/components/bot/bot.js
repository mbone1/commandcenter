import Fela from '../../media/fela.jpg'

export default function Bot() {
    return (
      <div className="six borders hov">
        <button className="sideBtn ichi invert">KBT</button>
        <button className="sideBtn ni invert">HBT</button>
        <button className="sideBtn san invert">SBT</button>
        <button className="sideBtn shi invert">DBT</button>
        {/* <button className="sideBtn">SBT</button>
        <button className="sideBtn">HBT</button>
        <button className="sideBtn">DBT</button> */}
        
        <img className="kubot" src={Fela} alt="Fela Kuti" height="350px" />
      </div>
    );
        
}
