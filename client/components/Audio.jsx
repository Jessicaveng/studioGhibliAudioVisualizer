import React from "react";
import Sound from "react-sound";
import useSound from 'use-sound'


const [play] = useSound('.audios/HowlsMovingCastle_MerryGoRound.mp3');


const hmcSoundTrack = () => {
  const [play, { sound }] = useSound('./audios/HowlsMovingCastle_MerryGoRound.mp3');
 
  return (
    <button
      onClick={() => {
        // You win! Fade in the victory theme
        sound.fade(0, 1, 1000);
      }}
    >
      Click to win
    </button>
  );
};
export default Audio;
