import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
    <main className={styles.work}>
      {projects.map((project) => (
        <div className={styles.work__item}>
          <Link
            href={`/projects/${project.slug}`}
            className={styles.work__item__link}
            passHref
            key={project.slug}
          >
            <Image
              priority
              src={project.meta.thumbnail}
              alt={project.meta?.thumbnailAlt && project.meta.thumbnailAlt}
              height={1000}
              width={1000}
              className={styles.work__item__thumbnail}
            />
            <div className={styles.work_item_bottomText}>
              <span className={styles.work_item_title}>
                {project.meta.title}
              </span>
              <span className={styles.work_item_title}>
                {project.meta.type}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
