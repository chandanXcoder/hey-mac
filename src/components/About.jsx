import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Rocket, ShieldCheck, HeartHandshake } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals and organizations by delivering innovative, reliable, and seamless digital experiences that inspire transformation.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "Building a connected world driven by creativity, technology, and purpose — shaping the digital future together.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A passionate blend of developers, designers, and dreamers dedicated to pushing boundaries and achieving excellence.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We constantly evolve, experiment, and explore new technologies to stay ahead in a rapidly changing digital era.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description:
        "Your trust is our priority — we ensure secure, consistent, and efficient solutions at every level.",
    },
    {
      icon: HeartHandshake,
      title: "Collaboration",
      description:
        "We believe success is built together — through teamwork, transparency, and mutual respect.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* 🔹 Background Glow Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* 🔹 Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We craft intelligent and interactive experiences that redefine how technology connects with people.
        </p>
      </motion.div>

      {/* 🔹 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* 🔹 Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default About;
