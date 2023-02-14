import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import mainlogo from '../../assets/mainlogo.svg'
import { Timer, Scroll } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={mainlogo} alt="logo sorrindo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
