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
              {furnitureBrands.map((brand) => {

                return (
                  <div className={'col'} key={brand.id}>
                    <Brand name={ brand.name} />
                  </div>
                )
              })}
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
