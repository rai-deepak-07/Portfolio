import { useId } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe,
  Layers3,
} from "lucide-react";

import heroImage from "../../assets/hero.png";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

import { usePortfolio } from "../../context/PortfolioContext";

const technologies = [
  "React",
  "Django",
  "REST API",
  "PostgreSQL",
  "Python",
  "JavaScript",
];

const floatingCards = [
  {
    title: "React",
    subtitle: "Frontend",
    icon: <Code2 size={16} />,
    position: "top-8 left-0",
  },
  {
    title: "Django",
    subtitle: "Backend",
    icon: <Database size={16} />,
    position: "top-28 right-0",
  },
  {
    title: "REST API",
    subtitle: "Architecture",
    icon: <Globe size={16} />,
    position: "bottom-12 left-5",
  },
  {
    title: "PostgreSQL",
    subtitle: "Database",
    icon: <Layers3 size={16} />,
    position: "bottom-24 right-2",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  const { state } = usePortfolio();
  const orbitPathId = useId();

  const resumeUrl =
    state?.configuration?.website?.resume || null;

  return (
    <section
      id="home"
      className="
        relative
        flex
        items-center
        overflow-hidden

        pt-28
        pb-16

        lg:min-h-screen
        lg:pt-30
        lg:pb-10
      "
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-32
            -top-20

            h-[420px]
            w-[420px]

            rounded-full

            bg-primary/20

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-0

            h-[460px]
            w-[460px]

            rounded-full

            bg-secondary/20

            blur-[170px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99,102,241,.8) 1px, transparent 1px),linear-gradient(to bottom, rgba(99,102,241,.8) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "radial-gradient(circle at top, black 30%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(circle at top, black 30%, transparent 95%)",
          }}
        />
      </div>

      <Container>
        <div
          className="
            grid
            items-center

            gap-12

            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* ==========================================
              LEFT
          ========================================== */}

          <div className="relative z-10">

            {/* Badge */}

            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Badge
                variant="success"
                pulse
                leftIcon={<CheckCircle2 size={13} />}
                className="px-3.5 py-1.5"
              >
                Available for Freelance • Remote • Full-Time
              </Badge>
            </motion.div>

            {/* Heading */}

            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-7

                max-w-2xl

                text-[2.4rem]
                font-black

                leading-[1]

                tracking-[-0.03em]

                sm:text-[3.3rem]

                lg:text-[3.6rem]
              "
            >
              Software Engineer

              <span
                className="
                  mt-2

                  block

                  bg-gradient-to-r
                  from-primary
                  via-cyan-400
                  to-violet-400

                  bg-clip-text

                  text-transparent
                "
              >
                Full Stack Developer
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-7
                text-justify
                max-w-xl

                text-[15px]

                leading-7

                text-muted

                md:text-[17px]
              "
            >
              I build secure, scalable and modern web applications
              using <span className="font-semibold text-white">React</span>,
              <span className="font-semibold text-white"> Django</span> and
              <span className="font-semibold text-white"> PostgreSQL</span>.

              From responsive user interfaces to REST APIs,
              authentication, deployment and long-term maintenance,
              I deliver complete production-ready software solutions.
            </motion.p>

            {/* CTA */}

            <motion.div
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-8

                flex
                flex-wrap

                gap-4
              "
            >
              <Button
                size="md"
                rightIcon={<ArrowRight size={18} />}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Start a Project
              </Button>

              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    variant="outline"
                    size="md"
                    leftIcon={<Download size={18} />}
                  >
                    Download Resume
                  </Button>
                </a>
              ) : (
                <Button
                  variant="outline"
                  size="md"
                  disabled
                >
                  Resume Unavailable
                </Button>
              )}
            </motion.div>

            {/* Technologies */}

            <motion.div
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10"
            >
              <p
                className="
                  mb-4

                  text-xs

                  font-semibold

                  uppercase

                  tracking-[0.28em]

                  text-primary
                "
              >
                Core Technologies
              </p>

              <div
                className="
                  flex
                  flex-wrap

                  gap-3
                "
              >
                {technologies.map((item) => (
                  <Badge
                    key={item}
                    variant="glass"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ==========================================
              RIGHT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              relative

              flex
              items-center
              justify-center

              mt-12

              lg:mt-0
            "
          >
            {/* Background Glow — two quiet blobs instead of one loud tri-color one */}

            <div
              className="
                absolute

                h-[440px]
                w-[440px]

                rounded-full

                bg-primary/15

                blur-[110px]
              "
            />

            <div
              className="
                absolute

                h-[220px]
                w-[220px]

                translate-x-24
                translate-y-24

                rounded-full

                bg-[#5EEAD4]/10

                blur-[90px]
              "
            />

            {/* Faint dot-grid so the glass card has something to sit on */}

            <div
              className="
                absolute

                h-[480px]
                w-[480px]

                rounded-full

                text-white

                opacity-[0.12]

                [background-image:radial-gradient(currentColor_1px,transparent_1px)]
                [background-size:18px_18px]
              "
            />

            {/* Signature: rotating orbit label, replaces the old plain ring */}

            <motion.svg
              viewBox="0 0 560 560"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              className="absolute h-[560px] w-[560px]"
            >
              <path
                id={orbitPathId}
                fill="none"
                d="M 280,280 m -230,0 a 230,230 0 1,1 460,0 a 230,230 0 1,1 -460,0"
              />
              <text
                className="font-mono uppercase"
                fill="#5EEAD4"
                fontSize="12"
                letterSpacing="3"
                opacity="0.7"
              >
                <textPath href={`#${orbitPathId}`} startOffset="0%">
                  {"React — Django — PostgreSQL — REST API — ".repeat(3)}
                </textPath>
              </text>
            </motion.svg>

            {/* Depth card — a second, quieter panel offset behind the main one */}

            <div
              className="
                absolute

                h-[340px]
                w-[300px]

                -rotate-6

                rounded-[30px]

                border
                border-white/10

                bg-white/[0.02]

                backdrop-blur-xl
              "
            />

            {/* Hero Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative

                z-20

                overflow-hidden

                rounded-[34px]

                border
                border-white/10

                bg-white/[0.04]

                p-5

                backdrop-blur-2xl

                shadow-[0_35px_90px_rgba(0,0,0,.35)]
              "
            >
              <img
                src={heroImage}
                alt="Deepak Raikwar"
                className="
                  w-full

                  max-w-[420px]

                  rounded-[28px]

                  object-cover

                  lg:max-w-[460px]
                "
              />

              {/* Thin caption strip fused to the card */}

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Portfolio — 2026
                </span>

                <span className="flex items-center gap-1.5 text-[10px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" />
                  Available
                </span>
              </div>
            </motion.div>

            {/* Floating Cards — slim pills, no boxed icons, so four of them stay light */}

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  ${card.position}

                  z-30

                  flex

                  items-center

                  gap-2.5

                  rounded-2xl

                  border
                  border-white/10

                  bg-slate-900/70

                  px-4
                  py-2.5

                  backdrop-blur-2xl

                  shadow-xl
                `}
              >
                <span className="text-primary">{card.icon}</span>

                <div className="leading-tight">
                  <h4
                    className="
                      text-sm

                      font-semibold

                      text-white
                    "
                  >
                    {card.title}
                  </h4>

                  <p
                    className="
                      mt-0.5

                      font-mono

                      text-[10px]

                      uppercase

                      tracking-wide

                      text-muted
                    "
                  >
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Small Accent Dots, riding the ring's inner edge */}

            <div
              className="
                absolute

                left-16
                top-10

                h-2
                w-2

                rounded-full

                bg-primary
              "
            />

            <div
              className="
                absolute

                bottom-20
                right-10

                h-2
                w-2

                rounded-full

                bg-[#5EEAD4]
              "
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}