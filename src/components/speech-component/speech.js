import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [play, setPlay] = useState(true);

  React.useEffect(() => {
    props.setTranscript(transcript);
  }, [transcript]);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const keepListeneing = () => {
    SpeechRecognition.startListening({ continuous: true });
    setPlay(false);
  };

  const pauseListening = () => {
    SpeechRecognition.stopListening();
    setPlay(true);
  };

  const resetListening = () => {
    resetTranscript();
    props.resetStory();
  };

  return (
    <div className="speech-wrapper">
      {play ? (
        <img
          className="speech"
          src="/images/speech.png"
          alt="speech"
          onClick={keepListeneing}
        ></img>
      ) : (
        <img
          className="speech"
          src="/images/pause.png"
          alt="speech"
          onClick={pauseListening}
        ></img>
      )}
      <img
        className="speech reset"
        src="/images/reset.png"
        alt=""
        onClick={resetListening}
      ></img>
    </div>
  );
};

export default Speech;
