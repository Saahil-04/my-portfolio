
import SocialLinks from '../ui/socialLinks';

const Footer = () => {

    return (
        <footer className="py-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfolio</h3>
                        <p className="text-gray-800">Full Stack Developer</p>
                    </div>

                    <SocialLinks variant="footer" iconSize={24} spacing="space-x-6" />
                </div>

                <div className="mt-10 text-center text-gray-800 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;