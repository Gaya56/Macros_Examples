import xapi from 'xapi';

xapi.status.on('Video.Input.Connector[1].Connected', (connected) => {
  console.log(`Camera connected: ${connected}`);
});
