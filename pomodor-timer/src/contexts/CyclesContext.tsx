import { createContext, ReactNode, useState } from 'react'
interface Cycle {
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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amoutSecondsPassed, setAmoutSecondesPassed] = useState(0)
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles(state => [...cycles, newCycle])
    setActiveCycleId(newCycle.id)
    setAmoutSecondesPassed(0)
  }

  function stopCycle() {
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, stopDate: new Date() }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }
  function markCurrentCycleFinished() {
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishDate: new Date() }
        } else {
          return cycle
        }
      })
    )
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
