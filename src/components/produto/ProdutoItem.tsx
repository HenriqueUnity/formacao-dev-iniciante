'use client'
import { Produto } from "@/core"
import Image from "next/image";
import Link from "next/link"
import {IconShoppingCartPlus} from "@tabler/icons-react"
export  interface ProdutoItemProps{
    produto: Produto
}
export default function ProdutoItem(props: ProdutoItemProps){
    const {produto} = props;
    return <Link 
    className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    href={`/produto/${produto.id}`}> {produto.nome} 
    <div className="h-48 w-full relative">
        <Image src={produto.imagem}
        fill
        alt="imagem do produto"
        className="object-contain"
        />
    </div>
    <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/20">
    <span className="text-lg font-semibold">
        {props.produto.nome}
    </span>
    <span className="text-sm border-b border-dashed self-start">
        {produto.especificacoes.destaque}
        </span>
         <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
           de {props.produto.precoBase}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
          por {props.produto.precoPromocional}
          </span>
        </div>
        <button 
        onClick={(e:any)=>{e.preventDefault()}}
        className="flex bg-violet-700 
        rounded-full justify-center gap-2
        h-8 items-center hover:border-2 border-emerald-500">
            <IconShoppingCartPlus size={20}/>
            <span>Adicionar</span>
        </button>
    </div>

    </Link>
}
