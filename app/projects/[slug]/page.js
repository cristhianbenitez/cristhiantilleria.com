import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import PageWrapper from '@/components/pagewrapper';
import Gallery from '@/components/gallery';
import styles from './work.module.css';

export async function generateStaticParams() {
  const projectDir = 'projects';
  const files = fs
    .readdirSync(path.join(projectDir))
    .filter((file) => file !== '.DS_Store');

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));

  return paths;
}

function getProjectData({ slug }) {
  const projectDirectory = 'projects';
  const filePath = path.join(projectDirectory, `${slug}.mdx`);

  const markdownFile = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(markdownFile);

  // Read all projects and sort them by order established in the frontmatter
  const allProjectsData = fs
    .readdirSync(projectDirectory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((projectFile) => {
      const filePath = path.join(projectDirectory, projectFile);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data: projectData } = matter(fileContents);

      return {
        slug: projectFile.replace('.mdx', ''),
        ...projectData
      };
    })
    .sort((a, b) => (a.order || Infinity) - (b.order || Infinity));

  const projectIndex = allProjectsData.findIndex(
    (project) => project.slug === slug
  );
  const nextSlug =
    projectIndex < allProjectsData.length - 1
      ? allProjectsData[projectIndex + 1].slug
      : null;

  return {
    data,
    props: {
      slug,
      nextSlug
    }
  };
}

export default function Work({ params }) {
  const { data, props } = getProjectData(params);

  const renderServices = () =>
    data.services?.map((service, i) => <span key={i}>{service}</span>);

  const renderProjectLinks = () =>
    ['demo', 'repository'].some((prop) => data[prop]) && (
      <div className={styles.projectInformation_links}>
        {['demo', 'repository'].map((prop) => (
          <Link
            key={prop}
            href={data[prop]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {prop.charAt(0).toUpperCase() + prop.slice(1)}
          </Link>
        ))}
      </div>
    );

  return (
    <PageWrapper>
      <section className={styles.projectInformation}>
        <div className={styles.projectInformation_row}>
          <h3 className={styles.projectInformation_title}>{data.title}</h3>
        </div>
        <div className={styles.projectInformation_row}>
          <div className={styles.projectInformation_leftSection}>
            <div className={styles.projectInformation_services}>
              {renderServices()}
            </div>
          </div>
          <div className={styles.projectInformation_description}>
            <p>{data.description}</p>
            {renderProjectLinks()}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.gallery}>
        <Gallery images={data.images} />
      </section>

      <section className={styles.bottomNavigation}>
        <span className={styles.bottomNavigationBtn}>
          <Link href="/" rel="home_page">
            Index
          </Link>
        </span>

        <span className={styles.bottomNavigationBtn}>
          <Link href={`/projects/${props.nextSlug}`} rel="next_page">
            Next
          </Link>
        </span>
      </section>
    </PageWrapper>
  );
}
