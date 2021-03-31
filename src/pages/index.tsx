import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>SEGUR - Sistema de Segurança</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/32x36_ssbrasao.ico" />
    </Head>

    <Header />
    <main>
      <h1 className="title">Selecione seu departamento:</h1>
    </main>

    <Footer />
  </div>
);

export default Home;
