import React from 'react';

import { Box, Image } from '@chakra-ui/react';

function Player() {
    return (
        <Box mt={3}>
            <Image
                boxSize="200px"
                src="/assets/rock.png"
                alt="Rock Paper Scissors"
            />
        </Box>
    );
}

export default Player;
