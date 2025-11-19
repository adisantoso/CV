import { motion } from "framer-motion";
import profilePic from "./assets/photo.jpg";
import laravel from "./assets/logo-stack/laravel.png";
import react from "./assets/logo-stack/react.png";
import vue from "./assets/logo-stack/vue.png";
import bootstrap from "./assets/logo-stack/bootstrap.png";
import mysql from "./assets/logo-stack/mysql.png";
import figma from "./assets/logo-stack/figma.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-sans p-4">
      <motion.div
        className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <header className="flex justify-between items-center bg-gray-800 p-6 flex-wrap">
          {/* Kolom kiri nama dan role */}
          <motion.div
            className="flex-1 hidden sm:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-semibold text-white">ADI SANTOSO</h1>
            <p className="text-gray-300">IT Specialist | Web Developer</p>
          </motion.div>

          {/* Kolom tengah photo */}
          <motion.div
            className="flex-1 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full mx-auto ring-4 ring-gray-700 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Kolom kanan contact */}
          <motion.div
            className="flex-1 text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="block sm:hidden mb-5">
              <h1 className="text-3xl font-semibold text-white">Adi Santoso</h1>
              <p className="text-gray-300">IT Specialist | Web Developer</p>
            </div>
            <p className="text-gray-300">📞 +62 852 6977 5250</p>
            <p className="text-gray-300">📧 adi.santoso333@gmail.com</p>
            <p className="text-gray-300">📍 Jambi, Indonesia</p>
          </motion.div>
        </header>

        {/* Summary */}
        <motion.section
          className="mb-2 p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
            🤵 Professional Summary
          </h2>
          <p className="text-gray-900 leading-relaxed text-justify">
            Dedicated Technical Support Specialist with 9+ years of experience
            in IT hardware and software maintenance, and web development.
            Skilled in troubleshooting and providing IT solutions for operational needs.
            Proven ability to manage multiple freelance and corporate projects with a
            focus on collaboration.
          </p>
        </motion.section>

        {/* Stack Skill */}
        <motion.section
          className="mb-2 p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
            🚀 Stack Skill
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 list-none">
            {[laravel, react, vue, bootstrap, mysql, figma].map((logo, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                className="w-16"
              >
                <img
                  src={logo}
                  alt={`Stack-${i}`}
                  className="object-contain w-16 h-16"
                />
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          className="mb-2 p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
            ✈ Work Experience
          </h2>
          <ul className="space-y-3 text-gray-900">
            <li>
              <h3 className="text-xl font-semibold">Technical Support</h3>
              <p>PT. IASS Suport Indonesia</p>
              <p>2018 - Present</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Technical Support</h3>
              <p>PT. MCO Jaya</p>
              <p>2015 - 2018</p>
            </li>
          </ul>
        </motion.section>

        {/* Project Development */}
        <motion.section
          className="mb-6 p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
            🏗 Project Development
          </h2>
          <ul className="space-y-3 text-gray-900">
            <li>
              <h3 className="text-xl font-semibold">
                System Administration | Yayasan Setara Jambi
              </h3>
              <p>
                Development of an integrated administrative system using Laravel,
                MySQL, and Vue.js
              </p>
              <p>2025</p>
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
