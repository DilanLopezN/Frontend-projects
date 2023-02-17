import { SucessContainer, ImageContainer } from '@/styles/pages/sucess'
import Link from 'next/link'

export default function Sucess() {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>
      <p>
        Uhuu, <strong>@username.</strong> sua compra <strong>Camise x</strong>
        foi efetuada com sucesso e já esta a caminho de sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SucessContainer>
  )
}
