import styled from 'styled-components'
import { ReviewCarouselLg } from './ReviewCarouselLg'

const ReviewCarouselSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`
export const ReviewCarousel = () => {
  return (
    <ReviewCarouselSection id="reviews">
      <div className="desktop" >
        <ReviewCarouselLg />
      </div>
    </ReviewCarouselSection>
  )
}
