import { createContext, ReactNode, useState, useReducer } from 'react'
import { cyclesReducer } from '../reducers/cycles/cycles'
import {
  addNewCycleAction,
  markCycleActionFinished,
  stopCycleAction
} from '../reducers/cycles/actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishDate?: Date
}
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amoutSecondsPassed: number
  markCurrentCycleFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  stopCycle: () => void
}
interface CreateCycleData {
  task: string
  minutesAmount: number
}
interface CycleContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,

    {
      cycles: [],
      activeCycleId: null
    }
  )

  const [amoutSecondsPassed, setAmoutSecondesPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }
    dispatch(addNewCycleAction(newCycle))

    setAmoutSecondesPassed(0)
  }

  function stopCycle() {
    dispatch(stopCycleAction())
  }
  function markCurrentCycleFinished() {
    dispatch(markCycleActionFinished())
  }
  function setSecondsPassed(seconds: number) {
    setAmoutSecondesPassed(seconds)
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleFinished,
        amoutSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        stopCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
