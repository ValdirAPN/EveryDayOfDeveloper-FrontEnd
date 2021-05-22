import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  margin: 6rem 0;

  ${media.lessThan('large')`
    flex-direction: column;
    justify-content: space-evenly;
  `}
`
