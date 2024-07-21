import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Resource.css";
import Image1 from "../assets/images/Image1.png";
import Image2 from "../assets/images/Image2.png";
import { motion, AnimatePresence } from "framer-motion";

const Resource = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [heights, setHeights] = useState([]);

  const data = [
    {
      title: "The LLM Answer Quality Comparison Report.",
      image: "/images/image1.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "The LLM Answer Quality Comparison Report.",
      image: "/images/img2.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "The LLM Answer Quality Comparison Report.",
      image: "/images/img3.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    }
  ];
  const data2 = [
    {
      title: "Safety",
      image: "/images/im1.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "Security",
      image: "/images/im2.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "Audit",
      image: "/images/im3.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "Platform",
      image: "/images/img4.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    },
    {
      title: "Immediate Implementation",
      image: "/images/img5.png",
      description:
        "Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to ensure your organizational, employee and data are protected."
    }
  ];

  const blockCount = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % blockCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [blockCount]);

  useEffect(() => {
    const calculateHeights = () => {
      const btmDivs = document.querySelectorAll(".btm");
      const newHeights = Array.from(btmDivs).map(div => div.scrollHeight);
      setHeights(newHeights);
    };

    calculateHeights();
    window.addEventListener("resize", calculateHeights);

    return () => {
      window.removeEventListener("resize", calculateHeights);
    };
  }, [data]);

  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <section className="banner banner-resources text-center ">
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
            <motion.div
        initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
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
            </div></motion.div>
          </div>
        </section> </motion.div>  <motion.div
          initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <section className="resources-slider mt-md-5 mt-2 pt-md-5 ">
          <div className="container">
            <div className=" resource-banner1">
              <div className="top-title mb-4 pb-1"><h2 className="text-white"> Research</h2></div>
              <div className="desc mb-4">
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </div>
              <div className=" text-start">
                <div className="position-relative">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="vertical-slider">
                        {data.map((block, index) => (
                          <div
                            key={index}
                            className={`vertical-block ${index === activeIndex ? "active" : ""}`}
                          >
                            <h4>{block.title}</h4>
                            <div
                              className="btm"
                              style={{
                                height: index === activeIndex ? heights[index] : 0,
                                transition: "height 0.5s, opacity 0.5s",
                                opacity: index === activeIndex ? 1 : 0
                              }}
                            >
                              <p>{block.description}</p>
                              <div className="btn-sc d-flex">
                                <a href="#" className="btn btn-sq me-1">
                                  Download
                                  <img src="/images/rgt-ar.svg" className="ms-2" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5 rgt">

                      <div className="vertical-slider image-slider">
                        {data.map((block, index) => (
                          <div
                            key={index}
                            className={`vertical-block ${index === activeIndex ? "active" : ""}`}
                          >
                            <img src={block.image} alt="Block Image" className="block-image" />

                          </div>
                        ))}
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
        </section> </motion.div>  <motion.div
          initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <section className="resources-slider mt-5 pt-5 ">
          <div className="container">
            <div className=" resource-banner1">
              <div className="top-title mb-4 pb-1"><h2 className="text-white"> Enterprise</h2></div>
              <div className="desc mb-4">
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </div>
              <div className=" text-start">
                <div className="position-relative">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="vertical-slider">
                        {data2.map((block, index) => (
                          <div
                            key={index}
                            className={`vertical-block ${index === activeIndex ? "active" : ""}`}
                          >
                            <h4>{block.title}</h4>
                            <div
                              className="btm"
                              style={{
                                height: index === activeIndex ? heights[index] : 0,
                                transition: "height 0.5s, opacity 0.5s",
                                opacity: index === activeIndex ? 1 : 0
                              }}
                            >
                              <p>{block.description}</p>
                              <div className="btn-sc d-flex">
                                <a href="#" className="btn btn-sq me-1">
                                  Download
                                  <img src="/images/rgt-ar.svg" className="ms-2" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5 rgt">

                      <div className="vertical-slider image-slider">
                        {data2.map((block, index) => (
                          <div
                            key={index}
                            className={`vertical-block ${index === activeIndex ? "active" : ""}`}
                          >
                            <img src={block.image} alt="Block Image" className="block-image" />

                          </div>
                        ))}
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
        </section> </motion.div>
    </div>
  );
};

export default Resource;
