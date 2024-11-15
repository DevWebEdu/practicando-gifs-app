import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { Card } from './components/Card'
import { useFavorites } from './hooks/useFavorites'
import { FavoritesCard } from './components/FavoritesCard'



export const App= () => {
    const { favorites} = useFavorites()
    const [formValue , setFormValue ]  = useState()


    const { data, error, hasError, isLoading, nextButtonPage, getFetchByName } = useFetch(`https://rickandmortyapi.com/api/character/`)
    
    const onInputChange = ({target}) => {
        const value = target.value
        setFormValue(value)
        getFetchByName(formValue)
    }
   
    //console.log(favorites)
    return (
        <div className='flex flex-col max-w-[1900px] justify-center items-center mx-auto relative '>
            <h1 className="text-white font-extrabold text-5xl text-center mt-20">
                Rick y Morty
            </h1>
            <div className='w-full mt-10 gap-5 flex flex-row justify-center items-center h-full'>

                <button className='h-full' onClick={() => nextButtonPage('prev')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>
                </button>
                <input 
                    type="text"
                    className=' p-2 rounded-lg w-9/12  md:w-3/6  bg-[#2e2b30]  outline-none text-white font-medium ' value= { formValue } onChange={onInputChange}/>
                <button className='h-full' onClick={() => nextButtonPage('next')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>

                </button>

            </div>

            <div className='mt-6 text-left px-5 w-full font-semibold  text-2xl'>
                <h1>Favoritos</h1>
                <div className=''>
                      {
                        favorites.length !== 0 ?  (
                           
                             <FavoritesCard favorites={favorites} />
                        ) :  
                        (
                            <p className=' text-sm py-2 text-center'> No tienes favoritos </p> 
                        )
                      }  
                </div>
            </div>
            <div className='mt-10 xl:p-5  w-full i grid gap-6 lg:grid-cols-2 xl:grid-cols-3  px-5'>
               {isLoading && (<p>Cargando</p>)}
                {
                    data?.results?.map((res) => (
                        <Card personaje={res} key={res.id} />
                    ))
                }
            </div>
          
            <div className='absolute top-0 right-0 p-5'>
                Favorites
                <span className='w-5 h-5  rounded-full'>
                    {favorites.length}
                </span>
            </div>
        </div>

    )
}

export default App
