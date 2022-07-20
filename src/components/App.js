import '../App.css';
import Brands from './Brands'
import Purchase from './Purchase'
import GroupPurchasesPanel from './GroupPurchasesPanel'

function App() {
  return (
    <>
      <div className="App">
        <h1 className={'m-5'}> Group Brand Purchase App </h1>

        <div className={'row'}>

          <div className={'col'}>
            <Brands />

            <Purchase />
          </div>

          <div className={'col-md-4'}>
            <GroupPurchasesPanel />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
