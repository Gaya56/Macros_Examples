// Settings Config Check Script
import xapi from 'xapi';

async function checkSettings() {
  const evaluateTranspiled = await xapi.Config.get('Macros.EvaluateTranspiled');
  if (evaluateTranspiled === 'True') {
    console.log("EvaluateTranspiled: True is deprecated. Please set it to False.");
  } else {
    console.log("EvaluateTranspiled setting is current.");
  }
}

checkSettings();
