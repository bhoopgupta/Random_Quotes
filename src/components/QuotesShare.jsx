import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaExternalLinkAlt, FaCopy, FaCheck } from "react-icons/fa";
import { MdOutlineAutoMode } from "react-icons/md";
const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setQuote(response.data.slip.advice);
      setCopied(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container text-center mt-3">
      {/* Heading */}
      <h2 className="fw-bold text-primary">✨ Quotes Generator ✨</h2>
      <p className="text-secondary">Get inspired by random quotes!</p>

      {/* Quote Card */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-4 p-4 border-0">
            <div className="card-body">
              <p 
                className="lead font-italic fw-bold" 
                style={{ fontSize: '1.5rem', minHeight: '60px', color: '#333', 
                 }}
              >
                "{quote}"
              </p>

              <button 
                className="btn btn-lg fw-bold shadow-sm px-4 py-2 rounded-pill mb-2 text-white" 
                onClick={fetchQuotes}
                style={{ 
                  background: 'linear-gradient(45deg, #007bff, #6610f2)', 
                  border: 'none'
                }}
              >
                <MdOutlineAutoMode /> Get New Quote
              </button>

              <button 
                className="btn btn-outline-dark fw-bold shadow-sm px-4 py-2 rounded-pill ms-2" 
                onClick={copyToClipboard} 
                style={{ fontSize: '1.2rem' }}
              >
                {copied ? <FaCheck color="#28a745" /> : <FaCopy className='text-primary' />} {copied ? 'Copied!' : 'Copy Quote'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Link to Hindi Quotes */}
      <div className="mt-4">
        <p>Get <b>Hindi</b> Quotes  
          <a href="https://randomquotehindi.netlify.app/" target="_blank" rel="noopener noreferrer" className="ms-2 fw-bold text-primary">
            Click Here <FaExternalLinkAlt />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Quotes;
