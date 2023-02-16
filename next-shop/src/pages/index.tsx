import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import estampa1 from '../assets/1.png'
import estampa2 from '../assets/2.png'
import estampa3 from '../assets/3.png'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={estampa1} width={520} height={480} alt="estampas" />

        <footer>
          <strong>Estampa X</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={estampa2} width={520} height={480} alt="estampas" />

        <footer>
          <strong>Estampa Y</strong>
          <span>R$ 69,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={estampa3} width={520} height={480} alt="estampas" />

        <footer>
          <strong>Estampa Z</strong>
          <span>R$ 39,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list()

  console.log(response.data)

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}
