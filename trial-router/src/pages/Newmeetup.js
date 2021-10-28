import {useHistory} from 'react-router-dom';
import Newmeetupform from "../meetups/Newmeetupform";

function Newmeetup()
{  
    const history=useHistory();
    function Addmeetuphandler(meetupdata)
    {
     fetch(
        'https://react-getting-started-cbca8-default-rtdb.firebaseio.com/meetup.json',
          {
              method:'POST',
              body:JSON.stringify(meetupdata),
              headers:{
                'Content-Type':'application/json'

              }

          }).then(()=>{
            history.replace('/');
          });

    }

return (

    <div>

        <h2>New meetup page</h2>

    <Newmeetupform Addmeetup={Addmeetuphandler}/>
    </div>

);

}export default Newmeetup;