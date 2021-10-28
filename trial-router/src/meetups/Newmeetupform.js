import { useRef } from 'react';
import classes from './Newmeetform.module.css';
import Card from '../ui/card';

function Newmeetupform(props)
{
    const titleinputref=useRef();
    const imageinputref=useRef();
    const addressinputref=useRef();
    const textareainputref=useRef();
    function submithandler(event)
    {
        event.preventDefault();

        const enteredtitle=titleinputref.current.value;
        const enteredimage=imageinputref.current.value;
        const enteredaddress=addressinputref.current.value;
        const enteredtextarea=textareainputref.current.value;


        const meetupdata={

            Title:enteredtitle,
            Image:enteredimage,
            Address:enteredaddress,
            Description:enteredtextarea,

        }
       
           props.Addmeetup(meetupdata);
    }

 
  return (
   <Card>
    <form className={classes.form} onSubmit={submithandler}>
   <div className={classes.control}>
       <label htmlFor='title'>Title</label>
       <input type="text" required id='title' ref={titleinputref}/>
       </div>

   
    <div className={classes.control}> 
    <label htmlFor='title'>Image</label>
       <input type="url" required id='title' ref={imageinputref}/></div>
       <div className={classes.control}> 
       <label htmlFor='title'>Address</label>
       <input type="text" required id='title'ref={addressinputref}/></div>
   <div className={classes.control}>
        <label htmlFor='title'>Image</label>
      <textarea id="description" rows='5' ref={textareainputref}></textarea></div>
    <div className={classes.actions}>
        <button>Add meetups</button>
    </div>

    </form>
    </Card>
  );

}export default Newmeetupform;