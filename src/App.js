import React, { useState } from 'react'
import {FaTwitter, FaQuoteLeft } from 'react-icons/fa'
import data from './data/db.json'
import Footer from './components/Footer';



function App() {
  let numQuotes =  data.length;
 

  const randomColor = () => {
    const color1 = Math.floor(Math.random()*255 +1)
    const color2 = Math.floor(Math.random()*255 +1)
    const color3 = Math.floor(Math.random()*255 +1)

    return `rgba(${color1},${color2},${color3}`
  }

  let num = Math.floor(Math.random()*numQuotes +1);
  const [ quote , setQuote ] =  useState(data[num])
  const [color, setColor ] = useState(randomColor())

  const handleNew = () => {

    let num = Math.floor(Math.random()*numQuotes +1);

    setQuote(data[num])
    setColor(randomColor())

  }

 return (


<div className="back" style={{backgroundColor: color}}>


   <div id="quote-box">

       <>
       <div id="quote-text" style={{color: color}} >
       <i><FaQuoteLeft /></i> <i id="text" >{ quote.quote }</i>
       </div>

       <div id="author" style={{color: color}}>
       - { quote.author }
       </div>

       </>

     <div className="buttons" >
       
         <a 
         className="button" 
         id="tweet-quote"
         title="Tweet this quote!" 
         target="_blank"
         href="twitter.com/intent/tweet"
         style={{backgroundColor: color}}
         >

           <FaTwitter
          />
        
         </a>
        
         <button 
         onClick={handleNew} 
         id="new-quote" 
         className="button"
         style={{backgroundColor: color}}
         >
           New quote
         </button> 
       
     </div>
    
   </div>
   <Footer />
   </div>

 )
}

export default App;
