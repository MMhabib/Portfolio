export default function HomeComponent() {
    return (
        <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
          <header className="flex justify-between items-center p-5">
            <div className="text-2xl font-bold">
              Developer <span className="text-blue-500">X.</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">About</a>
              <a href="#" className="hover:text-blue-500">Services</a>
              <a href="#" className="hover:text-blue-500">Portfolio</a>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </nav>
            <button className="hidden md:block border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
              Contact me
            </button>
          </header>
          <div className="flex flex-1 flex-col md:flex-row items-center justify-center p-5">
            <div className="text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-4xl font-bold">Hi, There!</h2>
              <h1 className="text-5xl font-bold">I'm <span className="text-blue-500">Tahmid Hamim</span></h1>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis pretium bibendum nisi est sagittis aliquam pretium.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-blue-500"><img src="https://placehold.co/24x24" alt="Facebook" /></a>
                <a href="#" className="text-blue-500"><img src="https://placehold.co/24x24" alt="Instagram" /></a>
                <a href="#" className="text-blue-500"><img src="https://placehold.co/24x24" alt="Twitter" /></a>
                <a href="#" className="text-blue-500"><img src="https://placehold.co/24x24" alt="YouTube" /></a>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Hire me</button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Download CV</button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
            <img src="https://i.ibb.co/09RgT5h/profile.png" alt="profile"  className="rounded-full mx-auto md:mx-0" />
            </div>
          </div>
        </div>
    )
}
