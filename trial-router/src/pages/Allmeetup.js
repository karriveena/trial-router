

import { useState,useEffect } from "react";
import Meetuplistitem from "../meetups/Meetuplistitem";


function Allmeetup()
{    
const[isloading,setisloading]=useState(true);
const[loadmeetups,setloadmeetups]=useState([]);
useEffect(()=>{
 setisloading(true);
  fetch('https://react-getting-started-cbca8-default-rtdb.firebaseio.com/meetup.json'
).then((response)=>{

  return response.json();

}
).then((data)=>
{
  const meetup=[];
  

  for(const key in data)
  {
    const meetups={
      id:key,
      ...data[key]
    
  };
  meetup.push(meetups);
}
setisloading(false);

setloadmeetups(meetup);

  
}
);


},[]);
if(isloading)
{

  return(
    <section>
    <p>Loading.....</p>

    </section>);
}




return (
  
  <section>
    <h1>All meetup page</h1>
    
<Meetuplistitem meet={loadmeetups}/>


    </section>
);
    
}export default Allmeetup;