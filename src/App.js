import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { store } from './Redux/store/store';
import AddShopScreen from './Screens/AddShopScreen';
import ShopListScreen from './Screens/ShopListScreen';
import './Styles/style.css'


function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/addshop" element={<AddShopScreen />} />
          <Route path="/" exact element={<ShopListScreen />} />
        </Routes>

      </Router>
    </div>
    </Provider>
  );
}

export default App;
