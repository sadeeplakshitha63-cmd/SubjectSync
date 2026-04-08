import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

export function getCategories() {
  const filePath = path.join(dataDirectory, 'meta', 'categories.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getLessonsBySubject(subjectId: string) {
  const subjectPath = path.join(dataDirectory, 'subjects', subjectId);
  if (!fs.existsSync(subjectPath)) return [];
  
  const files = fs.readdirSync(subjectPath);
  return files.map(file => {
    const filePath = path.join(subjectPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return {
      slug: file.replace(/\.json$/, ''),
      ...JSON.parse(fileContents)
    };
  });
}
