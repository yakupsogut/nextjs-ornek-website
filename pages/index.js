import Layout from "../components/layout"
import Head from "next/head"
function HomePage() {
    return (
      <Layout>
          <Head>
              <title>Anasayfa</title>
          </Head>
        <h1 className="title">Welcome to Next.js!</h1>
        <style jsx>{`
        .title{
            color:white;    
            background-color: blue;
        }
      `}</style>
     
      </Layout>
    )
  }
  
export default HomePage