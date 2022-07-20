import {furnitureBrands} from '../seed'
import Brand from './Brand'
import GroupPurchasesPanel from './GroupPurchasesPanel'



function Purchase() {
  return(
    <>
      <div className={'row'}>

        <div className={'col'}>
          <div className={'container'}>

            <div className={'row'}>
              <div className={'col'} key={furnitureBrands[0].id}>
                <Brand name={ furnitureBrands[0].name} />
              </div>

              <div className={'col'} key={furnitureBrands[1].id}>
                <Brand name={ furnitureBrands[1].name} />
              </div>

              <div className={'col'} key={furnitureBrands[2].id}>
                <Brand name={ furnitureBrands[2].name} />
              </div>

              <div className={'col'} key={furnitureBrands[3].id}>
                <Brand name={ furnitureBrands[3].name} />
              </div>
            </div>


            <div className={'row'}>
              <div className={'col'} key={furnitureBrands[4].id}>
                <Brand name={ furnitureBrands[4].name} />
              </div>

              <div className={'col'} key={furnitureBrands[5].id}>
                <Brand name={ furnitureBrands[5].name} />
              </div>

              <div className={'col'} key={furnitureBrands[6].id}>
                <Brand name={ furnitureBrands[6].name} />
              </div>

              <div className={'col'} key={furnitureBrands[7].id}>
                <Brand name={ furnitureBrands[7].name} />
              </div>
            </div>


            <div className={'row'}>
              <div className={'col'} key={furnitureBrands[8].id}>
                <Brand name={ furnitureBrands[8].name} />
              </div>

              <div className={'col'} key={furnitureBrands[9].id}>
                <Brand name={ furnitureBrands[9].name} />
              </div>

              <div className={'col'} key={furnitureBrands[10].id}>
                <Brand name={ furnitureBrands[10].name} />
              </div>

              <div className={'col'} key={furnitureBrands[11].id}>
                <Brand name={ furnitureBrands[11].name} />
              </div>
            </div>

          </div>

          <button type="button" className={'btn btn-primary'}> Purchase </button>
        </div>


        <div className={'col-md-4'}>
          <GroupPurchasesPanel />
        </div>
      </div>
     </>
  );

}

export default Purchase
