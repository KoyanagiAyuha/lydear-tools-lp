import fs from 'fs/promises';
import path from 'path';

export async function getBlogContent(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', 'blog-posts', fileName);
  const content = await fs.readFile(filePath, 'utf-8');
  return content;
}
