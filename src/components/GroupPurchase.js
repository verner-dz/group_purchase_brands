function GroupPurchase(props) {

  return (
    <div>
      {props.purchases.map((purchase) => {
          return(
            <div key={purchase.id}>{purchase.name}</div>
          )
        })
      }
    </div>

  )
}

export default GroupPurchase
