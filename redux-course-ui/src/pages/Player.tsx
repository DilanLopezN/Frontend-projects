import { MessageCircle } from "lucide-react"
export function Player() {
return (
  <div className="h-screen bg-zinc-950 text-zinc-50
    flex items-center justify-center
  "> 
    <div className="flex w-[1100px] flex-col gap-6 " >
        {/* Header */}
      <div className="flex items-center justify-between " >
        <div className="flex flex-col gap-1">
            <h1  className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">Modulo "Redux"</span>
        </div>

        <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-bold text-white hover:bg-violet-600">
          <MessageCircle className="h-4 w-4 "/>
          Enviar feedback
          </button>
      </div>


       {/* Body */}
        <main className="relative flex over- rounded-lg border border-zinc-800 bg-zinc-900 shadow">
            <div className="flex-1"> Video View</div>

            <aside className="w-80 border-l border-zinc-800 h-[600px]"></aside>
        </main>

    </div>
  </div>
)
}