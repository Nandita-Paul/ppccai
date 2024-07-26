import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Contact.css";
import { motion } from 'framer-motion';
const settings = {
    centerMode: true,
    centerPadding: '30',
    slidesToShow: 1,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000, // Slide change interval in milliseconds
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]

};

function Contact() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <section className="contact-sc text-center space-mr-m ">
                    <div className="container">
                        <div className="top-title mb-3 pb-2">ENTERPRISE</div>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                            whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h1 className="h1 btm-shadow">Built with enterprises, for enterprises</h1>
                            <div className="desc mb-4 mt-3">
                                Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to<br /> ensure your organizational, employee and data are protected.
                            </div>
                            <div class="btn-sec mt-5 d-md-flex justify-content-center">
                                <a class="btn  me-3" href="/login">Contact Sales</a>
                                <a class="btn btn-t" href="/">Try for Free</a>
                            </div>
                        </motion.div>
                    </div>


                </section>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <section className="logo-sc   text-center space-mr-m ">
                    <div className="container ">
                        <div className="top-title mb-3 pb-2">SOME OF OUR TRUSTED CLIENTS</div>
                        <div className="d-flex justify-content-between mt-4">
                            <div className="logo-blk ">
                                <img src="images/logo.png" alt="" />
                            </div>
                            <div className="logo-blk ">
                                <img src="images/logo.png" alt="" />
                            </div>
                            <div className="logo-blk ">
                                <img src="images/logo2.png" alt="" />
                            </div>
                            <div className="logo-blk ">
                                <img src="images/logo3.png" alt="" />
                            </div>
                            <div className="logo-blk ">
                                <img src="images/logo4.png" alt="" />
                            </div>
                            <div className="logo-blk ">
                                <img src="images/logo.png" alt="" />
                            </div>
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
                <section className="google-sc text-center">
                    <div className="container">
                        <div className="logo-sc mb-4">
                            <img src="images/logo2.png" alt="" />
                        </div>
                        <h2 class="btm-shadow">“This incredible AI web app has transformed the way I manage<br /> data and streamline processes.”</h2>
                        <div className="img-sc mt-4 ">
                            <img src="images/pf.jpg" alt="" />
                            <p className='p-0 mb-0 mt-4'>Candice Wu</p>
                            <p className='p-0 mt-0 mb-0'>Product Manager, Google</p>
                        </div>
                    </div>
                </section>
            </motion.div>
            <section className="tab-sc space-mr">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="row1 d-flex justify-content-between">
                                <div className="btn tab-blk active-btn">
                                    Safety
                                </div>
                                <div className="btn btn-t tab-blk">
                                    Security & Certifications
                                </div>
                                <div className="btn btn-t tab-blk">
                                    Audit
                                </div>
                                <div className="btn btn-t tab-blk">
                                    Platform
                                </div>
                                <div className="btn btn-t tab-blk">
                                    Platform
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content mt-5">
                        <div className="tab-content-inner tab-inner1">
                            <div className="top-title">
                                TIME & VALUE
                            </div>
                            <h2 className='btm-shadow mt-4'>
                                We will help you keep your organization, employees

                                and data safe.
                            </h2>
                            <p>
                                Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.
                            </p>
                            <ul className='my-4'>
                                <li> No reuse of query data for any purpose.</li>

                                <li>All APIs are selected on the basis they guarantee data privacy.</li>

                                <li>Each client has own instance of portal with no shared information.</li>

                                <li>Uploads are all checked against GDPR rules and can be restricted.</li>

                                <li>Restrictions granular so each industry and organization can have own upload rules.</li>
                            </ul>
                            <div className="btn-sc">
                                <a href="" className="button">
                                    Get Started  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)"><g color="rgb(255, 255, 255)" weight="bold"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></g></svg>

                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <motion.div
                initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <section className="testimonial-sc text-center space-mr-m">
                    <div className="container-fluid px-md-5 px-3 px-lg-0 overflow-hidden pb-5">
                        <div className="top-title mb-3 pb-2">TESTIMONIALS</div>
                        <div className="h2 text-white">Don't take take word for it. Over 1000+<br /> people trust us</div>
                        <div className="desc mb-4 mt-3">
                            No credit card required. 1/20 Cost cheap enough?
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                            whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <div className="testimonial-slider pt-5">
                                <Slider {...settings}>
                                    <div className="testimonial-block text-start">
                                        <div className="logo-t mb-4">
                                            ⚡
                                        </div>
                                        <div className="title mb-4">
                                            “This incredible AI web app has transformed the way I manage data and streamline processes.”
                                        </div>
                                        <div className="content mb-4">
                                            Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                                        </div>
                                        <div className="profile-sc d-flex align-items-center">
                                            <div className="img-sc">
                                                <img src="images/pf.jpg" alt="" />
                                            </div>
                                            <div className="pf-cnt ms-3">
                                                <p className="m-0 text-white">Sarah Johnson</p>
                                                <p className="m-0 text-white">Sarah Johnson</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block text-start">
                                        <div className="logo-t mb-4">
                                            ⚡
                                        </div>
                                        <div className="title mb-4">
                                            “This incredible AI web app has transformed the way I manage data and streamline processes.”
                                        </div>
                                        <div className="content mb-4">
                                            Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                                        </div>
                                        <div className="profile-sc d-flex align-items-center">
                                            <div className="img-sc">
                                                <img src="images/pf.jpg" alt="" />
                                            </div>
                                            <div className="pf-cnt ms-3">
                                                <p className="m-0">Sarah Johnson</p>
                                                <p className="m-0">Sarah Johnson</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block text-start">
                                        <div className="logo-t mb-4">
                                            ⚡
                                        </div>
                                        <div className="title mb-4">
                                            “This incredible AI web app has transformed the way I manage data and streamline processes.”
                                        </div>
                                        <div className="content mb-4">
                                            Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                                        </div>
                                        <div className="profile-sc d-flex align-items-center">
                                            <div className="img-sc">
                                                <img src="images/pf.jpg" alt="" />
                                            </div>
                                            <div className="pf-cnt ms-3">
                                                <p className="m-0">Sarah Johnson</p>
                                                <p className="m-0">Sarah Johnson</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block text-start">
                                        <div className="logo-t mb-4">
                                            ⚡
                                        </div>
                                        <div className="title mb-4">
                                            “This incredible AI web app has transformed the way I manage data and streamline processes.”
                                        </div>
                                        <div className="content mb-4">
                                            Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                                        </div>
                                        <div className="profile-sc d-flex align-items-center">
                                            <div className="img-sc">
                                                <img src="images/pf.jpg" alt="" />
                                            </div>
                                            <div className="pf-cnt ms-3">
                                                <p className="m-0">Sarah Johnson</p>
                                                <p className="m-0">Sarah Johnson</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <section className="faq-sc text-center space-mr-m mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <div className="h2 text-white">Frequently asked questions</div>
                                <motion.div
                                    initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                                    whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                >
                                    <p>Everything you need to know about the product and billing.</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                                    whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                >
                                    <div class="accordion accordion-flush text-start mt-5" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </section>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 150 }} // Start from 100px below and fully transparent
                whileInView={{ opacity: 1, y: 0, once: true }} // Animate to normal position and fully opaque
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <section className="question-sc text-center">
                    <div className="container">
                        <div className="inner-sc">
                            <div className="img-flex d-flex justify-content-center">
                                <div className="img-sc lft mb-4">
                                    <img src="images/pf.jpg" alt="" />
                                </div><div className="img-sc mdl">
                                    <img src="images/pf.jpg" alt="" />
                                </div><div className="img-sc rgt">
                                    <img src="images/pf.jpg" alt="" />
                                </div>
                            </div>
                            <h5>Still have questions?</h5>
                            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                            <a class="btn btn-sq mx-auto mt-4" href="">Get Template</a>

                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default Contact
