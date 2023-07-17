import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BsArrowRight } from 'react-icons/bs';

import Slider from '@/components/slider';
import PageWrapper from '@/components/pagewrapper';
import Row from '@/components/row';
import styles from './work.module.css';

export async function generateStaticParams() {
  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));

  return paths;
}

function getProject({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join('projects', slug + '.mdx'),
    'utf-8'
  );

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
    <PageWrapper>
      <section className={styles.projectInformation}>
        <div className={styles.projectInformation_services}>
          {data.services?.map((service, i) => (
            <span key={service}>{service}</span>
          ))}
        </div>

        <div className={styles.projectInformation_description}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </section>
      {/*
      <section className={styles.carousel}>
        {data.images && <Slider images={data.images} />}
      </section> */}

      <section className={styles.content}>
        <MDXRemote source={content} components={{ Row }} />
      </section>

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
