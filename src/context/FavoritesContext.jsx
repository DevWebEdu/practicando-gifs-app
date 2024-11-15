import { createContext, useEffect, useState } from "react";



const FavoriteContext = createContext();
export default FavoriteContext
export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])


    const addFavorite = (character) => {

        // indexOf : buscar el id de character = favorito
        // dentro de favorites ( el estado del componente )
        // verificar primero si esta vacio => const dataInicial = JSON.parse(localStorage.getItem('favorites'))
        // verificar  luego con indexOf 
        // si el id del  character esta en algun favorito
        // si se encuentra alguno desestructuramos el objeto omitiendo el fav 
        //  favorites.indexOf = fav => item.id === personaje.id 
        // -1 no existe
        //  0 + existe
        const dataInicial = JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : []

        if (dataInicial === '') {
            return
        } else {
            const includesFavorites = favorites.some(fav => fav.id === character.id)

            if (includesFavorites) {
                const filterFavorites = favorites.filter(fav => fav.id !== character.id)
                setFavorites(filterFavorites)
                localStorage.setItem('favorites', JSON.stringify(filterFavorites))
            } else {
                const newFavorites = [...favorites, character]

                setFavorites(newFavorites)
                localStorage.setItem('favorites', JSON.stringify(newFavorites))
            }

        }




    }
    //console.log(favorites)
    const inicializandoFavoritos = () => {
        const dataInicial = JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : []
        console.log(JSON.parse(localStorage.getItem('favorites')) )
        //console.log( localStorage.getItem('favorites').length)
        if (dataInicial.length) {

            setFavorites(dataInicial)
            localStorage.setItem('favorites', JSON.stringify(dataInicial))
        } else {
            setFavorites([])
            localStorage.setItem('favorites',JSON.stringify([]))
        }

    }

    useEffect(() => {
        //localStorage.setItem('favorites',JSON.stringify([]))
        inicializandoFavoritos()
    }, [])


    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite }}>
            {
                children
            }
        </FavoriteContext.Provider>

    )
}
