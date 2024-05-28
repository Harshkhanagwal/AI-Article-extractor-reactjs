import React from 'react'
import './Products.css'
import { Link, useParams } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className='product-area main'>
        <h1>Products</h1>
        <div className="innerproduct-area container">
          <Link to={'/appinterface/articlesummarizer'}>
            <div className="productcrd crd1">Article Summarizer</div>
          </Link>
          <Link to={'/appinterface/textsummarizer'}>
            <div className="productcrd crd2">Text Summarizer</div>
          </Link>
          <Link to={'/appinterface/articleextractor'}>
            <div className="productcrd crd3">Article Extractor</div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products