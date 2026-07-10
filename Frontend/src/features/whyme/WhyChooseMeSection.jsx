import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers3,
  Users,
  Code2,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';

const principles = [
  'Full Stack Engineering',
  'Scalable Backend Architecture',
  'REST API Development',
  'Performance Optimization',
];

const cards = [
  {
    title: 'Performance First',
    description:
      'Optimized frontend rendering and backend APIs for fast, reliable products.',
    icon: Gauge,
  },
  {
    title: 'Security',
    description:
      'Authentication, authorization and production-ready engineering practices.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Systems',
    description:
      'Architecture designed to grow from MVP to enterprise applications.',
    icon: Layers3,
  },
  {
    title: 'Product Mindset',
    description:
      'Features are built around business value, not just technical implementation.',
    icon: Rocket,
  },
  {
    title: 'Clean Code',
    description:
      'Readable, maintainable and reusable code for long-term success.',
    icon: Code2,
  },
  {
    title: 'Communication',
    description:
      'Transparent collaboration, planning and regular project updates.',
    icon: Users,
  },
];

function FeatureCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(91,140,255,.18)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="mt-4 leading-7 text-muted">{item.description}</p>
    </motion.div>
  );
}

export default function WhyChooseMeSection() {
  return (
    <section id="why-work-with-me" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-primary/10 blur-[170px]" />
      <Container>
        <SectionTitle
          badge="WHY WORK WITH ME"
          title="Engineering Beyond"
          highlight="Just Writing Code"
          description="Every product is built with long-term thinking, combining clean architecture, modern technologies and reliable engineering practices."
        />
        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold leading-tight">
              Building software
              <span className="block text-primary">
                {' '}
                that grows with your business.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              I focus on delivering complete digital products—not just code.
              Every application is designed for performance, maintainability,
              scalability and a great user experience.
            </p>
            <div className="mt-10 space-y-5">
              {principles.map((p) => (
                <div key={p} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary" size={22} />
                  <span className="text-lg">{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button rightIcon={<ArrowRight size={18} />}>
                Let's Build Together
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {cards.map((c) => (
              <FeatureCard key={c.title} item={c} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
