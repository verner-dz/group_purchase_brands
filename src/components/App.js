import '../App.css';
import Brands from './Brands'
import Purchase from './Purchase'

function App() {
  return (
    <>
      <div className="App">
        <h1 className={'m-5'}> Group Brand Purchase App </h1>

        <Brands />

        <Purchase />
      </div>
    </>
  );
}

export default App;
