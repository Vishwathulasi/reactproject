import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.sirhow.com/wp-uploads/2015/10/please-help.jpg"
        title="Donate Now!!"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Donate Now!!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>With your support and kindness millons of children can see their beautiful life. so..Start your monthly donation!!</p>
        </Typography>
      </CardContent>
    </Card>
  );
}