import experienceImage from "../../assets/nagarro.png";

function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* CARD */}
        <div className="relative flex min-h-[350px] bg-gray-100 shadow-sm">
          {/* IMAGE SECTION */}
          <div className="absolute top-0 left-[-120px] h-full w-[40%] ">
            <img
              src={experienceImage}
              alt="Experience illustration"
              className="mt-8 ml-12 h-[80%] w-full object-cover border-2 border-gray-100"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="w-[60%] px-12 py-10 ml-auto">
            <h2 className="text-[28px] font-light leading-snug text-gray-800">
              My Experience
            </h2>

            <p className="mt-5 max-w-[480px] text-base leading-relaxed text-gray-700">
              During my internship at{" "}
              <span className="font-bold">Nagarro</span> (July 2024 – August 2024),
              I focused on learning and understanding modern web development
              practices in a professional environment. I gained hands-on exposure
              to full-stack development concepts, responsive design principles,
              and debugging workflows while working with and development tools.
            </p>

            <a
              href="https://drive.google.com/file/d/1-ZqxGGmBUufveBOcHxpDT2-jAyLkR0Bu/view?usp=sharing"
              className="mt-8 inline-block bg-primary px-6 py-3 text-base font-light text-white hover:bg-blue-900 transition"
            >
              Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
