const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TSX files in the src directory
const files = glob.sync('src/**/*.tsx');

// Process each file
files.forEach(file => {
  try {
    // Read the file content
    const filePath = path.resolve(file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the pattern we're looking for
    if (content.includes('font-serif')) {
      // Replace 'font-serif' with 'font-display'
      const updatedContent = content.replace(/font-serif/g, 'font-display');
      
      // Write back the updated content
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      
      console.log(`Updated font class in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log('Font replacement completed!'); 