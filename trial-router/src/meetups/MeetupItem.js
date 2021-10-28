


import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/card';
import Favoritecontext from '../Store/Favouritecontext';


function MeetupItem(props)
{
     const favoritedata= useContext(Favoritecontext);
     const itemfavorite=favoritedata.itemfavorites(props.id);
    function toggleeventhandler()
    {
      // const a= window. location.reload(false); 
          if(itemfavorite)
          {
              favoritedata.removefavorite(props.id);
          }
          else{
              favoritedata.addfavorites(
                    {
                             
                        id:props.id,
                        Title:props.Title,
                        address:props.Address,
                        Description:props.Description,
                        Image:props.Image,
                     

                    }

              )

          }

    }

     return(
         <Card>
         <li className={classes.item}>
    <div className={classes.image}>
        <img src={props.Image} alt={props.Title}/>
        </div>
        <div className={classes.content}>
       <h3>{props.Title}</h3>
       <address>{props.Address}</address>
       <p>{props.Description}</p>

        </div>
        <div className={classes.actions}>

            <button onClick={toggleeventhandler}>

                {itemfavorite ? 'Remove favorites' : 'To favorites'}
            </button>
        </div>


</li>
</Card>
     );


}

export default MeetupItem;