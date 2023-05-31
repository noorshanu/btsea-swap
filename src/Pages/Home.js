import React from 'react'

import Layout from '../Layout'
import Swap from '../components/Swap'

function Home() {
  return (
    <div className='bg-main'>
    <Layout>
      <div className='swap-blur'>

      </div>
      <Swap/>
   </Layout>
    </div>
  )
}

export default Home