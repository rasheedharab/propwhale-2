import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx')).map(f => path.join(pagesDir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Let's replace the first '<Link ... to="/about">About</Link>' in the footer
  // Actually, let's just replace `<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>`
  if (content.includes('to="/about">About</Link>') && !file.includes('Home.tsx') && !file.includes('About.tsx') && !file.includes('HowItWorks.tsx')) {
      content = content.replace(
        '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>',
        '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/how-it-works">How it Works</Link>\n            <Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>'
      );
  }

  fs.writeFileSync(file, content);
}
console.log('Done script 3');
