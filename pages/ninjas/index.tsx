import Link from 'next/link';
import styles from '../../styles/Ninjas.module.scss';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

interface Props {
  ninjas: any;
}

export default function Ninjas({ ninjas }: Props) {
  return (
    <div className='text-center'>
      <h1>All ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single} href=''>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
