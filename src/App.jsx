import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import HindiQuotes from './components/HindiQuotes';
import QuotesShare from './components/QuotesShare'
import HindiQuotesShare from './components/HindiQuotesShare';
import DarkNavbar from './components/Navbar';



function App() {
 

  return (
    <>
      <div>
        <DarkNavbar />
      {/* <Quotes /> */}
   {/* <HindiQuotes /> */}
   <QuotesShare />
   {/* <HindiQuotesShare /> */}


      </div>
      <Footer />
    </>
  );
};

export default App;
