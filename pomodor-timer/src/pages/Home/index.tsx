import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
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
  const { register, handleSubmit } = useForm()

  function handleCreateNewCycle(data: any) {}
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            list="taskSuggestions"
            id="task"
            placeholder="de um nome a sua tarefa"
            {...register('task')}
          />

          <datalist id="taskSuggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <InputMinutes
            step={5}
            min={5}
            max={60}
            type="number"
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount')}
          />
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
