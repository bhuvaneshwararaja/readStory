import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import { useNavigate, useParams } from "react-router-dom";
import Speech from "../speech-component/speech";

const Story = () => {
  const storyContext = useContext(GlobalContext);
  let { id } = useParams();
  const [actualSentence, setActualSentence] = useState([]);
  const [transcripts, setTranscript] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let words = storyContext.storyList[id - 1].story
      .trim()
      .split(" ")
      .map((data) => {
        return {
          word: data,
          color: "black",
        };
      });
    console.log(words);
    setActualSentence(words);
  }, []);

  useEffect(() => {
    console.log(transcripts);
    let transcript = transcripts.split(" ");
    for (let i = 0; i < actualSentence.length; i++) {
      if (transcript.length === i) {
        break;
      }
      if (
        actualSentence[i].word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
        transcript[i].toLowerCase()
      ) {
        let tempword = [...actualSentence];
        tempword[i] = { ...tempword[i], color: "blue" };
        setActualSentence(tempword);
      } else {
        let tempword = [...actualSentence];
        tempword[i] = { ...tempword[i], color: "red" };
        setActualSentence(tempword);
      }
    }
  }, [transcripts]);

  const resetStory = () => {
    setActualSentence(
      actualSentence.map((word) => {
        return { ...word, color: "black" };
      })
    );
  };

  return (
    <div className="container">
      <h1 style={{ display: "flex" }}>
        <img
          src="/images/back.png"
          alt="back"
          style={{ width: "30px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        ></img>
        {storyContext.storyList[id - 1].title}
      </h1>
      <Speech setTranscript={setTranscript} resetStory={resetStory} />
      <div className="story-wrapper">
        {actualSentence.map((data) => {
          return (
            <span className={data.word} style={{ color: data.color }}>
              {data.word + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
