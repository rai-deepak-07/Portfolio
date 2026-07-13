import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import { usePortfolio } from "../../context/PortfolioContext";

export default function TrustMetricsSection() {
  const { state } = usePortfolio();

  const statistics = state.statistics || [];

  return (
    <section id="statistics" className="relative py-24 lg:py-32">
      
      <Container>

        <SectionTitle
          badge="ACHIEVEMENTS"
          badgePulse={true}
          title="Building Reliable"
          highlight="Digital Solutions"
          description="A quick overview of my development journey, technical expertise, and project experience."
        />

        <div
          className="
            mt-16 grid gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {statistics.map((item, index) => {

            const Icon =
              LucideIcons[item.icon] ||
              LucideIcons.CircleHelp;

            return (
              <motion.div
                key={item.id}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-7
                  md:p-7
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:shadow-[0_20px_60px_rgba(91,140,255,.15)]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-28
                    w-28
                    rounded-full
                    bg-primary/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    md:mb-7
                  "
                >
                  <Icon size={25} />
                </div>

                {/* Value */}

                <h3
                  className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  {item.value}
                </h3>

                {/* Title */}

                <h4
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    md:text-xl
                  "
                >
                  {item.title}
                </h4>

                {/* Description */}

                <p
                  className="
                    mt-4
                    text-muted
                    leading-6
                    md:text-base
                    md:leading-7
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}