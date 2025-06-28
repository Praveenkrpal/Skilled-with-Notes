

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Praveen Kumar",
      role: "Lead Frontend Developer",
      bio: "React specialist crafting beautiful interfaces with Tailwind CSS and modern web technologies.",
      image: "./images/praveen image.jpg",
      social: {
        github: "https://github.com/Praveenkrpal",
        linkedin: "https://www.linkedin.com/in/praveen-kumar-b72195256/",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Lakshay Sawariya",
      role: "Frontend Developer",
      bio: "Creates intuitive user experiences with focus on accessibility and design systems.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-violet-700 mb-2">
            About Skilled-with-Notes
          </h1>
          <p className="text-gray-600">
            The modern note-taking platform built by developers, for learners
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8 border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team collaborating on project"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="text-xl font-semibold text-violet-700 mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Our Story
              </h2>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Skilled-with-Notes began in 2023 when we noticed students
                  struggling with disorganized notes. As developers, we saw an
                  opportunity to create a better solution.
                </p>
                <p>
                  Our platform combines the efficiency of digital note-taking
                  with powerful organization tools, helping learners focus on
                  what matters most - understanding concepts.
                </p>
                <p>
                  Today, we serve thousands of users worldwide, continuously
                  improving based on their feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-xl font-semibold text-violet-700 mb-5 text-center">
          Meet Our Frontend Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-100"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-violet-600 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-violet-600 text-xs font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs mb-2">{member.bio}</p>
                  <div className="flex space-x-2">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={14} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={14} />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={14} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-violet-600 transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-violet-50 rounded-lg p-5 border border-violet-100">
          <h2 className="text-lg font-semibold text-violet-700 mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm">
            To build the most intuitive, accessible note-taking interface that
            disappears in use - letting your ideas flow naturally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
