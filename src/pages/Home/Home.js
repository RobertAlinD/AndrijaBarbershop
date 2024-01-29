import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Layout } from "../../components/Layout/Layout";
import { Carousel } from "../../components/Carousel/Carousel";
import ReactPlayer from "react-player";
import SimpleMap from "../../components/Googlemap/googlemap";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div>
        {/* HOME SECTION START */}
        <section className="banner-logo" id="home">
          <div className="container">
            <div>
              <div className="main-logo">
                <p>Barber Shop</p>
                <h3>Andrija</h3>
                <h3>Professional</h3>
              </div>

              <div className="rows-main">
                <div className="rows-program">
                  <div className="rows-info">
                    <div className="icon-box">
                      {" "}
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3>Program</h3>
                    <p>Luni – Sambata: 11:00 – 20:00</p>
                  </div>
                </div>

                <div className="rows-location">
                  <div className="rows-info">
                    <div className="icon-box">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <h3>Locatie</h3>
                    <p>Coriolan Brediceanu 2,Timișoara</p>
                  </div>
                </div>

                <div className="rows-rezervation">
                  <div className="rows-info">
                    <div className="icon-box">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <h3>Rezervare</h3>
                    <p>
                      <a href="tel:0763.098.807" a="true">
                        0763 098 807
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-icon-box">
            <i className="banner-icon"></i>
            <div className="banner-icon-small">
              <svg
                width="105"
                height="130"
                viewBox="0 0 143 169"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.6926 76.5007C73.3272 77.0641 73.1047 77.4021 72.4533 77.4021C71.8019 77.4021 71.5953 77.0641 71.214 76.5007C70.9439 76.0876 70.4195 75.2802 69.7204 74.5103C65.7164 70.1726 61.8872 73.0644 58.6618 76.9514C58.5823 77.0453 48.763 89.1382 35.3369 82.2279C36.894 85.7769 40.6914 91.5042 49.7957 95.7104C50.8285 96.0484 64.1275 100.123 71.3887 88.7063C71.4682 88.5561 71.5794 88.4246 71.6906 88.3119C72.2468 87.8237 73.0571 87.9552 73.4702 88.6124C80.7155 100.104 94.094 96.0108 95.1109 95.6916C104.215 91.4854 108.013 85.7582 109.57 82.2092C96.7474 88.8189 87.23 78.1156 86.3243 77.0453C86.2925 77.0077 86.2608 76.9702 86.229 76.9326C81.0015 70.1914 77.1882 72.3696 75.2021 74.5291C74.4712 75.2802 73.9469 76.0876 73.6926 76.5007ZM72.4533 73.5526C72.7393 73.1771 73.073 72.7452 73.4861 72.3133C76.219 69.3464 81.3829 66.2668 88.0721 74.8671L88.1039 74.9046L88.1356 74.9422C88.9619 75.9374 98.5746 86.7722 111.222 77.8903C111.826 77.4584 112.605 77.7025 112.97 78.4161C113.145 78.7728 113.192 79.1859 113.113 79.5615C112.891 80.8947 110.65 91.8046 96.0165 98.5646C95.953 98.6022 95.8894 98.6209 95.8259 98.6397C94.6819 99.0153 80.9062 103.203 72.4851 91.9361C63.6826 103.653 49.0808 98.6022 49.0331 98.5834C42.8682 96.5366 32.9059 87.6735 31.7936 79.4113C31.6824 78.5851 32.1432 77.8152 32.8423 77.6837C33.176 77.6274 33.4937 77.7025 33.748 77.9091C46.9516 87.1289 56.8186 74.9046 56.8504 74.8671C61.2675 69.5154 66.209 66.6612 71.4364 72.3133C71.8336 72.7452 72.1673 73.1771 72.4533 73.5526Z"
                  fill="#151415"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M73.6927 76.5007C73.3272 77.064 73.1048 77.402 72.4534 77.402C71.3729 77.402 71.2776 76.2002 69.7205 74.5102C65.7165 70.1726 61.8872 73.0644 58.6618 76.9514C58.5824 77.0452 48.763 89.1381 35.3369 82.2279C36.894 85.7769 40.6915 91.5041 49.7958 95.7104C50.8286 96.0484 64.1276 100.123 71.3888 88.7062C71.8814 87.8612 72.93 87.7486 73.4702 88.6311C80.7156 100.123 94.0781 96.0296 95.1109 95.7104C104.215 91.5041 108.013 85.7769 109.57 82.2279C96.7475 88.8189 87.23 78.1156 86.3244 77.0452C86.2926 77.0077 86.2608 76.9701 86.229 76.9326C81.0016 70.1914 77.1882 72.3696 75.2021 74.529C74.4712 75.2801 73.9469 76.0876 73.6927 76.5007Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
          </div>
          {/* HOME SECTION END */}

          {/* -- ABOUT SECTION START -- */}
        </section>
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

        {/* -- ABOUT SECTION END -- */}
        {/* -- SERVICES SECTION START -- */}

        <section className="services" id="services">
          <div className="container-services">
            <div className="row-services">
              <div className="row-services-box">
                <div className="row-services-title">
                  <span> SERVICII </span>
                  <h6>...</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="services-box-icons">
            <div className="service-single">
              <div className="icon-box-outer">
                <div className="icon-box-services">
                  <div className="iconsvg">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 101 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M75.671 22.4954C75.671 22.3284 75.637 22.1714 75.587 22.0214C75.605 21.7674 75.625 21.5114 75.632 21.2674C75.747 16.8224 75.638 3.86043 75.633 3.31043C75.626 2.48243 74.97 1.81043 74.12 1.82343C73.292 1.83043 72.626 2.50843 72.633 3.33643C72.633 3.40443 72.662 6.84643 72.676 10.7994H65.01V3.32343C65.01 2.49443 64.338 1.82343 63.51 1.82343C62.682 1.82343 62.01 2.49443 62.01 3.32343V10.7994H55.68V3.32343C55.68 2.49443 55.008 1.82343 54.18 1.82343C53.352 1.82343 52.68 2.49443 52.68 3.32343V10.7994H46.349V3.32343C46.349 2.49443 45.678 1.82343 44.849 1.82343C44.02 1.82343 43.349 2.49443 43.349 3.32343V10.7994H37.019V3.32343C37.019 2.49443 36.348 1.82343 35.519 1.82343C34.69 1.82343 34.019 2.49443 34.019 3.32343V10.7994H27.323C27.336 6.84543 27.365 3.40343 27.365 3.33543C27.372 2.50743 26.706 1.83043 25.877 1.82343C25.873 1.82343 25.869 1.82343 25.864 1.82343C25.042 1.82343 24.371 2.48743 24.364 3.31143C24.36 3.86043 24.254 16.8224 24.364 21.2684C24.371 21.5204 24.392 21.7864 24.41 22.0494C24.365 22.1914 24.335 22.3394 24.335 22.4964C24.335 22.7594 24.409 23.0034 24.528 23.2174C25.249 28.8584 28.253 36.3684 31.1 42.0194V78.4874C31.1 89.3434 39.578 98.1764 49.998 98.1764C60.423 98.1764 68.903 89.3434 68.903 78.4874V42.0184C71.742 36.3754 74.739 28.8784 75.464 23.2404C75.593 23.0204 75.671 22.7684 75.671 22.4954ZM72.683 13.7994C72.686 16.6274 72.676 19.3514 72.638 20.9954H27.36C27.323 19.3504 27.314 16.6264 27.316 13.7994H72.683V13.7994ZM67.033 39.0204C62.626 34.2964 57.424 30.2764 50.003 30.2764C42.582 30.2764 37.38 34.2974 32.971 39.0224C30.282 33.4184 28.387 28.0264 27.675 23.9964H72.318C71.593 28.0244 69.68 33.4834 67.033 39.0204ZM49.999 95.1764C41.233 95.1764 34.101 87.6894 34.101 78.4874V42.2374C38.284 37.5304 43.125 33.2774 50.003 33.2774C56.881 33.2774 61.723 37.5304 65.904 42.2364V78.4874C65.904 87.6884 58.77 95.1764 49.999 95.1764Z"
                        fill="black"
                        stroke="#be9342"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M50.004 46.999C46.815 46.999 44.22 49.593 44.22 52.782V60.125C44.22 63.316 46.815 65.913 50.004 65.913C53.195 65.913 55.791 63.316 55.791 60.125V52.782C55.791 49.593 53.195 46.999 50.004 46.999ZM52.791 60.125C52.791 61.662 51.541 62.913 50.004 62.913C48.469 62.913 47.22 61.662 47.22 60.125V52.782C47.22 51.248 48.469 49.999 50.004 49.999C51.541 49.999 52.791 51.248 52.791 52.782V60.125Z"
                        fill="black"
                        stroke="#be9342"
                        strokeWidth="1.2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3>Tuns Barba</h3>

              <h5>Timp : 15 Min</h5>
            </div>
            <div className="service-single">
              <div className="icon-box-outer">
                <div className="icon-box-services">
                  <div className="iconsvg">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 101 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M78.725 91.2769C77.905 90.6099 77.031 90.0639 76.186 89.5359C74.84 88.6949 73.568 87.9009 72.861 86.8059C71.974 85.4259 70.692 81.7589 70.068 79.8359C70.099 79.8059 70.123 79.7789 70.154 79.7479C71.959 77.9819 71.918 75.9699 71.609 75.0589C71.52 74.7949 71.359 74.5619 71.145 74.3849C71.145 74.3849 70.039 73.4699 68.264 72.0009L57.074 7.59192C57.004 7.19192 56.775 6.83592 56.439 6.60792C56.102 6.37992 55.689 6.29692 55.29 6.38092C53.953 6.65992 49.476 7.67992 48.028 9.08392C46.884 10.2019 46.017 13.4629 45.697 14.8129C45.649 15.0169 45.644 15.2279 45.682 15.4339L52.664 52.8939C52.811 53.6829 53.549 54.2149 54.348 54.1039L57.416 53.6719L59.827 65.0229C54.894 60.9439 49.463 56.4549 46.018 53.6129C42.652 50.8369 38.324 46.1219 34.138 41.5629C27.654 34.4989 23.552 30.1359 21.056 29.4769C18.776 28.8719 16.466 31.0659 15.297 32.4279C13.687 34.3029 11.262 38.1669 12.389 40.7559C12.389 40.7569 12.39 40.7579 12.39 40.7589C13.767 43.9059 24.382 54.3939 26.936 56.8209C32.114 61.7429 41.293 69.1549 47.832 73.6959L49.424 74.8029C55 78.6879 59.405 81.7569 64.74 83.3919C64.957 83.4579 65.166 83.4899 65.37 83.4899C66.179 83.4899 66.907 82.9909 67.707 82.2369C68.389 84.2199 69.434 87.0229 70.339 88.4309C71.41 90.0909 73.03 91.1029 74.596 92.0809C75.399 92.5819 76.157 93.0559 76.832 93.6039C77.11 93.8309 77.445 93.9399 77.777 93.9399C78.213 93.9399 78.645 93.7509 78.942 93.3859C79.465 92.7449 79.368 91.7999 78.725 91.2769ZM60.059 51.6799C59.895 50.9089 59.167 50.3989 58.383 50.5059L55.35 50.9329L48.69 15.1999C49.138 13.4089 49.79 11.5969 50.12 11.2329C50.518 10.8469 52.345 10.1919 54.391 9.66892L64.708 69.0589C64.331 68.7469 63.945 68.4279 63.548 68.0999L60.059 51.6799ZM65.255 80.4089C60.523 78.8789 56.366 75.9829 51.139 72.3419L49.543 71.2319C43.217 66.8399 34.003 59.3999 29.002 54.6469C24.055 49.9439 16.004 41.5299 15.139 39.5589C14.918 39.0439 15.506 36.8789 17.421 34.5629C18.927 32.7419 20.044 32.3279 20.29 32.3779C22.063 32.8459 27.533 38.8049 31.928 43.5919C36.183 48.2269 40.582 53.0189 44.109 55.9279C48.331 59.4109 55.533 65.3649 61.147 70.0079C61.152 70.0129 61.159 70.0169 61.164 70.0219C62.956 71.5039 64.585 72.8519 65.903 73.9419C65.918 73.9549 65.932 73.9659 65.947 73.9779C67.24 75.0479 68.232 75.8679 68.772 76.3149C68.738 76.6059 68.591 77.0819 68.056 77.6049C67.57 78.0809 67.122 78.5499 66.712 78.9799C66.236 79.4769 65.614 80.1289 65.255 80.4089Z"
                        fill="black"
                        stroke="#be9342"
                        strokeWidth="1.2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3>Contur Barba</h3>

              <h5>Timp : 10 Min</h5>
            </div>
            <div className="service-single">
              <div className="icon-box-outer">
                <div className="icon-box-services">
                  <div className="iconsvg">
                    <svg
                      width="90"
                      height="100"
                      viewBox="0 0 101 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.041 63.6183C50.463 63.3343 48.881 63.4083 47.375 63.7993L33.253 42.5833C33.281 42.4263 33.279 42.2683 33.257 42.1123L50.497 15.8413C50.952 15.1493 50.759 14.2193 50.066 13.7643C49.375 13.3103 48.444 13.5033 47.989 14.1953L31.293 39.6383L14.755 14.7943C14.296 14.1043 13.364 13.9173 12.675 14.3773C11.985 14.8363 11.799 15.7673 12.258 16.4573L29.744 42.7273L16.242 64.0433C14.85 63.7703 13.405 63.7713 11.971 64.0623C9.07599 64.6513 6.588 66.3463 4.969 68.8313C1.6 73.9573 2.987 80.8823 8.057 84.2653C9.882 85.4923 11.979 86.1273 14.123 86.1273C14.849 86.1273 15.58 86.0543 16.308 85.9063C19.208 85.3193 21.704 83.6213 23.336 81.1253C23.336 81.1243 23.337 81.1243 23.337 81.1233C26.671 76.0103 25.274 69.0913 20.223 65.6993C19.874 65.4643 19.512 65.2583 19.145 65.0673L31.564 45.4603L44.554 64.9753C44.309 65.1203 44.065 65.2673 43.829 65.4333C38.85 68.9343 37.601 75.8833 41.044 80.9243C41.045 80.9253 41.045 80.9273 41.046 80.9283C42.735 83.3873 45.268 85.0323 48.176 85.5583C48.831 85.6773 49.487 85.7363 50.138 85.7363C52.357 85.7363 54.522 85.0563 56.387 83.7513C61.365 80.2473 62.611 73.2943 59.163 68.2503C57.479 65.7883 54.948 64.1453 52.041 63.6183ZM20.824 79.4843C19.634 81.3023 17.819 82.5393 15.712 82.9663C13.627 83.3883 11.503 82.9653 9.726 81.7713C6.018 79.2973 5.009 74.2323 7.479 70.4743C8.66 68.6623 10.468 67.4293 12.57 67.0023C13.099 66.8943 13.631 66.8413 14.158 66.8413C15.71 66.8413 17.228 67.3013 18.55 68.1893C22.247 70.6723 23.266 75.7383 20.824 79.4843ZM54.664 81.2943C52.917 82.5183 50.805 82.9853 48.711 82.6053C46.597 82.2233 44.754 81.0253 43.521 79.2313C40.999 75.5383 41.91 70.4483 45.553 67.8873C47.301 66.6603 49.417 66.1953 51.506 66.5713C53.619 66.9533 55.459 68.1513 56.688 69.9433C59.214 73.6383 58.305 78.7313 54.664 81.2943Z"
                        fill="black"
                        stroke="#be9342"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M95.5 26C96.328 26 97 25.329 97 24.5C97 23.671 96.328 23 95.5 23H71V16H95.5C96.328 16 97 15.329 97 14.5C97 13.671 96.328 13 95.5 13H69.5C68.672 13 68 13.671 68 14.5V83.5C68 84.328 68.672 85 69.5 85H95.5C96.328 85 97 84.328 97 83.5C97 82.672 96.328 82 95.5 82H71V74H95.5C96.328 74 97 73.328 97 72.5C97 71.672 96.328 71 95.5 71H71V62H95.5C96.328 62 97 61.328 97 60.5C97 59.672 96.328 59 95.5 59H71V50H95.5C96.328 50 97 49.328 97 48.5C97 47.671 96.328 47 95.5 47H71V38H95.5C96.328 38 97 37.329 97 36.5C97 35.671 96.328 35 95.5 35H71V26H95.5Z"
                        fill="black"
                        stroke="#be9342"
                        strokeWidth="1.2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3>Tuns si Styling</h3>

              <h5>Timp : 40 Min</h5>
            </div>
          </div>
          <div className="orizontalline2"></div>
        </section>
        {/* -- SERVICES SECTION END -- */}

        {/* GALLERY SECTION START  */}

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



        {/* GALLERY SECTION END  */}
        {/* PRICES SECTION START */}

        <section className="prices" id="prices">
          <div className="container-prices">
            <div className="row-prices">
              <div className="row-prices-box">
                <div className="row-prices-title">
                  <span> Preturi </span>
                  <h6>...</h6>
                </div>
              </div>
            </div>
            <div className="row-prices">
              <div className="row-prices-img">
                <div className="prices-img">
                  <img src="./assets/imgprices.jpeg" />
                </div>
              </div>
              <div className="row-prices-list">
                <img src="./assets/chair.png" />
                <div className="prices-list-details">
                  <div className="price-item">Tuns + Styling </div>
                  <div className="price-line"></div>
                  <div className="price-amount">80 RON</div>
                </div>
                <div className="prices-list-details">
                  <div className="price-item">Tuns Barba </div>
                  <div className="price-line"></div>
                  <div className="price-amount">30 RON</div>
                </div>
                <div className="prices-list-details">
                  <div className="price-item">
                    <b>Pachet Complet Tuns + Barba </b>{" "}
                  </div>
                  <div className="price-line">
                    <b></b>
                  </div>
                  <div className="price-amount">
                    <b>100 RON</b>
                  </div>
                </div>
                <div className="orizontalline4"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICES SECTION END  */}
        {/* CONTACT SECTION START  */}

        <footer className="contact" id="contact">
          <div className="container-contact">
            <div className="row-contact-title">
              <span> Contact </span>
              <h6>...</h6>
            </div>
            <div className="contact-info-title">
              <h1>Date de contact</h1>
            </div>
            <div className="largebox-contact">
              <div className="box-contact-phone">
                <div className="box-contact-icon">
                  <a href="tel:0310050062" className="social icon" a="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 578.11 577.73"
                    >
                      <path
                        d="M577.83,456.13q1.84,14.08-8.57,24.48l-81.4,80.78a45.81,45.81,0,0,1-14.38,10.4A59.43,59.43,0,0,1,456,577.3q-0.61,0-3.68.31t-8,.31q-11.63,0-37.64-4t-63.64-19.58q-37.64-15.61-85.38-46.82T156.16,421.86q-42.84-42.23-71-80.78t-45.29-71.3Q22.75,237,14.18,210.41T2.55,164.51Q-0.51,145.23.1,134.22T0.71,122a59.49,59.49,0,0,1,5.51-17.44,45.86,45.86,0,0,1,10.4-14.38L98,8.76q8.57-8.57,19.58-8.57a22.83,22.83,0,0,1,14.08,4.59,42.55,42.55,0,0,1,10.4,11.32l65.48,124.24a29.78,29.78,0,0,1,3.06,21.42,38.15,38.15,0,0,1-10.4,19.58l-30,30a10.21,10.21,0,0,0-2.14,4,15.1,15.1,0,0,0-.92,4.59q2.45,12.85,11,29.38,7.34,14.69,22.64,35.8t43.45,48.65q27.54,28.15,49,43.76t35.8,22.95q14.38,7.34,22,8.87l7.65,1.53a14.59,14.59,0,0,0,4-.92,10.22,10.22,0,0,0,4-2.14l34.88-35.5a37.49,37.49,0,0,1,25.7-9.79q10.41,0,16.52,3.67h0.61l118.12,69.77Q575.38,443.89,577.83,456.13Z"
                        transform="translate(0 -0.19)"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="box-contact-info">
                  <a href="tel:0310050062" a="true">
                    0763 098 807
                  </a>
                </div>
              </div>
              <div className="box-contact-email">
                <div className="box-contact-icon">
                  <a
                    href="mailto:office@barber.ro"
                    className="social icon"
                    a="true"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 27.86 19.5"
                    >
                      <path
                        d="M2.2,5.33l10,7.95a2.55,2.55,0,0,0,1.69.49,2.55,2.55,0,0,0,1.69-.49l10-7.95c0.8-.63.62-1.15-0.4-1.15H2.6C1.58,4.18,1.4,4.7,2.2,5.33Z"
                        transform="translate(0 -4.18)"
                      ></path>
                      <path
                        d="M26.38,7.43l-11,8.33a2.66,2.66,0,0,1-3,0l-11-8.33C0.67,6.81,0,7.14,0,8.16V21.82a1.86,1.86,0,0,0,1.86,1.86H26a1.86,1.86,0,0,0,1.86-1.86V8.16C27.86,7.14,27.19,6.81,26.38,7.43Z"
                        transform="translate(0 -4.18)"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="box-contact-info">
                  <a href="mailto:office@barber.ro" a="true">
                    radeviciandrija@yahoo.com
                  </a>
                </div>
              </div>
              <div className="box-contact-location">
                <div className="box-contact-icon">
                  <a href="0763 098 807" className="social icon" a="true">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 296.3 430.11"
                    >
                      <path
                        d="M356.21,107.05c-1.53-5.74-4.64-11.85-6.94-17.21C321.75,23.7,261.61,0,213.05,0,148.05,0,76.46,43.59,66.9,133.43v18.35c0,0.77.26,7.65,0.64,11.09,5.36,42.82,39.14,88.32,64.38,131.14,27.15,45.87,55.31,91,83.22,136.11,17.21-29.44,34.35-59.26,51.17-87.93,4.58-8.42,9.9-16.83,14.49-24.86,3.06-5.35,8.9-10.7,11.57-15.67,27.14-49.7,70.84-99.78,70.84-149.1V132.29C363.21,126.94,356.58,108.2,356.21,107.05Zm-142,92.14c-19.11,0-40-9.55-50.34-35.94-1.54-4.2-1.41-12.62-1.41-13.39V138c0-33.64,28.56-48.93,53.41-48.93,30.59,0,54.24,24.47,54.24,55.06S244.83,199.19,214.24,199.19Z"
                        transform="translate(-66.9 0)"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="box-contact-info">
                  <a
                    href="https://maps.app.goo.gl/VcUjFa4pRwXDp3Jp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    a="true"
                  >
                    Strada Coriolan Brediceanu 2, Timișoara 300077
                  </a>{" "}
                </div>
                <div className="box-contact-info">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;&nbsp;
                </div>
              </div>
              <div className="box-contact-solcialmedia">
                <div className="box-contact-icofb">
                  <a
                    href="https://www.facebook.com/andrija.radevici"
                    className="social icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    a="true"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 9 17"
                    >
                      <path
                        d="M2.63,17V9.4H0v-3H2.63V4A3.88,3.88,0,0,1,3.72,1a4,4,0,0,1,2.9-1A17.33,17.33,0,0,1,9,.13V2.82H7.36a1.61,1.61,0,0,0-1.26.4,1.67,1.67,0,0,0-.27,1.06V6.37h2.9l-0.41,3H5.83V17H2.63Z"
                        transform="translate(0 0)"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="box-contact-icoinst">
                  <a
                    href="https://www.instagram.com/radevici_andrija"
                    className="social icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    a="true"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17"
                    >
                      <path
                        d="M8.5,4.14a4.25,4.25,0,0,1,2.18.59,4.38,4.38,0,0,1,1.59,1.59,4.34,4.34,0,0,1,0,4.36,4.38,4.38,0,0,1-1.59,1.59,4.34,4.34,0,0,1-4.36,0,4.38,4.38,0,0,1-1.59-1.59,4.34,4.34,0,0,1,0-4.36A4.38,4.38,0,0,1,6.32,4.72,4.25,4.25,0,0,1,8.5,4.14Zm0,7.21A2.85,2.85,0,0,0,11.35,8.5,2.85,2.85,0,0,0,8.5,5.65,2.85,2.85,0,0,0,5.65,8.5,2.85,2.85,0,0,0,8.5,11.35Zm5.58-7.4a1.18,1.18,0,0,1-.32.72,0.92,0.92,0,0,1-.7.3,1,1,0,0,1-1-1A1,1,0,0,1,14.08,3.95ZM17,5Q17,6,17,8.5T16.94,12a7.16,7.16,0,0,1-.32,1.88,4.44,4.44,0,0,1-2.69,2.69,7.16,7.16,0,0,1-1.88.32Q11,17,8.5,17T5,16.94a6.2,6.2,0,0,1-1.88-.36,4,4,0,0,1-1.65-1,4.42,4.42,0,0,1-1-1.65A7.16,7.16,0,0,1,.06,12Q0,11,0,8.5T0.06,5A7.16,7.16,0,0,1,.38,3.07,4.44,4.44,0,0,1,3.07.38,7.16,7.16,0,0,1,5,.06Q6,0,8.5,0T12,0.06a7.16,7.16,0,0,1,1.88.32,4.44,4.44,0,0,1,2.69,2.69A7.72,7.72,0,0,1,17,5Zm-1.82,8.54a8,8,0,0,0,.3-2q0-.83,0-2.35V7.89q0-1.56,0-2.35a7.61,7.61,0,0,0-.3-2,2.74,2.74,0,0,0-1.63-1.63,7.61,7.61,0,0,0-2-.3q-0.83,0-2.35,0H7.89q-1.52,0-2.35,0a8,8,0,0,0-2,.3A2.74,2.74,0,0,0,1.86,3.49a7.61,7.61,0,0,0-.3,2q0,0.83,0,2.35V9.11q0,1.52,0,2.35a8,8,0,0,0,.3,2,2.88,2.88,0,0,0,1.63,1.63,8,8,0,0,0,2,.3q0.83,0,2.35,0H9.11q1.56,0,2.35,0a7.61,7.61,0,0,0,2-.3A2.88,2.88,0,0,0,15.14,13.51Z"
                        transform="translate(0 0)"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
                <div className="box-contact-icoyb">
                  <a
                    href="https://www.youtube.com/@andrijaradevici8977"
                    className="social icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    a="true"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="256"
                      height="180"
                      viewBox="0 0 256 180"
                    >
                      <path
                        fill="black"
                        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                      />
                      <path
                        fill="#FFF"
                        d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <SimpleMap />
            </div>
            {/* CONTACT SECTION END */}
            {/* FOOTER SECTION  */}
            <div className="footer-site-info">
              <p>
                Copyright © Andrija Barbershop Professional. Toate drepturile
                rezervate.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout >
  );
}
