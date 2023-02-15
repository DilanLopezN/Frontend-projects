import { createContext, ReactNode, useState, useReducer } from 'react'
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

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}
export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      switch (action.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id
          }
        case 'STOP_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map(cycle => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, stopDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null
          }
        case 'CURRENT_CYCLE_FINISHED':
          return {
            ...state,
            cycles: state.cycles.map(cycle => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null
          }
        default:
          return state
      }
    },
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
    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle
      }
    })

    // setCycles(state => [...cycles, newCycle])

    setAmoutSecondesPassed(0)
  }

  function stopCycle() {
    dispatch({
      type: 'STOP_CYCLE',
      payload: {
        activeCycleId
      }
    })
  }
  function markCurrentCycleFinished() {
    dispatch({
      type: 'CURRENT_CYCLE_FINISHED',
      payload: {
        activeCycleId
      }
    })
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
