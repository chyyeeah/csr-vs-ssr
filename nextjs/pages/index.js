import Head from 'next/head'
import axios from 'axios';
import styles from '../styles/Home.module.css'
import App from '../src/components/App.jsx';

/*
Essentially, getStaticProps allows you to tell Next.js:
“Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
*/
export async function getStaticProps() {
  try {
    const res = await axios.get('http://localhost:3001/repos');

    return {
      props: { data: res.data }
    };
  } catch (err) {
    return {
      props: { data: [] }
    };
  }
};

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Github Repo Fetcher</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous" ></script>
      </Head>

      <App data={data} />
    </div>
  )
}
