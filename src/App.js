// App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import WorkoutSection from './components/WorkoutSection';

import './App.css'; // Make sure this imports Tailwind CSS

// Sample data, replace with real data and potentially fetch from an API or static file
const workouts = [
  {
    name: "Inverted Rows",
    description: "Using a Smith machine, set the bar around waist height. Lie underneath the bar and grab it with an overhand grip, keeping your body straight from head to heels. Pull your chest towards the bar, then lower back down with control.",
    setsReps: "4 sets of 8-12 reps",
    rest: "1-2 minutes between sets",
    videoId: "ehWfVW9zsVQ", // Placeholder, replace with actual video ID
  },
  {
    name: "Negative Pull-Ups",
    description: "Start by standing on something to get your chin over the bar (like a box or bench) with an overhand grip. Hold yourself at the top position for 5 seconds, then lower yourself down as slowly as possible, aiming for a 5-second descent.",
    setsReps: "5 sets of 5 reps",
    rest: "2-3 minutes between sets to fully recover",
    videoId: "u8oXY3Lzcms", // Placeholder, replace with actual video ID
  },
  {
    name: "Band-Assisted Pull-Ups",
    description: "Focus on using the band for minimal assistance and gradually use lighter bands as you get stronger.",
    setsReps: "3 sets of 5-8 reps",
    rest: "2 minutes between sets",
    videoId: "o2lhMuKNKQw", // Placeholder, replace with actual video ID
  },
  {
    name: "Long Lever Rocking Plank",
    description: "Get into a plank position with your feet together and elbows under your shoulders. Press into your forearms and maintain a straight body line. Rock forward on your toes and then back to the starting position.",
    setsReps: "3 sets aiming to hold for 60-120 seconds each",
    rest: "1-2 minutes between sets",
    videoId: "G5wtVcXmqu4", // Placeholder, replace with actual video ID
  },
  {
    name: "Scapular Pull-Ups",
    description: "Hang from the pull-up bar with straight arms. Pull your shoulders down and back, lifting your body slightly without bending your elbows, and squeeze at the top position for 2 seconds before lowering back down.",
    setsReps: "3 sets of 8-15 reps",
    rest: "1-2 minutes between sets",
    videoId: "2CExd_RXr8s", // Placeholder, replace with actual video ID
  }
];
const sarahImagePath = `${process.env.PUBLIC_URL}/sarah1.png`; 
const sarahImagePath1 = `${process.env.PUBLIC_URL}/sarah.png`; 









function App() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${sarahImagePath1})` }}>
      <Container maxWidth="lg" className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">Jerry's Pull-Up Strength Workout Plan for Sarah</h1>
        

        {/* <div className="flex flex-col md:flex-row items-center mb-8">
          <img src={'/public/logo512.png'} alt="Sarah" className="w-full md:w-1/4 rounded-full mr-8 mb-4 md:mb-0" />
          <div>
            <h2 className="text-3xl text-blue-500 mb-4">Why This Plan Is So Effective</h2>
            <p className="text-md text-gray-700">
            Once we learn the reasons why pull-ups are so hard in the first place, we can uncover what makes this plan so effective. The challenge often lies in lifting your own body weight - a task that demands not just strength, but technique, and the synergy of multiple muscle groups. Unlike other exercises where you can adjust the weight to suit your strength level, with pull-ups, you're directly confronted with your own body weight. This plan is designed to progressively build your pull-up strength by focusing not just on the major muscles involved but also on those often overlooked supporting muscles. By giving you "just enough" to improve without overtaxing your body, and by targeting common weak points, Sarah, you'll be doing pull-ups in no time.
          </p>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={sarahImagePath} alt="Sarah" className="w-full md:w-1/4 rounded-full mb-2" />
            {/* Caption under the image */}
            <Typography variant="caption" className="text-gray-600">
              Jerry's edit of Sarah being strong AF
            </Typography>
          </div>
          <div className="md:ml-8">
            <h2 className="text-3xl text-blue-500 mb-4">Why This Plan Is So Effective?</h2>
            <p className="text-md text-gray-700">
            Hi Sarah!😁 Welcome to your Pull-up program. Once you learn the reasons why pull-ups are so hard in the first place, you can uncover what makes this plan so effective. The challenge often lies in lifting your own body weight - a task that demands not just strength, but technique, and the synergy of multiple muscle groups. Unlike other exercises where you can adjust the weight to suit your strength level, with pull-ups, you're directly confronted with your own body weight. This plan is designed to progressively build your pull-up strength by focusing not just on the major muscles involved but also on those often overlooked supporting muscles. By giving you "just enough" to improve without overtaxing your body, and by targeting common weak points, Sarah, you'll be doing pull-ups in no time. Follow the workout in order shown below.
          </p>
          </div>
        </div>

        {/* Workout Time Details */}
        <div className="mb-8">
          <h3 className="text-2xl text-green-600 mb-2">Workout Time Details</h3>
          <p className="text-md text-gray-700">
            Workout Frequency: 3 times per week on non-consecutive days to allow for muscle recovery. 
            
            Total Workout Time: Approximately 45-60 minutes, including rest periods.
          </p>
        </div>

        {/* Workout Sections */}
        {workouts.map((workout, index) => (
          <WorkoutSection key={index} workout={workout} />
        ))}
      </Container>
    </div>
  );
}





export default App;
