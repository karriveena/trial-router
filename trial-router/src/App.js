import {Route,Switch} from 'react-router-dom';
//import Mainnavigation from './Layout/Mainnavigation';
import Layout  from './Layout/Layout';


import Allmeetup from "./pages/Allmeetup";
import Favourite from './pages/Favourite';
import Newmeetup from './pages/Newmeetup';






function App() {
  return (
    <div>
<Layout>
      <Switch>

       <Route path='/' exact>
         <Allmeetup/>
   </Route>
             <Route path='/Newmeetup' >
         <Newmeetup/>
     </Route>
       
       <Route path='/Favourite' >
         <Favourite/>
         </Route>
      </Switch>
</Layout>
 
    </div>
  );
}

export default App;
