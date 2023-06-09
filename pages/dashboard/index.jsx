import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/Firebase';


const Dashboard = () => {

  const [user, loading] = useAuthState(auth);
  const route = useRouter();



  return (
    <>
      <Head>
        <title>Lendsqr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Union.png"/>
      </Head>
      <Layout>
        <>
          <section>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis fugit, dignissimos officiis voluptatem voluptas nemo unde, quaerat ullam harum soluta ipsa! Doloribus debitis sit dignissimos consequatur quibusdam a cum qui corrupti eaque perspiciatis earum recusandae asperiores ipsam nesciunt impedit ad id, maiores molestiae harum veniam, quae, dolorem iure. Hic reiciendis soluta libero explicabo nobis molestiae consectetur optio, beatae voluptatibus? Incidunt neque vitae minus, ex iste rem cupiditate nisi doloribus natus fugit at consequatur laudantium ullam quibusdam dolore, facilis rerum omnis saepe, alias laboriosam vel aspernatur pariatur. Vero eum corporis facere distinctio quidem atque consequatur dicta nihil minima maiores. Fugiat!</h1>
          </section>
        </>
      </Layout>
    </>
  )
}

export default Dashboard;
