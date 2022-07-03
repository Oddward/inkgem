import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date'
import Author from '../components/author';
import ListItem from '../components/listItem';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles['grid-2']}`}>
        <article className={ utilStyles['thicc-padding']}>
          <h2 >Unique insight & introspective</h2>
          <p>Our authors include superheroes, top selling book authors, CEOs, celebrities and nobel prize winners among others.</p>
        </article>
        <div className={`flex-vertical ${utilStyles['thicc-padding']}`}>
          <Author name="Stephen King" title="Top selling author" />
          <Author name="Bruce Wayne" title="CEO, Wayne Enterprises" />
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.container}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem href={`/posts/${id}`} title={ title } category="Psychology" />
          ))}
        </ul>
      </section>
    </Layout>
  );
}