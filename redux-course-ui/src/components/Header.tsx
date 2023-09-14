import { MessageCircle} from "lucide-react"
import { useAppSelector } from "../store"
export function Header() {
  
  const {currentLesson, currentModule} = useAppSelector(state => {
    const {currentLessonIndex, currentModuleIndex} = state.player
    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return {currentLesson, currentModule}
  })
  return (
    <div className="flex items-center justify-between " >
    <div className="flex flex-col gap-1">
        <h1  className="text-2xl font-bold">{currentLesson.title}</h1>
        <span className="text-sm text-zinc-400">Modulo "{currentModule.title}"</span>
    </div>

    <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-bold text-white hover:bg-violet-600">
      <MessageCircle className="h-4 w-4 "/>
      Enviar feedback
      </button>
  </div>
  )
}