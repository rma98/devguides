import { PageContainer, GridContainer, Cell, VideoContainer, MessageContainer } from "./styles/CrossWordsStyles";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { correctWords, wrongWords } from "../data/words";

const getRandomPosition = (size) => Math.floor(Math.random() * size);

const canPlaceWord = (grid, word, row, col, direction) => {
    const size = grid.length;

    for (let i = 0; i < word.length; i++) {
        let r = row, c = col;

        if (direction === "horizontal") c += i;
        else if (direction === "vertical") r += i;
        else if (direction === "diagonal") {
            r += i;
            c += i;
        }

        if (r >= size || c >= size || grid[r][c]) return false; // Se já houver uma letra, falha
    }
    return true;
};

const placeWordInGrid = (grid, word) => {
    const size = grid.length;
    const directions = ["horizontal", "vertical", "diagonal"];
    let placed = false;
    let attempts = 0;
    const maxAttempts = 50; // Evita loops infinitos

    while (!placed && attempts < maxAttempts) {
        const row = getRandomPosition(size);
        const col = getRandomPosition(size);
        const direction = directions[Math.floor(Math.random() * directions.length)];

        if (canPlaceWord(grid, word, row, col, direction)) {
            for (let i = 0; i < word.length; i++) {
                if (direction === "horizontal") grid[row][col + i] = word[i];
                else if (direction === "vertical") grid[row + i][col] = word[i];
                else if (direction === "diagonal") grid[row + i][col + i] = word[i];
            }
            placed = true;
        }
        attempts++;
    }
};

const generateGrid = () => {
    const size = 10;
    const grid = Array.from({ length: size }, () => Array(size).fill(""));

    const mixedWords = [...correctWords, ...wrongWords].sort(() => Math.random() - 0.5);

    mixedWords.forEach((word) => placeWordInGrid(grid, word));

    return grid;
};

const CrossWordsPage = () => {
    const [grid, setGrid] = useState(generateGrid);
    const [selectedWords, setSelectedWords] = useState(new Set());
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (correctCount >= correctWords.length - 1 && wrongCount <= 1) {
            setShowVideo(true);
        } else if (wrongCount >= 3) {
            setGameOver(true);
        }
    }, [correctCount, wrongCount]);

    const handleCellClick = (row, col) => {
        if (selectedWords.has(`${row}-${col}`)) return;

        const letter = grid[row][col];
        if (!letter) return;

        setSelectedWords((prev) => new Set(prev).add(`${row}-${col}`));

        const selectedWord = extractWordFromGrid(grid, row, col);

        if (correctWords.includes(selectedWord)) {
            setCorrectCount((prev) => prev + 1);
        } else if (wrongWords.includes(selectedWord)) {
            setWrongCount((prev) => prev + 1);
        }
    };

    const extractWordFromGrid = (grid, row, col) => {
        const size = grid.length;
        const letter = grid[row][col];

        let horizontal = letter, vertical = letter, diagonal = letter;

        // Percorre para esquerda e direita (horizontal)
        let c = col - 1;
        while (c >= 0 && grid[row][c]) {
            horizontal = grid[row][c] + horizontal;
            c--;
        }
        c = col + 1;
        while (c < size && grid[row][c]) {
            horizontal += grid[row][c];
            c++;
        }

        // Percorre para cima e baixo (vertical)
        let r = row - 1;
        while (r >= 0 && grid[r][col]) {
            vertical = grid[r][col] + vertical;
            r--;
        }
        r = row + 1;
        while (r < size && grid[r][col]) {
            vertical += grid[r][col];
            r++;
        }

        // Percorre na diagonal
        r = row - 1;
        c = col - 1;
        while (r >= 0 && c >= 0 && grid[r][c]) {
            diagonal = grid[r][c] + diagonal;
            r--;
            c--;
        }
        r = row + 1;
        c = col + 1;
        while (r < size && c < size && grid[r][c]) {
            diagonal += grid[r][c];
            r++;
            c++;
        }

        return [horizontal, vertical, diagonal].find(word => correctWords.includes(word) || wrongWords.includes(word)) || "";
    };

    const restartGame = () => {
        setGrid(generateGrid());
        setSelectedWords(new Set());
        setCorrectCount(0);
        setWrongCount(0);
        setGameOver(false);
        setShowVideo(false);
    };

    return (
        <PageContainer>
            {showVideo ? (
                <VideoContainer>
                    <ReactPlayer
                        url="/src/assets/video/sky.mp4"
                        playing
                        width="100%"
                        height="100%"
                        onEnded={restartGame}
                    />
                </VideoContainer>
            ) : gameOver ? (
                <MessageContainer>
                    <h2>Ops! Você selecionou muitas palavras erradas! 😢</h2>
                    <button onClick={restartGame}>Tentar novamente</button>
                </MessageContainer>
            ) : (
                <>
                    <h1>Encontre as palavras certas para alcançar o céu!</h1>
                    <GridContainer>
                        {grid.map((row, rowIndex) =>
                            row.map((letter, colIndex) => (
                                <Cell
                                    key={`${rowIndex}-${colIndex}`}
                                    onClick={() => handleCellClick(rowIndex, colIndex)}
                                    selected={selectedWords.has(`${rowIndex}-${colIndex}`)}
                                >
                                    {letter || ""}
                                </Cell>
                            ))
                        )}
                    </GridContainer>
                </>
            )}
        </PageContainer>
    );
};

export default CrossWordsPage;
