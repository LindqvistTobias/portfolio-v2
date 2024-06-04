import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Tobias Lindqvist portfolio
        </motion.h1>
        <motion.img
          src="src/assets/tobiasLindqvistutanbakgrund.png"
          alt="Tobias Lindqvist picture"
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        />
        <h2>Under construction.. Stay tuned</h2>
      </div>
    </>
  );
}

export default App;
