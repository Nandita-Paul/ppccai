import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
// import { Modal, Button } from 'react-bootstrap';
function Homepage() {
  const [showModal, setShowModal] = useState(false);

 
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <section className="banner text-center">
          <div className="container">
            <div className="top-title mb-md-5 pb-1 mb-2">CREATE A CAMPAIGN</div>
            <h1 className="h1">The fastest way to launch Search Ads</h1>
            <div className="desc mb-4">
              Generate ads in under 10 seconds using AI by entering the website url you would like to promote below.
            </div>
            <div className="banner-form-sec mt-4">
              <form className='d-md-flex justify-content-center align-items-center'>
                <div className="form-group me-3">

                  <input placeholder='www.yourwebsite.com' className='form-control' />

                </div>

                <div className="submit-btn mt-md-0 mt-3">
                  <button type="button" className="btn " onClick={handleShow}>Generate ad
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)"><g color="rgb(255, 255, 255)" weight="bold"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></g></svg>
                  </button>

                </div>

              </form>
            </div>
            <div className="or-sec mb-4 mt-5">
              OR
            </div>
            <div className="signup-text mb-3">
              Sign up free with Google or Microsoft.
            </div>
            <div className="btm-btn-sc d-md-flex justify-content-center">
              <a href="" className='btn btn-border mx-1'><img src="/images/google.png" alt="" />Continue With Google</a>
              <a href="" className='btn btn-border mx-1'><img src="/images/microsoft.png" alt="" />Continue With Microsoft</a>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <section className="frame-image-sc bg-black space-pd">
          <div className="container">
            <img src="/images/frame1.png" alt="" />
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <section className="extract-sc">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 lft">
                <h2>Extract Campaign Data</h2>
                <p class="my-3">Launch your Google Ads campaign by exporting to Excel and importing it into the Google Ads Editor.</p>

                <div className="btn-sc d-flex">
                  <a href="" className='btn btn-sq me-1'>Extract <img src="/images/rgt-ar.svg" className='ms-2' alt="" /></a>
                  <a href="" className='btn btn-t btn-sq'>More Settings</a>
                </div>

              </div>
              <div className="col-md-5 rgt mt-md-0 mt-5">
                <img src="/images/extract.png" alt="" />
              </div>
            </div>

          </div>

        </section>
      </motion.div>

      <div className= {`modal fade ${showModal ? 'active' : ''}`} id="myModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-4">
          
              
              <button type="button" className="close ms-auto" onClick={handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
           
            <div className="modal-body">
              <p className="mb-2 text-black"><strong>Ad.</strong> example.business.com</p>
              <h3 className="mb-2 text-black"><strong>Modern Design.Co</strong></h3>
              <p className="mb-0 text-black">Ther best modal</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage;