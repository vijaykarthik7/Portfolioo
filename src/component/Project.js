import p1 from '../img/portal.jpg';
import p2 from '../img/dragon.jpg'
import p3 from '../img/movie.png'
import p4 from '../img/img.png'
import p5 from '../img/Screenshot 2025-07-07 180251.png'
import p6 from '../img/proj1.png'
import p7 from '../img/ag.png'
import { useRef, useEffect } from 'react';

export default function Project() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null);
    const pausedRef = useRef(false);

    // 1) Define project data (simple, no JSX here)
    const projectsData = [
        {
            id: 0,
            img: p7,
            alt: "Portal",
            desc:
                'Designed a single page for real estate agent website with Figma .'
        },
        {
            id: 1,
            img: p3,
            alt: "Movie Recommender",
            desc:
                'Done "Movie Recommendation System" that recommends movies according to your preferences. Built with React.'
        },
        {
            id: 2,
            img: p6,
            alt: "Ticket UI",
            desc:
                'Designed a ticket booking app UI (Flight, Cab, Hotel) using Figma.'
        },
        {
            id: 3,
            img: p2,
            alt: "Dragon Game",
            desc:
                'Designed a "Dragon Flying Game" in AR / VR using Unity.'
        },
        {
            id: 4,
            img: p5,
            alt: "House Maid UI",
            desc:
                'Designed a user-friendly UI for a House Maid Finding App using Figma.'
        }
    ];

    // --- add helper functions so hover + automatic pop use same styles ---
    const applyOverlayStyles = (overlay) => {
        if (!overlay) return;
        // ensure transitions include backdrop-filter (and -webkit-)
        overlay.style.transition = 'opacity 200ms, background 200ms, -webkit-backdrop-filter 200ms, backdrop-filter 200ms, padding 200ms';
        overlay.style.opacity = '1';
        overlay.style.zIndex = '60';
        overlay.style.pointerEvents = 'auto';
        // stronger semi-transparent background so backdrop-filter is effective
        overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.92) 10%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.30) 100%)';
        // apply both standard and WebKit-prefixed backdrop-filter (setProperty + camelCase)
        overlay.style.backdropFilter = 'blur(6px) saturate(120%)';
        overlay.style.WebkitBackdropFilter = 'blur(6px) saturate(120%)';
        overlay.style.setProperty('-webkit-backdrop-filter', 'blur(6px) saturate(120%)');
        overlay.style.setProperty('backdrop-filter', 'blur(6px) saturate(120%)');
        overlay.style.padding = '1rem';
        overlay.style.borderRadius = '0.75rem';
        // ensure the overlay sits above image inside stacking context
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
    };

    const clearOverlayStyles = (overlay) => {
        if (!overlay) return;
        overlay.style.opacity = '';
        overlay.style.zIndex = '';
        overlay.style.pointerEvents = '';
        overlay.style.background = '';
        overlay.style.backdropFilter = '';
        overlay.style.WebkitBackdropFilter = '';
        // remove any set CSS custom properties to be safe
        try {
            overlay.style.removeProperty('-webkit-backdrop-filter');
            overlay.style.removeProperty('backdrop-filter');
        } catch (e) {
            // ignore if not supported
        }
        overlay.style.padding = '';
        overlay.style.borderRadius = '';
        // keep a short opacity transition for smooth hide
        overlay.style.transition = 'opacity 200ms';
    };
    // --- end helpers ---

    useEffect(() => {
        const outer = scrollRef.current;
        const inner = contentRef.current;
        if (!outer || !inner) return;

        let rafId = null;
        const speed = 0.45; // px per frame
        const offsetRef = { current: 0 };
        const cardWidth = 420;
        const gap = 32; // gap-8
        const stepSize = cardWidth + gap;
        const projectCount = projectsData.length;
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
                    applyOverlayStyles(overlay); // use helper
                } else {
                    node.style.transform = '';
                    node.style.zIndex = '';
                    clearOverlayStyles(overlay); // use helper
                }
            });
        };

        const clearPop = () => {
            const nodes = inner.querySelectorAll('.project-card');
            nodes.forEach((node) => {
                node.style.transform = '';
                node.style.zIndex = '';
                const overlay = node.querySelector('.project-overlay');
                clearOverlayStyles(overlay); // use helper
            });
        };

        const step = () => {
            if (!inner || !outer) return;
            if (!pausedRef.current && !isPausing) {
                // inner contains duplicated sequence: reset at half width (one sequence length)
                const resetAt = inner.scrollWidth / 2;
                offsetRef.current += speed;
                if (offsetRef.current >= resetAt) offsetRef.current -= resetAt;
                inner.style.transform = `translateX(-${offsetRef.current}px)`;

                const visibleCenter = offsetRef.current + outer.clientWidth / 2;
                const rawIndex = Math.round((visibleCenter - cardWidth / 2) / stepSize);
                const normalizedIndex = ((rawIndex % projectCount) + projectCount) % projectCount;
                const cardCenter = rawIndex * stepSize + cardWidth / 2;
                const diff = Math.abs(visibleCenter - cardCenter);

                const threshold = 12;
                if (diff < threshold && normalizedIndex !== lastPopped) {
                    lastPopped = normalizedIndex;
                    isPausing = true;
                    pausedRef.current = true;
                    popCards(normalizedIndex);
                    setTimeout(() => {
                        clearPop();
                        pausedRef.current = false;
                        isPausing = false;
                    }, 2000);
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
    }, [projectsData.length]);

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
                            {/* 2) Duplicate sequence once for seamless loop */}
                            {[...projectsData, ...projectsData].map((proj, idx) => {
                                const dataIndex = proj.id; // 0..projectCount-1
                                return (
                                    <div
                                        key={`proj-${idx}`}
                                        data-index={dataIndex}
                                        className='project-card relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 w-[420px] snap-center flex-shrink-0'
                                        onMouseEnter={(e) => {
                                            pausedRef.current = true;
                                            const ov = e.currentTarget.querySelector('.project-overlay');
                                            applyOverlayStyles(ov); // use helper on hover
                                        }}
                                        onMouseLeave={(e) => {
                                            pausedRef.current = false;
                                            const ov = e.currentTarget.querySelector('.project-overlay');
                                            clearOverlayStyles(ov); // clear helper on leave
                                        }}
                                    >
                                        <img className='h-[300px] w-full object-cover' src={proj.img} alt={proj.alt} />
                                        <div className='project-overlay absolute inset-0 opacity-0 flex items-center justify-center transition-opacity duration-300'>
                                            <p className='text-center px-4 text-lg font-bold text-white drop-shadow-lg'>
                                                {proj.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}