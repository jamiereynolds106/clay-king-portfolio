"use client";

import { useState, useRef } from "react";
import Image from "next/image";

/* ─── Video Data ─── */
const videos = [
  {
    id: 1,
    src: "/images/video-2.mp4",
    poster: "/images/poster-2.jpg",
    label: "Intro",
    category: "ugc",
  },
  {
    id: 2,
    src: "/images/video-1.mp4",
    poster: "/images/poster-1.jpg",
    label: "Health & Fitness UGC",
    category: "ugc",
  },
  {
    id: 3,
    src: "/images/video-4.mp4",
    poster: "/images/poster-4.jpg",
    label: "Yana Sleep",
    category: "ugc",
  },
  {
    id: 4,
    src: "/images/video-5.mp4",
    poster: "/images/poster-5.jpg",
    label: "Spice X",
    category: "ugc",
  },
  {
    id: 5,
    src: "/images/video-3.mp4",
    poster: "/images/poster-3.jpg",
    label: "Cubed Ice UGC",
    category: "ugc",
  },
  {
    id: 6,
    src: "/images/video-7.mp4",
    poster: "/images/poster-7.jpg",
    label: "Snoreanator",
    category: "ugc",
  },
  {
    id: 7,
    src: "/images/video-8.mp4",
    poster: "/images/poster-8.jpg",
    label: "Coffee UGC",
    category: "ugc",
  },
  {
    id: 8,
    src: "/images/video-9.mp4",
    poster: "/images/poster-9.jpg",
    label: "Fitness UGC",
    category: "ugc",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [playingId, setPlayingId] = useState<number | null>(null);

  const toggleVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]!.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const filteredVideos =
    activeFilter === "all"
      ? videos
      : videos.filter((v) => v.category === activeFilter);

  return (
    <>
      {/* ═══════════ NAVIGATION ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border-light/50">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.08em] text-text-dark"
          >
            Clay King
          </a>
          <div className="flex items-center gap-8">
            {["Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.72rem] font-medium tracking-[0.18em] uppercase text-text-muted hover:text-text-dark transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section
          className="min-h-screen flex items-center relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #2a2420 0%, #0f0d0b 100%)",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-16 md:py-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div className="order-2 md:order-1">
              <p className="font-script text-tan-light text-3xl md:text-4xl mb-4">
                authenticity has no age limit
              </p>
              <h1
                className="font-bold text-white leading-[1.05] mb-6 tracking-[-0.02em]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                CLAY KING
              </h1>
              <p className="text-white/50 text-lg md:text-xl max-w-[480px] leading-relaxed mb-8 font-light">
                Content creator. Storyteller. Proof that the best voices in the
                room aren&apos;t always the youngest.
              </p>
              <a
                href="#work"
                className="inline-block bg-tan hover:bg-tan-light text-white font-semibold text-[0.72rem] tracking-[0.18em] uppercase px-8 py-4 rounded-full transition-all duration-300"
              >
                See My Work
              </a>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/clay-headshot-new.jpg"
                  alt="Clay King"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "55% top" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PORTFOLIO / VIDEO GRID ═══════════ */}
        <section id="work" className="bg-white py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="font-script text-tan text-2xl md:text-3xl mb-2">
                  portfolio
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-text-dark leading-tight tracking-[-0.02em]">
                  Featured Work
                </h2>
              </div>

              <div className="flex gap-3 mt-6 md:mt-0">
                {["all", "ugc"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-[0.72rem] tracking-[0.14em] uppercase font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-charcoal text-white"
                        : "bg-cream text-text-muted hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="video-card rounded-xl overflow-hidden"
                  onClick={() => video.src && toggleVideo(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    className="w-full aspect-[9/16] object-cover rounded-xl"
                    playsInline
                    loop
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  <div className="play-btn">
                    <div className="play-icon w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path d="M14 8L0 16V0L14 8Z" fill="white" />
                      </svg>
                    </div>
                  </div>

                  <div className="video-label">
                    <p className="text-white text-base md:text-lg font-semibold">
                      {video.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ABOUT ═══════════ */}
        <section
          id="about"
          className="py-20 md:py-28"
          style={{
            background: "linear-gradient(160deg, #2a2420 0%, #0f0d0b 100%)",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-[700px]">
              <p className="font-script text-tan-light text-2xl md:text-3xl mb-4">
                the creator
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-[-0.02em]">
                Not Your Typical
                <br />
                Content Creator
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed text-lg font-light mb-10">
                <p>
                  At 65+, Clay King is redefining what it means to be a content
                  creator. While the industry chases youth, Clay brings something
                  no algorithm can replicate: a lifetime of real experience,
                  hard-earned wisdom, and the kind of presence that makes people
                  stop scrolling.
                </p>
                <p>
                  Whether it&apos;s a genuine product review, a heartfelt
                  testimonial, or a story that cuts through the noise, Clay
                  delivers content with a credibility and warmth that resonates
                  with audiences across every demographic.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/40">
                {[
                  "Authentic",
                  "Experienced",
                  "Trustworthy",
                  "Relatable",
                  "Professional",
                ].map((trait, i) => (
                  <span key={trait} className="flex items-center gap-4">
                    {trait}
                    {i < 4 && <span className="text-white/20">/</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/family-group.jpg"
                  alt="Clay King family group photo"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "40% 30%" }}
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/clay-couple.jpg"
                  alt="Clay and Sheila"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/clay-grandkids.jpg"
                  alt="Clay King with grandkids"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "center top",
                    transform: "translateX(30px) scale(1.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section
          id="contact"
          className="bg-white py-20 md:py-28"
        >
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <p className="font-script text-tan text-3xl mb-4">
              let&apos;s work together
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight tracking-[-0.02em]">
              Ready to Create Something Real?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10 font-light">
              Looking for a content creator who brings experience, authenticity,
              and a perspective that stands out? Let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
              <a
                href="mailto:oldguyugc@gmail.com"
                className="inline-block bg-charcoal hover:bg-charcoal-deep text-white font-semibold text-[0.72rem] tracking-[0.18em] uppercase px-8 py-4 rounded-full transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://instagram.com/oldguyugc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border-light text-text-muted hover:text-text-dark hover:border-text-mid font-semibold text-[0.72rem] tracking-[0.18em] uppercase px-8 py-4 rounded-full transition-colors"
              >
                Instagram
              </a>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://instagram.com/oldguyugc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-tan transition-colors"
              >
                <span className="block text-sm font-medium text-text-dark">Instagram</span>
                <span className="text-sm">@oldguyugc</span>
              </a>
              <a
                href="mailto:oldguyugc@gmail.com"
                className="text-text-muted hover:text-tan transition-colors"
              >
                <span className="block text-sm font-medium text-text-dark">Email</span>
                <span className="text-sm">oldguyugc@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-cream border-t border-border-light py-8">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-text-muted text-sm">
          <span>&copy; 2026 Clay King</span>
          <span className="font-semibold text-text-dark tracking-[0.08em]">CK</span>
        </div>
      </footer>
    </>
  );
}
