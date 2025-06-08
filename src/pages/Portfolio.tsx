import { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Web Apps", "E-commerce", "APIs", "Mobile"];

  const projects = [
    {
      id: 1,
      title: "Stock Nest",
      category: "Web Apps",
      description:
        "A comprehensive Business management System with Financial Tracking, Team Management, Analytics and Reports and much more. Use Stock Nest Today👇",
      image: "/api/placeholder/400/300",
      technologies: [
        "React",
        "Node.js & Express",
        "MongoDB",
        "Socket.io",
        "Cloudflare",
        "Render",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/NY-Henry",
      features: [
        "Stock Management",
        "Advanced analytics",
        "Team management",
        "Financial Tracking",
      ],
    },
    {
      id: 2,
      title: "ShopSmart E-commerce",
      category: "E-commerce",
      description:
        "Modern e-commerce platform with advanced search, payment processing, and inventory management.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Cloudflare"],
      liveUrl: "#",
      githubUrl: "https://github.com/NY-Henry",
      features: [
        "Payment processing",
        "Inventory tracking",
        "Admin dashboard",
        "Mobile responsive",
      ],
    },
    // {
    //   id: 3,
    //   title: "FinanceAPI Gateway",
    //   category: "APIs",
    //   description:
    //     "RESTful API for financial data aggregation with rate limiting, authentication, and comprehensive documentation.",
    //   image: "/api/placeholder/400/300",
    //   technologies: ["Express.js", "JWT", "Redis", "Docker", "Swagger"],
    //   liveUrl: "https://finance-api-docs.com",
    //   githubUrl: "https://github.com/nyhenry/finance-api",
    //   features: [
    //     "Rate limiting",
    //     "JWT authentication",
    //     "API documentation",
    //     "Data caching",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "HealthTracker Mobile",
    //   category: "Mobile",
    //   description:
    //     "Progressive Web App for health and fitness tracking with offline capabilities and push notifications.",
    //   image: "/api/placeholder/400/300",
    //   technologies: [
    //     "React",
    //     "PWA",
    //     "IndexedDB",
    //     "Chart.js",
    //     "Service Workers",
    //   ],
    //   liveUrl: "https://healthtracker-pwa.com",
    //   githubUrl: "https://github.com/nyhenry/health-tracker",
    //   features: [
    //     "Offline support",
    //     "Push notifications",
    //     "Data visualization",
    //     "Goal tracking",
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "CryptoPortfolio Dashboard",
    //   category: "Web Apps",
    //   description:
    //     "Real-time cryptocurrency portfolio tracker with advanced charting and portfolio analysis tools.",
    //   image: "/api/placeholder/400/300",
    //   technologies: ["Vue.js", "WebSockets", "D3.js", "Python", "PostgreSQL"],
    //   liveUrl: "https://crypto-portfolio-demo.com",
    //   githubUrl: "https://github.com/nyhenry/crypto-portfolio",
    //   features: [
    //     "Real-time data",
    //     "Advanced charts",
    //     "Portfolio analysis",
    //     "Price alerts",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "EduPlatform LMS",
    //   category: "Web Apps",
    //   description:
    //     "Learning Management System with course creation, student progress tracking, and interactive content.",
    //   image: "/api/placeholder/400/300",
    //   technologies: ["React", "Node.js", "MongoDB", "AWS S3", "FFmpeg"],
    //   liveUrl: "https://eduplatform-demo.com",
    //   githubUrl: "https://github.com/nyhenry/edu-platform",
    //   features: [
    //     "Course creation",
    //     "Video streaming",
    //     "Progress tracking",
    //     "Interactive quizzes",
    //   ],
    // },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-primary-color">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in modern web
            development, from concept to deployment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-primary-color text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-primary-color bg-orange-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-color hover:text-primary-hover font-medium text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="bg-black text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Impact</h2>
            <p className="text-gray-300">Real results from real projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-color mb-2">
                10+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-color mb-2">
                99%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-color mb-2">
                24/7
              </div>
              <div className="text-gray-300">Uptime Average</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-color mb-2">
                300%
              </div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that exceeds your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-black cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="border-2 cursor-pointer border-primary-color text-primary-color px-8 py-3 rounded-lg hover:bg-primary-color hover:text-white transition-colors duration-200 font-medium"
            >
              View All Projects
            </button>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="w-full h-64 bg-gradient-primary flex items-center justify-center mb-6 rounded-lg">
                <span className="text-6xl font-bold text-white">
                  {selectedProject.title.charAt(0)}
                </span>
              </div>

              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary-color rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-color text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium"
                >
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
