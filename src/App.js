import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route, Link} from 'react-router-dom'
import Cart from './components/Cart';
import Bid from './components/Bid';
import List from './components/List';
import Player from './components/Player';
import TeamSummary from './components/TeamSummery';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='teamSummaryButton'>
      <Link  to="/TeamSummary">Team Purse Summary</Link>
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/bid' element={<Bid />} />
        <Route path='/list/:category' element={<List />} />
        <Route path='/TeamSummary' element={<TeamSummary players={true} />} />
        <Route path='/player/:id/:number' element={<Player />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
