export const FavoritesCard = ({favorites}) =>{
    
    return (
        <div>
            {
                favorites.map((fav,id)=>
                (
                    <span className="pr-4" key={id}> {fav.name} </span>
                ))
            }
        </div>
    )
}