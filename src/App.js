// App.js
import React from 'react';
import Header from './component/Header';
import Section from './component/Section';
import Projek from './component/projek';
import LoadingCv from './moal/LoadingCv';
import { GlobalContext } from './global/GlobalContetxt';
import { useContext } from 'react';
import Footer from './component/footer';

const App = () => {
  const { showCv, setShowCv } = useContext(GlobalContext);

  return (
    <div className="App">
      <Header />
      <Section />
      <Projek />
      {showCv && <LoadingCv showCv={showCv} setShowCv={setShowCv} />}
      <Footer />
    </div>
  );
};

export default App;
