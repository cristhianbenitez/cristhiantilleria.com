import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import styles from './page.module.css';
import Footer from '@/components/footer';
import Box from '@/components/box';
import PageWrapper from '@/components/pagewrapper';

export default function Home() {
  const projectDir = 'projects';
  const files = fs
    .readdirSync(path.join(projectDir))
    .filter((file) => file !== '.DS_Store');

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

  const sortedProjects = projects.sort((a, b) => {
    return a.meta.order - b.meta.order;
  });

  return (
    <PageWrapper>
      <main className={styles.work}>
        <h2 className={styles.headline}>Freelance Graphic Designer</h2>
        {sortedProjects.map((project, i) => (
          <Box key={project.slug} project={project} />
        ))}
      </main>
      <Footer />
    </PageWrapper>
  );
}
