import styled from 'styled-components'

const CONTENT_BORDER_LENGTH = '80vw'
const CONTENT_MAX_LENGTH = '80vh'

const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledContent = styled.div`
  height: 90vh;
  width: 90vw;
  padding-top: 100px;
  display: flex;
  justify-content: center;

  div {
    height: ${CONTENT_BORDER_LENGTH};
    width: ${CONTENT_BORDER_LENGTH};
    max-height: ${CONTENT_MAX_LENGTH};
    max-width: ${CONTENT_MAX_LENGTH};
    background-color: cadetblue;

    canvas {
      height: 100%;
      width: 100%;
      cursor: pointer;
    }
  }
`

export {
  StyledLayout,
  StyledContent
}
