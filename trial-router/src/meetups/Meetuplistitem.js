
import MeetupItem from "./MeetupItem";
import classes from './Meetuplistitem.module.css';

function Meetuplistitem(props)
{
   
  return ( 
  
  <ul className={classes.list}>
                                                                                                                                                      
    {props.meet.map((meeetup)=>(
    <MeetupItem 
    key={meeetup.id}
    id={meeetup.id}
    Title={meeetup.Title}
    Image={meeetup.Image}
    Description={meeetup.Description}

      
    
    />))}

  </ul>
  
  );

}export default Meetuplistitem;