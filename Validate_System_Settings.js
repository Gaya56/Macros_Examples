// Validate_System_Settings.js
import xapi from 'xapi';

async function validateSettings() {
  const transpileSetting = await xapi.Config.get('Macros.EvaluateTranspiled');

  if (transpileSetting === 'True') {
    console.log("[WARNING] EvaluateTranspiled: True is deprecated. Please set it to False.");
  } else {
    console.log("[OK] EvaluateTranspiled setting is current.");
  }
}

validateSettings();
