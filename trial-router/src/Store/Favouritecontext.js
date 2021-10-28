

import { createContext } from "react";
import { useState } from "react";


const Favoritecontext=createContext({

       
    favorites:[],
    totalfavorites: 0,
    addfavorites:(favoritemeetup)=>{},
    removefavorite:(meetupId)=>{},
    itemfavorites:(meetupId)=>{},

}
);
 export function Favoritecontextprovider(props)
{
    const[usefavorites,setuserfavorites]=useState([]);

  function Addfavoritehandler(favoritemeetup)
  {
    setuserfavorites(prevuser=>
        {
         return   prevuser.concat(favoritemeetup);



        })
    }
    function removefavoritehandler(meetupId)
    {
        setuserfavorites(prevuser=>
            {

return prevuser.filter(meetup=>meetup.id !==meetupId);

            })

    }
    function itemisfavoritehandler(meetupId)
    {
        return usefavorites.some(meetup=>meetup.id===meetupId)
    }

   


    const context={
    favorites:usefavorites,
    totalfavorites:usefavorites.length,
    addfavorites:Addfavoritehandler,
    removefavorite:removefavoritehandler,
    itemfavorites:itemisfavoritehandler,

    };
   return <Favoritecontext.Provider value={context}>
      {props.children}

  </Favoritecontext.Provider>

}
  export default Favoritecontext;

