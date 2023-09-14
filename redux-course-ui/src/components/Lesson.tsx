import {PlayCircle, Video } from "lucide-react"

interface LessonProps {
  title: string;
  duration: string;
  onPlay: () => void;
  isCurrent: boolean;
}
export function Lesson({title, duration, onPlay, isCurrent = false}: LessonProps) {

  return (
    <button onClick={onPlay}
    data-active={isCurrent}
     className="flex items-center gap-3 text-sm text-zinc-400
     data-[active=true]:text-emerald-400
     enabled:hover:text-zinc-100
     ">
      {
        isCurrent ? (<PlayCircle className="h-4 w-4 text-emerald-500" />) : ( <Video className="h-4 w-4 text-zinc-200"/>)
      }
   
   <span className="text-sm font-bold">{title}</span> 
   <span className="ml-auto font-mono text-md text-zinc-300">{duration}</span>
  </button>
  )
}