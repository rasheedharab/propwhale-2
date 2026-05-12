import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx')).map(f => path.join(pagesDir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Insert imports if they don't exist
  if (!content.includes("import Header from '../components/Header';")) {
    content = `import Header from '../components/Header';\nimport Footer from '../components/Footer';\n` + content;
  }

  // Remove unused imports - this could be messy, but we can do it safely for Menu and X if they are only used for the header
  // To avoid breaking anything, we just regex replace the blocks. 

  // Replace <nav>...</nav>
  // We use regex to match <nav> and anything inside until </nav>
  // [\s\S]*? is non-greedy match of anything including newlines
  content = content.replace(/<nav[\s\S]*?<\/nav>/, '<Header />');

  // Replace <footer>...</footer>
  content = content.replace(/<footer[\s\S]*?<\/footer>/, '<Footer />');

  fs.writeFileSync(file, content);
}
console.log('Replaced headers and footers');
