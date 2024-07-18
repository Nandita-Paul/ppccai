import React from "react";
import { Link } from "react-router-dom";
import "../Style/Resource.css";
import Image1 from "../assets/images/Image1.png";
import Image2 from "../assets/images/Image2.png";
import { motion } from 'framer-motion';

const Resource = () => {
  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <section className="banner text-center ">
          <div className="container">
            <div className="top-title mb-4 pb-1">RESOURCES</div>
            <h1 className="h2">
              We present our findings here. We aim to be thorough, unbiased and
              always inquisitive.
            </h1>
            <div className="desc mb-4">
              At CogiAI our mission is to research and curate the best AI
              technologies and provide them to our clients in an easy to consume
              manner so all their employees can acquire generative AI superpowers.
            </div>
            <div className=" py-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div class="container11">
                      <div class="icon">⚡</div>
                      <div class="title">Chat Portal</div>
                      <div class="desc mb-4">
                        Enterprise grade web-based portal providing safe and
                        secure access to multiple text and image generative public
                        and private AIs.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="container11">
                      <div class="icon">⚡</div>
                      <div class="title">Mobile Application</div>
                      <div class="desc mb-4">
                        Replicates portal capabilities in a mobile friendly and
                        easy to use application. Both IOS and Android are fully
                        supported.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="container11">
                      <div class="icon">⚡</div>
                      <div class="title">Administration Portal</div>
                      <div class="desc mb-4">
                        Organizational administrators can manage employee access,
                        GDPR and other data upload rules and fully audit all
                        access.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> </motion.div>  <motion.div
          initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <section >
          <div className="container resource-banner1">
            <div className="top-title mb-4 pb-1">Research</div>
            <div className="desc mb-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div class="container11">
                    <h5>The LLM Answer Quality Comparison Report.</h5>
                    <p>
                      Your organization wants to keep itself safe, secure and well
                      governed, we get it. We have done all the hard work to
                      ensure your organizational, employee and data are protected.
                    </p>

                    <div className="btn-sc d-flex">
                      <a href="" className="btn btn-sq me-1">
                        Download{" "}
                        <img src="/images/rgt-ar.svg" className="ms-2" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 rgt">
                  <img src={Image1} alt="" style={{ borderRadius: "30px" }} />
                </div>
              </div>
            </div>
          </div>
        </section> </motion.div>  <motion.div
          initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <section className="resource-banner mt-5">
          <div className="container">
            <div className="top-title mb-4 pb-1">Research</div>
            <div className="desc mb-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div class="container11">
                    <h5>The LLM Answer Quality Comparison Report.</h5>
                    <p>
                      Your organization wants to keep itself safe, secure and well
                      governed, we get it. We have done all the hard work to
                      ensure your organizational, employee and data are protected.
                    </p>

                    <div className="btn-sc d-flex">
                      <a href="" className="btn btn-sq me-1">
                        Download{" "}
                        <img src="/images/rgt-ar.svg" className="ms-2" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 rgt">
                  <img src={Image1} alt="" style={{ borderRadius: "30px" }} />
                </div>
              </div>
            </div>
          </div>
        </section> </motion.div>
    </div>
  );
};

export default Resource;
