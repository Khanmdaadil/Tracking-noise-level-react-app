
import React from 'react';
import Ui from "./Ui"
import MicrophoneAccess from './MicrophoneAccess';
import NoiseAnalyzer from './NoiseAnalyzer';

function App() {
  return (
    <div className="App">
      <Ui />
      <MicrophoneAccess />
      <NoiseAnalyzer />
    </div>
  );
}

export default App;
