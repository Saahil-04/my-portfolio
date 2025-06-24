import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="py-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfolio</h3>
                        <p className="text-gray-400">Senior Full Stack Developer</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FiTwitter size={24} />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                            <FiMail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                    &copy; {currentYear} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;