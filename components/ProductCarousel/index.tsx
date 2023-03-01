import { Key } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Image from 'next/image'

export const ProductCarousel = ({ carousel }: any) => {
  const carouselImage = carousel.map(
    (image: any, index: Key | null | undefined) => ({
      src: image,
    }),
  )
  const items = carouselImage

  return (
    <Carousel
      className="carousel"
      navButtonsAlwaysInvisible={true}
      indicatorIconButtonProps={{
        style: {
          zIndex: '100',
          padding: '10px', // 1
          color: 'white',
          opacity: '0.6', // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          zIndex: '100',
          color: 'var(--primary)',
          opacity: '0.9',
          // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          zIndex: '98',
          bottom: 0,
          // marginTop: '-10px', // 5
          // textAlign: 'right', // 4
        },
      }}
    >
      {items.map((item: any, i: any) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

type ItemProps = {
  item: { src: string }
}

const Item = ({ item }: ItemProps) => {
  return (
    <Paper>
      <div className="image-container">
        <Image
          src={item.src}
          className="img hero--slideshow__img"
          fill
          alt="product slideshow"
        />
      </div>
    </Paper>
  )
}
