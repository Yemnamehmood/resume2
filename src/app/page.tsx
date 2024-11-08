'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaLinkedin , } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Languages', id: 'languages' },
  { name: 'Hobbies', id: 'hobbies' },
  {name: 'Certifications', id:'certifications'}
];

const Home = () => {
  const [activeSection,setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <header className="bg-gray-800 p-4 shadow-md">
        <nav className="flex justify-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`hover:text-teal-400 transition transform hover:scale-105 ${
              activeSection === section.id? 'text-teal-400 font-bold' : ''}`}

            >
              {section.name}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6">
      
         <section id="home" className="text-center py-20">
          <h1 className="text-6xl font-bold font-serif m-9"> Welcome To My Portfolio </h1>
          <br/>
          <h2 className="text-5xl font-extrabold animate-pulse">Yemna Mehmood</h2>
          <p className="text-lg mt-2">Software Developer | Creating immersive digital experiences

| Tech Enthusiast</p>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        



        <section id="about" className="py-20 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="flex flex-col items-center">
            <Image src="/WhatsApp Image 2024-10-27 at 3.12.26 AM.jpeg" alt="Profile Picture" width={150} height={150} className="rounded-full" />
            <p className="mt-4 text-center">
              I am a dynamic professional with a background in teaching and software development.
              My skills include JavaScript, TypeScript, Tailwind CSS, Next.js, and React.js.
              I am dedicated to fostering collaborative environments and adapting to various roles.
              My goal is to leverage my skills to drive growth within any organization.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/yemna-mehmood-75aa2422b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-teal-400 text-3xl hover:text-teal-300 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://github.com/Yemnamehmood?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-300 text-3xl hover:text-gray-400 transition-transform transform hover:scale-110" />
              </a>
            </div>
            <p className="mt-4">
              Email: <a href="mailto:Yamnachohan50@gmail.com" className="text-teal-400">Yamnachohan50@gmail.com</a>
            </p>
            <p className="mt-2">
              Vercel: <a href="https://vercel.com/yemna-mehmoods-projects" className="text-teal-400">Deployed Projects</a>
            </p>
          </div>
        </section>

        <section id="projects" className="py-20">
  <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
  
  {/* Projects Section */}
  <div className="space-y-6 mb-12">
    <h3 className="text-3xl font-semibold">Explore My Projects</h3>
    <p className="mb-4">Here&apos;s a showcase of some of the projects I&apos;ve worked on:</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example Project Cards - Repeat as needed */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Currency Converter</h4>
        <p className="text-gray-300 mb-4"> A simple application that allows users to convert currencies using real-time exchange rates.</p>
        <a href="https://currency-converter-app-three-omega.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Notes App</h4>
        <p className="text-gray-300 mb-4">A web application for taking and managing notes efficiently.</p>
        <a href="https://notes-app-by-yemna.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> GitHub Profile Viewer</h4>
        <p className="text-gray-300 mb-4">An app to view GitHub profiles and repositories with detailed information.</p>
        <a href="https://github-profile-viewer-project-pnwm.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Recipe Search App</h4>
        <p className="text-gray-300 mb-4"> Search delicious recipes through this app.</p>
        <a href="https://recipe-search-app-byyemna.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Meme Generator App</h4>
        <p className="text-gray-300 mb-4">Create your own memes using a simple interface with image uploads.</p>
        <a href="https://meme-generator-app-by-yemna.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Movie Search App</h4>
        <p className="text-gray-300 mb-4">Search for movies and view details using a movie database API..</p>
        <a href="https://movie-search-app-byyemna.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Expence Tracker App</h4>
        <p className="text-gray-300 mb-4">Track your expenses and manage your budget easily.</p>
        <a href="https://expense-tracker-project-one.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Pomodoro Timer App </h4>
        <p className="text-gray-300 mb-4">A productivity tool that implements the Pomodoro technique to manage work sessions.</p>
        <a href="https://pomodoro-timer-sand-beta.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105">
        <h4 className="text-2xl font-semibold mb-2"> Html Previewer App</h4>
        <p className="text-gray-300 mb-4">Preview HTML code live as you type, great for learning and testing HTML snippets.</p>
        <a href="https://html-previewer-project.vercel.app/" className="text-teal-400 underline">View Project</a>
      </div>
    </div>
  </div>

  {/* Websites Section - Carousel */}
  <div className="space-y-6">
    <h3 className="text-3xl font-semibold">Website Portfolio</h3>
    <p className="mb-4">Take a look at my deployed websites:</p>
    
    {/* Carousel Container */}
    <div className="carousel-container">
      {/* Carousel Item */}
      <div className="carousel-item bg-gray-800 rounded-lg p-6 shadow-lg relative">
        <h4 className="text-2xl font-semibold"> Handmade Crafts </h4>
        <a href="https://handmade-crafts-madeby-yemna.vercel.app/" className="text-teal-400 underline">Visit Website</a>
      </div>
      
      <div className="carousel-item bg-gray-800 rounded-lg p-6 shadow-lg relative">
        <h4 className="text-2xl font-semibold"> Fusion mart </h4>
        <a href="https://fusion-mart-by-yemna.vercel.app/" className="text-teal-400 underline">Visit Website</a>
      </div>
      <div className="carousel-item bg-gray-800 rounded-lg p-6 shadow-lg relative">
        <h4 className="text-2xl font-semibold"> Teachers Day </h4>
        <a href="https://teachers-day-tribute-to-sir-hamzah-auez.vercel.app/" className="text-teal-400 underline">Visit Website</a>
      </div>
      <div className="carousel-item bg-gray-800 rounded-lg p-6 shadow-lg relative">
        <h4 className="text-2xl font-semibold"> Skin prodcuts </h4>
        <a href="https://skin-products-website.vercel.app/" className="text-teal-400 underline">Visit Website</a>
      </div>
    </div>
  </div>
</section>




        <section id="education" className="py-20 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <br/>
            <li> Undergraduate: Bachelor&apos;s in Banking and Finance from SMIU (in progress)</li>
            <li> Intermediate: Icom from Government College for Commerce and Economics (2019)</li>
            <li >Matriculation from Neelos and Maha School, Karachi (2017)</li>
          </ul>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <br/>
            <li>6 years as an English Language Teacher at ECube Institute (2019-2024)</li>
            <li>3 years as a Nursery Teacher at ECube School (2019-2022)</li>
            <li>2 years as a Home Tutor</li>
            <li> Freelance | self-employed (2024)</li>
          </ul>
        </section>

        <section id="skills" className="py-20 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <FaHtml5 className="text-5xl mx-auto mb-2 hover:scale-110 " />
              <p>HTML5</p>
            </div>
            <div>
              <FaCss3Alt className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>CSS3</p>
            </div>
            <div>
              <FaJsSquare className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>JavaScript</p>
            </div>
            <div>
              <SiTypescript className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>TypeScript</p>
            </div>
            <div>
              <FaReact className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>React.js</p>
            </div>
            <div>
              <SiTailwindcss className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>Tailwind CSS</p>
            </div>
            <div>
              <FaNodeJs className="text-5xl mx-auto mb-2 hover:scale-110" />
              <p>Node.js</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>Excellent communication skills, teamwork, and adaptability.</p>
            <p> Amazon virtual Assistant.</p>
            <p> Ms Office.</p>
          </div>
        </section>

        <section id="languages" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-4">Languages</h2>
          <p>Fluent in:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>English</li>
            <li>Urdu</li>
          </ul>
        </section>

        <section id="hobbies" className="py-20 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4">Hobbies</h2>
          <p>I enjoy reading books, exploring new technologies, and engaging in outdoor activities. I believe that pursuing hobbies helps maintain a healthy work-life balance.</p>
        </section>

        <section id="certifications" className="border-t border-gray-800 py-20 ">
         <h2 className="text-4xl font-bold text-center mb-4">Certifications & Recent Activities</h2>
         <ul className="list-disc list-inside space-y-2">
          <br/>
          <li>Certificate in English Language</li>
          <li>Certificate in Digital Marketing</li>
          <li>Certificate in Amazon Virtual Assitant</li>
         <li>Invigilator for MDCAT Exam at NED University (2024)</li>
       </ul>
      </section>
 </main>

      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Yemna Mehmood. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
