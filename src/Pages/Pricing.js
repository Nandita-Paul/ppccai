import React from "react";
import "../Style/Pricing.css"

const Pricing = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'San Francisco' },
    { id: 3, name: 'Alice Johnson', age: 24, city: 'Chicago' },
    { id: 4, name: 'Mike Brown', age: 45, city: 'Los Angeles' },
  ];
  return (
    <div classNamxe="main">
      <section className="table-sc text-center space-mr-m">
        <div className="container">
          <div className="top-title mb-3 pb-2">PRICING</div>
          <h1 className="h1">Supercharge your productivity. Start free now</h1>
          <div className="desc mb-4 mt-3">
            No credit card required. 1/20 Cost cheap enough?
          </div>
          <div className="transparent-table ">
            <table class="w-100">
              <thead>
                <tr>
                  <th>Compare plans</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
        </div>
      </section>
      <section className="testimonial-sc text-center space-mr-m">
        <div className="container">
          <div className="top-title mb-3 pb-2">TESTIMONIALS</div>
          <div className="h1">Don't take take word for it. Over 1000+<br /> people trust us</div>
          <div className="desc mb-4 mt-3">
            No credit card required. 1/20 Cost cheap enough?
          </div>
          <div className="testimonial-slider pt-5">
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
            {/* <div className="testimonial-block text-start">
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
            </div> */}

          </div>

        </div>
      </section>
      <section className="faq-sc text-center space-mr-m mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="h1">Frequently asked questions</div>
              <p>Everything you need to know about the product and billing.</p>
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
            </div>
          </div>

        </div>
      </section>
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

    </div>
  )
};

export default Pricing;