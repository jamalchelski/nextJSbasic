import Head from 'next/head';
import React, { Children, ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './layout.module.css'

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content='Website Next JS' />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>

    )
}
