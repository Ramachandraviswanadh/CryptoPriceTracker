import React from "react";
import Button from "../../Common/Button/button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import { motion } from "framer-motion";

function LandingPageComponent() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          Real Time.
        </motion.h1>
       
        
        <motion.p
          className="para"
          initial={{ opacity: 0, z: 50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.5, delay: 0.5 ,}}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, z: 50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button text="Dashboard" />
          <Button text="Share App" outlined={true} />
        </motion.div>
      </div>
      <div className="landing-right">
        <img src={gradient} className="gradient" alt="gragientblue" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;