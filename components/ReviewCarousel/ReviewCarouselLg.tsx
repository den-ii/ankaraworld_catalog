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

export const ReviewCarouselLg = (props: any) => {
  const items = [
    {
      image: [
        '/assets/comments/review1.jpg',
        '/assets/comments/review3.jpg',
        '/assets/comments/review4.jpg',
      ],
    },

    {
      image: [
        '/assets/comments/review5.jpg',
        '/assets/comments/review6.jpg',
        '/assets/comments/review7.jpg',
      ],
    },
  ]

  return (
    <Carousel
      className="review-carousel_lg"
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
  item: any
}

const Item = ({ item }: ItemProps) => {
  const [image1, image2, image3] = item.image
  return (
    <Paper>
      <div className="review--slideshow">
        <div className="review">
          <Image
            src={image1}
            className="img review--slideshow__img"
            fill
            alt="review slideshow"
          />
        </div>
        <div className="review sm">
          <Image
            src={image2}
            className="img review--slideshow__img"
            fill
            alt="review slideshow"
          />
        </div>
        <div className="review md sm">
          <Image
            src={image3}
            className="img review--slideshow__img"
            fill
            alt="review slideshow"
          />
        </div>
      </div>
    </Paper>
  )
}
