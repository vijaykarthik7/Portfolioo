import f1 from '../img/f2.png';
import vj from '../img/vj.jpg.png';
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
export default function Hero() {
    return (
        <section
            id='hero'
            className="flex flex-col md:flex-row px-10 py-32 justify-center items-center bg-gradient-to-br from-fuchsia-900 via-cyan-900 via-purple-900 to-emerald-900 min-h-[80vh]"
        >
            <div className="mb-10 md:mb-0 md:w-1/2 flex flex-col items-center md:items-start">
                <img
                    className="w-40 md:w-48 rounded-full shadow-2xl border-4 border-fuchsia-700 mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-fuchsia-500/50"
                    src={vj}
                    alt="Vijay Karthikeyan"
                />
                <h1 className="text-white text-4xl md:text-5xl font-hero font-bold mb-4 text-center md:text-left">
                    Hi,<br />
                    I'm <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Vijay</span> Karthikeyan
                </h1>
                <p className="text-2xl text-cyan-200 mb-6 text-center md:text-left">
                    I am a <span className="font-semibold text-fuchsia-300">Full Stack Developer and </span><span className="font-semibold text-cyan-300">UI/IX Designer</span>
                </p>
                <div className="flex mt-2 gap-6">
                    <a
                        href="https://www.linkedin.com/in/vijay-karthikeyan-u"
                        className="text-cyan-300 hover:text-fuchsia-400 transition-colors duration-200"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <AiOutlineLinkedin size={36} />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=vijaykarthikeyanu77@gmail.com"
                        className="text-cyan-300 hover:text-fuchsia-400 transition-colors duration-200"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <AiOutlineMail size={36} />
                    </a>
                    <a
                        href="https://github.com/vijaykarthik7"
                        className="text-cyan-300 hover:text-fuchsia-400 transition-colors duration-200"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <AiOutlineGithub size={36} />
                    </a>
                </div>
            </div>
            <img
                className="md:w-1/4 w-2/3 max-w-xs rounded-2xl shadow-2xl border-4 border-cyan-700 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50"
                src={f1}
                alt="img"
            />
        </section>
    );
}