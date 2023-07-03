import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import Footer from '@/components/footer';

const works = [
  { name: 'box-1' },
  { name: 'box-2' },
  { name: 'box-3' },
  { name: 'box-4' },
  { name: 'box-5' },
  { name: 'box-6' }
];

export default function Home() {
  return (
    <main className={styles.work}>
      {works.map((props) => {
        return (
          <section className={styles.work_item}>
            <Link href={`work/${props.name}`}>
              <Image priority src="/assets/block.svg" height={32} width={32} />
            </Link>
          </section>
        );
      })}
    </main>
  );
}
