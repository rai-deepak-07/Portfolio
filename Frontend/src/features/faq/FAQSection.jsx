import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, MessageCircle } from 'lucide-react';

import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import { usePortfolio } from '../../context/PortfolioContext';

function FAQItem({ item, isOpen, onClick }) {
  return (
    <motion.div
      layout
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-primary/40 transition-all"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:gap-6 sm:p-5"
      >
        <h3 className="text-sm font-semibold sm:text-base">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-9 sm:w-9"
        >
          <Plus size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="border-t border-white/10 px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
              <p className="text-sm leading-6 sm:leading-7 text-muted">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState(-1);
  const { state } = usePortfolio();

  const faqs = state.faqs || [];

  return (
    <section id="faq" className="relative overflow-hidden py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />

      <Container>
        <SectionTitle
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Questions Before"
          highlight="We Build Together"
          description="Answers to the most common questions about my development process, technologies and collaboration."
        />

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Still have
              <span className="block text-primary">questions?</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7 lg:mt-6">
              Every project is different. If you don't find your answer here,
              feel free to contact me and I'll be happy to discuss your ideas,
              technical requirements and timeline.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:mt-8 sm:p-6">
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-4 sm:h-12 sm:w-12">
                <MessageCircle size={20} />
              </div>

              <h3 className="text-lg font-semibold sm:text-xl">Let's Talk</h3>

              <p className="mt-2.5 text-sm leading-6 text-muted sm:mt-3">
                Ready to build something amazing? Let's discuss your project.
              </p>

              <div className="mt-5 sm:mt-6">
                <Button rightIcon={<ArrowRight size={18} />}>Contact Me</Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3.5 sm:space-y-4"
          >
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  item={faq}
                  isOpen={open === index}
                  onClick={() => setOpen(open === index ? -1 : index)}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center text-sm text-muted sm:p-8 sm:text-base">
                No FAQs available.
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
