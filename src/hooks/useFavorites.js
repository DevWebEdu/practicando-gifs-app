import { useContext } from "react"
import FavoriteContext from "../context/FavoritesContext"

export const useFavorites = () =>{
     

    return useContext(FavoriteContext)
}