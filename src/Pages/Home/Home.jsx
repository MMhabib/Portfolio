
import './Home.css'
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header>
      
      <section className="flex flex-col items-center justify-center sec1 p-8 bg-gray-100 h-full mt-10 border-cyan-200">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full max-w-4xl">
         
        <div className="flex flex-col items-center mb-4  md:mb-0 md:mr-8">
  <div className="card card-compact h-96 w-72 bg-base-100 shadow-xl">
    <figure className="h-full w-full">
      <img src="/src/assets/Picsart_24-04-04_00-02-31-240.jpg" alt="Profile" className="object-cover h-full w-full rounded-t-lg" />
    </figure>
    
  </div>
  <a href="/src/assets/HabibResume.pdf" download className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
    Download CV
  </a>
</div>
          <div className="flex flex-col items-center md:items-start text-center ml-10 border-2 border-sky-500 mt-10 md:text-left">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg max-w-2xl p-6 mt-16 mb-16">
              I am a web developer with a passion for creating beautiful and functional web applications. 
              My skills include HTML, CSS, JavaScript, React, Express, and Node.js. I am currently researching satellite constellations using blockchain technology for enhanced security.
            </p>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Home;