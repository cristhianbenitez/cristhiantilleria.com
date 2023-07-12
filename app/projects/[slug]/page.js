import React from 'react';
import Image from 'next/image';

import Slider from '@/components/slider';

import { BsArrowRight } from 'react-icons/bs';

import styles from './work.module.css';

import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';

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
  const { data } = getProject(params);

  const projectDir = 'projects';
  const files = fs.readdirSync(path.join(projectDir));

  const projects = files.map((filename) => {
    return { projects: filename.replace('.mdx', '') };
  });

  console.log(projects['level-up']);
  console.log(params.slug);

  // const prevPage =
  //   currentPage === 1 ? `/projects` : `/projects/${currentPage - 1}`;

  // const nextPage =
  //   currentPage === numPages
  //     ? `/projects/${currentPage}`
  //     : `/projects/${currentPage + 1}`;

  return (
    <div>
      <section className={styles.projectInformation}>
        <div className={styles.projectInformation_services}>
          <span>1. Aliquam accumsan</span>
          <span>2. Cras quis</span>
          <span>3. Nunc lobortis Metus</span>
        </div>

        <div className={styles.projectInformation_description}>
          <h3>Nullam Consectetur</h3>
          <p>{data.description}</p>
        </div>
      </section>

      <section className={styles.carousel}>
        {data.images && <Slider images={data.images} />}
      </section>

      <section className={styles.bottomImages}>
        {data?.bottomImages && (
          <>
            {' '}
            <div>
              <Image
                priority
                src={data.bottomImages[0]}
                width={500}
                height={400}
              />
            </div>
            <div>
              <Image
                priority
                src={data.bottomImages[1]}
                width={500}
                height={400}
              />
            </div>
          </>
        )}
        <span className={styles.bottomNavigationBtn}>
          <Link href="/" rel="home_page">
            Index
          </Link>
        </span>

        <span className={styles.bottomNavigationBtn}>
          <Link href={`projects/${data.nextPage}`} rel="next_page">
            Next <BsArrowRight />
          </Link>
        </span>
      </section>
    </div>
  );
}
