import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt
        nulla debitis doloremque aliquam atque. Obcaecati laboriosam ut saepe
        fuga?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        similique inventore exercitationem repudiandae deserunt fuga, enim
        nulla. Officiis, vitae facere!
      </p>
      <Link className={styles.btn} href='/ninjas'>
        See ninja Listing
      </Link>
    </div>
  );
}
