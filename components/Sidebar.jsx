import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import TheatersIcon from '@mui/icons-material/Theaters';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import Image from "next/image"
import Logo from "../public/insta.svg"

const Sidebar = () => {
  
 

  return (
    <div className="sidebar">
    <div className="logo">
       <Image
       src={Logo}
       alt="logo"
       width={200}
       height={80}
       priority
       />
        </div> 
       

    <div className="sidebar-list">
    <span><HomeIcon/></span>
     <a href="">Home</a>
    </div>

    <div className="sidebar-list">
    <span><SearchIcon/></span>
     <a href="">Search</a>
    </div>

    <div className="sidebar-list">
    <span><ExploreIcon/></span>
     <a href="">Reels</a>
    </div>

    <div className="sidebar-list">
    <span><TheatersIcon/></span>
     <a href="">Reels</a>
    </div>

    <div className="sidebar-list">
    <span><MessageIcon/></span>
     <a href="">Message</a>
    </div>

    

    <div className="sidebar-list">
    <span><CircleNotificationsIcon /></span>
          <a href="">Notification</a>
    </div>

    <div className="sidebar-list">
    <span><PostAddIcon/></span>
     <a href="Photo">Create</a>
    </div>

    <div className="sidebar-list">
    <span><AccountCircleIcon/></span>
          <a href="his">Profile</a>
    </div>

    
        
    

   
      
      

        
      </div>
   
  );
};

export default Sidebar;
