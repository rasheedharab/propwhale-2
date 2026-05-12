import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx')).map(f => path.join(pagesDir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace `to="/">Projects</Link>`
  content = content.replace(/to="\/">Projects<\/Link>/g, 'to="/projects">Projects</Link>');

  // Replace `href="#">Projects</a>`
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>Projects<\/a>/g, '<Link$1to="/projects"$2>Projects</Link>');

  fs.writeFileSync(file, content);
}
console.log('Done script 4');
