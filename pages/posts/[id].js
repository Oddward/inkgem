import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getAuthorData } from '../../lib/posts';
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Author from '../../components/author';
import Avatar from '../../components/avatar';
// import handler from '../api/data'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const authorData = await getAuthorData(postData.authorId)
  return {
    props: {
      postData,
      authorData
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, authorData }) {
    return (
      <Layout>
        {/* add head metadata */}
        <Head>
            <title>{ postData.title }</title>
        </Head>

        <header className={`${utilStyles['grid-2']}`}>
          <div className={`flex-vertical ${utilStyles.centered} ${utilStyles['thicc-padding']}`}>
            <Author src={ authorData.data.src } name={ authorData.data.name } title={ authorData.data.authorTitle } />
          </div>

          <div className={`flex-vertical ${utilStyles.centered} ${utilStyles['lineheight-tight']} ${utilStyles['thicc-padding']}`}>
            <h1 className={`${utilStyles['lineheight-tight']} ${utilStyles.heading2Xl}`}>{postData.title}</h1>
            <p className={`${utilStyles['lineheight-tight']} ${utilStyles.headingMd} ${utilStyles.bold}`}>{postData.subtitle}</p>
          </div>

          {console.log( postData, authorData )}
        </header>

        <article className={ utilStyles.container }>
            <div className={`${utilStyles.lightText}  ${utilStyles['soft-padding']} flex-horizontal ${utilStyles.centered}`}>
              <Date className={`${utilStyles.date}`} dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className={`flex-horizontal centered items-center ${utilStyles['soft-padding']}`}>
              <div className={utilStyles['horizontal-bar']}></div>
              <Avatar src={authorData.data.src} alt="author's profile picture for their bio" size="64" />
              <div className={utilStyles['horizontal-bar']}></div>
            </div>
            <div className={`${utilStyles.bio}`}>{authorData.data.bio}</div>
        </article>
      </Layout>
    );
  }
