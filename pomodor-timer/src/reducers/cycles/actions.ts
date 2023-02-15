import { Cycle } from '../../contexts/CyclesContext'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CYCLE = 'STOP_CYCLE',
  CURRENT_CYCLE_FINISHED = 'CURRENT_CYCLE_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function stopCycleAction() {
  return {
    type: ActionTypes.STOP_CYCLE
  }
}

export function markCycleActionFinished() {
  return {
    type: ActionTypes.CURRENT_CYCLE_FINISHED
  }
}
