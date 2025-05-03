import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMoon, FiSun, FiCpu, FiExternalLink, FiArrowRight, FiSend, FiShare2, FiMapPin, FiClock, FiTwitter } from "react-icons/fi";
import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiC, SiCplusplus, SiExpress, SiRender } from "react-icons/si";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const skills = [
        { name: "C", level: 80, icon: <SiC className="text-blue-600" /> },
        { name: "C++", level: 83, icon: <SiCplusplus className="text-indigo-600" /> },
        { name: "JavaScript", level: 80, icon: <IoLogoJavascript className="text-yellow-400" /> },
        { name: "Python", level: 60, icon: <IoLogoPython className="text-blue-500" /> },
        { name: "React", level: 75, icon: <IoLogoReact className="text-blue-400" /> },
        { name: "Node.js", level: 75, icon: <IoLogoNodejs className="text-green-500" /> },
        { name: "Express.js", level: 70, icon: <SiExpress className="text-gray-800 dark:text-white" /> },
        { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-600" /> },
        { name: "Git", level: 80, icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", level: 85, icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "Render", level: 87, icon: <SiRender className="text-purple-600" /> },
        { name: "Docker", level: 40, icon: <FaDocker className="text-blue-500" /> },
    ];


    const projects = [
        {
            title: "Diabetes Prediction Portal",
            description: "Full-stack health analytics portal for diabetes risk prediction based on medical history and symptoms with real-time result analysis and data storage.",
            image: "/diabetes.jpg",
            tech: ["React", "Node.js", "MongoDB", 'Express.js', 'Tailwind Css'],
            github: "https://github.com/JAYANTKUMARGUPTA/Diabetes-Risk-Assessment",
            demo: "https://diabetes-risk-assessment-1.onrender.com/"
        },
        {
            title: "Financial Tracker",
            description: "Personal financial tracking application with real-time expense monitoring and budget management using React and Tailwind CSS.",
            image: "https://plus.unsplash.com/premium_photo-1679923913530-16c91821a213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZpbmFuY2lhbHxlbnwwfHwwfHx8MA%3D%3D",
            tech: ["React", "Tailwind Css"],
            github: "https://github.com/JAYANTKUMARGUPTA/Financial-tracker",
            demo: "https://financial-tracker-jk.netlify.app/"
        },
        {
            title: "Student Marks Converter",
            description: "Intuitive grade converter for students and educators to switch between percentage, GPA, and letter grading systems.",
            image: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tech: ["React", "Tailwind Css"],
            github: "https://github.com/JAYANTKUMARGUPTA/Student-Marks-Converter",
            demo: "https://std-marks-converter.netlify.app/"
        },
        {
            title: "Qr Code Genertaor",
            description: "Mobile-friendly QR code creator with dark mode, bulk generation, and scan count analytics for marketing professionals",
            image: "https://media.istockphoto.com/id/2188974829/photo/to-create-design-generate-and-scan-a-qr-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=bLqHA8lSLJKJ1wehGx7Ue_X4jtUQLyp3vlLHF62_5lg=",
            tech: ["HTML", "Css", "JavaScript"],
            github: "https://github.com/JAYANTKUMARGUPTA/QR_Code-_Generator",
            demo: "https://qrcodebyjk.netlify.app/"
        },
        {
            title: "Todo List",
            description: "Minimalist todo app with offline support and Markdown-enabled notes for streamlined workflow.",
            image: "https://media.istockphoto.com/id/157581610/photo/to-do-list.webp?a=1&b=1&s=612x612&w=0&k=20&c=VaAR_cwDYTp9d8MNYdXAxJabbFBORHEwFOxbwge7SzU=",
            tech: ["HTML", "Css", "JavaScript"],
            github: "https://github.com/JAYANTKUMARGUPTA/Todo-list",
            demo: "https://jktodolist.netlify.app/"
        },
        {
            title: "Diet Tracker",
            description: "Simple and intuitive Diet Tracker to log meals, monitor calories, and maintain healthy habits — with offline support and clean UI for daily tracking.",
            image: "https://media.istockphoto.com/id/1479492035/photo/a-concept-of-balanced-nutrition-in-everyday-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=_aGwWlnux33bkevqg3mheqY705h4WNA5uGhNphqoNOs=",
            tech: ["HTML", "Css", "JavaScript"],
            github: "https://github.com/JAYANTKUMARGUPTA/Diet-tracker",
            demo: "https://jkdiet-tracker.netlify.app/"
        },
    ];

    const certification = [
        {
            organization: "Sk Deft",
            Domain: "Python",
            Certification: "ST-V-2022/27",
            Description: "Successfully completed Python training covering core programming concepts such as variables, data types, control structures, functions, file handling, and error handling. Gained hands-on experience with object-oriented programming, working with libraries like NumPy and Pandas, and building basic projects to strengthen problem-solving skills."
        },

    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });

        emailjs.send(
            'service_43aocer',
            'template_hh23xha',
            formData,
            'jOLscADcUEPg2jARp'
        ).then(
            (result) => {
                alert("Message sent successfully!");
            },
            (error) => {
                alert("Failed to send message. Try again later.");
                console.error(error);
            }
        );
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-50 transition-all duration-300 border-b border-gray-200/50 dark:border-gray-700/30">
                    <nav className="container mx-auto px-4 sm:px-6 py-3">
                        <div className="flex items-center justify-between">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <a
                                    href="#home"
                                    className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="text-blue-600 dark:text-blue-400"
                                    >
                                        &lt;/&gt;
                                    </motion.span>
                                    <span className="hidden sm:inline">Portfolio</span>
                                    <span className="sm:hidden">Portfolio</span>
                                </a>
                            </motion.div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-1">
                                {["home", "about", "skills", "projects", "certification", "contact"].map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item}`}
                                        className={`capitalize px-4 py-2 rounded-lg transition-all ${activeSection === item
                                            ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-gray-800"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                            }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1 * ["home", "about", "skills", "projects", "certification", "contact"].indexOf(item)
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: activeSection === item
                                                ? 'rgba(59, 130, 246, 0.1)'
                                                : 'rgba(0, 0, 0, 0.05)'
                                        }}
                                    >
                                        {item}
                                        {activeSection === item && (
                                            <motion.span
                                                className="block h-0.5 bg-blue-600 dark:bg-blue-400 mt-1"
                                                layoutId="header-underline"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <motion.button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </motion.button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMobileMenuOpen && (
                            <motion.div
                                className="md:hidden mt-4 pb-4 space-y-3"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {["home", "about", "skills", "projects", "certification", "contact"].map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item}`}
                                        className={`block capitalize px-4 py-3 rounded-lg transition-all ${activeSection === item
                                            ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-gray-800"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.05 * ["home", "about", "skills", "projects", "certification", "contact"].indexOf(item)
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </nav>
                </header>

                <main className="pt-20">
                    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                        {/* Animated background elements - reduced on mobile */}
                        <div className="absolute inset-0 overflow-hidden -z-10">
                            {/* Blue Floating Glow */}
                            <div
                                className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 rounded-full 
                                bg-gradient-to-br from-blue-400 via-indigo-400 to-transparent 
                                opacity-20 dark:opacity-10 blur-2xl sm:blur-[80px] 
                                animate-float shadow-[0_0_50px_10px_rgba(59,130,246,0.3)]"
                            ></div>

                            {/* Purple Floating Glow */}
                            <div
                                className="absolute bottom-1/3 right-1/3 w-20 h-20 sm:w-40 sm:h-40 rounded-full 
                                bg-gradient-to-tr from-purple-400 via-pink-400 to-transparent 
                                opacity-20 dark:opacity-10 blur-2xl sm:blur-[80px] 
                                animate-float-delay shadow-[0_0_50px_10px_rgba(168,85,247,0.3)]"
                            ></div>
                        </div>


                        <div className="text-center relative z-10 max-w-4xl mx-auto w-full">
                            {/* Profile image with responsive sizing */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 12,
                                    delay: 0.3,
                                    rotateY: {
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }
                                }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                className="relative mx-auto w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-8 sm:mb-10 md:mb-12 group"
                            >
                                {/* Animated gradient border */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                    className="absolute inset-0 rounded-full p-1 sm:p-1.5 
                                        shadow-[0_0_50px_15px_rgba(139,92,246,0.4)] 
                                        ring-4 ring-pink-400/30 
                                        -z-10"
                                    style={{
                                        background: `conic-gradient(
                                            from 180deg at 50% 50%, 
                                            #3b82f6, #6366f1, #8b5cf6, 
                                            #ec4899, #f472b6, #3b82f6
                                            )`
                                    }}
                                >
                                    <div className="absolute inset-0 rounded-full 
                                        bg-white dark:bg-gray-900 
                                        backdrop-blur-md shadow-inner 
                                        ring-1 ring-white/10 dark:ring-gray-700/20" />
                                </motion.div>



                                {/* Glow effect - reduced on mobile */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                                    animate={{ opacity: 0.3, scale: 1, rotate: 360 }}
                                    transition={{
                                        delay: 0.7,
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                    className="absolute -inset-1 sm:-inset-2 rounded-full 
                                                bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 
                                                blur-xl sm:blur-3xl 
                                                opacity-0 group-hover:opacity-50 dark:group-hover:opacity-30 
                                                transition-all duration-700 
                                                shadow-[0_0_60px_10px_rgba(99,102,241,0.4),0_0_90px_20px_rgba(139,92,246,0.3)] 
                                                ring-4 ring-offset-2 ring-blue-400/40 ring-inset 
                                                animate-pulse-slow 
                                                -z-10"
                                />



                                {/* Main image */}
                                <motion.img
                                    src="/pic1.jpg"
                                    alt="Jayant Kumar Gupta"
                                    className="w-full h-full rounded-full object-cover relative z-10 border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg sm:shadow-2xl"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                                    }}
                                    transition={{
                                        scale: { type: "spring", stiffness: 300, damping: 10 },
                                        boxShadow: { duration: 0.3 }
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d'
                                    }}
                                />


                                {/* Animated rings - simplified on mobile */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 sm:border-8 border-transparent 
                                                border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500
                                                bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
                                                animate-spin-slow blur-[1px] opacity-80 shadow-2xl -z-10"
                                    initial={{ rotate: 0, opacity: 0, scale: 0.9 }}
                                    animate={{ rotate: 360, opacity: 1, scale: 1 }}
                                    transition={{
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 0.5,
                                        },
                                        opacity: { duration: 1 },
                                        scale: { duration: 1 },
                                    }}
                                />


                                {/* Floating dots decoration - smaller on mobile */}
                                <motion.div
                                    className="absolute -bottom-4 -right-2 w-12 h-12 sm:-bottom-6 sm:-right-4 sm:w-16 sm:h-16 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-md sm:blur-lg -z-20"
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: 1
                                    }}
                                />
                            </motion.div>

                            {/* Responsive text sizing */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 15,
                                    delay: 0.4
                                }}
                                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                            >
                                नमस्कार , I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Jayant Kumar Gupta</span>
                            </motion.h1>

                            {/* Animated typing text - responsive sizing */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="min-h-[2rem] xs:min-h-[2.5rem] md:min-h-[3rem]"
                            >
                                <TypeAnimation
                                    sequence={[
                                        "Full Stack Developer",
                                        2000,
                                        "Tech Enthusiast",
                                        2000
                                    ]}
                                    wrapper="div"
                                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </motion.div>

                            {/* Responsive buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0"
                            >
                                <a
                                    href="#projects"
                                    className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20 transform hover:-translate-y-1 text-sm sm:text-base"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-blue-600 sm:border-2 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                                >
                                    Contact Me
                                </a>
                            </motion.div>
                        </div>

                        {/* Scroll indicator - smaller on mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                        >
                            <div className="animate-bounce w-5 h-8 sm:w-6 sm:h-10 border border-gray-400 dark:border-gray-500 sm:border-2 rounded-full flex justify-center">
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                    className="w-1 h-1.5 sm:h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-1 sm:mt-2"
                                ></motion.div>
                            </div>
                        </motion.div>
                    </section>

                    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
                            >
                                About <span className="text-blue-600 dark:text-blue-400">Me</span>
                            </motion.h2>

                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
                                        Full Stack <span className="text-blue-600 dark:text-blue-400">Developer</span>
                                    </h3>

                                    <div className="space-y-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                                        <motion.p
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            Hello! I'm <span className="font-medium text-gray-800 dark:text-white">Jayant Kumar Gupta</span>, a passionate Full Stack Developer with expertise in building modern web applications using cutting-edge technologies.
                                        </motion.p>

                                        <motion.p
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            I specialize in creating efficient, scalable solutions with clean code architecture and intuitive user interfaces.
                                        </motion.p>

                                        <motion.div
                                            className="pt-6"
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            <h4 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                                                <FiCpu className="mr-2 text-blue-500" /> Technical Skills
                                            </h4>

                                            <div className="flex flex-wrap gap-3">
                                                {['HTML5', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub', 'C', 'C++'].map((skill, index) => (
                                                    <motion.span
                                                        key={skill}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                                                        viewport={{ once: true }}
                                                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-default"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className="mt-10 flex flex-col sm:flex-row gap-4"
                                        whileInView={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                    >
                                        <a
                                            href="/documents/Jayant resume (MCA).pdf"
                                            download="Jayant_Kumar_Gupta_Resume.pdf"
                                            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30"
                                        >
                                            <FiDownload className="mr-2" /> Download Resume
                                        </a>

                                        <a
                                            href="#contact"
                                            className="flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg"
                                        >
                                            <FiMail className="mr-2" /> Contact Me
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
                        <div className="container mx-auto px-4 sm:px-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
                            >
                                My <span className="text-blue-600 dark:text-blue-400">Skills</span>
                            </motion.h2>

                            {/* 3D Container */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 30, rotateX: 45, scale: 0.9 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            rotateX: 0,
                                            scale: 1
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        whileHover={{
                                            y: -10,
                                            rotateY: 5,
                                            scale: 1.02,
                                            boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)',
                                            transition: { duration: 0.3 }
                                        }}
                                        className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 transform-style-preserve-3d"
                                        style={{
                                            transformOrigin: 'center bottom',
                                            backfaceVisibility: 'hidden',
                                            willChange: 'transform'
                                        }}
                                    >
                                        {/* 3D Card Content */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <motion.div
                                                whileHover={{
                                                    rotateY: 180,
                                                    transition: { duration: 0.6 }
                                                }}
                                                className="text-4xl text-blue-600 dark:text-blue-400 transform-style-preserve-3d"
                                            >
                                                <div className="backface-hidden">
                                                    {skill.icon}
                                                </div>
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                {skill.name}
                                            </h3>
                                        </div>

                                        {/* 3D Progress Bar */}
                                        <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-3 mb-2 overflow-hidden transform-style-preserve-3d">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.3 + (index * 0.05),
                                                    type: "spring",
                                                    damping: 10
                                                }}
                                                viewport={{ once: true }}
                                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                                                style={{
                                                    boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)',
                                                    transform: 'translateZ(20px)'
                                                }}
                                            />
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Proficiency
                                            </span>
                                            <motion.span
                                                className="text-sm font-bold text-blue-600 dark:text-blue-400"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>

                        {/* Add this to your global CSS or Tailwind config */}
                        <style jsx global>{`
                        .perspective-1000 {
                        perspective: 1000px;
                        }
                        .perspective-500 {
                        perspective: 500px;
                        }
                        .transform-style-preserve-3d {
                        transform-style: preserve-3d;
                        }
                        .backface-hidden {
                        backface-visibility: hidden;
                        }
                    `}</style>
                    </section>

                    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
                        <div className="container mx-auto px-4 sm:px-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
                            >
                                My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                                    >
                                        {/* Project Image with Hover Effect */}
                                        <div className="relative overflow-hidden h-60">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 1.1 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {project.tech.map((tech) => (
                                                    <motion.span
                                                        key={tech}
                                                        whileHover={{ y: -2 }}
                                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* Project Links */}
                                            <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    <FiGithub className="mr-2 text-lg" />
                                                    <span>Code</span>
                                                </a>
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                                >
                                                    <FiExternalLink className="mr-2" />
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-2 rounded-xl bg-blue-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 blur-md transition-opacity duration-300 -z-10" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* View More Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-16 text-center"
                            >

                            </motion.div>
                        </div>
                    </section>

                    <section id="certification" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                        <div className="container mx-auto px-6">
                            {/* Section Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                    My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    Validated proof of my skills and professional development
                                </p>
                            </motion.div>

                            {/* Timeline with Certificate Images */}
                            <div className="max-w-4xl mx-auto relative">
                                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600/20 to-transparent dark:from-blue-400/20"></div>

                                {certification.map((certi, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`relative pl-10 md:pl-0 pb-12 last:pb-0 group ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 flex items-center justify-center transform md:-translate-x-1/2 -translate-y-1 z-10">
                                            <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
                                        </div>

                                        {/* Certificate Card */}
                                        <div className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                                            {/* Certificate Image Preview */}
                                            <div
                                                className="relative h-48 bg-gray-100 dark:bg-gray-600 cursor-pointer border-b border-gray-200 dark:border-gray-600"
                                                onClick={() => window.open('/certificate.jpg', '_blank')}
                                            >
                                                <img
                                                    src="/certificate.jpg"
                                                    alt={certi.Certification}
                                                    className="absolute inset-0 w-full h-full object-contain p-4"
                                                />
                                                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <span className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                        </svg>
                                                        View Full Certificate
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Certificate Details */}
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                        {certi.organization}
                                                    </h3>
                                                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full">
                                                        {certi.Domain}
                                                    </span>
                                                </div>

                                                <h4 className="text-blue-600 dark:text-blue-400 mb-2">
                                                    {certi.Certification}
                                                </h4>

                                                {/* Enhanced Description */}
                                                <div className="bg-gray-50 dark:bg-gray-600/20 rounded-lg p-4 mb-4">
                                                    <p className="text-gray-700 dark:text-gray-300">
                                                        {certi.Description}
                                                    </p>
                                                </div>

                                                {/* Verification */}
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        10 August 2022
                                                    </span>
                                                    <button
                                                        onClick={() => window.open('/certificate.jpg', '_blank')}
                                                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                                    >
                                                        Verify Certificate
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* Contact Section */}


                    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
                        <div className="container mx-auto px-4 sm:px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                                    Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    Have a project in mind or want to collaborate? Feel free to reach out!
                                </p>
                            </motion.div>

                            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                                {/* Contact Form */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/2"
                                >
                                    <form onSubmit={handleFormSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="name">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                placeholder="Enter your name"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                placeholder="your.email@example.com"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium" htmlFor="message">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                                placeholder="Tell me about your project..."
                                            ></textarea>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                                            >
                                                <FiSend className="text-lg" />
                                                Send Message
                                            </button>
                                        </motion.div>
                                    </form>
                                </motion.div>

                                {/* Contact Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                            Contact Information
                                        </h3>

                                        <div className="space-y-6">
                                            {/* Email */}
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                                                    <FiMail className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Email</h4>
                                                    <a
                                                        href="mailto:jayantkumargupta41@gmail.com"
                                                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                    >
                                                        jayantkumargupta41@gmail.com
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Social Links */}
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                                                    <FiShare2 className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Connect With Me</h4>
                                                    <div className="flex gap-4">
                                                        <motion.a
                                                            href="https://github.com/JAYANTKUMARGUPTA"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                            whileHover={{ y: -3, scale: 1.1 }}
                                                        >
                                                            <FiGithub className="text-xl" />
                                                        </motion.a>
                                                        <motion.a
                                                            href="https://www.linkedin.com/in/jayant-gupta-747ba0227/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                            whileHover={{ y: -3, scale: 1.1 }}
                                                        >
                                                            <FiLinkedin className="text-xl" />
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                                                    <FiMapPin className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Location</h4>
                                                    <p className="text-gray-800 dark:text-white">Raebareli (Uttar Pradesh) , India</p>
                                                </div>
                                            </div>

                                            {/* Contact Hours */}
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                                                    <FiClock className="text-xl" />
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Availability</h4>
                                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Response time: within 24 hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-800 text-white py-8">
                    <div className="container mx-auto px-6 text-center">
                        <p>© {new Date().getFullYear()} Jayant kumar Gupta. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;