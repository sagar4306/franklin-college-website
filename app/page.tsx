"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [enterSite, setEnterSite] = useState(false);

  const courses = [
    {
      title: "Bachelor of Physiotherapy",
      image: "/images/bpt.jpg",
      desc: "Professional physiotherapy education with clinical training."
    },
    {
      title: "Master of Physiotherapy",
      image: "/images/mpt.jpg",
      desc: "Advanced postgraduate specialization program."
    },
    {
      title: "BSc Nursing",
      image: "/images/bsc-nursing.jpg",
      desc: "Professional nursing program with hospital training."
    }
  ];

  /* INTRO SCREEN */

  if (!enterSite) {

    return (

      <section className="introPage">

        <div className="introOverlay"></div>

        <motion.div
          className="introContent"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.img
            src="/images/logo.png"
            alt="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Franklin Institute
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building Future Professionals With Excellence & Innovation
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 20px 50px rgba(37,99,235,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEnterSite(true)}
          >
            Enter Institution
          </motion.button>

        </motion.div>

      </section>

    );

  }

  /* MAIN WEBSITE */

  return (

    <main>

      {/* NAVBAR */}

      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <ul className="navLinks">

  <li><a href="#">Home</a></li>

  <li><a href="#about">About</a></li>

  <li><Link href="/courses">Courses</Link></li>

  <li><Link href="/admission">Admission</Link></li>

  <li><a href="#chairman">Chairman</a></li>

  <li><a href="#contact">Contact</a></li>

</ul>
      </motion.nav>

      {/* HERO */}

      <section className="hero">

        <div className="overlay"></div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.h1
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
          >
            Franklin Institute
          </motion.h1>

          <p>
            Building Future Professionals With Excellence & Innovation
          </p>

          <Link href="/courses">

            <motion.button
              className="heroBtn"
              whileHover={{
                scale: 1.06,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
            </motion.button>

          </Link>

        </motion.div>

      </section>

      {/* ABOUT */}

      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <motion.div
          className="aboutImage"
          whileHover={{ scale: 1.02 }}
        >
          <img src="/images/about-campus.jpg" alt="about" />
        </motion.div>

        <div className="aboutContent">

          <h2>About Franklin Institute</h2>

          <p>
            Franklin Institute is dedicated to academic excellence,
            healthcare education and professional growth.
            We provide modern infrastructure and practical learning.
          </p>

          <div className="aboutCards">

            <motion.div
              className="aboutCard"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >
              <h3>15+</h3>
              <p>Years Experience</p>
            </motion.div>

            <motion.div
              className="aboutCard"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >
              <h3>5000+</h3>
              <p>Students</p>
            </motion.div>

            <motion.div
              className="aboutCard"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >
              <h3>100+</h3>
              <p>Faculty Members</p>
            </motion.div>

          </div>

        </div>

      </motion.section>

      {/* COURSES */}

      <section className="courses" id="courses">

        <motion.div
  className="sectionTitle"
  initial={{ opacity: 1, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

          <h2>Featured Courses</h2>

          <p>
            Explore our professional healthcare and management programs.
          </p>

        </motion.div>

        <div className="courseGrid">

          {courses.map((course, index) => (

            <motion.div
              className="courseCard"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.02
              }}
            >

              <img src={course.image} alt={course.title} />

              <div className="courseContent">

                <h3>{course.title}</h3>

                <p>{course.desc}</p>

                <div className="courseButtons">

                  <motion.button
                    className="applyBtn"
                    whileHover={{ scale: 1.05 }}
                  >
                    Apply Now
                  </motion.button>

                  <Link href="/courses">

                    <motion.button
                      className="detailsBtn"
                      whileHover={{ scale: 1.05 }}
                    >
                      Details
                    </motion.button>

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CHAIRMAN */}

      <motion.section
        className="chairmanSection"
        id="chairman"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div className="chairmanTitle">

          <span>Leadership Message</span>

          <h2>Message from Our Chairman</h2>

        </div>

        <div className="chairmanWrapper">

          <motion.div
            className="chairmanImage"
            whileHover={{
              y: -10,
              scale: 1.02
            }}
          >

            <img src="/images/chairman.jpg" alt="chairman" />

          </motion.div>

          <motion.div
            className="chairmanContent"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h3>Dear Students and Parents,</h3>

            <p>
              We are committed to transforming education and empowering
              students with modern knowledge, innovation and practical learning.
            </p>

            <blockquote>
              “I take this opportunity to wish you success in all your endeavours.”
            </blockquote>

            <h4>Dr. Alok Kar</h4>

            <span>
              Chairman, Franklin Group of Institutions
            </span>

          </motion.div>

        </div>

      </motion.section>

      {/* CONTACT */}

      <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div className="contactBox">

          <h2>Contact Us</h2>

          <p>Email : info@franklininstitute.com</p>

          <p>Phone : +91 9876543210</p>

          <p>
            Address : Plot No.1371/7379/928, Satya Vihar,
            Rasulgarh, Bhubaneswar – 751010
          </p>

          <p>
            +91 9937840919
          </p>

          <p>
            admission@franklingroup.co.in
          </p>

        </div>

      </motion.section>

    </main>

  );

}