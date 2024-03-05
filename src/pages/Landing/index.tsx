import React from "react";
import "./style.css";
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div>
          image
          <section className="about">
            <div className="about__wrapper wrapper--small">
              <div className="about__content">
                <div className="about__content-blurb blurb blurb--framed">
                  <h2 className="blurb__heading">Nothing is impossible</h2>
                  <p className="blurb__copy no-margin">
                    If you just work hard enough at it
                  </p>
                </div>
                <p className="about__content-signature">James Martin</p>
              </div>
              <img
                className="about__visual"
                src="/img/coolme.png"
                alt="James Martin"
              ></img>
            </div>
          </section>
        </div>

        <div>Name</div>
        <div>job tags</div>
        <div>medias links</div>
      </div>
    </div>
  );
};

export default Landing;
