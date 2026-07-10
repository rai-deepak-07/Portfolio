import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "MCA graduate with a strong academic foundation in computer applications and software engineering.",
  },
  {
    icon: Briefcase,
    title: "Development",
    description:
      "Building scalable frontend interfaces, backend systems, and REST APIs using modern technologies.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "Solved 100+ DSA problems while continuously improving analytical thinking and software design.",
  },
  {
    icon: Rocket,
    title: "Vision",
    description:
      "Focused on creating products that combine performance, clean architecture, and exceptional user experience.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Bachelor of Computer Applications",
    description:
      "Built programming fundamentals and explored software development.",
  },
  {
    year: "2023",
    title: "Python Full Stack Training",
    description:
      "Worked with Python, Django, REST APIs, SQL, JavaScript, and React.",
  },
  {
    year: "2024",
    title: "Advanced Full Stack Projects",
    description:
      "Developed complete applications using modern frontend and backend technologies.",
  },
  {
    year: "2026",
    title: "Master of Computer Applications",
    description:
      "Graduated and focused on building production-ready software solutions.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28"
    >
      <Container>

        <SectionTitle
          badge="ABOUT"
          title="Building Software"
          highlight="With Purpose"
          description="I believe great software isn't just about writing code. It's about understanding problems, designing scalable solutions, and delivering experiences that create real value."
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-4xl font-bold leading-tight">
              Engineering Solutions,
              <br />

              <span className="text-primary">
                Not Just Applications.
              </span>
            </h3>

            <p className="mt-8 leading-8 text-muted">
              I enjoy transforming complex ideas into reliable,
              scalable, and user-friendly digital products.
              Every project is built with a focus on clean
              architecture, maintainability, and long-term value.
            </p>

            <p className="mt-6 leading-8 text-muted">
              From responsive frontend interfaces to secure
              backend APIs, I aim to deliver complete solutions
              that solve real business problems while maintaining
              high performance and exceptional user experience.
            </p>

            <div className="mt-10">
              <Button
                rightIcon={<ArrowRight size={18} />}
              >
                Let's Build Together
              </Button>
            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-5 sm:grid-cols-2">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: .5,
                    delay: index * .1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-primary/40
                    hover:shadow-[0_20px_50px_rgba(91,140,255,.18)]
                  "
                >

                  <div
                    className="
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <Icon size={26} />
                  </div>

                  <h4 className="text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-7 text-muted">
                    {item.description}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

        {/* Timeline */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="mt-24"
        >

          <h3 className="mb-12 text-3xl font-bold">
            Journey Timeline
          </h3>

          <div className="relative border-l border-white/10 pl-8">

            {timeline.map((item) => (

              <div
                key={item.year}
                className="relative mb-14 last:mb-0"
              >

                <span
                  className="
                    absolute
                    -left-[42px]
                    top-1
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-background
                    bg-primary
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-widest
                    text-primary
                  "
                >
                  {item.year}
                </span>

                <h4 className="mt-2 text-2xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-muted">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </Container>
    </section>
  );
}