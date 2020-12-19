import React from 'react';
import scissors from '../assets/scissors2.png';
import paper from '../assets/paper2.png';
import rock from '../assets/rock2.png';

import { Box, Image, Text } from '@chakra-ui/react';

function ComputerPlayer({ weapon }) {
    return (
        <Box mt={3}>
            <Image
                boxSize="200px"
                src={
                    weapon === 'rock'
                        ? rock
                        : weapon === 'scissors'
                        ? scissors
                        : paper
                }
                alt="Rock Paper Scissors"
            />
            <Text>{weapon}</Text>
        </Box>
    );
}

export default ComputerPlayer;
