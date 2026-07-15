import { motion } from 'framer-motion';

import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import * as Ri from 'react-icons/si';
import { usePortfolio } from '../../context/PortfolioContext';

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 md:bg-gradient-to-r from-background to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 md:bg-gradient-to-l from-background to-transparent" />

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
          const Icon = Ri[item.icon];

          return (
            <div
              key={`${item.id}-${index}`}
              className="
                group
                flex
                h-16
                min-w-[170px]
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-white/[0.08]
                hover:shadow-[0_20px_60px_rgba(80,120,255,.18)]

                sm:h-20
                sm:min-w-[220px]
                sm:gap-5
                sm:px-6
              "
            >
              {Icon && (
                <Icon
                  size={26}
                  color={item.color}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:hidden
                  "
                />
              )}
              {Icon && (
                <Icon
                  size={34}
                  color={item.color}
                  className="
                    hidden
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:block
                  "
                />
              )}

              <span
                className="
                  text-sm
                  font-medium
                  text-muted
                  transition
                  group-hover:text-white
                  sm:text-base
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
  const { state } = usePortfolio();

  const technologies = state.technologies || [];

  const middle = Math.ceil(technologies.length / 2);

  const row1 = technologies.slice(0, middle);

  const row2 = technologies.slice(middle);

  return (
    <section id="technologies" className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-28">
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
          badgePulse={true}
          badgeVariant="glass"
          title="Building Products"
          highlight="Powered by Modern Technology"
          description="From intuitive frontend experiences to scalable backend systems, every product is built using trusted technologies chosen for performance, security, and long-term maintainability."
        />

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6 lg:mt-20 lg:space-y-8">
          <MarqueeRow items={row1} speed={30} />

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
            mt-10
            max-w-3xl
            text-center
            text-sm
            leading-6
            text-muted
            sm:mt-12
            sm:text-base
            sm:leading-7
            lg:mt-16
            lg:text-lg
            lg:leading-8
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
