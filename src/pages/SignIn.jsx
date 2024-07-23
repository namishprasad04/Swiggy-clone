export default function SignIn() {
  return (
    <div>
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 p-5 shadow-2xl">
          <div className="flex gap-3 justify-center items-center">
            <button className="mt-6 text-center text-xl font-bold tracking-tight bg-orange-500 rounded-full text-white py-2 px-5 cursor-pointer">
              Sign In
            </button>
            <button className="mt-6 text-center text-xl font-bold tracking-tight bg-orange-500 rounded-full text-white py-2 px-5 cursor-pointer">
                Log In
            </button>
          </div>
          <form className="space-y-6" action="" method="POST">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  autoComplete="tel"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#fc8019] focus:outline-none focus:ring-[#fc8019] sm:text-sm"
                  placeholder="Enter your phone number"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#fc8019] focus:outline-none focus:ring-[#fc8019] sm:text-sm"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  autoComplete="name"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#fc8019] focus:outline-none focus:ring-[#fc8019] sm:text-sm"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div>
              <button
                // type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#fc8019] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#e67d19] focus:outline-none focus:ring-2 focus:ring-[#fc8019] focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
