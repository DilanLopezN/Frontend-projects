import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import logo from '../assets/logo.svg'
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} alt="" />
        <h1>NextShop</h1>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
