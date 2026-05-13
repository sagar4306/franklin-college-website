"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import QuickLinks from "../components/QuickLinks";

export default function AdmissionPage() {

  const process = [
    {
      no: "1",
      title: "Choose Your Program",
      desc: "Browse our programs and select the course that fits your career goals."
    },
    {
      no: "2",
      title: "Submit Application",
      desc: "Fill out the application form with your details and submit online."
    },
    {
      no: "3",
      title: "Document Verification",
      desc: "Our team reviews your documents and qualifications."
    },
    {
      no: "4",
      title: "Receive Offer Letter",
      desc: "Get your admission confirmation and start your journey."
    }
  ];

  const documents = [
    "10th & 12th Marksheets and Certificates",
    "Graduation Marksheets (for PG courses)",
    "Migration & Transfer Certificate",
    "Character Certificate",
    "Aadhaar Card / Identity Proof",
    "Passport-size Photographs (6 copies)",
    "Caste Certificate (if applicable)",
    "Medical Fitness Certificate"
  ];

  const eligibility = [
    ["BPT", "10+2 (PCB) with 50% aggregate"],
    ["MPT", "BPT degree with 55% aggregate"],
    ["BSc Nursing", "10+2 (PCB) with 45% aggregate"],
    ["MPH", "Bachelor's in health science/related field"],
    ["GNM", "10+2 with 40% aggregate"],
    ["BHM", "10+2 from any board, 45% aggregate"],
    ["MHM", "Bachelor's in Hotel Management"],
    ["BBA", "10+2 from any board"],
    ["BTTM", "10+2 from any board"]
  ];

  return (

    <main className="admissionPage">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/admission">Admission</Link></li>
        </ul>

      </nav>

      {/* HERO */}

      <section className="coursesHero">

        <div className="overlay"></div>

        <motion.div
          className="coursesHeroContent"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>Admissions Open 2026</h1>

          <p>
            Begin Your Journey With Franklin Institute
          </p>

        </motion.div>

      </section>

      {/* PROCESS */}

      <section className="processSection">

        <div className="sectionTitle">

          <span>PROCESS</span>

          <h2>How to Apply</h2>

        </div>

        <div className="processGrid">

          {process.map((item, index) => (

            <motion.div
              key={index}
              className="processCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="processNumber">
                {item.no}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* DOCUMENTS */}

      <section className="documentsSection">

        <div className="sectionTitle leftTitle">

          <span>CHECKLIST</span>

          <h2>Required Documents</h2>

        </div>

        <div className="documentsGrid">

          {documents.map((doc, index) => (

            <motion.div
              key={index}
              className="documentItem"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >

              ✓ {doc}

            </motion.div>

          ))}

        </div>

      </section>

      {/* ELIGIBILITY */}

      <section className="eligibilitySection">

        <div className="sectionTitle leftTitle">

          <span>REQUIREMENTS</span>

          <h2>Eligibility Summary</h2>

        </div>

        <div className="eligibilityTable">

          <table>

            <thead>

              <tr>
                <th>Course</th>
                <th>Minimum Qualification</th>
              </tr>

            </thead>

            <tbody>

              {eligibility.map((item, index) => (

                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* FORM */}

      <section className="admissionFormSection">

        <div className="sectionTitle">

          <span>APPLICATION</span>

          <h2>Admission Form</h2>

        </div>

        <motion.form
          className="admissionForm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="formGrid">

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />

            <select>
              <option>Select Course</option>
              <option>BPT</option>
              <option>MPT</option>
              <option>BSc Nursing</option>
              <option>MPH</option>
              <option>GNM</option>
              <option>BHM</option>
              <option>MHM</option>
              <option>BBA</option>
              <option>BTTM</option>
            </select>

          </div>

          <textarea
            rows={6}
            placeholder="Write Your Message"
          ></textarea>

          <button type="submit" className="heroBtn">
            Submit Application
          </button>

        </motion.form>

      </section>

      <QuickLinks />

    </main>

  );

}