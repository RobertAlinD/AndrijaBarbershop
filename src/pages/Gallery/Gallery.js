import React from "react";
import { Layout } from "../../components/Layout/Layout";
import ReactPlayer from "react-player";
import { Carousel } from "../../components/Carousel/Carousel";
import "./Gallery.css";

export default function Galerie() {
  return (
    <Layout>
      <div>
        <section className="gallery" id="gallery">
          <div className="container-gallery">
            <div className="row-gallery">
              <div className="row-gallery-box">
                <div className="row-gallery-title">
                  <span> Galerie </span>
                  <h6>...</h6>
                  <div className="react-players">
                    <div className="react-player1">
                      <ReactPlayer
                        className="react-player1"
                        url="./assets/videogallery1.mp4"
                        playing={false}
                        loop
                        muted
                        width="450px"
                        height="300px"
                        controls
                      />
                    </div>
                    <div className="react-player2">
                      <ReactPlayer
                        className="react-player2"
                        url="./assets/videogallery2.mp4"
                        playing={false}
                        loop
                        muted
                        width="450px"
                        height="300px"
                        controls
                      />
                    </div>
                  </div>
                  <Carousel />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="orizontalline3"></div>


      </div>
    </Layout>
  );
}
