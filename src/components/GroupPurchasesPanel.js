import React, {useState, useEffect} from 'react'
import {furnitureBrands} from '../seed'
import GroupPurchase from './GroupPurchase'


function GroupPurchasesPanel(props) {
  // const [brandsReference, setBrandsReference] = useState({})
  const [brandsReference, setBrandsReference] = useState({})

  const [groupPurchases, setGroupPurchases] = useState([])


  useEffect(() => {
    furnitureBrands.forEach((brand, index) => {
      setBrandsReference(brandsReference => ({...brandsReference, [brand.id]: index}))
    })
  }, [])

  useEffect(() => {
    let currentPurchases = []

    props.currentPurchaseIds.forEach((brandId) => {
      let reference = brandsReference[brandId]
      let purchaseObject = furnitureBrands[reference]
      currentPurchases.push(purchaseObject)
    })

    setGroupPurchases([...groupPurchases, currentPurchases])

  }, [props.currentPurchaseIds])



  return (
    <div className={'container'}>
        {groupPurchases.map((groupPurchase, index) => {

          return (
            <div key={index}>
              <GroupPurchase purchases={groupPurchase}/>
            </div>
          )
        })}
    </div>
  )
}

export default GroupPurchasesPanel
