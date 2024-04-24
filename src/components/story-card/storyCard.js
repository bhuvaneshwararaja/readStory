import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import "./style.css"
import { useNavigate } from "react-router-dom";

export const StoryCard = () => {

  const storyContext = useContext(GlobalContext)
  const navigate  = useNavigate()
  return (
    <div className="card-wrapper">
      {storyContext.storyList.map((story, index) => {
        return <div className="story-card">
              <img src={story.coverImage} alt="" className="story-card-image"></img>
              <p className="story-card-title">{story.title}</p>
              <button className="story-card-btn btn-grad " 
              onClick={() => navigate(`/story/${index+1}`)}
              >Read story</button>
        </div>
      })}
    </div>
  );
};
