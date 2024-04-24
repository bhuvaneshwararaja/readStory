import React from "react";
import { StoryCard } from "../story-card/storyCard";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="title">Welcome to ReadAlongWithMe</h1>
      <p className="short-desc">Click Read Story to start reading your story</p>
      <StoryCard />
    </div>
  );
};
