import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  HomeContainer,
  FormContainer,
  CountContainer,
  Separator,
  StartCountButton,
  InputTask,
  InputMinutes
} from './styles'

const newCycleformValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Ciclo deve ter no minimo 5 minutos')
    .max(60, 'Ciclo deve ter no maximo 60 minutos')
})

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleformValidationSchema)
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountButton>
      </form>
    </HomeContainer>
  )
}
