import { FaBrain, FaUsers, FaChartLine } from "react-icons/fa";

function Features() {
  return (
    <section className="relative bg-gray-200 z-20 shadow-[0_-6px_12px_rgba(0,0,0,0.04)] font-sans font-light">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          <div className="p-8 border border-gray-300 bg-white transition-colors duration-300 hover:bg-gray-300 group">
            <FaBrain className="mb-4 text-3xl text-blue-500" />
            <h3 className="text-xl text-gray-900 transition-colors duration-300 group-hover:text-blue-700">Problem Solver</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              I love tackling complex challenges. When I hit a bug or a logic error, I don't get frustrated; I get curious and dig until I find the solution.
            </p>
          </div>

          <div className="p-8 border border-gray-300 bg-white transition-colors duration-300 hover:bg-gray-300 group">
            <FaUsers className="mb-4 text-3xl text-green-500" />
            <h3 className="text-xl text-gray-900 transition-colors duration-300 group-hover:text-green-700">Team Player</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Great software is built by great teams. I communicate clearly, document my work, and believe in giving and receiving constructive feedback.
            </p>
          </div>

          <div className="p-8 border border-gray-300 bg-white transition-colors duration-300 hover:bg-gray-300 group">
            <FaChartLine className="mb-4 text-3xl text-purple-500" />
            <h3 className="text-xl  text-gray-900 transition-colors duration-300 group-hover:text-purple-700">Lifelong Learner</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Technology moves fast. I am constantly upskilling in new frameworks and best practices to ensure I bring the most modern solutions to the table.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
