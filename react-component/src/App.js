import './App.css';
import MyProfilPhoto from './Component/profil/ProfilPhoto';
import FullName from './Component/profil/FullName';
import Address from './Component/profil/Address';
function App() {
  return (
    <div className="id-card-wrapper">
      <div className="id-card">
      <div className="profil">
        <div className="dp">
            <div class="dp-arc-outer"></div>
            <div class="dp-arc-inner"></div>
           <MyProfilPhoto/>
        </div>
        <div className="desc">
           <FullName/>
           <Address/>
        </div>
      </div>
       
      
      </div>
      
    </div>
  );
}

export default App;
