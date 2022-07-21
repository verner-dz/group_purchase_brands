import React, {useState, useEffect} from 'react'
import {furnitureBrands} from '../seed'
import Brand from './Brand'
import GroupPurchasesPanel from './GroupPurchasesPanel'


function Purchase() {
  const [currentPurchases, setCurrentPurchases] = useState(new Set())

  const removePurchase = (brandId) => {
    setCurrentPurchases(prev => {
      const remainingPurchases = new Set(prev)

      remainingPurchases.delete(brandId)

      return remainingPurchases
    })
  }

  const addPurchase = (brandId) => {
    setCurrentPurchases(prev => new Set(prev).add(brandId))
  }


  const handlePurchase = (event, brandId) => {
    // toggle selected brands
    event.currentTarget.classList.toggle('add-background');


    if (currentPurchases.has(brandId)) {
      removePurchase(brandId)
    } else {
      addPurchase(brandId)
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

        <div className={'col-md-4 border-start'}>
          <h1> Group Purchases </h1>
          <GroupPurchasesPanel currentPurchaseIds={currentPurchases} />
        </div>
      </div>
     </>
  );

}

export default Purchase
