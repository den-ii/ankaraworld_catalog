import Image from 'next/image'
import Link from 'next/link'
type ProductProps = {
  id: string
  image: string
  name: string
  bottom?: boolean
}

export const Product = ({ id, image, name, bottom }: ProductProps) => {
  const bottomClass = bottom ? 'bottom' : ''
  return (
    <Link href={`/collection/${id}`}>
      <div>
        <div className="product-img__container">
          <Image
            src={image}
            fill
            sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
            className={`product-img img ${bottomClass}`}
            alt="all products"
          />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  )
}
