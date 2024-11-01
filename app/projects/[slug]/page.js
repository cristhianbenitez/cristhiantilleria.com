import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

import PageWrapper from '@/components/pagewrapper';
import Row from '@/components/row';
import styles from './projects.module.css';
import ScrollableContent from './components/ScrollableContent';

import { BsArrowRight } from 'react-icons/bs';

export async function generateStaticParams() {
  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir)).filter((file) => file !== '.DS_Store');

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));

  return paths;
}

function getProject({ slug }) {
  const markdownFile = fs.readFileSync(path.join('projects', slug + '.mdx'), 'utf-8');

  const { data, content } = matter(markdownFile);

  return {
    data,
    slug,
    content
  };
}

export default function Work({ params }) {
  const { data, content } = getProject(params);
  return (
    <PageWrapper className={styles.pageWrapper}>
      <main className={styles.projectContainer}>
        <section className={styles.projectInformation}>
          <div className={styles.projectInformation_services}>
            {data.services?.map((service, i) => (
              <span key={service} className={styles.projectInformation_services_item}>
                <BsArrowRight />
                {service}
              </span>
            ))}
          </div>

          <h3 className={styles.projectInformation_title}>{data.title}</h3>
          <div className={styles.projectInformation_description}>
            <p>{data.description}</p>
            {data.demo && data.repository ? (
              <div className={styles.projectInformation_links}>
                <Link href={data.demo} target="_blank">
                  Live Demo
                </Link>
                <Link href={data.repository} target="_blank">
                  Repository
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <ScrollableContent>
          <MDXRemote source={content} components={{ Row }} />
        </ScrollableContent>
      </main>

      <section className={styles.bottomNavigation}>
        <span className={styles.bottomNavigationBtn}>
          <Link href="/" rel="home_page">
            Index
          </Link>
        </span>

        <span className={styles.bottomNavigationBtn}>
          <Link href={`/projects/${data.nextPage}`} rel="next_page">
            Next
          </Link>
        </span>
      </section>
    </PageWrapper>
  );
}
