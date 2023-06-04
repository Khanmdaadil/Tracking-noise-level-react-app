import React, { useState, useEffect } from 'react';

function NoiseAnalyzer() {
  const [recording, setRecording] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState(0);
  const threshold = 80; // Example threshold value

  useEffect(() => {
    let mediaRecorder;
    let analyzer;

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new AudioContext();
        analyzer = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyzer);

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (event) => {
          const audioData = event.data;
          
        };

        mediaRecorder.start();
        setRecording(true);
      } catch (error) {
        console.log('Error accessing microphone:', error);
      }
    };

    const stopRecording = () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        setRecording(false);
      }
    };

    if (recording) {
      startRecording();
    }

    return () => {
      stopRecording();
    };
  }, [recording]);

  return (
    <div>
      <p>Noise Level: {noiseLevel}</p>
      {noiseLevel > threshold && <p>Warning: Noise level exceeds threshold!</p>}
    </div>
  );
}

export default NoiseAnalyzer;
