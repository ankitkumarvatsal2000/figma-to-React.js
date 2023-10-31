
import './App.css';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';

import Searchbar from "./components/Searchbar";
import Card_Detail from './components/Card_Detail';
import Seller from './components/Seller'
import Artist from './components/Artist';
import Footer from './components/Footer';


function App() {
  return (
    <div className='app'>
  <div>
    <Logo />
  <Sidebar />
  </div>
  <div>
   <Searchbar />
   <div className='card-comp'>
   <Card_Detail />
   <Card_Detail />
   </div>
   <Footer />

  </div>
  <div>
  <Seller />
  <Artist />
  </div>
  </div>
  );
}

export default App;
