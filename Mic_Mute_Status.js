import xapi from 'xapi';

xapi.status.on('Audio.Input.Mute', (muteStatus) => {
  console.log(`Microphone mute status: ${muteStatus}`);
});
