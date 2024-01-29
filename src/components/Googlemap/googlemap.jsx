import React from "react";

export default function SimpleMap() {
  return (
    <div>
      <div className="map-container">
        <h1>Cum ajungi la salon..🚶🏼‍♂️</h1>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.8079532356555!2d21.22379337934569!3d45.754995920591746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567806c27fb85%3A0x43709f1dbf0587ee!2sSalon%20Megasun!5e0!3m2!1sen!2sro!4v1704466155497!5m2!1sen!2sro"
          style={{ border: 0, width: "400px", height: "400px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
