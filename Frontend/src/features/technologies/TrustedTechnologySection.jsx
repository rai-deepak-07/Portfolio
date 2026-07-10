import { motion } from 'framer-motion';

import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';

import * as Ri from 'react-icons/si';

// Temporary Data
const row1 = [
  {
    name: 'React',
    icon: Ri.SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    icon: Ri.SiNextdotjs,
    color: '#ffffff',
  },
  {
    name: 'JavaScript',
    icon: Ri.SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    icon: Ri.SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'Tailwind CSS',
    icon: Ri.SiTailwindcss,
    color: '#38BDF8',
  },
  {
    name: 'Framer Motion',
    icon: Ri.SiFramer,
    color: '#ffffff',
  },
  {
    name: 'Python',
    icon: Ri.SiPython,
    color: '#3776AB',
  },
  {
    name: 'Django',
    icon: Ri.SiDjango,
    color: '#44B78B',
  },
];

const row2 = [
  {
    name: 'PostgreSQL',
    icon: Ri.SiPostgresql,
    color: '#336791',
  },
  {
    name: 'Redis',
    icon: Ri.SiRedis,
    color: '#DC382D',
  },
  {
    name: 'Docker',
    icon: Ri.SiDocker,
    color: '#2496ED',
  },
  {
    name: 'Git',
    icon: Ri.SiGit,
    color: '#F05032',
  },
  {
    name: 'GitHub',
    icon: Ri.SiGithub,
    color: '#ffffff',
  },
  {
    name: 'Render',
    icon: Ri.SiRender,
    color: '#46E3B7',
  },
  {
    name: 'Vercel',
    icon: Ri.SiVercel,
    color: '#ffffff',
  },
  {
    name: 'Cloudinary',
    icon: Ri.SiCloudinary,
    color: '#3448C5',
  },
];

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-background to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${index}`}
              className="
    group
    flex
    h-20
    min-w-[220px]
    items-center
    gap-5
    rounded-2xl
    border
    border-white/10
    bg-white/[0.04]
    px-6
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-primary/40
    hover:bg-white/[0.08]
    hover:shadow-[0_20px_60px_rgba(80,120,255,.18)]
  "
            >
              <Icon
                size={34}
                color={item.color}
                className="
      transition-transform
      duration-300
      group-hover:scale-110
    "
              />

              <span
                className="
      text-base
      font-medium
      text-muted
      transition
      group-hover:text-white
    "
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function TrustedTechnologySection() {
  return (
    <section id="technologies" className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
          bg-[size:70px_70px]
          opacity-[0.05]
        "
      />

      <Container>
        <SectionTitle
          badge="TRUSTED TECHNOLOGIES"
          title="Building Products"
          highlight="Powered by Modern Technology"
          description="From intuitive frontend experiences to scalable backend systems, every product is built using trusted technologies chosen for performance, security, and long-term maintainability."
        />

        <div className="mt-20 space-y-8">
          {/* Row 1 */}
          <MarqueeRow items={row1} speed={30} />

          {/* Row 2 */}
          <MarqueeRow items={row2} reverse speed={35} />
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-16
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-muted
          "
        >
          Every technology in this ecosystem is selected to deliver scalable
          architecture, exceptional performance, and reliable production-ready
          software.
        </motion.p>
      </Container>
    </section>
  );
}
