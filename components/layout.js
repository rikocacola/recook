import Head from "next/head"

import Navbar from "./Navbar/Navbar"

const Layout = (props) =>{

  return (
    <>
      <Head>
        <title>{props.meta_title}</title>
      </Head>
      <Navbar/>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
