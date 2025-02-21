import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-#6A4BB7 text-background">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-caramel">Mau Mau Stories</h3>
            <p className="mt-2 text-sm">Unveiling Untold Stories: The Mau Mau Era</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-background pt-8">
          <p className="text-center text-sm">&copy; 2023 Mau Mau Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

