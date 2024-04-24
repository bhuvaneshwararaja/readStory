import React, { useState } from "react";
import { GlobalContext } from "./context";

export function GlobalContextProvider({ children }) {
  const [storyList, setStoryList] = useState([
    {
      storyId:1,
      coverImage: "/images/fox.jpg",
      title: "The Curious Fox and the Tangled Tail",
      story: `Once upon a time, in the heart of a lush forest, there lived a curious little fox named Milo. Milo had vibrant orange fur and big, bright eyes that twinkled with mischief. He spent his days exploring every nook and cranny of the forest, chasing butterflies, and playing hide-and-seek with his friends.
  
    One sunny morning, as Milo trotted along a winding path, he stumbled upon a mysterious old oak tree. Its gnarled branches reached towards the sky, casting deep shadows below. Intrigued, Milo approached cautiously. "Who lives here?" he wondered aloud.
    
    To his surprise, a tiny voice replied, "I do! But I'm stuck up here. Can you help me down?" Milo looked up and saw a small squirrel clinging to a high branch, his bushy tail tangled in the leaves.
    
    Without hesitation, Milo sprang into action. He scampered up the tree with ease, using his nimble paws to free the squirrel's tail. "Thank you, Milo!" the squirrel exclaimed, his eyes sparkling with gratitude.
    
    From that day on, Milo and the squirrel, named Sammy, became the best of friends. They explored the forest together, sharing stories and laughter along the way. Milo learned all about Sammy's adventures in the treetops, and Sammy marveled at Milo's bravery and kindness.
    
    As the seasons changed, Milo and Sammy's friendship blossomed, bringing joy to the entire forest. They frolicked in the autumn leaves, built snow forts in the winter, and danced beneath the spring blossoms.
    
    And so, in the heart of the enchanted forest, a bond formed between a curious little fox and a grateful squirrel, proving that true friendship knows no bounds and that even the smallest acts of kindness can make the biggest difference. And they lived happily ever after, exploring the wonders of their forest home for years to come`,
    },
    {
      storyId:2,
      coverImage: "/images/unicorn.jpg",
      title: "Lily and the Unicorn: Quest for the Lost Kingdom",
      story: `In a cozy village nestled between rolling hills and meandering streams, there lived a young girl named Lily. Lily was known for her love of adventure and her insatiable curiosity. Every day, she would wander through the fields and forests, seeking out new discoveries.
  
    One day, while exploring the edge of the village, Lily stumbled upon a hidden pathway leading into the dense woods beyond. Intrigued, she followed the winding trail deeper into the unknown.
    
    As she ventured further into the forest, the trees grew taller, and the air grew thicker with mystery. Suddenly, Lily heard a faint melody floating through the trees. Mesmerized, she followed the sound until she reached a clearing bathed in golden sunlight.
    
    There, sitting atop a moss-covered rock, was a majestic unicorn, its coat shimmering in the dappled light. Lily gasped in wonder, hardly daring to believe her eyes.
    
    The unicorn turned to her with gentle eyes and spoke in a voice like the wind through the leaves. "Greetings, young adventurer. What brings you to my forest?"
    
    Overwhelmed with awe, Lily stammered, "I-I'm just exploring. I didn't expect to find... you."
    
    The unicorn smiled kindly. "You have a brave heart, child. Perhaps you are the one destined to fulfill the prophecy."
    
    "What prophecy?" Lily asked, her curiosity piqued.
    
    "The prophecy of the lost kingdom," the unicorn replied. "Long ago, a great evil cast a shadow over our land, plunging it into darkness. But legend foretells of a hero who will restore the light and bring peace to the realm."
    
    Lily's heart raced with excitement. Could she be the hero the unicorn spoke of? With newfound determination, she vowed to uncover the secrets of the lost kingdom and fulfill her destiny.
    
    And so, with the unicorn as her guide, Lily embarked on the greatest adventure of her life, journeying into the heart of the enchanted forest to face challenges, overcome obstacles, and discover the truth that lay hidden within.`,
    },
  ]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          storyList,
          setStoryList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalContextProvider;
