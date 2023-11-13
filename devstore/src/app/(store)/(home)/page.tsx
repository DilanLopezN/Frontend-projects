import { api } from "@/app/data/api";
import { ProductsDTO } from "@/app/data/types/products";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<ProductsDTO[]> {
  const response =  await api("/products/", {
      method: "GET",
      cache: 'no-cache',
      
    })

    const products = await response.json();

    return products
}

export default async function Home() {
 
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px]  grid-cols-9  grid-rows-6 gap-6" >
        <Link href={`/product/${highLightedProduct.slug}`}
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center p-8"
        >
          <Image  src={highLightedProduct.image}  alt="Foto do produto" width={860} height={80} quality={100} className="
          rounded-lg group-hover:scale-105
          "/>
          <div className="absolute bottom-20 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">

            <span className="text-sm truncate">{highLightedProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-red-500 px-4 font-semibold">R${highLightedProduct.price}</span>

          </div>

        </Link>


        {
          otherProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}
            className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center p-8"
            >
              <Image  src={product.image}  alt="Foto do produto" width={860} height={80} quality={100} className="
              rounded-lg  group-hover:scale-105
              "/>
       <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
    
    <span className="text-sm truncate">{product.title}</span>
    <span className="flex h-full items-center justify-center rounded-full bg-red-500 px-4 font-semibold">R${product.price}</span>
    
    </div>
            </Link>
          ))
        }
       
 
    </div>
  )
}
