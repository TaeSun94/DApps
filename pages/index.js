import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Card from '../components/Card';

export default function Home() {
  const [userAddress, setUserAddress] = React.useState("");

  async function connect(){
    if(typeof window.ethereum === 'undefined'){
      alert("error");
      return;
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setUserAddress(account);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Test NextJS Chat APP using Ethereum</title>
        <meta name="description" content="Generated by create next app, " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Make Test DApp With <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by Add card in{' '}
          <code className={styles.code}>pages/index.js</code>
          <br/>
        {
          userAddress ?
          <p>
            Address: {userAddress}
          </p>
          :
          <a onClick={connect} 
          style={{
            borderColor:'black',
            borderWidth: '3'
          }}>
            <p>Connect</p>
          </a>
        }
        </p>
        <div className={styles.grid}>
          <Card link={'/chat'} title={'Chat APP'} description={'Using Metamask Accounts, Enjoy Chat'}></Card>
        </div>
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
