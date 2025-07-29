// Scan_Macros_For_Deprecated_Syntax.js
import xapi from 'xapi';

// Simulated list of macro files (replace with actual macro names if accessible)
const macroFiles = [
  { name: 'LegacyMacro1.js', content: "const xapi = require('xapi');" },
  { name: 'ModernMacro2.js', content: "import xapi from 'xapi';" }
];

macroFiles.forEach(macro => {
  if (macro.content.includes("require('xapi')")) {
    console.log(`[WARNING] ${macro.name} uses deprecated syntax. Replace 'require' with 'import xapi from "xapi"'.`);
  } else {
    console.log(`[OK] ${macro.name} uses modern syntax.`);
  }
});
