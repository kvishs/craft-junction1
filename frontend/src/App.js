import logo from './logo.svg';
import './App.css';
import Header from './component/Home/Header';
import Home from './component/Home/Home';
import {useEffect} from 'react';
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    
    // Store.dispatch(loadUser());
    
    // getStripeApiKey();

  }, []);
  return (
    <div className="App">
     <Header/>
     <Home/>
    </div>
  );
}

export default App;
