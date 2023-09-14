import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/Player'
import { useDispatch } from 'react-redux'
export function VideoPlayer() {

  const {currentLesson} = useCurrentLesson()

  const dispatch = useDispatch()

  const handlePlayNext = () => {
    dispatch(next())
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
    <ReactPlayer
      width="100%"
      height="100%"
      controls
      playing
      url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      onEnded={handlePlayNext}
    />
  </div>  
  )
}