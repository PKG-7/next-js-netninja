import Head from 'next/head';
interface Props {
  //   text: string;
}

export default function About({}: Props) {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='About ninjas' />
      </Head>
      <div className='text-center'>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          incidunt nulla debitis doloremque aliquam atque. Obcaecati laboriosam
          ut saepe fuga?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          similique inventore exercitationem repudiandae deserunt fuga, enim
          nulla. Officiis, vitae facere!
        </p>
      </div>
    </>
  );
}
