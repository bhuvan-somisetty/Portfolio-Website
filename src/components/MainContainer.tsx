import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { initialFX } from "./utils/initialFX";

/* ─── Skill list ──────────────────────────────────────────────────────────── */
const SKILLS = [
  { name: "Python",         icon: "🐍", color: "#3776ab" },
  { name: "JavaScript",     icon: "JS", color: "#f7df1e" },
  { name: "TypeScript",     icon: "TS", color: "#3178c6" },
  { name: "HTML",           icon: "🌐", color: "#e34c26" },
  { name: "CSS",            icon: "🎨", color: "#1572b6" },
  { name: "PHP",            icon: "🐘", color: "#8892bf" },
  { name: "Go",             icon: "Go", color: "#00add8" },
  { name: "React",          icon: "⚛️", color: "#61dafb" },
  { name: "React Native",   icon: "📱", color: "#61dafb" },
  { name: "Expo",           icon: "📦", color: "#e1e1e1" },
  { name: "Node.js",        icon: "🟢", color: "#339933" },
  { name: "Express.js",     icon: "Ex", color: "#aaaaaa" },
  { name: "PostgreSQL",     icon: "🐘", color: "#336791" },
  { name: "MySQL",          icon: "🗄️", color: "#4479a1" },
  { name: "MongoDB",        icon: "🍃", color: "#47a248" },
  { name: "SQL",            icon: "DB", color: "#0078d4" },
  { name: "Git",            icon: "🔀", color: "#f05032" },
  { name: "GitHub",         icon: "🐙", color: "#e1e1e1" },
  { name: "GitHub Actions", icon: "⚙️", color: "#2088ff" },
  { name: "Vercel",         icon: "▲",  color: "#e1e1e1" },
  { name: "Render",         icon: "🚀", color: "#46e3b7" },
  { name: "REST APIs",      icon: "🔗", color: "#ff6b35" },
  { name: "JWT Auth",       icon: "🔑", color: "#d63aff" },
  { name: "Google OAuth",   icon: "🔐", color: "#4285f4" },
  { name: "API Keys",       icon: "🗝️", color: "#ec4899" },
  { name: "Bcrypt",         icon: "🔒", color: "#7b61ff" },
  { name: "Axios",          icon: "Ax", color: "#5a29e4" },
  { name: "Postman",        icon: "📮", color: "#ff6c37" },
  { name: "Thunder Client", icon: "⚡", color: "#743de0" },
  { name: "VS Code",        icon: "💻", color: "#007acc" },
  { name: "Figma",          icon: "🎯", color: "#f24e1e" },
  { name: "Canva",          icon: "🖼️", color: "#00c4cc" },
  { name: "Pull Requests",  icon: "🔃", color: "#7b61ff" },
  { name: "Code Review",    icon: "👁️", color: "#a78bfa" },
  { name: "CI Checks",      icon: "✅", color: "#22c55e" },
  { name: "Documentation",  icon: "📝", color: "#94a3b8" },
];

/* ─── Bubble hover glow (pure CSS-in-JS, no class dependency) ────────────── */
const bubbleBase: React.CSSProperties = {
  width: "84px",
  height: "84px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  transition: "transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease",
  cursor: "default",
  userSelect: "none",
};

/* ─── Component ───────────────────────────────────────────────────────────── */
const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    setTimeout(() => { initialFX(); }, 100);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />

            {/* ── My Work (5 horizontal scroll cards) ─────────────── */}
            <Work />

            {/* ── Tech Stack ──────────────────────────────────────── */}
            {/*
              PLACEMENT: This div sits in the normal DOM flow, AFTER the
              Work pin-spacer. GSAP's pin spacer (created by Work) ends
              BEFORE this element, so Tech Stack is never inside or behind
              the pin container. It renders purely as a standard block section.
            */}
            <div
              id="tech-stack"
              style={{
                width: "100%",
                padding: "100px 6vw",
                marginTop: "80px",
                boxSizing: "border-box",
                backgroundColor: "#0b080c",
                borderTop: "1px solid rgba(160,100,255,0.15)",
              }}
            >
              {/* Heading */}
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontWeight: 400,
                  margin: "0 0 14px",
                  background: "linear-gradient(160deg,#c2a4ff 0%,#ffffff 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                My <strong style={{ fontWeight: 700 }}>Tech Stack</strong>
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(255,255,255,0.42)",
                  fontSize: "15px",
                  margin: "0 auto 60px",
                  maxWidth: "520px",
                  lineHeight: 1.65,
                  letterSpacing: "0.3px",
                }}
              >
                Technologies, tools, and practices I use to build real-world digital products.
              </p>

              {/* Bubble grid */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "28px 22px",
                  maxWidth: "1160px",
                  margin: "0 auto",
                }}
              >
                {SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    title={skill.name}
                    onMouseEnter={(e) => {
                      const bubble = e.currentTarget.querySelector(".ts-bubble") as HTMLElement;
                      if (bubble) {
                        bubble.style.transform = "scale(1.15) translateY(-4px)";
                        bubble.style.boxShadow = `0 0 20px ${skill.color}55, 0 0 50px ${skill.color}22`;
                        bubble.style.background = `${skill.color}18`;
                        bubble.style.borderColor = `${skill.color}88`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      const bubble = e.currentTarget.querySelector(".ts-bubble") as HTMLElement;
                      if (bubble) {
                        bubble.style.transform = "";
                        bubble.style.boxShadow = "";
                        bubble.style.background = "rgba(255,255,255,0.04)";
                        bubble.style.borderColor = `${skill.color}33`;
                      }
                    }}
                  >
                    {/* Circle bubble */}
                    <div
                      className="ts-bubble"
                      style={{
                        ...bubbleBase,
                        background: "rgba(255,255,255,0.04)",
                        border: `1.5px solid ${skill.color}33`,
                      }}
                    >
                      {skill.icon}
                    </div>

                    {/* Label */}
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.45)",
                        textTransform: "uppercase",
                        letterSpacing: "0.6px",
                        textAlign: "center",
                        maxWidth: "84px",
                        lineHeight: 1.3,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* ── End Tech Stack ──────────────────────────────────── */}

            {/* ── Contact ─────────────────────────────────────────── */}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
