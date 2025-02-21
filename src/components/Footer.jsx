import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mau Mau Stories</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Unveiling Untold Stories: The Mau Mau Era</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            &copy; 2023 Mau Mau Stories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

