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
];

/* ─── Stats ─── */
const stats = [
  { number: "65+", label: "Years of Life Experience" },
  { number: "40+", label: "Years in Business" },
  { number: "∞", label: "Stories to Tell" },
  { number: "1", label: "Authentic Voice" },
];

/* ─── Services ─── */
const services = [
  {
    icon: "",
    title: "UGC Content",
    description:
      "Authentic, relatable content that connects with real audiences. No scripts needed — just genuine storytelling.",
  },
  {
    icon: "",
    title: "Testimonials",
    description:
      "Trustworthy product reviews and testimonials that carry the weight of experience and credibility.",
  },
  {
    icon: "",
    title: "Social Media",
    description:
      "Short-form video content for TikTok, Instagram Reels, and YouTube Shorts that stands out from the crowd.",
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

  return (
    <>
      {/* ═══════════ NAVIGATION ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-heading text-xl font-bold tracking-wide text-navy"
          >
            Clay King
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs md:text-sm font-medium tracking-[0.12em] uppercase text-text-mid hover:text-navy transition-colors"
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
            background: "linear-gradient(160deg, #1a2332 0%, #0f1620 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(107,142,174,0.15) 0%, transparent 50%)",
            }}
          />

          <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 md:py-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div className="order-2 md:order-1">
              <p className="font-script text-steel-light text-xl md:text-2xl mb-4">
                Authenticity has no age limit
              </p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Clay King
              </h1>
              <p className="text-silver text-lg md:text-xl max-w-[480px] leading-relaxed mb-8 font-light">
                Content creator. Storyteller. Proof that the best voices in the
                room aren&apos;t always the youngest.
              </p>
              <a
                href="#work"
                className="inline-block bg-steel hover:bg-steel-light text-white hover:text-navy font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all duration-300"
              >
                See My Work
              </a>
            </div>

            {/* Hero photo */}
            <div className="relative order-1 md:order-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy/50">
                <Image
                  src="/images/clay-headshot-new.jpg"
                  alt="Clay King"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "55% top", filter: "contrast(0.95) brightness(1.05)" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="bg-off-white border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`py-8 md:py-12 px-4 md:px-6 text-center ${
                    i % 2 === 0 ? "border-r border-border-light" : ""
                  } ${i < 2 ? "md:border-r" : "md:border-r-0"} ${i < stats.length - 1 ? "md:border-r md:border-border-light" : ""}`}
                >
                  <div className="font-heading text-3xl md:text-5xl font-bold text-navy mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm tracking-[0.12em] uppercase text-text-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ THE VOICE ═══════════ */}
        <section className="grid md:grid-cols-2">
          <div className="bg-navy p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            <p className="text-sm tracking-[0.2em] uppercase text-steel-light font-medium mb-6">
              The Voice
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Experience Speaks
              <br />
              <span className="text-steel-light">Louder Than Trends</span>
            </h2>
            <p className="text-silver leading-relaxed text-lg font-light">
              In a world of 20-something influencers, Clay brings something
              different: decades of real-world experience, a voice that commands
              trust, and the kind of authenticity you can&apos;t fake.
            </p>
          </div>

          <div className="bg-off-white p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-steel font-semibold mb-2">
                  Creator
                </p>
                <h3 className="font-heading text-2xl font-bold text-text-dark mb-1">
                  Clay King
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  Content Creator &amp; Storyteller
                </p>
                <p className="text-text-mid leading-relaxed">
                  Clay proves that great content has no age requirement. With a
                  lifetime of stories and an eye for what&apos;s real, he creates
                  content that resonates with audiences of every generation.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "UGC",
                  "Testimonials",
                  "Storytelling",
                  "Product Reviews",
                  "65+ Creator",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-light text-text-mid text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT I CREATE ═══════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-sm tracking-[0.2em] uppercase text-steel font-semibold mb-4">
              What I Create
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-16 max-w-[600px] leading-tight">
              Content That Connects Across Generations
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border border-border-light rounded-2xl p-8 hover:border-steel transition-colors"
                >
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PORTFOLIO / VIDEO GRID ═══════════ */}
        <section id="work" className="bg-off-white py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-steel font-semibold mb-4">
                  Portfolio
                </p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                  Featured Work
                </h2>
              </div>

              <div className="flex gap-3 mt-6 md:mt-0">
                {["all", "ugc", "testimonial"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-xs tracking-[0.12em] uppercase font-semibold px-5 py-2.5 rounded-full transition-all ${
                      activeFilter === filter
                        ? "bg-navy text-white"
                        : "bg-white text-text-mid hover:bg-navy/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="video-card rounded-xl overflow-hidden"
                  onClick={() => video.src && toggleVideo(video.id)}
                >
                  {video.src ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[video.id] = el;
                      }}
                      src={video.src}
                      className="w-full aspect-[9/16] object-cover rounded-xl"
                      playsInline
                      loop
                      controls
                      poster={video.poster}
                    />
                  ) : (
                    <div
                      className="w-full aspect-[9/16] rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #1a2332 0%, #2a3a52 50%, #1a2332 100%)",
                      }}
                    >
                      <span className="text-silver text-sm tracking-wide">
                        VIDEO {video.id}
                      </span>
                    </div>
                  )}

                  <div className="play-btn">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                      >
                        <path d="M20 12L0 24V0L20 12Z" fill="#1a2332" />
                      </svg>
                    </div>
                  </div>

                  <div className="video-label">
                    <p className="text-white text-sm font-semibold">
                      {video.label}
                    </p>
                  </div>
                </div>
              ))}

              {[3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full aspect-[9/16] rounded-xl border-2 border-dashed border-border-light flex items-center justify-center"
                >
                  <span className="text-text-muted text-xs tracking-[0.1em] uppercase">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ABOUT + PHOTOS ═══════════ */}
        <section
          id="about"
          className="py-20 md:py-28"
          style={{
            background: "linear-gradient(160deg, #1a2332 0%, #0f1620 100%)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-sm tracking-[0.2em] uppercase text-steel-light font-medium mb-4">
              About
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Not Your Typical<br />Content Creator
            </h2>
            <div className="max-w-[700px] space-y-4 text-silver leading-relaxed text-lg font-light mb-6">
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
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-steel-light/70 mb-16">
              {[
                "Authentic",
                "Experienced",
                "Trustworthy",
                "Relatable",
                "Professional",
              ].map((trait, i) => (
                <span key={trait} className="flex items-center gap-4">
                  {trait}
                  {i < 4 && <span className="text-steel-light/30">/</span>}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  style={{ objectPosition: "center top", transform: "translateX(30px) scale(1.1)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section
          id="contact"
          className="bg-white py-20 md:py-28 border-t border-border-light"
        >
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <p className="font-script text-steel text-2xl mb-4">
              Let&apos;s work together
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
              Ready to Create Something Real?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Looking for a content creator who brings experience, authenticity,
              and a perspective that stands out? Let&apos;s talk.
            </p>

            <div className="flex justify-center mb-12">
              <a
                href="mailto:oldguyugc@gmail.com"
                className="inline-block bg-navy hover:bg-[#0f1620] text-white font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 text-text-muted text-sm">
              <a
                href="https://instagram.com/oldguyugc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @oldguyugc
              </a>
              <a
                href="mailto:oldguyugc@gmail.com"
                className="hover:text-navy transition-colors"
              >
                oldguyugc@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-off-white border-t border-border-light py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-text-muted text-sm">
          <span>&copy; 2026 Clay King. All rights reserved.</span>
          <span className="font-heading text-text-dark font-semibold">CK</span>
        </div>
      </footer>
    </>
  );
}
