import React from 'react';
import Layout from '../components/Layout'
const Contact = ({location}) => {
  return (
    <Layout>
      <h1>Contact page <span>{location.pathname}</span></h1>
      <h2>Static HTML Page</h2>
      <p>Aiming for better SEO</p>
    </Layout>
  )
}
export default Contact;
