import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown} from "lucide-react"
import { Lesson } from "./Lesson"
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { play } from '../store/slices/Player';


interface ModuleProps {
  title: string;
  amoutOfLessons: number;
  moduleIndex: number;
}
export function Module({amoutOfLessons, title, moduleIndex}: ModuleProps) {
  const dispatch = useDispatch()
  const lessons = useAppSelector(state => {
    return state.player.course.modules[moduleIndex].lessons
  })

  return (
    <Collapsible.Root className="group">
    <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">{moduleIndex + 1}</div>
      <div className="flex flex-col gap-1 text-left">
        <strong className="text-sm">{title}</strong>
        <span className="text-xs text-zinc-400">{amoutOfLessons} aulas</span>
      </div>

      <ChevronDown className="w-5 h-5 ml-auto text-zinc-300 group-data-[state=open]:rotate-180 transition-transform " />
      </Collapsible.Trigger>
      <Collapsible.Content >
        <nav className="relative flex flex-col gap-4 p-6">

          {
            lessons.map((lesson, lessonIndex) => <Lesson 
            onPlay={() => dispatch(play([moduleIndex,lessonIndex ]))}
            key={lesson.id} title={lesson.title} duration={lesson.duration}/>)
          }
      
        </nav>
      
        
      </Collapsible.Content>
  </Collapsible.Root>
  )
}