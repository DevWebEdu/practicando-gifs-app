import { useEffect } from "react"
import { useFavorites } from "../hooks/useFavorites"

export const Card = ({ personaje }) => {
    const { favorites, addFavorite } = useFavorites()
    //console.log(favorites.includes(fav => fav.id === personaje.id))
    //console.log(favorites.findIndex(item=> item.id === personaje.id))
    return (
        <div className="shadow-2xl bg-[#2e2b30]  rounded-lg flex  justify-start items-center w-full overflow-hidden h-[220px] relative" >
            <img src={personaje.image} alt="" className=" rounded-l-lg h-full  object-cover " />
            <div className="flex flex-col h-full justify-stard content-around   rounded-lg px-4 py-2 gap-1  text-sm  font-medium   ">
                {/* Caja numero uno para el nombre , estado y especie */}
                <div>
                    <h4 className="font-bold text-2xl "> {personaje.name}</h4>
                    <div className=" flex flex-row items-center gap-2 text-wrap  text-base font-bold mb-3">
                        <span className={`w-3 h-3 rounded-full inline-block ${personaje.status === 'Alive' ? ' bg-green-700' : personaje.status === 'Dead' ? ' bg-red-800' : 'bg-slate-600'}`} > </span>
                        <span >{personaje.status}</span> - <span>{personaje.species}</span>
                    </div>

                </div>
                {/* Caja numero dos para la ultima ubicacion del personaje */}
                <div className="font-light text-lg" >
                    <p className="text-gray-500"> Place of birth: </p>
                    <span>{personaje.origin.name}</span>
                </div>
                {/* Caja numero tres para la primera ubicacion del personaje */}
                <div className="font-light text-lg" >
                    <p className="text-gray-500"> Appearances: </p>
                    <span>{personaje.episode.length} </span>



                </div>

            </div>
            <button type='button' className=" absolute top-0 right-0 m-5" onClick={() => addFavorite(personaje)}>

                {/* { favorites.findIndex(item=> item.id === personaje.id) !== -1 ?
                        (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-6 animate-pulse">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        ) :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 animate-pulse">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>      
                        )
                } */}

                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill={favorites.findIndex(item=> item.id === personaje.id) !== -1 ? ` yellow ` : `currentColor `} 
                    className={favorites.findIndex(item=> item.id === personaje.id) !== -1 ? `  size-6 hover:opacity-25 cursor-pointer` : ` size-6  hover:opacity-25 cursor-pointer`} >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>


            </button>
        </div>
    )
}