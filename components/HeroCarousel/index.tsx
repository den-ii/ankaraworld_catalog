import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
// import styled from 'styled-components'
// // import { Carousel } from 'react-responsive-carousel'

// const heroSlideshow = styled.div`
//   width: 300px;
//   height: 300px;
//   position: relative;
//`

export const HeroCarousel = (props: any) => {
  const items = [
    {
      src: '/assets/carousel/slideshow1.jpg',
    },

    {
      src: '/assets/carousel/slideshow2.jpg',
    },
    {
      src: '/assets/carousel/slideshow3.jpg',
    },
    {
      src: '/assets/carousel/slideshow4.jpg',
    },
    {
      src: '/assets/carousel/slideshow5.jpg',
    },
  ]

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
      {items.map((item, i) => (
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
      <div className="hero--slideshow">
        <Image
          src={item.src}
          className="img hero--slideshow__img"
          fill
          alt="ankara slideshow"
        />
      </div>
    </Paper>
  )
}
// <Carousel>
//   return (
//   <div>
//     <Image
//       src="/assets/carousel/slideshow1.jpg"
//       fill
//       alt="ankara slideshow"
//     />
//     <img src="https://placehold.co/100x100" />
//     <p className="legend">Legend 1</p>
//   </div>
//   <div>
//     <img src="https://placehold.co/200x200" />
//   </div>
//   <div>
//     <img src="https://placehold.co/300x300" />
//   </div>
//   )
// </Carousel>
//)

// const MyCarousel = () => {
//   const [carousel, setcarousel] = useState([
//     { no: true },
//     { no: false },
//     { no: false },
//   ])
//   const handleAll = () => {
//     setcarousel([{ no: false }, { no: false }, { no: false }])
//   }
//   useEffect(() => {}, [])

//   return (
//     <div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   )
// }
