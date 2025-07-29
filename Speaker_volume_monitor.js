import xapi from 'xapi';

xapi.status.on('Audio.Volume', (volume) => {
  console.log(`Current speaker volume: ${volume}`);
});
