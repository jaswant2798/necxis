import Image from "next/image"
import dp from "../public/user_icon.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import img from "../public/image.jpg";





const url='http://localhost:3000/api/user';
const fetchData=async()=>{
  const res= await fetch(url)
  return await res.json()
}
export default  async function Feed() {

  
const data= await fetchData();
console.log(data)
 
  return (
    
      <>
      
      <div className="feed-box">
        <div className="feed-head">
          <Image
          className="img"
          src={dp}
          alt="dp"
          priority/>
          
          <span>{data.username}</span>
        </div>

          <div className="feed-img">
            <Image
            src={img}
            width={400}
            height={600}
            alt="feed-img"
            />
          </div>
          <div className="feed-sign">
              <FavoriteBorderIcon className="icon-gap"/>
              <ChatBubbleOutlineIcon className="icon-gap"/>
              <SendIcon className="icon-gap"/>
              <div className="feed-comment">
                <span id="likes">100 likes</span>
                
                <div className="caption">
                <span id='profile'>Jaswant</span>
                Fashion is temporary, but nature never goes out of style. The best view comes after the most challenging climb.
                </div>
                <span id="view-comment">View all 455 comment</span>
                
          <input type="text" placeholder="Add a comment" />
          </div>
            </div>
      
      </div>
      </>
  );
}