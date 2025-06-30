'use client';
import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';


const socialLinks = [
    {
        href: 'https://github.com/Saahil-04',
        icon: <FiGithub size={24} />,
        label: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/saahil-vishwakarma-7a5943288/',
        icon: <FiLinkedin size={24} />,
        label: 'LinkedIn',
    },
    {
        href: 'https://x.com/SaahilV_04',
        icon: <FiTwitter size={24} />,
        label: 'Twitter',
    },
];

const inputBase =
    'w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500';

// EmailJS Configuration - Replace with your actual values
const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
};

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitMessage('');
            setSubmitStatus('');

            try {
                // Send email using EmailJS
                const result = await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    },
                    EMAILJS_CONFIG.PUBLIC_KEY
                );

                console.log('Email sent successfully:', result);

                setSubmitStatus('success');
                setSubmitMessage('Your message has been sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });

            } catch (error) {
                console.error('Failed to send email:', error);
                setSubmitStatus('error');
                setSubmitMessage('Failed to send message. Please try again or contact me directly.');
            } finally {
                setIsSubmitting(false);

                // Clear message after 5 seconds
                setTimeout(() => {
                    setSubmitMessage('');
                    setSubmitStatus('');
                }, 5000);
            }
        },
        [formData]
    );

    const socialIcons = useMemo(
        () =>
            socialLinks.map(link => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors"
                    whileHover={{ y: -5 }}
                    aria-label={link.label}
                >
                    {link.icon}
                </motion.a>
            )),
        []
    );

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Touch
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-cyan-400 mt-1 mr-4">
                                        <FiMail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Email</h4>
                                        <a
                                            href="mailto:digital.saahilsvishwakarma@gmail.com"
                                            className="text-gray-400 hover:text-cyan-400 transition-colors break-all"
                                        >
                                            digital.saahilsvishwakarma@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-cyan-400 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Location</h4>
                                        <p className="text-gray-400">Nerul, Navi Mumbai, Maharashtra</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-medium mb-4">Follow Me</h4>
                                <div className="flex space-x-4">{socialIcons}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                            {submitMessage && (
                                <div
                                    className={`mb-6 p-4 rounded-lg ${submitStatus === 'success'
                                            ? 'bg-green-900/30 text-green-400'
                                            : 'bg-red-900/30 text-red-400'
                                        }`}
                                    aria-live="polite"
                                >
                                    {submitMessage}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={inputBase}
                                            autoComplete="name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={inputBase}
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className={inputBase}
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message <FiSend />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;