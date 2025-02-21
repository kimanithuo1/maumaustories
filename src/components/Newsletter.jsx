function Newsletter() {
    return (
      <div className="bg-tertiary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-caramel tracking-tight text-background sm:text-4xl">
            <span className="block">Want more stories?</span>
            <span className="block text-primary">Sign up for our newsletter.</span>
          </h2>
          <div className="mt-8 lg:mt-0 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-background bg-background text-tertiary placeholder-tertiary focus:ring-2 focus:ring-primary focus:border-primary sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-prata rounded-md text-background bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Newsletter
  
  