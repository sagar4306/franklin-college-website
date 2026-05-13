"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoursesPage() {

  const courses = [
    {
      title: "Bachelor of Physiotherapy (BPT)",
      image: "/images/bpt.jpg",
      desc: "Professional physiotherapy education with advanced clinical training."
    },
    {
      title: "Master of Physiotherapy (MPT)",
      image: "/images/mpt.jpg",
      desc: "Advanced postgraduate physiotherapy specialization program."
    },
    {
      title: "BSc Nursing",
      image: "/images/bsc-nursing.jpg",
      desc: "Professional nursing program with hospital training."
    },
    {
      title: "Master in Public Health (MPH)",
      image: "/images/mph.jpg",
      desc: "Public health and healthcare administration program."
    },
    {
      title: "General Nursing & Midwifery (GNM)",
      image: "/images/gnm.jpg",
      desc: "Strong foundation in nursing and patient management."
    },
    {
      title: "Bachelor in Hotel Management (BHM)",
      image: "/images/bhm.jpg",
      desc: "Hospitality and hotel management professional course."
    },
    {
      title: "Masters in Hotel Management (MHM)",
      image: "/images/mhm.jpg",
      desc: "Advanced hospitality leadership and management training."
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      image: "/images/bba.jpg",
      desc: "Business, finance and entrepreneurship focused program."
    },
    {
      title: "Bachelor in Tourism & Travel Management (BTTM)",
      image: "/images/bttm.jpg",
      desc: "Tourism, travel and hospitality operations management."
    }
  ];

  return (
    <main className="coursesPage">

      <nav className="navbar">

        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
        </ul>

      </nav>

      <section className="coursesHero">

        <div className="overlay"></div>

        <motion.div
          className="coursesHeroContent"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>Our Courses</h1>

          <p>
            Explore Healthcare & Professional Programs
          </p>

        </motion.div>

      </section>

      <section className="allCourses">

        <div className="allCoursesGrid">

          {courses.map((course, index) => (

            <motion.div
              className="premiumCourseCard"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08
              }}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
            >

              <img src={course.image} alt={course.title} />

              <div className="premiumCourseContent">

                <h3>{course.title}</h3>

                <p>{course.desc}</p>

                <div className="premiumButtons">

                 <Link href="/admission">

  <button className="applyBtn">
    Apply Now
  </button>

</Link>

                 <Link
  href={`/course/${
    index === 0 ? "bpt" :
    index === 1 ? "mpt" :
    index === 2 ? "nursing" :
    index === 3 ? "mph" :
    index === 4 ? "gnm" :
    index === 5 ? "bhm" :
    index === 6 ? "mhm" :
    index === 7 ? "bba" :
    "bttm"
  }`}
>

  <button className="detailsBtn">
    View Details
  </button>

</Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}