import Player from './components/Player';
import { useState } from 'react';
import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react';

function App() {
    const weapons = ['rock', 'paper', 'scissors'];
    const [state, setState] = useState({
        playerOne: weapons[0],
        playerTwo: weapons[0],
        winner: '',
    });

    //play the game
    const startGame = () => {
        let counter = 0;
        let gameInterval = setInterval(() => {
            counter++;
            selectWeaponTwo();
            if (counter > 5) {
                clearInterval(gameInterval);
                setState({
                    ...state,
                    winner: selectWinner(),
                });
            }
        }, 100);
    };

    //select computer weapon
    const selectWeaponTwo = params => {
        const number = Math.floor(Math.random() * weapons.length);
        setState({
            ...state,
            playerTwo: weapons[number],
        });

        console.log(number);
        console.log(weapons[number]);
    };

    //select player weapon
    const selectWeaponOne = weapon => {
        setState({
            ...state,
            winner: '',
            playerOne: weapon,
        });
    };

    //select winner
    const selectWinner = () => {
        const { playerOne, playerTwo } = state;

        if (playerOne === playerTwo) {
            return 'Its a Tie';
        } else if (
            (playerOne === 'rock' && playerTwo === 'scissors') ||
            (playerOne === 'scissors' && playerTwo === 'paper') ||
            (playerOne === 'paper' && playerTwo === 'rock')
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
                    <Player weapon={state.playerOne} />
                </Box>
                <Box>
                    <Text fontWeight="bold" textAlign="center">
                        Computer
                    </Text>
                    <Player weapon={state.playerTwo} />
                </Box>
            </Flex>
            <Text
                color="#f05454"
                fontWeight="bold"
                fontSize="3xl"
                mt={8}
                textAlign="center"
            >
                {state.winner ? selectWinner() : null}
            </Text>
            <Text fontSize="2xl" mt={8} textAlign="center">
                Choose rock paper or scissor
            </Text>
            <Flex mt={4} justifyContent="center">
                <Button onClick={() => selectWeaponOne('rock')}>Rock</Button>
                <Button ml={4} onClick={() => selectWeaponOne('paper')}>
                    Paper
                </Button>
                <Button ml={4} onClick={() => selectWeaponOne('scissors')}>
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
