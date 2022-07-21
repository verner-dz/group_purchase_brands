import React, {useState} from 'react'
import {furnitureBrands} from '../seed'
import Brand from './Brand'
import GroupPurchasesPanel from './GroupPurchasesPanel'


function Purchase() {
  const [currentPurchases, setCurrentPurchases] = useState(new Set())
  const [confirmedPurchases, setConfirmedPurchases] = useState([])

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


  const handleCurrentPurchase = (event, brandId) => {
    // toggle selected brands
    event.currentTarget.classList.toggle('add-background');


    if (currentPurchases.has(brandId)) {
      removePurchase(brandId)
    } else {
      addPurchase(brandId)
    }
  }

  const handleConfirmedPurchase = () => {
    // convert set to array
    let confirmedCurrentPurchases = Array.from(currentPurchases)

    setConfirmedPurchases(confirmedCurrentPurchases)

    // remove add-background to all selected classes
    removeBackgrounds()

    // remove currentPurchases
    setCurrentPurchases(new Set())
  }

  const removeBackgrounds = () => {
    const backgrounds = document.querySelectorAll('.add-background');

    backgrounds.forEach(background => {
      background.classList.toggle('add-background')
    });
  }


  return(
    <>
      <div className={'row'}>

        <div className={'col'}>
          <div className={'container'}>
            <div className={'row'}>
              {furnitureBrands.map((brand) => {

                return (
                  <div className={'col'} key={brand.id} onClick={(event) => handleCurrentPurchase(event, brand.id)}>
                    <Brand name={ brand.name} />
                  </div>
                )
              })}
            </div>

          </div>

          <button type="button" className={'btn btn-primary'} disabled={!currentPurchases.size} onClick={() => handleConfirmedPurchase()}> Purchase </button>
        </div>

        <div className={'col-md-4 border-start'}>
          <h1> Group Purchases </h1>
          <GroupPurchasesPanel currentPurchaseIds={confirmedPurchases} />
        </div>
      </div>
     </>
  );

}

export default Purchase
