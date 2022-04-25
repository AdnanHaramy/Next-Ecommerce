import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../Components';
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products </h2>
        <p>Speakers of many Varitaions </p>
      </div>
      <div className="products-container">
        {

          ['Product1', 'Product2 '].map((product) => product)
        }
      </div>
      <FooterBanner />
    </>
  )
}
export const getServerSideProps = async () => {
  // quering the data from sanity
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }
  }
}
export default Home;