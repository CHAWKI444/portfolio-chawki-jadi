import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {toast} from 'sonner';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Show a loading toast and get its ID
    const loadingToastId = toast.loading('Sending your message...');

    try {
      // Await the emailjs.send promise
      await emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            name: form.name,
            to_name: 'Fedi', // Or any name you want
            email: form.email,
            to_email: 'mohamedfedi.bouabid@gmail.com',
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // 2. On success, update the toast to a green success message
      toast.success('Thank you! I will get back to you soon.', {
        id: loadingToastId,
        duration: 4000, // Stays for 4 seconds
      });

      // Reset the form fields
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);

      // 3. On failure, update the toast to a red error message
      toast.error('Ahh, something went wrong. Please try again.', {
        id: loadingToastId,
        duration: 5000, // Stays for 5 seconds
      });
    } finally {
      // 4. This runs after success OR failure to stop the loading state
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Info Section */}
        {/* Contact Info Section with Icons */}
        <div className="mt-6 mb-8 flex flex-row gap-6 text-white text-[20px]">
          <a
              href="mailto:mohamedfedi.bouabid@gmail.com"
              className="hover:text-secondary"
              title="Email"
          >
            <AiOutlineMail />
          </a>

          <a
              href="tel:+21655262346"
              className="hover:text-secondary"
              title="Phone"
          >
            <AiOutlinePhone />
          </a>

          <a
              href="https://www.linkedin.com/in/mohamed-fedi-bouabid/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
              title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
              href="https://github.com/FedyBd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
              title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Form */}
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


      <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
