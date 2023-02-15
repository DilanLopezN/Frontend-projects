import { styled } from '../styles'
const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  padding: 0
})
export default function Home() {
  return <Button>Enviar</Button>
}
