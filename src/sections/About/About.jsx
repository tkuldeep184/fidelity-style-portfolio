import aboutImage from "../../assets/about_1.jpeg";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">

        {/* CARD */}
        <div className="relative flex min-h-[350px] bg-white shadow-sm">

          {/* TEXT SECTION */}
          <div className="w-[60%] px-12 py-10">
            <h2 className="text-[28px] font-light leading-snug text-gray-800">
              About Me
            </h2>

            <p className="mt-5 max-w-[480px] text-base leading-relaxed text-gray-700">
              I am a web developer with experience across both frontend and backend development, building web applications using modern frameworks and tools. I take a disciplined approach to writing clean, maintainable code and creating interfaces that are simple and reliable.
            </p>

            <a
              href="https://drive.google.com/file/d/1etguMg756MclcuEfmQiTCsIIy4d6gE_N/view?usp=sharing"
              className="mt-8 inline-block bg-primary px-6 py-3 text-base font-light text-white hover:bg-blue-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>

          {/* IMAGE SECTION (ABSOLUTE, OVERLAPPING) */}
          <div className="absolute top-0 right-0 h-full w-[40%]">
            <img
              src={aboutImage}
              alt="Security illustration"
              className="mt-8 ml-12 h-[80%] w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
