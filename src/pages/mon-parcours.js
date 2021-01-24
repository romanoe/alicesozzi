import React from 'react';
import Layout from '../components/Layout'
const Mon_parcours = ({location}) => {
  return (
    <Layout>
      <h1>Mon parcours page <span>{location.pathname}</span></h1>
      <h2>Static HTML Page</h2>
      <p>Aiming for better SEO</p>
    </Layout>
  )
}
export default Mon_parcours;
