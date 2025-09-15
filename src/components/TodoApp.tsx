import { useState } from "react"
import { ListaTareas } from "./ListaDeTareas"

export const Todoapp = () => {

  const [nuevaTarea, setNuevaTarea] = useState('')
  const [listaTareas, setListaDeTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if(nuevaTarea.trim()==='')return
    setListaDeTareas(tareasAnteriores => [...tareasAnteriores,nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTarea = (index: number) => {
    setListaDeTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div >
  )
}