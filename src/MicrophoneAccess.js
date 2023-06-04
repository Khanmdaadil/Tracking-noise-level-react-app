import React, { useState } from 'react';

function MicrophoneAccess() {
  const [microphoneGranted, setMicrophoneGranted] = useState(false);

  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicrophoneGranted(true);
    } catch (error) {
      console.log('Error accessing microphone:', error);
    }
  };

  return (
    <div>
      {!microphoneGranted && (
        <button onClick={requestMicrophoneAccess}>Grant Microphone Access</button>
      )}
      {microphoneGranted && <p>Microphone access granted!</p>}
    </div>
  );
}

export default MicrophoneAccess;
