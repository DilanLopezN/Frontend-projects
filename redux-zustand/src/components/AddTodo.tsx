import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { add } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("")
  const dispatch = useDispatch()
  function handleNewTodo (e: FormEvent) {
    e.preventDefault()
    dispatch(add({
      newTodo
    }))

    setNewTodo("")
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input type="text" placeholder="Add new to-do" value={newTodo} onChange={(ev) => setNewTodo(ev.target.value)} />
      <button type="submit">submit</button>
    </form>
  )
}