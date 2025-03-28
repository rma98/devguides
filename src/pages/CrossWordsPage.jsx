import { PageContainer, GridContainer, Cell, VideoContainer } from "./styles/CrossWordsStyles";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import words from "../data/words";


const getRandomPosition = (size) => Math.floor(Math.random() * size);

const placeWordInGrid = (grid, word) => {
    const size = grid.length;
    let placed = false;

    while (!placed) {
        const row = getRandomPosition(size);
        const col = getRandomPosition(size - word.length);
        if (grid[row].slice(col, col + word.length).every((cell) => !cell)) {
            for (let i = 0; i < word.length; i++) {
                grid[row][col + i] = word[i];
            }
            placed = true;
        }
    }
};

const generateGrid = () => {
    const size = 10;
    const grid = Array.from({ length: size }, () => Array(size).fill(""));
    words.forEach((word) => placeWordInGrid(grid, word));
    return grid;
};

const CrossWordsPage = () => {
    const [grid, setGrid] = useState(generateGrid);
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState(new Set());
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (foundWords.size === words.length) {
            setCompleted(true);
        }
    }, [foundWords]);

    const handleCellClick = (row, col) => {
        const letter = grid[row][col];
        if (!letter) return;

        const newSelection = [...selectedCells, `${row}-${col}`];
        setSelectedCells(newSelection);

        words.forEach((word) => {
            if (word.split("").every((char, i) => newSelection.includes(`${row}-${i}`))) {
                setFoundWords((prev) => new Set(prev).add(word));
            }
        });
    };

    const handleVideoEnd = () => {
        setGrid(generateGrid());
        setSelectedCells([]);
        setFoundWords(new Set());
        setCompleted(false);
    };

    return (
        <PageContainer>
            {!completed ? (
                <>
                    <h1>Encontre as palavras e alcance o céu!</h1>
                    <GridContainer>
                        {grid.map((row, rowIndex) =>
                            row.map((letter, colIndex) => (
                                <Cell
                                    key={`${rowIndex}-${colIndex}`}
                                    onClick={() => handleCellClick(rowIndex, colIndex)}
                                    selected={selectedCells.includes(`${rowIndex}-${colIndex}`)}
                                >
                                    {letter || ""}
                                </Cell>
                            ))
                        )}
                    </GridContainer>
                </>
            ) : (
                <VideoContainer>
                    <ReactPlayer
                        url="/src/assets/video/sky.mp4"
                        playing
                        width="100%"
                        height="100%"
                        onEnded={handleVideoEnd}
                    />
                </VideoContainer>
            )}
        </PageContainer>
    );
};

export default CrossWordsPage;
