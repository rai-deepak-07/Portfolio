import { motion } from 'framer-motion';
import * as LR from 'lucide-react';

import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';

import { usePortfolio } from '../../context/PortfolioContext';

export default function SolutionsSection() {
  const { state } = usePortfolio();

  const services = state.services || [];

  const featuredService = services.find((service) => service.is_featured);

  const serviceCards = services.filter((service) => !service.is_featured);

  return (
    <section
      id="services"
      className="section-background relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-28"
    >
      <Container>
        <SectionTitle
          badge="Solutions I Deliver"
          title="Transforming ideas into"
          highlight="scalable digital products."
          description="Every solution is designed with clean architecture, modern engineering, outstanding user experience and long-term maintainability."
          align="center"
        />

        {featuredService && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:rounded-[28px] sm:p-6 lg:p-7"
          >
            <div className="inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary to-secondary p-2.5 shadow-lg shadow-primary/30 sm:p-3">
                  {(() => {
                    const Icon = LR[featuredService.icon];

                    return Icon ? (
                      <Icon className="text-white" size={20} />
                    ) : null;
                  })()}
                </div>

                <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {featuredService.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                  {featuredService.short_description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                  {featuredService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={featuredService.button_url}
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 sm:px-7 sm:py-4 sm:text-base"
              >
                {featuredService.button_text}

                <LR.ArrowUpRight className="ml-2 inline h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = LR[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.06] sm:p-5"
              >
                <div className="inline-flex rounded-xl bg-gradient-to-br from-primary to-secondary p-2 shadow-lg shadow-primary/20 sm:p-2.5">
                  <Icon className="text-white" size={18} />
                </div>
                <h4 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {service.short_description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
