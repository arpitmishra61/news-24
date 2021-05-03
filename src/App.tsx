
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import NewsShowcase from './consumers/NewsShowcase';
import Pagination from './consumers/Pagination';
import Search from './consumers/Search';
import store from './store';


function App() {
  return (
    <Provider  store={store}>
    <div className="App">
      <Navbar />
      <Search />
      <NewsShowcase />
      <Pagination />
    </div></Provider>
  );
}

export default App;
