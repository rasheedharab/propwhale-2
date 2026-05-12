import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx')).map(f => path.join(pagesDir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Let's add How it Works to footer before About Link
  if (!content.includes('to="/how-it-works">How it Works<') && content.includes('to="/about">About<')) {
      content = content.replace(
        '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>',
        '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/how-it-works">How it Works</Link>\n            <Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>'
      );
  } else if (content.includes('to="/about">About<') && !content.includes('to="/how-it-works">How it Works</Link>')) {
     const footerStr = '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About</Link>';
     const idx = content.lastIndexOf(footerStr);
     if (idx !== -1) {
         content = content.slice(0, idx) + '<Link className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" to="/how-it-works">How it Works</Link>\n            ' + content.slice(idx);
     }
  }

  fs.writeFileSync(file, content);
}
console.log('Added How it Works to footers!');
