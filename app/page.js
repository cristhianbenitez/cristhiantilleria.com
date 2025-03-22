import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getPlaiceholder } from 'plaiceholder';

import styles from './page.module.css';
import Footer from '@/components/footer';
import Box from '@/components/box';
import PageWrapper from '@/components/pagewrapper';

export default async function Home() {
  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir)).filter((file) => file !== '.DS_Store');

  const projects = await Promise.all(
    files.map(async (filename) => {
      const fileContent = fs.readFileSync(path.join(projectDir, filename), 'utf-8');
      const { data: frontMatter } = matter(fileContent);

      // Generate blur for both thumbnail and project images
      const thumbnailBlur = await getPlaiceholder(
        fs.readFileSync(path.join(process.cwd(), 'public', frontMatter.thumbnail))
      );

      return {
        meta: {
          ...frontMatter,
          blurDataURL: thumbnailBlur.base64,
        },
        slug: filename.replace('.mdx', ''),
      };
    })
  );

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
