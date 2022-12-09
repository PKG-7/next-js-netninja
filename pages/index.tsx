import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt
        nulla debitis doloremque aliquam atque. Obcaecati laboriosam ut saepe
        fuga?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        similique inventore exercitationem repudiandae deserunt fuga, enim
        nulla. Officiis, vitae facere!
      </p>
    </div>
  );
}
