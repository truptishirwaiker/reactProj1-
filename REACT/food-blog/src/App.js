
import './App.css';


import FoodList from './components/FoodList';
//import FoodDetails from './components/FoodDetails';


function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1 text-center">
          <strong>React Redux Retreive Data with RTK Query Example</strong>
        </div>
      </div>

      <div className="row">
        <FoodList />
      </div>
    </div>
  );
}

export default App;