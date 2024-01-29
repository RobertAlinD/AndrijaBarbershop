import React from "react";
import { Layout } from "../../components/Layout/Layout";
import "./About.css";

export default function About() {
  return (
    <Layout>
      <div>
        <section className="aboutus" id="about">
          <div className="container-about">
            <div className="row-about">
              <div className="row-about-box">
                <div className="row-about-title">
                  <span> Despre </span>
                  <h6>...</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row-about-images">
            <div className="row-about-img-list">
              <div className="row-about-img-gallery">
                <div className="image-about">
                  <img
                    src="./assets/imageabout1.jpeg"
                    width={290}
                    height={340}
                  />
                </div>
                <div className="image-about">
                  <img
                    src="./assets/imageabout3.jpeg"
                    width={358}
                    height={364}
                  />
                </div>
                <div className="image-about">
                  <img
                    src="./assets/imageabout2.jpeg"
                    width={290}
                    height={340}
                  />
                </div>
              </div>

              <p>
                Andrija Barbershop este un nou concept in lumea barbierilor si
                Styling-ului, dedicat exclusiv barbatilor, care ofera atentie,
                calitate si stil. Este situat in centrul Timisoarei si este
                locul in care pasiunea a devenit demult meserie. Fie ca te
                pregatești pentru un eveniment sau iti doresti un tuns clasic
                sau o schimbare de look, ai ajuns in locul potrivit.
              </p>
            </div>
          </div>
          <div className="orizontalline1"></div>
        </section>
      </div>
    </Layout>
  );
}
