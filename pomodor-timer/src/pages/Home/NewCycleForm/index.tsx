import { FormContainer, InputMinutes, InputTask } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
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
  )
}
