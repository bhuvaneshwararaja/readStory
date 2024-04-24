import logo from './logo.svg';
import './App.css';
import Speech from './components/speech-component/speech';
import { useEffect, useState } from 'react';
import { StoryCard } from './components/story-card/storyCard';
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import Story from './components/story/story';

function App() {
  let essay = `
  
Once upon a time, in the heart of a lush forest, there lived a curious little fox named Milo. Milo had vibrant orange fur and big, bright eyes that twinkled with mischief. He spent his days exploring every nook and cranny of the forest, chasing butterflies, and playing hide-and-seek with his friends.

One sunny morning, as Milo trotted along a winding path, he stumbled upon a mysterious old oak tree. Its gnarled branches reached towards the sky, casting deep shadows below. Intrigued, Milo approached cautiously. "Who lives here?" he wondered aloud.

To his surprise, a tiny voice replied, "I do! But I'm stuck up here. Can you help me down?" Milo looked up and saw a small squirrel clinging to a high branch, his bushy tail tangled in the leaves.

Without hesitation, Milo sprang into action. He scampered up the tree with ease, using his nimble paws to free the squirrel's tail. "Thank you, Milo!" the squirrel exclaimed, his eyes sparkling with gratitude.

From that day on, Milo and the squirrel, named Sammy, became the best of friends. They explored the forest together, sharing stories and laughter along the way. Milo learned all about Sammy's adventures in the treetops, and Sammy marveled at Milo's bravery and kindness.

As the seasons changed, Milo and Sammy's friendship blossomed, bringing joy to the entire forest. They frolicked in the autumn leaves, built snow forts in the winter, and danced beneath the spring blossoms.

And so, in the heart of the enchanted forest, a bond formed between a curious little fox and a grateful squirrel, proving that true friendship knows no bounds and that even the smallest acts of kindness can make the biggest difference. And they lived happily ever after, exploring the wonders of their forest home for years to come`
  const [actualSentence,setActualSentence] = useState([])
  const [transcripts,setTranscript] = useState("")

  useEffect(() => {
    let words = essay.trim().split(" ").map((data) => {
      return {
        word:data,
        color:"black"
      }
    })
    console.log(words)
    setActualSentence(words)
  },[])

  
  useEffect(() => {
    let transcript = transcripts.split(" ")
    for(let i=0; i<actualSentence.length; i++){
        if(transcript.length === i){
          break
        }
        if(actualSentence[i].word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === transcript[i].toLowerCase() ){
          let tempword = [...actualSentence]
          tempword[i] = {...tempword[i],color:"blue"}
          setActualSentence(tempword)
        }
        else{
          let tempword = [...actualSentence]
          tempword[i] = {...tempword[i],color:"red"}
          setActualSentence(tempword)
        }
    }
  },[transcripts])

  return (
    <div className="App">
    <Routes>
      <Route path="/story/:id" element={<Story />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
