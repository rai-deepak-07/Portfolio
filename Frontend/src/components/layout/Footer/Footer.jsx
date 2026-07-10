import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {FaLinkedin, FaMailBulk, FaGithub} from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

const navigation = [
  { label: "Home", to: "home" },
  { label: "Projects", to: "projects" },
  { label: "Services", to: "services" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "REST API Development",
  "UI / UX Development",
  "Database Design",
  "Deployment",
];

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: FaMailBulk,
    label: "Email",
    href: "mailto:hello@example.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        section-background
        relative
        overflow-hidden
        border-t
        border-white/10
      "
    >
      <Container>

   

        {/* ===========================
            MAIN GRID
        =========================== */}

        <div
          className="
            grid
            gap-16

            py-20

            md:grid-cols-2

            xl:grid-cols-4
          "
        >

          {/* Brand */}

          <div>

            <h3
              className="
                text-3xl

                font-black
              "
            >
              DR
            </h3>

            <p
              className="
                mt-6

                leading-8

                text-muted
              "
            >
              Building premium web
              applications using React,
              Django, PostgreSQL,
              REST APIs and modern
              technologies.
            </p>

            <div
              className="
                mt-8

                space-y-4
              "
            >

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-muted">
                  hello@example.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-muted">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-muted">
                  India
                </span>
              </div>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h4
              className="
                mb-6

                text-xl

                font-semibold
              "
            >
              Navigation
            </h4>

            <div className="space-y-4">

              {navigation.map((item) => (

                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="
                    block
                    cursor-pointer
                    text-muted
                    transition
                    hover:text-primary
                  "
                >
                  {item.label}
                </ScrollLink>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h4
              className="
                mb-6

                text-xl

                font-semibold
              "
            >
              Services
            </h4>

            <div className="space-y-4">

              {services.map((service) => (

                <p
                  key={service}
                  className="text-muted"
                >
                  {service}
                </p>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h4
              className="
                mb-6

                text-xl

                font-semibold
              "
            >
              Connect
            </h4>

            <div
              className="
                flex

                flex-col

                gap-4
              "
            >

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex

                      items-center

                      justify-between

                      rounded-2xl

                      border

                      border-white/10

                      bg-white/[0.03]

                      px-5

                      py-4

                      transition-all

                      duration-300

                      hover:border-primary/40

                      hover:bg-white/[0.05]
                    "
                  >

                    <div
                      className="
                        flex

                        items-center

                        gap-3
                      "
                    >

                      <Icon size={20} />

                      <span>{item.label}</span>

                    </div>

                    <ArrowUpRight size={18} />

                  </a>

                );

              })}

            </div>

          </div>

        </div>

        {/* ===========================
            Bottom
        =========================== */}

        <div
          className="
            flex

            flex-col

            items-center

            justify-between

            gap-6

            border-t

            border-white/10

            py-8

            text-sm

            text-muted

            md:flex-row
          "
        >

          <p>
            © 2026 Deepak Raikwar.
            All Rights Reserved.
          </p>

          <div
            className="
              flex

              items-center

              gap-4
            "
          >

            <span>
              Built with React · Django · Framer Motion
            </span>

            <ScrollLink
              to="home"
              smooth
              duration={700}
              className="
                flex

                h-12

                w-12

                cursor-pointer

                items-center

                justify-center

                rounded-full

                border

                border-white/10

                bg-white/[0.04]

                transition

                hover:border-primary/40

                hover:bg-primary/10
              "
            >
              <ChevronUp size={18} />
            </ScrollLink>

          </div>

        </div>

      </Container>
    </footer>
  );
}