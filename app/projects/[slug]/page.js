import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BsArrowRight } from 'react-icons/bs';

import Slider from '@/components/slider';
import styles from './work.module.css';
import PageWrapper from '@/components/pagewrapper';

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

  return (
    <PageWrapper>
      <section className={styles.projectInformation}>
        <div className={styles.projectInformation_services}>
          {data.services.map((service, i) => (
            <span key={service}>{service}</span>
          ))}
        </div>

        <div className={styles.projectInformation_description}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </section>

      <section className={styles.carousel}>
        {data.images && <Slider images={data.images} />}
      </section>

      <section className={styles.bottomImages}>
        {data?.bottomImages && (
          <>
            <div>
              <Image
                src={data.bottomImages[0]}
                width={500}
                height={400}
                alt="image of design project"
              />
            </div>
            <div>
              <Image
                src={data.bottomImages[1]}
                width={500}
                height={400}
                alt="image of design project"
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
    </PageWrapper>
  );
}
