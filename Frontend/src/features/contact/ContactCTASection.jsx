import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

export default function ContactCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-5" />

      {/* Glow */}
      <div className="absolute -left-40 top-10 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[170px]" />

      <Container>
        <SectionTitle
          badge="Let's Build Together"
          badgePulse={true}
          badgeSize="lg"
          badgeVariant="primary"
          title="Ready to Start"
          highlight="Your Next Project?"
          description="Whether you need a modern web application, scalable backend APIs or a complete digital product, I'd love to hear about your idea."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-14 md:py-16"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />

          {/* Top Border */}
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 md:px-4 py-2 text-sm font-medium text-primary">
              🚀 Available for Freelance • Remote • Full-Time
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
              I design and develop modern, scalable web applications with clean
              user experiences, robust backend architecture, and long-term
              maintainability. Let's build something users will love.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button rightIcon={<ArrowUpRight size={18} />}>
                Start a Project
              </Button>

              <Button
                variant="outline"
                rightIcon={<Download size={18} />}
              >
                Download Resume
              </Button>
            </div>

            {/* Divider */}
            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Bottom Text */}
            <p className="mt-6 text-sm text-muted">
              Whether it's a startup, SaaS platform, portfolio, or enterprise
              application, I'm always excited to work on meaningful projects.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}