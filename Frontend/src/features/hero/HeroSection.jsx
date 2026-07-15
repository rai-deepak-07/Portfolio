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
    position: "top-2 left-0 sm:top-6 lg:top-8",
  },
  {
    title: "Django",
    subtitle: "Backend",
    icon: <Database size={16} />,
    position: "top-12 right-0 sm:top-20 lg:top-28",
  },
  {
    title: "REST API",
    subtitle: "Architecture",
    icon: <Globe size={16} />,
    position: "bottom-6 left-1 sm:bottom-10 sm:left-3 lg:bottom-12 lg:left-5",
  },
  {
    title: "PostgreSQL",
    subtitle: "Database",
    icon: <Layers3 size={16} />,
    position: "bottom-10 right-0 sm:bottom-16 sm:right-1 lg:bottom-24 lg:right-2",
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

        pt-24
        pb-12

        sm:pt-28
        sm:pb-16

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

            h-[260px]
            w-[260px]

            rounded-full

            bg-primary/20

            blur-[110px]

            sm:h-[340px]
            sm:w-[340px]
            sm:blur-[130px]

            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-0

            h-[280px]
            w-[280px]

            rounded-full

            bg-secondary/20

            blur-[120px]

            sm:h-[360px]
            sm:w-[360px]
            sm:blur-[150px]

            lg:h-[460px]
            lg:w-[460px]
            lg:blur-[170px]
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
                mt-6

                max-w-2xl

                text-[2.1rem]
                font-black

                leading-[1.05]

                tracking-[-0.03em]

                sm:mt-7
                sm:text-[3.3rem]
                sm:leading-[1]

                lg:text-[3.2rem]

                xl:text-[3.6rem]
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
                mt-5
                text-left
                max-w-xl

                text-sm

                leading-6

                text-muted

                sm:mt-7
                sm:text-[15px]
                sm:leading-7

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
                mt-6

                flex
                flex-wrap

                gap-3

                sm:mt-8
                sm:gap-4
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
              className="mt-8 sm:mt-10"
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

              mt-8

              sm:mt-12

              lg:mt-0
            "
          >
            {/* Background Glow — two quiet blobs instead of one loud tri-color one */}

            <div
              className="
                absolute

                h-[260px]
                w-[260px]

                rounded-full

                bg-primary/15

                blur-[70px]

                sm:h-[340px]
                sm:w-[340px]
                sm:blur-[90px]

                lg:h-[440px]
                lg:w-[440px]
                lg:blur-[110px]
              "
            />

            <div
              className="
                absolute

                h-[130px]
                w-[130px]

                translate-x-14
                translate-y-14

                rounded-full

                bg-[#5EEAD4]/10

                blur-[55px]

                sm:h-[170px]
                sm:w-[170px]
                sm:translate-x-16
                sm:translate-y-16
                sm:blur-[70px]

                lg:h-[220px]
                lg:w-[220px]
                lg:translate-x-24
                lg:translate-y-24
                lg:blur-[90px]
              "
            />

            {/* Faint dot-grid so the glass card has something to sit on */}

            <div
              className="
                absolute

                h-[280px]
                w-[280px]

                rounded-full

                text-white

                opacity-[0.12]

                [background-image:radial-gradient(currentColor_1px,transparent_1px)]
                [background-size:14px_14px]

                sm:h-[360px]
                sm:w-[360px]
                sm:[background-size:16px_16px]

                lg:h-[480px]
                lg:w-[480px]
                lg:[background-size:18px_18px]
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
              className="absolute h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]"
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

                h-[190px]
                w-[165px]

                -rotate-6

                rounded-[20px]

                border
                border-white/10

                bg-white/[0.02]

                backdrop-blur-xl

                sm:h-[260px]
                sm:w-[230px]
                sm:rounded-[26px]

                lg:h-[340px]
                lg:w-[300px]
                lg:rounded-[30px]
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

                rounded-[22px]

                border
                border-white/10

                bg-white/[0.04]

                p-3

                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(0,0,0,.35)]

                sm:rounded-[28px]
                sm:p-4

                lg:rounded-[34px]
                lg:p-5
                lg:shadow-[0_35px_90px_rgba(0,0,0,.35)]
              "
            >
              <img
                src={heroImage}
                alt="Deepak Raikwar"
                className="
                  w-full

                  max-w-[210px]

                  rounded-[18px]

                  object-cover

                  sm:max-w-[320px]
                  sm:rounded-[24px]

                  lg:max-w-[420px]
                  lg:rounded-[28px]

                  xl:max-w-[460px]
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

                  gap-1.5

                  rounded-xl

                  border
                  border-white/10

                  bg-slate-900/70

                  px-2.5
                  py-1.5

                  backdrop-blur-2xl

                  shadow-xl

                  sm:gap-2.5
                  sm:rounded-2xl
                  sm:px-4
                  sm:py-2.5
                `}
              >
                <span className="text-primary [&>svg]:h-3 [&>svg]:w-3 sm:[&>svg]:h-4 sm:[&>svg]:w-4">{card.icon}</span>

                <div className="leading-tight">
                  <h4
                    className="
                      text-[11px]

                      font-semibold

                      text-white

                      sm:text-sm
                    "
                  >
                    {card.title}
                  </h4>

                  <p
                    className="
                      mt-0.5

                      font-mono

                      text-[8px]

                      uppercase

                      tracking-wide

                      text-muted

                      sm:text-[10px]
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

                left-8
                top-5

                h-1.5
                w-1.5

                rounded-full

                bg-primary

                sm:left-16
                sm:top-10
                sm:h-2
                sm:w-2
              "
            />

            <div
              className="
                absolute

                bottom-10
                right-5

                h-1.5
                w-1.5

                rounded-full

                bg-[#5EEAD4]

                sm:bottom-20
                sm:right-10
                sm:h-2
                sm:w-2
              "
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}