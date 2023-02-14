import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CountContainer,
  Separator,
  StartCountButton,
  InputTask,
  InputMinutes
} from './styles'
export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask id="task" placeholder="de um nome a sua tarefa" />

          <label htmlFor="minutesAmount">Durante</label>
          <InputMinutes type="number" id="minutesAmount" placeholder="00" />
          <span>minutos .</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <StartCountButton type="submit">
          <Play size={24} />
          Começar
        </StartCountButton>
      </form>
    </HomeContainer>
  )
}
