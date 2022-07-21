import React, {useState, useEffect} from 'react'
import {furnitureBrands} from '../seed'
import Brand from './Brand'


function GroupPurchasesPanel(props) {
  // const [brandsReference, setBrandsReference] = useState({})
  const [brandsReference, setBrandsReference] = useState({})

  const [groupPurchases, setGroupPurchases] = useState([])


  useEffect(() => {
    furnitureBrands.map((brand, index) => {
      return setBrandsReference(brandsReference => ({...brandsReference, [brand.id]: index}))
    })
  }, [])


  // useEffect(() => {
  //   let currentPurchases = []

  //   console.log(props, props)

  //   props.currentPurchaseIds.forEach((id) => {
  //     let reference = brandsReference[id]

  //     let purchaseObject = furnitureBrands[reference]

  //     currentPurchases.push(purchaseObject)

  //   })

  //   // setGroupPurchases([...groupPurchases, currentPurchases])

  // }, [props.currentPurchaseIds])



  // const [currentPurchases, setCurrentPurchases] = useState(new Set())


  return (
    <div className={'container'}>
        {furnitureBrands.map((brand) => {

          return (
            <div className={'col'} key={brand.id}>
              <Brand name={ brand.name} />
            </div>
          )
        })}
    </div>
  )
}

export default GroupPurchasesPanel
