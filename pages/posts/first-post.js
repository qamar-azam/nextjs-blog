import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>My First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2><Link href="/"><a>Back to Home</a></Link></h2>
            <Image 
                src="/images/my-profile-pic.jpeg"  
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                layout="fixed"
                alt="Your Name"
            />
        
        </Layout>
    )
}