import React from 'react';
import scissors from '../assets/scissors.png';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';

import { Box, Image, Text } from '@chakra-ui/react';

function Player({ weapon }) {
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
        </Box>
    );
}

export default Player;
