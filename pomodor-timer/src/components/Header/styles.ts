import styled from 'styled-components'
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${props => props.theme['yellow-700']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${props => props.theme['yellow-500']};
      }

      &:active {
        box-shadow: 0 0 10px #ffd700;
      }
    }
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`
