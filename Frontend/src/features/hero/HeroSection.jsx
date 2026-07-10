import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe,
} from "lucide-react";

import heroImage from "../../assets/hero.png";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

const technologies = [
  "React",
  "Django",
  "REST API",
  "PostgreSQL",
  "Python",
  "JavaScript",
];

const statistics = [
  {
    value: "25+",
    label: "Projects",
  },
  {
    value: "100+",
    label: "DSA Problems",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
];

const floatingCards = [
  {
    title: "React",
    icon: <Code2 size={20} />,
    position: "top-8 left-0",
  },
  {
    title: "Django",
    icon: <Database size={20} />,
    position: "top-28 right-0",
  },
  {
    title: "REST API",
    icon: <Globe size={20} />,
    position: "bottom-12 left-4",
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
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-36
        pb-24
        lg:min-h-screen
        flex
        items-center
      "
    >
      {/* Background Blur */}

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
            left-0
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-primary/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-secondary/20
            blur-[160px]
          "
        />

        {/* Animated line grid, faded toward the top so it reads as depth
            rather than a flat tile pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.07]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <Container>
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >


          {/* ===========================
              LEFT CONTENT
          =========================== */}

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
                pulse={true}
                // leftIcon={<CheckCircle2 size={15} />}
                className="mb-6"
              >
                Available for Freelance
              </Badge>
            </motion.div>

            {/* Heading */}

            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                text-5xl
                font-black
                leading-tight

                sm:text-6xl

                lg:text-7xl
              "
            >
              Engineering

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-primary
                  via-cyan-400
                  to-secondary

                  bg-clip-text

                  text-transparent
                "
              >
                Digital Products
              </span>

              That Scale.
            </motion.h1>

            {/* Description */}

            <motion.p
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-8

                max-w-xl

                text-lg

                leading-8

                text-muted
              "
            >
              I design and build premium web applications using
              React, Django, REST APIs, PostgreSQL, and modern
              frontend technologies focused on performance,
              scalability, and exceptional user experience.
            </motion.p>

            {/* CTA Buttons */}

            <motion.div
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-10

                flex
                flex-wrap

                gap-4
              "
            >
              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Hire Me
              </Button>

              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Download size={18} />}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Technology Stack */}

            <motion.div
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-12

                flex
                flex-wrap

                gap-3
              "
            >
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* Statistics */}

            <motion.div
              custom={0.75}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mt-14

                grid

                grid-cols-3

                gap-5
              "
            >
              {statistics.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    p-5

                    backdrop-blur-xl
                  "
                >
                  <h3
                    className="
                      text-3xl
                      font-bold

                      text-primary
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      text-muted
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ===========================
              RIGHT CONTENT
          =========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >
            {/* Main Glow */}

            <div
              className="
                absolute

                h-[520px]
                w-[520px]

                rounded-full

                bg-gradient-to-br
                from-primary/20
                via-secondary/15
                to-cyan-400/10

                blur-[90px]
              "
            />

            {/* Hero Image */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20

                overflow-hidden

                rounded-[36px]

                border
                border-white/10

                bg-white/5

                p-5

                backdrop-blur-2xl

                shadow-[0_25px_80px_rgba(0,0,0,.35)]
              "
            >
              <img
                src={heroImage}
                alt="Hero"
                className="
                  w-full
                  max-w-md

                  rounded-3xl

                  object-cover
                "
              />
            </motion.div>

            {/* Floating Cards */}

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  scale: .8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: index * .25,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  ${card.position}

                  z-30

                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  px-5
                  py-4

                  backdrop-blur-xl

                  shadow-xl
                `}
              >
                <div
                  className="
                    flex

                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-primary/20

                    text-primary
                  "
                >
                  {card.icon}
                </div>

                <div>
                  <p
                    className="
                      text-sm

                      text-muted
                    "
                  >
                    Technology
                  </p>

                  <h4
                    className="
                      font-semibold

                      text-white
                    "
                  >
                    {card.title}
                  </h4>
                </div>
              </motion.div>
            ))}

            {/* Decorative Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute

                h-[620px]
                w-[620px]

                rounded-full

                border

                border-white/5
              "
            />
          </motion.div>

        </div>

      </Container>

    </section>
  );
}