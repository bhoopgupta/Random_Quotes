import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaExternalLinkAlt } from "react-icons/fa";
const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setQuote(response.data.slip.advice);
      setCopied(false);
    } catch (error) {
      
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    })
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5   ">
      <div className="bg-primary text-white py-3  rounded shadow-lg mb-3">
        <h2 className="fw-bold m-0">✨ Quotes Generator ✨</h2>
      </div>
      <div className="card shadow-lg text-center p-5 rounded-4 position-relative" style={{ maxWidth: '500px' }}>
        <p className="lead font-italic text-dark" style={{ fontSize: '1.5rem', minHeight: '60px' }}>
          "{quote}"
        </p>
        <button 
          className="btn btn-lg btn-primary mt-3 fw-bold shadow-sm px-4 py-2 rounded-pill" 
          onClick={fetchQuotes}
        >
          <i className="fas fa-sync-alt me-2"></i> Get New Quote
        </button>
        <button 
          className="btn btn-outline-secondary mt-3 fw-bold shadow-sm px-4 py-2 rounded-pill" 
          onClick={copyToClipboard} 
          style={{ fontSize: '1.2rem', color: copied ? '#28a745' : '#007bff', transition: 'color 0.3s ease' }}
        >
          <i className={copied ? "fas fa-check" : "fas fa-copy"}></i> {copied ? 'Copied!' : 'Copy Quote'}
        </button>
        <p className='mt-3 '>Get <b>Hindi</b> Quotes  <a href="https://randomquotehindi.netlify.app/"> Click Here <FaExternalLinkAlt /> </a>
        </p>

      </div>
    </div>
  );
};

export default Quotes;