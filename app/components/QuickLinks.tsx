import Link from "next/link";

export default function QuickLinks() {

  return (

    <section className="quickLinksSection">

      <div className="quickLinksGrid">

        <div className="quickColumn">

          <h2>ADDRESS</h2>

          <div className="footerLine"></div>

          <p>
            Franklin Institute of Healthcare & Management
          </p>

          <p>
            Plot No.1371/7379/928, Satya Vihar, Rasulgarh, Bhubaneswar – 751010
          </p>

          <p>
            Pin Code - 751010
          </p>

          <p>
            info@franklininstitute.com
          </p>

        </div>

        <div className="quickColumn">

          <h2>QUICK LINKS</h2>

          <div className="footerLine"></div>

          <ul>

            <li><Link href="/">Home</Link></li>

            <li><Link href="/courses">All Courses</Link></li>

            <li><Link href="/admission">Admissions Open</Link></li>

            <li><a href="#">Parent / Student Login</a></li>

            <li><a href="#">Mandatory Disclosure</a></li>

            <li><a href="#">Online Feedback</a></li>

            <li><a href="#">Code of Conduct</a></li>

          </ul>

        </div>

        <div className="quickColumn">

          <h2>IMPORTANT LINKS</h2>

          <div className="footerLine"></div>

          <ul>

            <li><a href="#">Anti Ragging</a></li>

            <li><a href="#">NIRF 2026</a></li>

            <li><a href="#">Placement Policy</a></li>

            <li><a href="#">Strategic Plan</a></li>

            <li><a href="#">Budget Allocation</a></li>

            <li><a href="#">RTI Act</a></li>

            <li><a href="#">Grievance Redressal</a></li>

          </ul>

        </div>

      </div>

    </section>

  );

}