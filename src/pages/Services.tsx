import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CogIcon,
  ShoppingCartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  // controll the services from here
  const services = [
    {
      icon: <CodeBracketIcon className="w-12 h-12 text-primary-color" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, Node.js & Express. Scalable, secure, and optimized for performance with cutting-edge technologies.",
      features: [
        "React & Next.js Applications",
        "Node.js & Express Backend",
        "TypeScript/JavaScript",
        "Database Design & Integration",
        "Cloud Deployment & Hosting",
        "Ongoing Maintenance & Support",
      ],
      price: "Starting at UGX 1,500,000",
      duration: "2-6 weeks (Depending on the project)",
      technologies: [
        "React",
        // "Next.js",
        "TypeScript",
        "Node.js",
        "DataBase Design",
        "BaaS",
        "Cloudflare Workers",
        "Hosting Platforms",
      ],
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12 text-primary-color" />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications and Progressive Web Apps (PWA) that deliver native-like experiences across iOS and Android devices.",
      features: [
        "React Native Development",
        "Progressive Web Apps (PWA)",
        "Cross-Platform Compatibility",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
      ],
      price: "Starting at UGX 2,000,000",
      duration: "4-10 weeks (Depending on the project)",
      technologies: ["React Native", "Expo", "PWA", "Firebase", "Zustand"],
    },
    {
      icon: <CloudIcon className="w-12 h-12 text-primary-color" />,
      title: "Cloud Solutions",
      description:
        "Deploy and scale your applications on AWS, Google Cloud, or Azure with automated CI/CD pipelines and infrastructure as code for maximum reliability.",
      features: [
        "Multi-Cloud Deployment (AWS/GCP/Azure)",
        "Docker & Kubernetes Orchestration",
        "CI/CD Pipeline Setup",
        "Auto-scaling & Load Balancing",
        "Monitoring & Logging",
        "Infrastructure as Code",
      ],
      price: "Starting at UGX 6,000,000",
      duration: "1-3 weeks",
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      icon: <CogIcon className="w-12 h-12 text-primary-color" />,
      title: "API Development",
      description:
        "Robust RESTful APIs and GraphQL endpoints with comprehensive documentation. Seamless third-party integrations and microservices architecture.",
      features: [
        "REST & GraphQL APIs",
        "Microservices Architecture",
        "Comprehensive API Documentation",
        "Third-party Service Integrations",
        "Authentication & Authorization",
        "Rate Limiting & Security",
      ],
      price: "Starting at UGX 3,500,000",
      duration: "2-4 weeks",
      technologies: [
        "Node.js",
        "Express",
        "GraphQL",
        "JWT",
        "Swagger",
        "Postman",
      ],
    },
    {
      icon: <ShoppingCartIcon className="w-12 h-12 text-primary-color" />,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms with advanced payment processing, inventory management, analytics, and intuitive admin dashboards for business growth.",
      features: [
        "Multi-Payment Gateway Integration",
        "Advanced Inventory Management",
        "Comprehensive Admin Dashboard",
        "Order & Customer Management",
        "Analytics & Reporting",
        "SEO & Marketing Tools",
      ],
      price: "Starting at UGX 5,000,000",
      duration: "6-12 weeks",
      technologies: [
        "Next.js",
        "Stripe",
        "PayPal",
        "Shopify API",
        "Analytics",
        "CMS",
      ],
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-primary-color" />,
      title: "Performance Optimization",
      description:
        "Comprehensive audit and optimization of existing applications for superior performance, enhanced SEO rankings, and exceptional user experience.",
      features: [
        "Complete Performance Audit",
        "Advanced SEO Optimization",
        "Core Web Vitals Improvement",
        "Code Splitting & Lazy Loading",
        "Database Query Optimization",
        "Accessibility Compliance",
      ],
      price: "Starting at UGX 1,000,000",
      duration: "1-2 weeks",
      technologies: [
        "Lighthouse",
        "GTmetrix",
        "Webpack",
        "Next.js",
        "React",
        "SEO Tools",
      ],
    },
  ];

  // Controll the proceses from here
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We discuss your requirements, goals, and timeline. I analyze your needs and create a detailed project plan.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "I design the system architecture and create wireframes/mockups. Technical specifications are documented.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development with regular updates. Clean, tested code following best practices and industry standards.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description:
        "Comprehensive testing, performance optimization, and deployment to your chosen platform.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description:
        "Post-launch support, monitoring, and maintenance to ensure your application runs smoothly. (Extra costs)",
    },
  ];

  // Controll the testimonials from here
  const testimonials = [
    {
      name: "Ainebyoona Benjamin",
      company: "Bekarplastics FortPOrtal.",
      text: "NY Henry delivered an exceptional web application that exceeded our expectations. Professional, reliable, and highly skilled.",
      rating: 5,
    },
    // {
    //   name: "Michael Chen",
    //   company: "E-commerce Plus",
    //   text: "The e-commerce platform Henry built for us increased our sales by 300%. Outstanding work and great communication.",
    //   rating: 5,
    // },
    {
      name: "Linus",
      company: "CF Financial services",
      text: "Working with Henry was a pleasure. He understood our requirements perfectly and delivered on time and within budget.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-primary-color">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive web development
            & Software services that help businesses succeed in the digital
            world.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-color rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Duration:{" "}
                  </span>
                  <span className="text-sm text-gray-700">
                    {service.duration}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-500 block mb-2">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-primary-color font-bold text-lg mb-4">
                  {service.price}
                </div>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full cursor-pointer bg-primary-color text-white py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              My Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and
              successful project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-color text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary-color text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-color -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-lg">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white cursopo text-primary-color px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Let's Do This 🚀
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
