import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ActionAreaCard from './ActionAreaCard';
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
export default function ProductCard() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <ActionAreaCard />
          {/* <Item>1</Item> */}
        </Grid>
        <Grid item xs={6}>
        <ActionAreaCard />
        </Grid>
        <Grid item xs={6}>
        <ActionAreaCard />
        </Grid>
        <Grid item xs={6}>
        <ActionAreaCard />
        </Grid>
      </Grid>
    </Box>
  );
}