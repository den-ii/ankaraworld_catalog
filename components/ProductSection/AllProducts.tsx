import React from 'react'
import { GridPart } from './GridPart'
import Image from 'next/image'

const AllProducts = () => {
  return (
    <GridPart>
      <div>
        <div className="product-img__container">
          <Image
            src="/assets/amaka.jpg"
            fill
            className="product-img img"
            alt="all products"
          />
        </div>

        <p>ADUNNI BAG</p>
      </div>
      <div>
        <div className="product-img__container">
          <Image
            src="/assets/flores.jpg"
            fill
            className="product-img img"
            alt="all products"
          />
        </div>

        <p>ADUNNI BAG</p>
      </div>
      <div>
        <div className="product-img__container">
          <Image
            src="/assets/amaka.jpg"
            fill
            className="product-img img"
            alt="all products"
          />
        </div>

        <p>ADUNNI BAG</p>
      </div>

      {/* <div>
        <Image src="/assets/adunni_bag.jpg" fill alt="all products" />
      </div>
      <div>
        <Image src="/assets/adunni_bag.jpg" fill alt="all products" />
      </div> */}
    </GridPart>
  )
}

export default AllProducts
