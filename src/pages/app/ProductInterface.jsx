import React, { useContext, useEffect, useState } from 'react'
import './ProductInterface.css'
import Textsummarizer from './Subpages/Textsummarizer'
import Articlesummarizer from './Subpages/Articlesummarizer'
import Articleextractor from './Subpages/Articleextractor'
import { Link, useParams } from "react-router-dom";

const ProductInterface = () => {



  
  const [product, setProduct] = useState(1);

  
  let { aiproduct } = useParams();

  
  useEffect(() => {
    if (aiproduct === "articleextractor") {
      setProduct(3);
    } else if (aiproduct === "textsummarizer") {
      setProduct(2);
    } else {
      setProduct(1);
    }
  }, [aiproduct]);
  return (
    <>
      <div className="tabLinks main">
        <div className="tabLink-area container">
          <Link to={'/appinterface/articlesummarizer'}><button className={product === 1 ? "active" : ""}>Article Summarizer</button></Link>
          <Link to={'/appinterface/textsummarizer'}><button className={product === 2 ? "active" : ""}>Text Summarizer</button></Link>
          <Link to={'/appinterface/articleextractor'}><button className={product === 3 ? "active" : ""}>Article Extractor</button></Link>
        </div>
      </div>

      <div className="subheading-area">
        <div className="subheading-inner-area">
          <p>

            {
              product === 1 ? "AI Article Summarization: Instantly condense lengthy articles into concise summaries using advanced AI algorithms."
                : product === 2 ? "Text Summarization: Simplify any text or document into key points and main ideas effortlessly"
                  : "AI Article Extractor: Extract articles directly from websites and blogs for quick summarization"
            }

          </p>
        </div>
      </div>
      {
        product === 1 ? <Articlesummarizer state dispatch /> : product === 2 ? <Textsummarizer /> : <Articleextractor />
      }
    </>
  )
}

export default ProductInterface

