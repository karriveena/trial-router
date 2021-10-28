
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Mainnavigation.module.css';
import Favoritecontext from '../Store/Favouritecontext';



function Mainnavigation()
{    
    const favrtctx=useContext(Favoritecontext);


return (
    <header className={classes.header}>
<div className={classes.logo}>React meetups</div>
<nav>
    <ul >
<li>
    <Link to='/'>Allmeetup</Link>
</li>
<li>
    <Link to='/Newmeetup'>Newmeetup</Link>
</li>
<li>
    <Link to='/Favourite'>
       
        Favourite
        <span className={classes.badge} >{favrtctx.totalfavorites}</span></Link>
</li>
</ul>
</nav>
</header>


   
);

}export default Mainnavigation;