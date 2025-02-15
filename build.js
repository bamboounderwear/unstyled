#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'templates');
const snippetsDir = path.join(__dirname, 'snippets');
const buildDir = path.join(__dirname, 'build');

// Ensure the build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Function to process a template file and merge in snippets
function processTemplate(content) {
  // This regex matches <!-- include: filename.html -->
  const includeRegex = /<!--\s*include:\s*(\S+)\s*-->/g;
  return content.replace(includeRegex, (match, snippetFile) => {
    const snippetPath = path.join(snippetsDir, snippetFile);
    if (fs.existsSync(snippetPath)) {
      return fs.readFileSync(snippetPath, 'utf8');
    } else {
      console.error(`Snippet not found: ${snippetFile}`);
      return '';
    }
  });
}

// Read and process each HTML template
fs.readdirSync(templatesDir).forEach((file) => {
  if (path.extname(file) === '.html') {
    const templatePath = path.join(templatesDir, file);
    const content = fs.readFileSync(templatePath, 'utf8');
    const processedContent = processTemplate(content);
    const outputPath = path.join(buildDir, file);
    fs.writeFileSync(outputPath, processedContent, 'utf8');
    console.log(`Built ${file}`);
  }
});
