import Fela from '../../media/fela.jpg'

export default function Bot() {
    return (
      <div className="six borders ai hov">
        <button className="sideBtn">KBT</button>
        <button className="sideBtn">SBT</button>
        <button className="sideBtn">HBT</button>
        <button className="sideBtn">DBT</button>
        <img className="kubot" src={Fela} alt="Fela Kuti" height="350px" />
      </div>
    );
        
}
