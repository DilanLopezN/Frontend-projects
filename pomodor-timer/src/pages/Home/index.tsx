import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HomeContainer, StartCountButton, StopCountButton } from './styles'
import { NewCycleForm } from './NewCycleForm'
import { CoutDown } from './CoutDown'
import { FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Home() {
  const { activeCycle, createNewCycle, stopCycle } = useContext(CyclesContext)
  const newCycleformValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'Ciclo deve ter no minimo 5 minutos')
      .max(60, 'Ciclo deve ter no maximo 60 minutos')
  })

  type NewCycleFormData = zod.infer<typeof newCycleformValidationSchema>

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleformValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CoutDown />

        {activeCycle ? (
          <StopCountButton onClick={stopCycle} type="button">
            <HandPalm size={24} />
            Parar
          </StopCountButton>
        ) : (
          <StartCountButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountButton>
        )}
      </form>
    </HomeContainer>
  )
}
