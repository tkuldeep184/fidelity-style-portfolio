import aiImageGenerator from "../../assets/ai-image-gen.png";
import foodDelivery from "../../assets/food-del.png";

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl font-light text-center text-gray-800 mb-16">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={aiImageGenerator}
              alt="AI Image Generator"
              className="w-full h-auto object-contain "
            />
            <div className="p-6">
              <h3 className="text-2xl font-light text-gray-800 mb-2">
                AI Image Generator
              </h3>
              <p className="text-gray-600 font-light mb-4">
                A full-stack web application that converts text prompts into
                AI-generated images. Built with React.js and Node.js.
              </p>
              <a
                href="https://ai-image-generator-five-peach.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Vercel
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={foodDelivery}
              alt="Food Delivery Website"
              className="w-full h-auto object-contain  "
            />
            <div className="p-6">
              <h3 className="text-2xl font-light text-gray-800 mb-2">
                Food Delivery Website
              </h3>
              <p className="text-gray-600 font-light mb-4">
                A full-stack food ordering platform with user authentication,
                shopping cart functionality, and Stripe integration.
              </p>
              <a
                href="https://food-delivery.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Vercel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
