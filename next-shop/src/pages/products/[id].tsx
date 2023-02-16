import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia,
          minus id minima inventore, aliquid voluptate amet dignissimos qui
          ipsum veritatis sunt repudiandae eligendi! Non id nesciunt porro
          expedita veniam?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
