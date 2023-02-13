import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        kkkkll lllllllllllll
        <button
          onClick={() => {
            throw Error('error')
          }}
        >
          Error
        </button>
      </main>
    </div>
  )
}
