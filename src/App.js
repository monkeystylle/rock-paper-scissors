import Player from './components/Player';
import ComputerPlayer from './components/ComputerPlayer';
import { useState } from 'react';
import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react';

function App() {
    const choice = ['rock', 'paper', 'scissors'];
    const [playerChoice, setPlayerChoice] = useState('rock');
    const [computerChoice, setComputerChoice] = useState('rock');
    const [winner, setWinner] = useState('');

    //play the game
    const startGame = () => {
        setWinner('');
        let counter = 0;
        let gameInterval = setInterval(() => {
            counter++;
            selecComputerChoice();
            if (counter > 5) {
                clearInterval(gameInterval);
                setWinner(selectWinner());
            }
        }, 100);
    };

    //select computer choice
    const selecComputerChoice = params => {
        const number = Math.floor(Math.random() * choice.length);
        setComputerChoice(choice[number]);

        console.log(number);
        console.log(choice[number]);
    };

    //select player choice
    const selectPlayerChoice = weapon => {
        setPlayerChoice(weapon);
        setWinner('');
    };

    //select winner
    const selectWinner = () => {
        if (playerChoice === computerChoice) {
            return 'Its a Tie';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            return 'You Win!';
        } else {
            return 'You Lose!';
        }
    };

    return (
        <Box>
            <Heading my={8} textAlign="center" w="90%" mx="auto">
                Rock Paper Scissors
            </Heading>
            <Flex justifyContent="center">
                <Box mr={16}>
                    <Text fontWeight="bold" textAlign="center">
                        You
                    </Text>
                    <Player weapon={playerChoice} />
                </Box>
                <Box>
                    <Text fontWeight="bold" textAlign="center">
                        Computer
                    </Text>
                    <ComputerPlayer weapon={computerChoice} />
                </Box>
            </Flex>
            <Text
                color="#f05454"
                fontWeight="bold"
                fontSize="3xl"
                mt={8}
                textAlign="center"
            >
                {winner ? selectWinner() : null}
            </Text>
            <Text fontSize="2xl" mt={8} textAlign="center">
                Choose rock paper or scissor
            </Text>
            <Flex mt={4} justifyContent="center">
                <Button onClick={() => selectPlayerChoice('rock')}>Rock</Button>
                <Button ml={4} onClick={() => selectPlayerChoice('paper')}>
                    Paper
                </Button>
                <Button ml={4} onClick={() => selectPlayerChoice('scissors')}>
                    Scissor
                </Button>
            </Flex>
            <Flex justifyContent="center" mt={20}>
                <Button
                    height="48px"
                    width="200px"
                    border="2px"
                    borderColor="gray.200"
                    onClick={startGame}
                >
                    PLAY
                </Button>
            </Flex>
        </Box>
    );
}

export default App;
