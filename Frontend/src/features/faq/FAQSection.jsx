import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, MessageCircle } from "lucide-react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "I build complete web applications including UI development, backend systems, REST APIs, authentication, dashboards, deployment and long-term maintenance.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "My primary stack includes React, Tailwind CSS, Framer Motion, Python, Django, Django REST Framework, PostgreSQL, Docker and modern deployment platforms.",
  },
  {
    question: "Can you develop complete products?",
    answer:
      "Yes. I handle the complete lifecycle from planning and UI implementation to backend architecture, database design, deployment and optimization.",
  },
  {
    question: "Can you redesign an existing project?",
    answer:
      "Absolutely. I can modernize existing applications with better UX, improved performance, cleaner architecture and responsive layouts.",
  },
  {
    question: "Do you build secure REST APIs?",
    answer:
      "Yes. I implement JWT authentication, authorization, validation, secure endpoints and scalable API architecture using Django REST Framework.",
  },
  {
    question: "Do you offer deployment and maintenance?",
    answer:
      "Yes. I can deploy applications, monitor them, fix issues and provide continuous improvements after launch.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply reach out through the contact section. We'll discuss your requirements, define the scope and create a development plan.",
  },
];

function FAQItem({item,isOpen,onClick}){
  return (
    <motion.div layout className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-primary/40 transition-all">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 p-5 text-left"
      >
        <h3 className="text-base font-semibold">{item.question}</h3>
        <motion.div
          animate={{rotate:isOpen?45:0}}
          transition={{duration:.25}}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
        >
          <Plus size={18}/>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{height:0,opacity:0}}
            animate={{height:"auto",opacity:1}}
            exit={{height:0,opacity:0}}
            transition={{duration:.35}}
          >
            <div className="border-t border-white/10 px-5 pb-5 pt-4">
              <p className="text-sm leading-7 text-muted">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection(){
  const [open,setOpen]=useState(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />

      <Container>
        <SectionTitle
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Questions Before"
          highlight="We Build Together"
          description="Answers to the most common questions about my development process, technologies and collaboration."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="sticky top-28 self-start"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Still have
              <span className="block text-primary">questions?</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-muted">
              Every project is different. If you don't find your answer here,
              feel free to contact me and I'll be happy to discuss your ideas,
              technical requirements and timeline.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle size={22}/>
              </div>

              <h3 className="text-xl font-semibold">
                Let's Talk
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Ready to build something amazing? Let's discuss your project.
              </p>

              <div className="mt-6">
                <Button rightIcon={<ArrowRight size={18}/>}>
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="space-y-4"
          >
            {faqs.map((faq,index)=>(
              <FAQItem
                key={faq.question}
                item={faq}
                isOpen={open===index}
                onClick={()=>setOpen(open===index?-1:index)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}