import Mainnavigation from './Mainnavigation';
import classes from './Layout.module.css';


function Layout(props)
{
  return (
  
  
  <div>
      
   <Mainnavigation/>   
      <main className={classes.main}>{props.children}</main>
      gfgfdg
      </div>);

}export default Layout;