import QuickLinks from "@/app/components/QuickLinks";
import Link from "next/link";

export default async function CourseDetails({ params }: any) {

  const resolvedParams = await params;

  const courseName = resolvedParams.name;

  const data: any = {

    bpt: {
      title: "Bachelor of Physiotherapy (BPT)",
      image: "/images/bpt.jpg",
      duration: "4 Years",
      desc: "Professional physiotherapy program with advanced rehabilitation and clinical training."
    },

    mpt: {
      title: "Master of Physiotherapy (MPT)",
      image: "/images/mpt.jpg",
      duration: "2 Years",
      desc: "Advanced postgraduate physiotherapy specialization."
    },

    nursing: {
      title: "BSc Nursing",
      image: "/images/bsc-nursing.jpg",
      duration: "4 Years",
      desc: "Professional nursing education with hospital training."
    },

    mph: {
      title: "Master in Public Health (MPH)",
      image: "/images/mph.jpg",
      duration: "2 Years",
      desc: "Healthcare administration and public health management."
    },

    gnm: {
      title: "General Nursing & Midwifery (GNM)",
      image: "/images/gnm.jpg",
      duration: "3 Years",
      desc: "Strong nursing foundation and patient care training."
    },

    bhm: {
      title: "Bachelor in Hotel Management (BHM)",
      image: "/images/bhm.jpg",
      duration: "3 Years",
      desc: "Hospitality and hotel operations management."
    },

    mhm: {
      title: "Masters in Hotel Management (MHM)",
      image: "/images/mhm.jpg",
      duration: "2 Years",
      desc: "Advanced hospitality leadership and operations."
    },

    bba: {
      title: "Bachelor of Business Administration (BBA)",
      image: "/images/bba.jpg",
      duration: "3 Years",
      desc: "Business, finance and entrepreneurship education."
    },

    bttm: {
      title: "Bachelor in Tourism & Travel Management (BTTM)",
      image: "/images/bttm.jpg",
      duration: "3 Years",
      desc: "Tourism and travel industry management course."
    },

    pbbsc: {
      title: "PB BSc Nursing",
      image: "/images/pbbsc.jpg",
      duration: "2 Years",
      desc: "Post Basic Bachelor of Science in Nursing with advanced clinical and healthcare training."
    }

  };

  const course = data[decodeURIComponent(courseName)];

  if (!course) {

    return (

      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          fontWeight: "bold"
        }}
      >
        Course Not Found
      </div>

    );

  }

  return (

    <main className="coursesPage">

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

      <section className="coursesHero">

        <div className="overlay"></div>

        <div className="coursesHeroContent">

          <h1>{course.title}</h1>

          <p>
            Professional Program Details
          </p>

        </div>

      </section>

      <section className="about">

        <div className="aboutImage">

          <img src={course.image} alt={course.title} />

        </div>

        <div className="aboutContent">

          <h2>{course.title}</h2>

          <p>{course.desc}</p>

          <div className="aboutCards">

            <div className="aboutCard">
              <h3>{course.duration}</h3>
              <p>Course Duration</p>
            </div>

            <div className="aboutCard">
              <h3>100%</h3>
              <p>Practical Training</p>
            </div>

            <div className="aboutCard">
              <h3>2026</h3>
              <p>Admissions Open</p>
            </div>

          </div>

          <div
            style={{
              marginTop: "35px"
            }}
          >

            <Link href="/admission">

              <button className="applyBtn">
                Apply For Admission
              </button>

            </Link>

          </div>

        </div>

      </section>

      <QuickLinks />

    </main>

  );

}