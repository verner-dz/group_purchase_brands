import React, {useState} from 'react'
import {furnitureBrands} from '../seed'
import Brand from './Brand'
import GroupPurchasesPanel from './GroupPurchasesPanel'


function Purchase() {
  const [currentPurchases, setCurrentPurchases] = useState([])

  const handlePurchase = (brand) => {

    let currentPurchaseIds = currentPurchases.map(currentPurchase => currentPurchase.id)

    if (currentPurchaseIds.includes(brand.id)) {

      let modifiedPurchases = currentPurchases

      modifiedPurchases = modifiedPurchases.filter(currentPurchase => {
        return currentPurchase.id !== brand.id
      })

      setCurrentPurchases(modifiedPurchases)

    } else {
      let modifiedPurchases = currentPurchases
      modifiedPurchases.push(brand)
      setCurrentPurchases(modifiedPurchases)

    }
  }

  return(
    <>
      <div className={'row'}>

        <div className={'col'}>
          <div className={'container'}>
            <div className={'row'}>
              {furnitureBrands.map((brand) => {

                return (
                  <div className={'col'} key={brand.id} onClick={() => handlePurchase(brand)}>
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
