import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>my name is Mohamed Abdi, i am a new programmer. this my first myu hackathon as programmer.</p>
    <p>i dont know what to expect but im excited.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
