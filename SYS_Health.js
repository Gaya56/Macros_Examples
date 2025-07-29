import xapi from 'xapi';

async function getSystemHealth() {
  const cpu = await xapi.status.get('SystemUnit.CPU');
  const temp = await xapi.status.get('SystemUnit.Temperature');
  console.log(`CPU: ${JSON.stringify(cpu)}, Temperature: ${JSON.stringify(temp)}`);
}

getSystemHealth();
