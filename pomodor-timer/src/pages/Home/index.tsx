import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import * as zod from 'zod'
import {
  HomeContainer,
  FormContainer,
  CountContainer,
  Separator,
  StartCountButton,
  InputTask,
  InputMinutes,
  StopCountButton
} from './styles'
import { useEffect, useState } from 'react'

const newCycleformValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Ciclo deve ter no minimo 5 minutos')
    .max(60, 'Ciclo deve ter no maximo 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleformValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
}
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amoutSecondsPassed, setAmoutSecondesPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleformValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles(state => [...cycles, newCycle])
    setActiveCycleId(newCycle.id)
    setAmoutSecondesPassed(0)
    reset()
  }

  function handleStopCycle() {
    setCycles(
      cycles.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, stopDate: new Date() }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        setAmoutSecondesPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amoutSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  })

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
            disabled={!!activeCycle}
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
            disabled={!!activeCycle}
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos .</span>
        </FormContainer>

        <CountContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountContainer>

        {activeCycle ? (
          <StopCountButton onClick={handleStopCycle} type="button">
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
