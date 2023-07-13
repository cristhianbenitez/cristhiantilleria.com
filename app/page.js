import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import styles from './page.module.css';
import Footer from '@/components/footer';
import Box from '@/components/box';

export default function Home() {
  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir));

  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectDir, filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    };
  });

  return (
    <>
      <main className={styles.work}>
        {projects.map((project, i) => (
          <Box key={project.slug} project={project} />
        ))}
      </main>
      <Footer />
    </>
  );
}
