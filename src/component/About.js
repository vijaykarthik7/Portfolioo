import about from '../img/about2.png';
// Add icons
import { FaJava, FaReact, FaFigma } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

export default function About() {
    return(
        <section
            id="about"
            className="flex flex-col md:flex-row bc px-5 min-h-[80vh] w-full"
            style={{
                background: "linear-gradient(135deg, #232526 0%, #6a3093 40%, #a044ff 70%, #f857a6 100%)"
            }}
        >
            <div className="py-5 px-5 md:w-1/3 flex justify-center items-center relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700/60 via-pink-600/40 to-blue-600/30 blur-2xl z-0"></div>
                <img
                    src={about}
                    alt="About Image"
                    className="relative z-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-4 border-purple-700"
                />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <br />
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white underline decoration-purple-500 decoration-4 mb-4 transition-colors duration-300 hover:text-purple-300"
                    >
                        About Me
                    </h1>
                    <p className="pb-5 text-lg text-purple-200 hover:text-purple-100 transition-colors duration-200">
                        I am a <span className="font-semibold text-purple-400">Full Stack Developer</span> with a passion for creating dynamic and responsive web applications.
                    </p>
                    <p className="pb-5 text-lg text-blue-200 hover:text-blue-100 transition-colors duration-200">
                        I have a strong foundation in both front-end and back-end technologies, including <span className="font-semibold text-blue-400">HTML, CSS, JavaScript, React</span>
                    </p>
                    <p className="pb-5 text-lg text-pink-200 hover:text-pink-100 transition-colors duration-200">
                        I have experience in both front-end and back-end development, allowing me to build complete solutions
                        that meet user needs and business goals.
                    </p><br />
                    <h1 className="text-3xl md:text-4xl font-bold text-white underline decoration-purple-500 decoration-4 mb-4 transition-colors duration-300 hover:text-purple-300">
                        Skill Sets
                    </h1>
                    <ul className="list-none flex flex-col gap-4">
                        <li className="flex items-center gap-3 pb-2 text-lg text-purple-200 hover:text-purple-100 transition-colors duration-200">
                            <FaJava className="text-purple-400 text-2xl" />
                            <span className="font-semibold text-purple-400">Java</span>
                        </li>
                        <li className="flex items-center gap-3 pb-2 text-lg text-blue-200 hover:text-blue-100 transition-colors duration-200">
                            <SiC className="text-blue-400 text-2xl" />
                            <span className="font-semibold text-blue-400">C</span>
                        </li>
                        <li className="flex items-center gap-3 pb-2 text-lg text-pink-200 hover:text-pink-100 transition-colors duration-200">
                            <FaReact className="text-pink-400 text-2xl" />
                            <span className="font-semibold text-pink-400">HTML, CSS, React</span>
                        </li>
                        <li className="flex items-center gap-3 pb-2 text-lg text-pink-200 hover:text-pink-100 transition-colors duration-200">
                            <FaFigma className="text-pink-400 text-2xl" />
                            <span className="font-semibold text-pink-400">Figma</span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}