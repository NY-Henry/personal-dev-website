import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import CodeSnippet from "../components/CodeSnippet";

const Home = () => {
  // Skills are controlled from here
  const skills = [
    "React(Vite) & Next.js",
    "ReactNative & Expo",
    "Node.js & Express",
    "TypeScript",
    "Python",
    "Git & GitHub",
    "PostgreSQL, MySQL & MongoDB",
    "Firebase & Cloudflare",
    "Docker & Kubernetes",
    "GraphQL & REST APIs",
  ];

  // Stats Are Controlled from Here
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Years Experience", value: "3+" },
    { label: "Technologies Mastered", value: "15+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-primary-color">NY Henry</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mt-4 mb-6">
                Full-Stack Developer & Software Engineer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                I craft scalable, high-performance web applications that help
                businesses grow and succeed. From concept to deployment, I
                deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="bg-black  text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium text-center"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary-color text-primary-color px-8 py-3 rounded-lg hover:bg-primary-color hover:text-white transition-colors duration-200 font-medium text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <CodeSnippet />
            {/* <div className="lg:text-right">
              <div className="inline-block p-8 bg-primary-color rounded-2xl shadow-xl">
                <div className="w-64 h-64 bg-gradient-primary rounded-xl flex items-center justify-center">
                  
                  <span className="text-6xl font-bold text-white">NH</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-color mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies I Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I stay current with the latest technologies to deliver
              cutting-edge solutions (Continuously learning)
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-primary-color" />
                  <span className="font-medium text-gray-900">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean,
            efficient, and scalable code.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Start a Project
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
