import './App.css';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import BestSellers from './Components/BestSellers/BestSellsers';
import DesignedForRealLife from './Components/DesignedForRealLife/DesignedForRealLife';
import ExploreOurProducts from './Components/ExploreOurProducts/ExploreOurProducts';
import MakeEveryCupAnExperience from './Components/MakeEveryCupAnExperience/MakeEveryCupAnExperience';
import InThePress from './Components/InThePress/InThePress';
import FreshGrounds from './Components/FreshGrounds/FreshGrounds';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <BestSellers />
      <DesignedForRealLife />
      <ExploreOurProducts />
      <MakeEveryCupAnExperience />
      <InThePress />
      <FreshGrounds />

      <Footer />
    </div>
  );
}

export default App;
