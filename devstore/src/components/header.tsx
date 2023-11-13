import Link from "next/link";
import {Search, ShoppingCart} from 'lucide-react'
import Image from "next/image";


export function Header() {

  const CartComponent = ({ quantity }: {quantity: number}) => {
    return (
      <div className="relative">
        {quantity > 0 && (
          <div className="absolute bottom-6 left-6 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
            {quantity}
          </div>
        )}
        <ShoppingCart className="h-8 w-8" />
      </div>
    );
  };

  return <div
  className="flex items-center justify-between"
  >

    <div
    className="flex items-center gap-5"
    >
      <Link href="/" className="text-2xl font-extrabold text-white" >
      DevStore
      </Link>

      <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5"  />
          <input  placeholder="Buscar produtos..."  className="flex-1
          bg-transparent text-sm outline-none
          "  /> 
      </form>

    </div>

    <div
    className="flex items-center gap-8"
    >
      <div className="flex items-center gap-2">
        <CartComponent quantity={1}  />
      </div>

      <div className="w-px h-6 bg-zinc-700" />

      <Link href="/" className="flex items-center gap-2 hover:underline">
        <span className="text-md">Conta</span>
        <Image className="rounded-full w-9 h-9" width={9} height={9} src="https://github.com/DilanLopezN.png" alt="Foto do Usuário" />
      </Link>
      
    </div>

  </div>
}