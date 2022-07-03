import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Button from './button';

const name = 'Mugtaba G';
export const siteTitle = 'Inkgem - open letters';

export default function Layout({ children, home }) {
  return (
    <>
    <nav className={ styles.nav }>
      <div className="combomark">
        <img id='logo' src="/images/inkgem_logo.svg" alt="inkgem logo" height="32" width="32" />
        <img id='wordmark' src="/images/inkgem_wordmark.svg" alt="inkgem wordmark" height="32" width="70" />
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Authors</Link>
        <div className="searchbox">
          <input type="text" placeholder='Search'/>
        </div>
      </div>
    </nav>

    <header className={ styles.header }>
      {home ? (
        <>
          <div className='cover' />
          <article>
            <h1 className={ utilStyles.heading2Xl }>Welcome to the Inkgem</h1>
            <p>
            Read open letters from a highly curated list of authors. Peer into the minds and hearts of some of the most accomplished and influential individuals in the world.
            </p>
            <div className='action-buttons'>
              <Button primary>Join a newsletter</Button>
              <Button>Learn more</Button>
            </div>
          </article>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/pfp1.jpg"
                className={ utilStyles.borderCircle }
                height={ 108 }
                width={ 108 }
                alt={ name }
              />
            </a>
          </Link>
          <h2 className={ utilStyles.headingLg }>
            <Link href="/">
              <a className={ utilStyles.colorInherit }>{ name }</a>
            </Link>
          </h2>
        </>
      )}
    </header>

    <div>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Inkgem is a highly curated blog featuring open letters from the most influential figures."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={ siteTitle } />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main>{children}</main>

      {!home && (
        <div className={ styles.backToHome }>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>

    <footer className={ styles.footer}>
      <div>
        <div className="combomark">
          <img id='logo' src="/images/inkgem_logo_w.svg" alt="inkgem logo" height="32" width="32" />
          <img id='wordmark' src="/images/inkgem_wordmark_w.svg" alt="inkgem wordmark" height="32" width="70" />
        </div>
        <p>© Oddward // Mugtaba G</p>
      </div>
      <div>
        <span>Connect</span>
        <Link href="/">Newsletters</Link>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Facebook</a>
      </div>
      <div>
        <span>Company</span>
        <Link href="/">About</Link>
        <Link href="/">Team</Link>
        <Link href="/">Career</Link>
      </div>
      <div>
        <span>Contact us</span>
        <Link href="/">Join as author</Link>
        <Link href="/">Give feedback</Link>
      </div>
    </footer>
    </>
  );
}