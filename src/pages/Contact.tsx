import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    projectType: "web-development",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      details: "contact@nyhenry.dev",
      link: "mailto:contact@nyhenry.dev",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      details: "New York, NY, USA",
      link: null,
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      link: null,
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web applications take 4-12 weeks from start to finish. I provide detailed timelines during the initial consultation.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! I love working with startups and understand the unique challenges they face. I offer flexible payment terms and can work within startup budgets.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Node.js, TypeScript, Python, and modern cloud technologies. I stay current with the latest frameworks and best practices.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer various support packages including bug fixes, updates, monitoring, and feature enhancements. Support terms are discussed during project planning.",
    },
    {
      question: "Can you help with existing projects?",
      answer:
        "Definitely! I can audit existing codebases, optimize performance, add new features, or help migrate to modern technologies.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work <span className="text-primary-color">Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss
            how I can help you build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700">
                    Message sent successfully! I'll get back to you within 24
                    hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="api-development">API Development</option>
                    <option value="consultation">Consultation</option>
                    <option value="maintenance">Maintenance/Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-color text-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary-color mr-3 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-color transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <div className="text-gray-600">{info.details}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-color p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Let's Schedule a Call</h3>
              <p className="mb-4 text-orange-100">
                Prefer to talk? Let's schedule a free 30-minute consultation
                call to discuss your project.
              </p>
              <button className="bg-white text-primary-color px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                Schedule Call
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 mb-4">
                I typically respond to all inquiries within 24 hours, often much
                sooner. For urgent projects, please mention it in your message.
              </p>
              <div className="flex items-center text-primary-color">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span className="font-medium">
                  24/7 availability for urgent matters
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about working with me
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900 text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait! The best time to start your project is now. Let's turn
            your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@nyhenry.dev"
              className="bg-primary-color text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium"
            >
              Email Me Directly
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Call Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
