import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-caramel">Echoes of Africa</h3>
            <p className="text-sm font-teresa">Unveiling the Untold Stories of African Resistance</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-accent transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-accent transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-accent transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-prata mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-accent transition-colors duration-200">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-accent transition-colors duration-200">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link to="/folklore" className="hover:text-accent transition-colors duration-200">
                  Folklore
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-prata mb-4">Story Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stories?era=pre-colonial" className="hover:text-accent transition-colors duration-200">
                  Pre-colonial Era
                </Link>
              </li>
              <li>
                <Link to="/stories?era=colonial" className="hover:text-accent transition-colors duration-200">
                  Colonial Era
                </Link>
              </li>
              <li>
                <Link to="/stories?era=post-colonial" className="hover:text-accent transition-colors duration-200">
                  Post-colonial Era
                </Link>
              </li>
              <li>
                <Link to="/premium" className="hover:text-accent transition-colors duration-200">
                  Premium Content
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-prata mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:contact@echoesofafrica.com"
                  className="hover:text-accent transition-colors duration-200"
                >
                  contact@echoesofafrica.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+254123456789" className="hover:text-accent transition-colors duration-200">
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-accent pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm font-teresa">
              &copy; {new Date().getFullYear()} Echoes of Africa. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm hover:text-accent transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

