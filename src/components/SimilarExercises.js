import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box 
    sx={{ mt: {lg: '100px', xs:'0'}}}
    >
      <Typography  variant='h3' mb='33px'>
        Similar <span style={{ color:'#ff2625', textTransform: 'capitalize'}}> Target Muscle </span> Group
      </Typography>
      <Stack
        direction="row" sx={{ p:'2', position: 'relative' }}
      >
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>
        }
      </Stack>
      <Typography  variant='h3' mb="33px">
        Similar <span style={{ color:'#ff2625', textTransform: 'capitalize'}}> Equipment </span> Group
      </Typography>
      <Stack
        direction="row" sx={{ p:'2', position: 'relative' }}
      >
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises