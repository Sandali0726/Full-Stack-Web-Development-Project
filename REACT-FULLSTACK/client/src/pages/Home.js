import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts,setLikedPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts",
    {headers:{accessToken:localStorage.getItem('accessToken')}})
    .then((response) => {
      setListOfPosts(response.data,listOfPosts);
      setLikedPosts(response.data,listOfPosts);
    });
  }, []);

  const likeAPost = (postId) => {
    axios.post("http://localhost:3001/likes",
    {PostId:postId},
    {headers:{accessToken:localStorage.getItem('accessToken')}}
  ).then((response)=>{
    
    setListOfPosts(listOfPosts.map((post) => {
      if(post.id ==postId){
        if (response.data.liked){
        return{...post,Likes:[...post.Likes,0]}}
        else{
          const likesArray = post.Likes
          likesArray.pop();
          return{...post,Likes:likesArray}}
      }      
      else{
          return post
          }
    }))
  })
  }

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            
          >
            <div className="title"> {value.title} </div>
            <div className="body" onClick={() => {
              navigate(`/post/${value.id}`);
            }}>{value.postText}</div>
            
            <div className="footer">
            <div className="username">{value.username}
            <div className="buttons">
              
                < ThumbUpIcon onClick ={()=>
                {likeAPost(value.id)}}
                //className={}
                /> 
              <label>{value.Likes.length}</label>
            </div>
            </div>
            </div>
            </div>)
      
      })}
    </div>
  );
}

export default Home;