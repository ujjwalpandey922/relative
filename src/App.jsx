import "./App.css";
import activity from "./assets/activity.png";
import blackCircle from "./assets/blackCircle.png";
import curve from "./assets/bodycurve.png";
import Bitcoin from "./assets/Bitcoin.png";
import Binance from "./assets/Binance.png";
import SHIBA from "./assets/SHIBA.png";
import Ethereum from "./assets/Ethereum.png";
import Solana from "./assets/Solana.png";
import collection from "./assets/collection.png";
function App() {
  return (
    <div className="App">
      <div className="side-info">
        <img src={activity} alt="activity" />
        <span>trending Assets</span>
      </div>
      <div className="Container">
        <div className="card">
          <div className="head">
            <img src={blackCircle} alt="head" className="blackCircle" />
            <img src={Bitcoin} alt="Bitcoin" className="bitcoinIcon" />
          </div>
          <div className="body">
            <img src={curve} alt="body" className="curve" />
            <div className="details">
              <p>Bitcoin (BTC) </p>
              <div className="inputs">
                <span>$31,812.80</span>
                <label className="inc">+10%</label>
              </div>
              <p>Price </p>
              <div className="inputs center">
                <span>$60,000</span>
              </div>
              <p>tvl </p>
              <img src={collection} alt="collection" />
              <p>popular pairs</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <img src={blackCircle} alt="head" className="blackCircle" />
            <img src={Solana} alt="Bitcoin" className="bitcoinIcon" />
          </div>
          <div className="body">
            <img src={curve} alt="body" className="curve" />
            <div className="details">
              <p>Solana (BTC) </p>
              <div className="inputs">
                <span>$31,812.80</span>
                <label className="dec">+10%</label>
              </div>
              <p>Price </p>
              <div className="inputs center">
                <span>$60,000</span>
              </div>
              <p>tvl </p>
              <img src={collection} alt="collection" />
              <p>popular pairs</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <img src={blackCircle} alt="head" className="blackCircle" />
            <img src={Ethereum} alt="Bitcoin" className="bitcoinIcon" />
          </div>
          <div className="body">
            <img src={curve} alt="body" className="curve" />
            <div className="details">
              <p>Ethereum (BTC) </p>
              <div className="inputs">
                <span>$31,812.80</span>
                <label className="dec">+10%</label>
              </div>
              <p>Price </p>
              <div className="inputs center">
                <span>$60,000</span>
              </div>
              <p>tvl </p>
              <img src={collection} alt="collection" />
              <p>popular pairs</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <img src={blackCircle} alt="head" className="blackCircle" />
            <img src={Binance} alt="Bitcoin" className="bitcoinIcon" />
          </div>
          <div className="body">
            <img src={curve} alt="body" className="curve" />
            <div className="details">
              <p>Bitcoin (BTC) </p>
              <div className="inputs">
                <span>$31,812.80</span>
                <label className="inc">+10%</label>
              </div>
              <p>Price </p>
              <div className="inputs center">
                <span>$60,000</span>
              </div>
              <p>tvl </p>
              <img src={collection} alt="collection" />
              <p>popular pairs</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <img src={blackCircle} alt="head" className="blackCircle" />
            <img src={SHIBA} alt="Bitcoin" className="bitcoinIcon" />
          </div>
          <div className="body">
            <img src={curve} alt="body" className="curve" />
            <div className="details">
              <p>SHIBA (BTC) </p>
              <div className="inputs">
                <span>$31,812.80</span>
                <label className="dec">+10%</label>
              </div>
              <p>Price </p>
              <div className="inputs center">
                <span>$60,000</span>
              </div>
              <p>tvl </p>
              <img src={collection} alt="collection" />
              <p>popular pairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
