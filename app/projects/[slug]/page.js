import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPlaiceholder } from 'plaiceholder';

import PageWrapper from '@/components/pagewrapper';
import Row from '@/components/row';
import styles from './projects.module.css';
import ScrollableContent from './components/ScrollableContent';

import { BsArrowRight } from 'react-icons/bs';

export async function generateStaticParams() {
  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir)).filter((file) => file !== '.DS_Store');

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

async function getProject(slug) {
  const filePath = path.join('projects', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  // Generate blur for project images
  const imageRegex = /<Row\s+fullImage="([^"]+)"/g;
  const images = [...content.matchAll(imageRegex)].map((m) => m[1]);

  const blurDataMap = {};
  await Promise.all(
    images.map(async (imgPath) => {
      const { base64 } = await getPlaiceholder(
        fs.readFileSync(path.join(process.cwd(), 'public', imgPath))
      );
      blurDataMap[imgPath] = base64;
    })
  );

  return {
    frontMatter,
    content,
    blurDataMap,
  };
}

export default async function ProjectPage({ params }) {
  const { frontMatter, content, blurDataMap } = await getProject(params.slug);

  return (
    <PageWrapper className={styles.pageWrapper}>
      <main className={styles.projectContainer}>
        <section className={styles.projectInformation}>
          <div className={styles.projectInformation_services}>
            {frontMatter.services?.map((service, i) => (
              <span key={service} className={styles.projectInformation_services_item}>
                <BsArrowRight />
                {service}
              </span>
            ))}
          </div>

          <h3 className={styles.projectInformation_title}>{frontMatter.title}</h3>
          <div className={styles.projectInformation_description}>
            <p>{frontMatter.description}</p>
            {frontMatter.demo && frontMatter.repository ? (
              <div className={styles.projectInformation_links}>
                <Link href={frontMatter.demo} target="_blank">
                  Live Demo
                </Link>
                <Link href={frontMatter.repository} target="_blank">
                  Repository
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <ScrollableContent>
          <MDXRemote
            source={content}
            components={{
              Row: (props) => <Row {...props} blurDataURL={blurDataMap[props.fullImage]} />,
            }}
          />
        </ScrollableContent>
      </main>

      <section className={styles.bottomNavigation}>
        <span className={styles.bottomNavigationBtn}>
          <Link href="/" rel="home_page">
            Index
          </Link>
        </span>

        <span className={styles.bottomNavigationBtn}>
          <Link href={`/projects/${frontMatter.nextPage}`} rel="next_page">
            Next
          </Link>
        </span>
      </section>
    </PageWrapper>
  );
}
