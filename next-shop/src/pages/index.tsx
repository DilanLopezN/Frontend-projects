import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import estampa1 from '../assets/1.png'
import estampa2 from '../assets/2.png'
import estampa3 from '../assets/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={estampa1} width={520} height={480} alt="estampas" />

        <footer>
          <strong>Estampa X</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={estampa2} width={520} height={480} alt="estampas" />

        <footer>
          <strong>Estampa Y</strong>
          <span>R$ 69,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
