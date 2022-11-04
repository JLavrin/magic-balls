import styled from 'styled-components'

const StyledTopbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  background-color: ${({ theme }) => theme.colors.red400};
` 

export {
  StyledTopbar
}
