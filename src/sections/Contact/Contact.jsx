import logo from '../../assets/logo.png'; // Correctly importing the logo

function Contact() {
  return (
    <footer className="bg-gray-100 py-10 border-t border-gray-300">
      <div className="container mx-auto px-6 font-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-light text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-light">Email:</span>{" "}
                <a
                  href="mailto:tkuldeep814@gmail.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  tkuldeep814@gmail.com
                </a>
              </li>
              <li>
                <span className="font-light">Phone:</span>{" "}
                <a
                  href="tel:+8505929865"
                  className="hover:text-blue-500 transition-colors"
                >
                  8505929865
                </a>
              </li>
              <li>
                <span className="font-light">Address:</span>{" "}
                2 Sunday Market, Aya-Nagar, New Delhi, India
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={logo} // Correctly using the imported logo
              alt="Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm text-gray-600">
              © 2025 Kuldeep Singh Thakur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;