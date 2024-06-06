import { motion } from "framer-motion";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <section className="container">
        <div className="container-left">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 1 }}
          >
            Designer
          </motion.h1>
          <div className="container-right">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 1 }}
            >
              Coder
            </motion.h1>
          </div>
        </div>
        <motion.img
          src="src/assets/tobiasLindqvistutanbakgrund.png"
          alt="Tobias Lindqvist picture"
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 2 }}
        />
      </section>
      <section className={`container dark`}>
        <h2>My latest projects</h2>
      </section>
    </div>
  );
};

export default Homepage;
