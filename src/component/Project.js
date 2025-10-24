import p1 from '../img/portal.jpg';
import p2 from '../img/dragon.jpg'
import p3 from '../img/movie.png'
import p4 from '../img/img.png'
import p5 from '../img/Screenshot 2025-07-07 180251.png'
import { useRef, useEffect } from 'react';

export default function Project() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null);
    const pausedRef = useRef(false);

    // prepare card elements once
    const cards = [
        <div data-index="0" key="p1" className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/40 w-[420px] snap-center flex-shrink-0'
             onMouseEnter={(e) => { pausedRef.current = true; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = '1'; ov.style.zIndex = '60'; ov.style.pointerEvents = 'auto'; } }}
             onMouseLeave={(e) => { pausedRef.current = false; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = ''; ov.style.zIndex = ''; ov.style.pointerEvents = ''; } }}>
            <img className='h-[300px] w-full object-cover' src={p1} alt="Project 1" />
            <div className='project-overlay absolute inset-0 bg-gradient-to-t from-pink-900/95 via-pink-800/80 to-transparent opacity-0 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                    Done "Portal for senior citizen" that gets the detail form them and take care of their dailys routine and remind them to do task list. Done using React JS
                </p>
            </div>
        </div>,
        <div data-index="1" key="p3" className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 w-[420px] snap-center flex-shrink-0'
             onMouseEnter={(e) => { pausedRef.current = true; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = '1'; ov.style.zIndex = '60'; ov.style.pointerEvents = 'auto'; } }}
             onMouseLeave={(e) => { pausedRef.current = false; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = ''; ov.style.zIndex = ''; ov.style.pointerEvents = ''; } }}>
            <img className='h-[300px] w-full object-cover' src={p3} alt="Project 2" />
            <div className='project-overlay absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-transparent opacity-0 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                    Done "Movie Recommendation System" that recommend movies to you according to your like list wish. Done using React JS
                </p>
            </div>
        </div>,
        <div data-index="2" key="p4" className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 w-[420px] snap-center flex-shrink-0'
             onMouseEnter={(e) => { pausedRef.current = true; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = '1'; ov.style.zIndex = '60'; ov.style.pointerEvents = 'auto'; } }}
             onMouseLeave={(e) => { pausedRef.current = false; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = ''; ov.style.zIndex = ''; ov.style.pointerEvents = ''; } }}>
            <img className='h-[300px] w-full object-cover' src={p4} alt="Project 4" />
            <div className='project-overlay absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/80 to-transparent opacity-0 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                    Smart Waste Classification using Deep Learning that classifies waste into Biodegradable, Non-Biodegradable, Mixed Waste and E-Waste
                </p>
            </div>
        </div>,
        <div data-index="3" key="p2" className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-emerald-500/40 w-[420px] snap-center flex-shrink-0'
             onMouseEnter={(e) => { pausedRef.current = true; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = '1'; ov.style.zIndex = '60'; ov.style.pointerEvents = 'auto'; } }}
             onMouseLeave={(e) => { pausedRef.current = false; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = ''; ov.style.zIndex = ''; ov.style.pointerEvents = ''; } }}>
            <img className='h-[300px] w-full object-cover' src={p2} alt="Project 3" />
            <div className='project-overlay absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-800/80 to-transparent opacity-0 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                    Done "Dragon Flying Game" in AR / VR using Unity
                </p>
            </div>
        </div>,
        <div data-index="4" key="p5" className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-emerald-500/40 w-[420px] snap-center flex-shrink-0'
             onMouseEnter={(e) => { pausedRef.current = true; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = '1'; ov.style.zIndex = '60'; ov.style.pointerEvents = 'auto'; } }}
             onMouseLeave={(e) => { pausedRef.current = false; const ov = e.currentTarget.querySelector('.project-overlay'); if (ov) { ov.style.opacity = ''; ov.style.zIndex = ''; ov.style.pointerEvents = ''; } }}>
            <img className='h-[300px] w-full object-cover' src={p5} alt="Project 5" />
            <div className='project-overlay absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-800/80 to-transparent opacity-0 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                    Created User Friendly UI Design for House Maid Finding App using Figma
                </p>
            </div>
        </div>
    ];

    useEffect(() => {
        const outer = scrollRef.current;
        const inner = contentRef.current;
        if (!outer || !inner) return;

        let rafId = null;
        const speed = 0.45; // reduced pixels per frame
        const offsetRef = { current: 0 };
        const cardWidth = 420;
        const gap = 32; // gap-8
        const stepSize = cardWidth + gap;
        let lastPopped = -1;
        let isPausing = false;

        const popCards = (targetIndex) => {
            const nodes = inner.querySelectorAll('.project-card');
            nodes.forEach((node) => {
                const idx = Number(node.getAttribute('data-index'));
                const overlay = node.querySelector('.project-overlay');
                if (idx === targetIndex) {
                    node.style.transition = 'transform 200ms';
                    node.style.transform = 'scale(1.06)';
                    node.style.zIndex = '50';
                    if (overlay) {
                        overlay.style.transition = 'opacity 200ms';
                        overlay.style.opacity = '1';
                        overlay.style.zIndex = '60';
                        overlay.style.pointerEvents = 'auto';
                    }
                } else {
                    node.style.transform = '';
                    node.style.zIndex = '';
                    if (overlay) {
                        overlay.style.opacity = '';
                        overlay.style.zIndex = '';
                        overlay.style.pointerEvents = '';
                    }
                }
            });
        };

        const clearPop = () => {
            const nodes = inner.querySelectorAll('.project-card');
            nodes.forEach((node) => {
                node.style.transform = '';
                node.style.zIndex = '';
                const overlay = node.querySelector('.project-overlay');
                if (overlay) {
                    overlay.style.opacity = '';
                    overlay.style.zIndex = '';
                    overlay.style.pointerEvents = '';
                }
            });
        };

        const step = () => {
            if (!inner || !outer) return;
            if (!pausedRef.current && !isPausing) {
                const resetAt = inner.scrollWidth / 2;
                offsetRef.current += speed;
                if (offsetRef.current >= resetAt) offsetRef.current -= resetAt;
                inner.style.transform = `translateX(-${offsetRef.current}px)`;

                const visibleCenter = offsetRef.current + outer.clientWidth / 2;
                const rawIndex = Math.round((visibleCenter - cardWidth / 2) / stepSize);
                const normalizedIndex = ((rawIndex % cards.length) + cards.length) % cards.length;
                const cardCenter = rawIndex * stepSize + cardWidth / 2;
                const diff = Math.abs(visibleCenter - cardCenter);

                const threshold = 12; // pixels tolerance to consider centered
                if (diff < threshold && normalizedIndex !== lastPopped) {
                    lastPopped = normalizedIndex;
                    isPausing = true;
                    pausedRef.current = true;
                    popCards(normalizedIndex);
                    setTimeout(() => {
                        clearPop();
                        pausedRef.current = false;
                        isPausing = false;
                    }, 2000); // keep visible for 4s
                }
            }
            rafId = requestAnimationFrame(step);
        };

        const onResize = () => {
            offsetRef.current = 0;
            if (inner) inner.style.transform = '';
        };

        window.addEventListener('resize', onResize);
        const startTimeout = setTimeout(() => {
            rafId = requestAnimationFrame(step);
        }, 100);

        return () => {
            clearTimeout(startTimeout);
            window.removeEventListener('resize', onResize);
            if (rafId) cancelAnimationFrame(rafId);
            if (inner) inner.style.transform = '';
        };
    }, []);

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
                    <div
                        ref={scrollRef}
                        onMouseEnter={() => (pausedRef.current = true)}
                        onMouseLeave={() => (pausedRef.current = false)}
                        className='relative mt-10 py-6 overflow-hidden w-full'
                    >
                        <div ref={contentRef} className='flex gap-8 will-change-transform'>
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className='flex gap-8'>
                                    {cards}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}