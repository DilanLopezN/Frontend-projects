import { stripe } from '@/lib/stripe'
import { SucessContainer, ImageContainer } from '@/styles/pages/sucess'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
interface SucessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}
export default function Sucess({ customerName, product }: SucessProps) {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={480} height={538} alt="" />
      </ImageContainer>
      <p>
        Uhuu, <strong>{customerName}</strong> sua compra
        <strong>{product.name}</strong> foi efetuada com sucesso e já esta a
        caminho de sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SucessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}
