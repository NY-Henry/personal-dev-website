import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { lazy } from "react";

const MusicSnippet = lazy(() => import("../components/MusicSnippet"));

const About = () => {
  // Controll the experience from here
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Stock Nest Innovations Inc.",
      period: "2024 - Present",
      description:
        "Lead development of enterprise applications using React, Node.js, and Cloudflare, etc.",
    },
    // {
    //   title: "Full-Stack Developer",
    //   company: "Digital Solutions LLC",
    //   period: "2020 - 2022",
    //   description:
    //     "Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40%.",
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   period: "2019 - 2020",
    //   description:
    //     "Built responsive web applications using React and TypeScript. Collaborated with design teams to create exceptional user experiences.",
    // },
  ];

  // Controll Education From here
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "Ndejje University",
      year: "2023 - 2027",
      description:
        "Specialized in software engineering, Machine Learning & Data Science, Mobile developmemnt and web development.",
    },
  ];

  // controll certifications Here
  const certifications = [
    "Google Cloud Professional Developer",
    "React Developer Certification",
    "Node.js Certified Developer",
    "AWS Certified Solutions Architect",
  ];

  // Control core values from here
  const coreValues = [
    {
      icon: "🎯",
      title: "Quality First",
      description:
        "I believe in writing clean, maintainable code that stands the test of time. Every line is crafted with purpose and precision.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Great software is built by great teams. I thrive in collaborative environments and believe in transparent communication.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "I stay ahead of technology trends to deliver cutting-edge solutions that give my clients a competitive advantage.",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Hero Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-color">NY Henry</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate full-stack developer with 3+ years of experience creating
            innovative web solutions that drive business growth and user
            engagement.
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                My passion for technology started early, but it was during my
                computer science(Software Engineering) studies at{" "}
                <a
                  href="https://ndejjeuniversity.ac.ug/"
                  key={"Ndejje University"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary-color underline transition-colors duration-200"
                >
                  NDU
                </a>{" "}
                that I discovered my love for web development. What began as
                curiosity about how websites work evolved into a career
                dedicated to creating exceptional digital experiences.
              </p>
              <p>
                Over the past 4 years, I've had the privilege of working with
                startups, established companies, and individual entrepreneurs.
                Each project has taught me something new and reinforced my
                belief that great software isn't just about clean code—it's
                about solving real problems for real people in the real world.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest tech
                trends, contributing to open-source projects, or making music, I
                love making music- check out my{" "}
                <a
                  href="https://www.youtube.com/@nyhenry"
                  key={"Ndejje University"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary-color underline transition-colors duration-200"
                >
                  YOUTUBE CHANNEL
                </a>{" "}
                for more.
              </p>
            </div>
          </div>
          <MusicSnippet />
          {/* <div className="lg:text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg">
              <div className="w-72 h-72 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-8xl font-bold text-white">NH</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <BriefcaseIcon className="w-8 h-8 text-primary-color mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-color"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <span className="text-primary-color font-medium">
                    {job.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 mb-3">{job.company}</h4>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <AcademicCapIcon className="w-8 h-8 text-primary-color mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-primary-color font-medium">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 mb-3">{edu.school}</h4>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <TrophyIcon className="w-8 h-8 text-primary-color mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-color rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
