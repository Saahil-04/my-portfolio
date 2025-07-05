'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SocialLinks from '../ui/socialLinks';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inputBase =
    'w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500';

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
};

const ContactSection = () => {
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: { name: string; email: string; message: string }) => {
        setSubmitMessage('');
        setSubmitStatus('');
        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                data,
                EMAILJS_CONFIG.PUBLIC_KEY
            );
            setSubmitStatus('success');
            setSubmitMessage("Your message has been sent successfully! I'll get back to you soon.");
            reset();
        } catch (error) {
            console.log(error);
            setSubmitStatus('error');
            setSubmitMessage('Failed to send message. Please try again or contact me directly.');
        } finally {
            setTimeout(() => {
                setSubmitMessage('');
                setSubmitStatus('');
            }, 5000);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container max-w-full mx-auto px-6">
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
                                <SocialLinks variant="contact" only={['GitHub', 'LinkedIn', 'Twitter']} iconSize={24} />
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
                        <motion.div
                            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
                            layout>
                            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <motion.div
                                            animate={errors.name ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <input
                                                id="name"
                                                {...register("name")}
                                                aria-invalid={!!errors.name}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                                className={`${inputBase} transition-colors duration-200 ${errors.name
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'focus:border-cyan-500 focus:ring-cyan-500'
                                                    }`}
                                                autoComplete="name"
                                            />
                                            {errors.name && (
                                                <span className="text-red-400 text-sm">{errors.name.message}</span>
                                            )}
                                        </motion.div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">
                                            Your Email
                                        </label>
                                        <motion.div
                                            animate={errors.email ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <input
                                                id="email"
                                                type="email"
                                                {...register("email")}
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                                className={`${inputBase} transition-colors duration-200 ${errors.email
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'focus:border-cyan-500 focus:ring-cyan-500'
                                                    }`}
                                                autoComplete="email"
                                            />
                                            {errors.email && (
                                                <span className="text-red-400 text-sm">{errors.email.message}</span>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <motion.div
                                        animate={errors.message ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <textarea
                                            id="message"
                                            rows={5}
                                            {...register("message")}
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                            className={`${inputBase} transition-colors duration-200 ${errors.message
                                                ? 'border-red-500 focus:ring-red-500'
                                                : 'focus:border-cyan-500 focus:ring-cyan-500'
                                                }`}
                                        ></textarea>
                                        {errors.message && (
                                            <span className="text-red-400 text-sm">{errors.message.message}</span>
                                        )}
                                    </motion.div>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    {/* Button always takes 1/3 */}
                                    <div className="w-1/3">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex items-center justify-center gap-2 w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                'Sending...'
                                            ) : (
                                                <>
                                                    Send Message <FiSend />
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                    {/* Message takes 2/3, animates in/out */}
                                    <div className="w-2/3">
                                        <AnimatePresence mode="wait">
                                            {submitMessage && (
                                                <motion.div
                                                    key={submitStatus}
                                                    layout
                                                    className={`p-4 rounded-lg flex flex-col items-center ${submitStatus === 'success'
                                                        ? 'bg-green-900/30 text-green-400'
                                                        : 'bg-red-900/30 text-red-400'
                                                        }`}
                                                    aria-live="polite"
                                                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                >
                                                    {submitStatus === 'success' && (
                                                        <motion.div
                                                            className="flex justify-center mb-2"
                                                            initial={{ scale: 0.7, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                        >
                                                            <svg
                                                                className="w-10 h-10 text-green-400"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={3}
                                                                viewBox="0 0 48 48"
                                                            >
                                                                <motion.path
                                                                    d="M12 24l8 8 16-16"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    initial={{ pathLength: 0 }}
                                                                    animate={{ pathLength: 1 }}
                                                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                                                />
                                                            </svg>
                                                        </motion.div>
                                                    )}
                                                    {submitMessage}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;