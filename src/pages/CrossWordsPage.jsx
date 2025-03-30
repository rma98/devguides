import React, { useState } from "react";
import { Container, GameContainer, Title, Hint, WordBox, Word, WordInput, VideoContainer, Video } from "./styles/CrossWordsStyles";
import skyVideo from "../assets/video/sky.mp4";

const words = ["AMOR", "GLÓRIA", "EUCARISTIA", "ESPÍRITO SANTO", "PARAÍSO", "JESUS", "SANTIDADE"];
const options = [
  ...words,
  "GUERRA", "ÓDIO", "TREVAS", "MEDO", "RAIVA", "INVEJA", "ORGULHO"
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const normalizeText = (text) => text.replace(/\s+/g, " ").trim().toUpperCase();

const CrossWordsPage = () => {
  const [userWords, setUserWords] = useState(Array(words.length).fill(""));
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (index, value) => {
    const newWords = [...userWords];
    newWords[index] = value.toUpperCase();
    setUserWords(newWords);
    
    if (words.every(word => newWords.some(input => normalizeText(input) === word))) {
      setIsComplete(true);
    }
  };

  const restartGame = () => {
    setUserWords(Array(words.length).fill(""));
    setIsComplete(false);
  };

  return (
    <Container>
      {!isComplete ? (
        <GameContainer>
          <Title>Complete as palavras para chegar ao céu</Title>
          <Hint>As palavras corretas têm a ver com o céu!</Hint>
          <WordBox>
            {shuffleArray(options).map((word, index) => (
              <Word key={index}>{word}</Word>
            ))}
          </WordBox>
          {userWords.map((_, index) => (
            <WordInput
              key={index}
              type="text"
              value={userWords[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Digite uma palavra`}
            />
          ))}
        </GameContainer>
      ) : (
        <VideoContainer>
          <Video src={skyVideo} autoPlay controls onEnded={restartGame} />
        </VideoContainer>
      )}
    </Container>
  );
};

export default CrossWordsPage;