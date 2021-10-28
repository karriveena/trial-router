import React from "react";
import { useContext } from "react";
import Favoritecontext from "../Store/Favouritecontext";
import Meetuplistitem from "../meetups/Meetuplistitem";


function Favourite()
{   

    
    

    
    //const ss=this.aa();
   
    const favoritecntxt=useContext(Favoritecontext);
   let content;
   if(favoritecntxt.totalfavorites===0)
   {
    content=<p>YOu got no favorites.Start adding some?</p>
   }
   else{
  content=<Meetuplistitem meet={favoritecntxt.favorites}/>


   }
    
return (

    <div >Favourite page
    {content}
  
    </div>
    
);

}export default Favourite;