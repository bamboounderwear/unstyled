#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Define directories: root for templates, snippets remain in their folder, and build for output.
const rootDir = __dirname;
const snippetsDir = path.join(__dirname, 'snippets');
const buildDir = path.join(__dirname, 'build');

// Ensure the build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Function to process a template and merge in snippets using the @@include syntax
function processTemplate(content) {
  // Regex matches: @@include("filename.html") or @@include('filename.html')
  const includeRegex = /@@include\(["']([^"']+)["']\)/g;
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

// Scan the project root for HTML files (excluding directories)
fs.readdirSync(rootDir).forEach((file) => {
  const fullPath = path.join(rootDir, file);
  if (path.extname(file) === '.html' && fs.statSync(fullPath).isFile()) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const processedContent = processTemplate(content);
    const outputPath = path.join(buildDir, file);
    fs.writeFileSync(outputPath, processedContent, 'utf8');
    console.log(`Built ${file}`);
  }
});
