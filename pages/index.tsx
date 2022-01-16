import Layout from '../components/Layout'
import Image from 'next/image'

export default function index() {
  return (
    <>
      <Layout pageTitle='Home Page'>
        <Image src="/profile.JPG" width={200} height={280} alt='profile' />
        <h1>Home Page</h1>
      </Layout>
    </>
  )
}

