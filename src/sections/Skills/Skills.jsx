import { AcademicCapIcon, WrenchScrewdriverIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center text-blue-500 mb-14 tracking-tight drop-shadow-lg">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Languages */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-yellow-300">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-7 w-7 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold text-blue-800">Languages</h3>
            </div>
            <ul className="space-y-2 text-gray-700 font-medium">
              {['Python', 'C++', 'HTML/CSS', 'JavaScript', 'VHDL', 'Verilog', 'SQL'].map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 group-hover:text-blue-600" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tools */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-green-400">
            <div className="flex items-center mb-4">
              <WrenchScrewdriverIcon className="h-7 w-7 text-green-500 mr-2" />
              <h3 className="text-2xl font-semibold text-green-800">Tools</h3>
            </div>
            <ul className="space-y-2 text-gray-700 font-medium">
              {['VS Code', 'Git & GitHub', 'npm', 'Postman'].map((tool, idx) => (
                <li key={idx} className="flex items-center gap-2 group hover:text-green-500 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 group-hover:text-green-600" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Other Skills */}
          <div className="bg-pink-50 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-pink-300">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-7 w-7 text-purple-500 mr-2" />
              <h3 className="text-2xl font-semibold text-purple-800">Other Skills</h3>
            </div>
            <ul className="space-y-2 text-gray-700 font-medium">
              {['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 'Responsive Web Design'].map((other, idx) => (
                <li key={idx} className="flex items-center gap-2 group hover:text-purple-500 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-purple-400 group-hover:text-purple-600" />
                  <span>{other}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;