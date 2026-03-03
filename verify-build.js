#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('[v0] Verifying Next.js project structure...\n');

const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.mjs',
  'tailwind.config.ts',
  'postcss.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'lib/data.ts',
  'components/Header.tsx',
  'components/Hero.tsx',
  'components/About.tsx',
  'components/QuickFacts.tsx',
  'components/Products.tsx',
  'components/Features.tsx',
  'components/Testimonials.tsx',
  'components/CTA.tsx',
  'components/Footer.tsx',
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✓' : '✗'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\n' + (allFilesExist ? '✓ All required files found!' : '✗ Some files are missing!'));

process.exit(allFilesExist ? 0 : 1);
