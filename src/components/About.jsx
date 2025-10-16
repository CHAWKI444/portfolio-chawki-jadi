import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            {/* Container for Paragraph and Button (with flexbox) */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-4">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1' // Added flex-1
                >
                    I'm an AI engineer with a strong foundation in data-driven development
                    and intelligent systems. I work with large language models, AI agents,
                    computer vision, and predictive modeling to build solutions that solve
                    real-world challenges. I'm a fast learner and enjoy collaborating on
                    scalable, efficient, and impactful AI products. I'm passionate about
                    turning ideas into intelligent experiences!
                </motion.p>

                {/* CV Download Button (with pointing finger) */}
                <motion.div
                    variants={fadeIn("left", "", 0.3, 1)} // Adjusted animation direction
                    className="flex-none flex flex-row items-center gap-2 mt-4 md:mt-0" // Flex-none to prevent shrinking
                >
                    <span className="text-white text-3xl hidden md:block">👉</span> {/* Pointing finger, hidden on small screens */}
                    <a
                        href="/Resume_BOUABID.pdf"
                        download="Mohamed_Fedi_Bouabid_CV.pdf"
                        className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary transition-colors duration-200 whitespace-nowrap"
                    >
                        Download My CV
                    </a>
                </motion.div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");