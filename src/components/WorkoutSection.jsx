// components/WorkoutSection.js
import React from 'react';
import YouTubeVideo from './YoutubeVideo';
import { Card, CardContent, Typography } from '@mui/material';

const WorkoutSection = ({ workout }) => {
  return (
    <Card className="my-4 shadow-xl overflow-hidden rounded-lg">
      {/* Gradient background for the card header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <Typography variant="h4" component="div" className="text-white font-bold">
          {workout.name}
        </Typography>
      </div>
      <CardContent className="bg-gray-50">
        {/* Description with more vivid color */}
        <Typography variant="body1" className="mb-3 text-gray-700">
          {workout.description}
        </Typography>
        {/* Highlighted sets/reps and rest periods */}
        <div className="text-gray-800 mb-2">
          <Typography variant="body1" component="p" className="font-medium">
            Sets/Reps: <span className="text-blue-600 font-semibold">{workout.setsReps}</span>
          </Typography>
        </div>
        <div className="text-gray-800 mb-4">
          <Typography variant="body1" component="p" className="font-medium">
            Rest: <span className="text-green-600 font-semibold">{workout.rest}</span>
          </Typography>
        </div>
        {/* Video section with a specific margin */}
        {workout.videoId && (
          <div className="mt-2 mb-4">
            <YouTubeVideo videoId={workout.videoId} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutSection;
