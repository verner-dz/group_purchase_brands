import React, {useState, useEffect} from 'react'
import {furnitureBrands} from '../seed'
import Brand from './Brand'
import GroupPurchasesPanel from './GroupPurchasesPanel'


function Purchase() {
  const [currentPurchases, setCurrentPurchases] = useState(new Set())

  const removePurchase = (brand_id) => {
    setCurrentPurchases(prev => {
      const remainingPurchases = new Set(prev)

      remainingPurchases.delete(brand_id)

      return remainingPurchases
    })
  }

  const addPurchase = (brand_id) => {
    setCurrentPurchases(prev => new Set(prev).add(brand_id))
  }


  const handlePurchase = (event, brand_id) => {
    // toggle selected brands
    event.currentTarget.classList.toggle('add-background');


    if (currentPurchases.has(brand_id)) {
      removePurchase(brand_id)
    } else {
      addPurchase(brand_id)
    }
  }

  useEffect(() => {
    console.log(currentPurchases)
  }, [currentPurchases])


  return(
    <>
      <div className={'row'}>

        <div className={'col'}>
          <div className={'container'}>
            <div className={'row'}>
              {furnitureBrands.map((brand) => {

                return (
                  <div className={'col'} key={brand.id} onClick={(event) => handlePurchase(event, brand.id)}>
                    <Brand name={ brand.name} />
                  </div>
                )
              })}
            </div>

          </div>

          <button type="button" className={'btn btn-primary'} disabled={!currentPurchases.size}> Purchase </button>
        </div>

        <div className={'col-md-4'}>
          <GroupPurchasesPanel />
        </div>
      </div>
     </>
  );

}

export default Purchase
