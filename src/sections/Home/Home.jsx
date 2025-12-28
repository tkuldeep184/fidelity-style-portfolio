function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-100 font-light text-[28px]"
      style={{ backgroundImage: "url('/src/assets/photo3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-xl bg-gray-50 p-10 shadow-lg border border-gray-200">

          <h1 className="text-4xl font-light leading-tight text-gray-900">
            Building reliable, scalable web applications
          </h1>

          <p className="mt-6 text-lg font-light leading-relaxed text-gray-600">
            I’m a web developer with hands-on experience in full-stack and
            frontend engineering, focused on clean architecture, performance,
            and maintainable code.
          </p>

          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block bg-accent px-6 py-3 text-base font-light text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
