import { Link } from "react-router-dom";
import resume from "../assets/PRAVEEN-NEGI-RESUME.pdf";

const CTA = () => {
  return (
    <section className="cta">

      <div className="">
      <Link to="/contact" className="btn">
        Contact
      </Link>
      </div>

      <a href={resume} download>
        <div className="btn cursor-pointer bg-blue-500 text-white px-4 py-2 
        rounded-md hover:bg-blue-900 transition duration-300 ease-in-out">
          Resume
        </div>
      </a>
    </section>
  );
};

export default CTA;
