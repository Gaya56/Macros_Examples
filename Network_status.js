import xapi from 'xapi';

xapi.status.on('NetworkInterface[1].Status', (status) => {
  console.log(`Network Interface 1 Status: ${status}`);
});
