import p1 from '../img/portal.jpg';
import p2 from '../img/dragon.jpg'
import p3 from '../img/movie.png'

export default function Project() {
    return (
        <section
            id='projects'
            className="flex flex-col py-20 px-5 justify-center bg-gradient-to-br from-fuchsia-900 via-blue-900 to-emerald-900 min-h-screen"
        >
            <div className="justify-center flex flex-col items-center text-white">
                <h1 className="text-3xl md:text-4xl font-bold underline decoration-pink-500 decoration-4 mb-12 transition-colors duration-300 hover:text-pink-300">
                    Projects
                </h1>
                <div className='w-full'>
                    <div className='flex md:flex-row mt-10 gap-8 flex-col items-center justify-center'>
                        {/* Project Card 1 */}
                        <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/40 w-[320px]'>
                            <img className='h-[220px] w-full object-cover' src={p1} alt="Project 1" />
                            <div className='absolute inset-0 bg-gradient-to-t from-pink-900/95 via-pink-800/80 to-transparent opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500'>
                                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                                    Done "Portal for senior citizen at KEC Hackathon" using React JS
                                </p>
                            </div>
                        </div>
                        {/* Project Card 2 */}
                        <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 w-[320px]'>
                            <img className='h-[220px] w-full object-cover' src={p3} alt="Project 2" />
                            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-transparent opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500'>
                                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                                    Done "Movie Recommendation System" using React JS
                                </p>
                            </div>
                        </div>
                        {/* Project Card 3 */}
                        <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-emerald-500/40 w-[320px]'>
                            <img className='h-[220px] w-full object-cover' src={p2} alt="Project 3" />
                            <div className='absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-800/80 to-transparent opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500'>
                                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                                    Done "Dragon Flying Game" in AR / VR using Unity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}