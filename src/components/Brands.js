import {furnitureBrands} from '../seed'
import Brand from './Brand'

function Brands() {
  return(
    <div className='furnitureBrandsList'>
      {furnitureBrands.map((brand) => {
        return (
          <div key={brand.id}> <Brand name={ brand.name} /> </div>
        )
      })}
    </div>
  );
}

export default Brands;
