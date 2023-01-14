import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // make a function that will change margin based on the scroll position

  return (
    <div className={styles.container}>
      <Head>
        <title>World Peace</title>
        <meta name="description" content="peace is power" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <motion.div
          className={styles.blue_sky_background}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 1 }}
        >
          <div className={styles.cloud_overlay}>
            <img src="/cloud_1.png" alt="cloud_1" className={styles.cloud_1} />
            <img src="/cloud_4.png" alt="cloud_3" className={styles.cloud_3} />
            <img src="/cloud_2.png" alt="cloud_2" className={styles.cloud_2} />
            <img src="/cloud_3.png" alt="cloud_3" className={styles.cloud_2} />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className={styles.title}
          >
            PEACE is POWER
          </motion.h1>
        </motion.div>
        <motion.div className={styles.purple_sky_background}>
          {/* <div className={styles.cloud_overlay}>
            <img src="/cloud_1.png" alt="cloud_1" className={styles.cloud_1} />
            <img src="/cloud_4.png" alt="cloud_3" className={styles.cloud_3} />
            <img src="/cloud_2.png" alt="cloud_2" className={styles.cloud_2} />
            <img src="/cloud_3.png" alt="cloud_3" className={styles.cloud_2} />
          </div> */}
          <div className={styles.purple_content}>
            <div className={styles.row_end}>its raining in ny</div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              className={styles.title_2}
            >
              <div className={styles.row_center}>DRINK more WATER</div>
            </motion.h1>
          </div>
        </motion.div>
      </>
    </div>
  );
}
