import res from '../img/res1.jpg';
export default function Resume() {
    return(
        <section
            id="resume"
            className="flex flex-col md:flex-row px-5 bg-gradient-to-br from-cyan-900 via-purple-900 to-fuchsia-900 min-h-[60vh] py-12"
        >
            <div className="py-5 px-5 md:w-1/3 flex justify-center items-center">
                <img
                    src={res}
                    alt="Resume Image"
                    className="rounded-xl shadow-xl border-4 border-fuchsia-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
                <div className="flex flex-col justify-center text-white max-w-xl">
                    <h1 className="text-3xl md:text-4xl font-bold underline decoration-cyan-400 decoration-4 mb-4 transition-colors duration-300 hover:text-cyan-300">
                        Resume
                    </h1>
                    <p className="mb-6 text-lg text-fuchsia-200">
                        You can view my Resume here
                    </p>
                   <a
  href="https://drive.google.com/file/d/1K_3HQIU5zQqTkH298ChMnnc1qRsVG6D3/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-fuchsia-600 hover:scale-105 border-2 border-transparent hover:border-white"
>
  View & Download Resume
</a>


                </div>
            </div>
        </section>
    );
}