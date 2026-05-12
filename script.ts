import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx')).map(f => path.join(pagesDir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Header and Mobile Nav links using <a>
  content = content.replace(
    /<a([^>]*?)href="#"([^>]*?)>How it Works<\/a>/g, 
    '<Link$1to="/how-it-works"$2>How it Works</Link>'
  );
  
  // About Us link in Home page footer (which was missed previously)
  // <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
  content = content.replace(
    /<li><a href="#" className="hover:text-primary transition-colors">How it Works<\/a><\/li>/g,
    '<li><Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>'
  );

  fs.writeFileSync(file, content);
}
console.log('Fixed links!');
