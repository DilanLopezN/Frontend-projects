import {useEffect} from 'react'
import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'
import { Module } from '../components/Module'
import { useAppSelector } from '../store'
import { start, useCurrentLesson } from '../store/slices/player'
import { api } from '../lib/api'
import { useDispatch } from 'react-redux'
export function Player() {
  const modules = useAppSelector(state => {
    return state.player.course?.modules
  })
  const {currentLesson} = useCurrentLesson()

  const dispatch = useDispatch()


  useEffect(() => {
    api.get('/courses/1').then(response => {
    dispatch(start(response.data))
    })
  }, [])

  useEffect(() => {
    if (currentLesson) document.title = `${currentLesson.title}`
  }, [currentLesson])

  return (
    <div
      className="h-screen bg-zinc-950 text-zinc-50
    flex items-center justify-center
  "
    >
      <div className="flex w-[1100px] flex-col gap-6 ">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <VideoPlayer />
          </div>

          <aside
            className="w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 overflow-y-scroll
            scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700 divide-y-2 divide-zinc-900
            "
          >

            {
              modules && modules.map((module, index) => (
                <Module 
                key={module.id}
                title={module.title} 
                amoutOfLessons={module.lessons.length}
                 moduleIndex={index} />
              ))
            }
           
         
          </aside>
        </main>
      </div>
    </div>
  )
}
