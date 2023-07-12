import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Docs() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Literate programming - Documentation</title>
                <meta name="description" content="Literate programming application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Literate programming - Documentation
                </h1>
                <p>Based on gray-matter, hercule and mardown-it creates and evolves web project using online tooling using isomorphic-git and monaco.</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    )
}
