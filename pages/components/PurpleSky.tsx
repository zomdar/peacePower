import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";

import styles from "./PurpleSky.module.css";

const PurpleSky = () => {
  return (
    <motion.div className={styles.purple_sky_background}>
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
  );
};

export default PurpleSky;
