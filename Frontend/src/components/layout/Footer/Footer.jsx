import { ArrowUpRight, ChevronUp } from 'lucide-react';

import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';

import { Link as ScrollLink } from 'react-scroll';

import Container from '../../ui/Container';

import { NAVIGATION } from '../../../config/navigation';
import { usePortfolio } from '../../../context/PortfolioContext';

const Icons = {
  ...FaIcons,
  ...Fa6Icons,
  ...MdIcons,
  ...SiIcons,
  ...RiIcons,
  ...HiIcons,
  ...IoIcons,
};

const CONTACT_LABELS = {
  website: 'Website',
};

export default function Footer() {
  const { state } = usePortfolio();

  const services = state?.services ?? [];
  const conf = state?.configuration ?? {};

  const footerServices = services.filter(({ is_featured }) => !is_featured);

  const SOCIAL_PRIORITY = ['github', 'linkedin'];

  const socialLinks = Object.entries(conf?.social ?? {})
    .map(([key, item]) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      href: item.value,
      Icon: Icons[item.icon],
    }))
    .filter(({ href }) => href);

  const orderedSocialLinks = [
    ...SOCIAL_PRIORITY.map((key) =>
      socialLinks.find((item) => item.key === key)
    ).filter(Boolean),

    ...socialLinks.filter(({ key }) => !SOCIAL_PRIORITY.includes(key)),
  ].slice(0, 3);

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
        <div
          className="
            grid
            gap-10
            py-12
            sm:gap-12
            sm:py-16
            md:grid-cols-2
            lg:gap-14
            lg:py-20
            xl:grid-cols-4
          "
        >
          {/* ======================
              Brand
          ====================== */}

          <div>
            {conf?.website?.logo ? (
              <img
                src={conf.website.logo}
                alt={conf.website.site_name}
                className="h-12 w-auto"
              />
            ) : (
              <h3 className="text-2xl font-black sm:text-3xl">
                {conf?.website?.site_name
                  ?.split(' ')
                  .map((word) => word[0])
                  .join('')}
              </h3>
            )}

            <p className="mt-4 leading-7 text-sm text-muted sm:mt-6 sm:leading-8 sm:text-base">
              {conf?.website?.short_description}
            </p>

            <div
              className="
                mt-6
                space-y-3.5
                sm:mt-8
                sm:space-y-4
              "
            >
              {Object.entries(conf?.contact ?? {}).map(([key, item]) => {
                if (!item?.value) return null;

                const Icon = Icons[item.icon];

                let content;

                switch (key) {
                  case 'website':
                    content = (
                      <a
                        href={item.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-muted
                          transition
                          hover:text-primary
                          hover:underline
                        "
                      >
                        {CONTACT_LABELS[key]}
                      </a>
                    );
                    break;

                  case 'email':
                    content = (
                      <a
                        href={`mailto:${item.value}`}
                        className="
                          text-muted
                          transition
                          hover:text-primary
                        "
                      >
                        {item.value}
                      </a>
                    );
                    break;

                  case 'mobile':
                    content = (
                      <a
                        href={`tel:${item.value}`}
                        className="
                          text-muted
                          transition
                          hover:text-primary
                        "
                      >
                        {item.value}
                      </a>
                    );
                    break;

                  default:
                    content = <span className="text-muted">{item.value}</span>;
                }

                return (
                  <div
                    key={key}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    {Icon && <Icon size={18} />}

                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================
              Navigation
          ====================== */}

          <div>
            <h4
              className="
                mb-4
                text-lg
                font-semibold
                sm:mb-6
                sm:text-xl
              "
            >
              Navigation
            </h4>

            <div className="space-y-3 sm:space-y-4">
              {NAVIGATION.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="
                    block
                    cursor-pointer
                    text-sm
                    text-muted
                    transition
                    hover:text-primary
                    sm:text-base
                  "
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* ======================
              Services
          ====================== */}

          <div>
            <h4
              className="
                mb-4
                text-lg
                font-semibold
                sm:mb-6
                sm:text-xl
              "
            >
              Services
            </h4>

            <div className="space-y-3 sm:space-y-4">
              {footerServices.map((service) => (
                <p key={service.id} className="text-sm text-muted sm:text-base">
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          {/* ======================
              Connect
          ====================== */}

          <div>
            <h4
              className="
                mb-4
                text-lg
                font-semibold
                sm:mb-6
                sm:text-xl
              "
            >
              Connect
            </h4>

            <div className="flex flex-col gap-3 sm:gap-4">
              {orderedSocialLinks.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3
                      text-sm
                      transition-all
                      duration-300
                      hover:border-primary/40
                      hover:bg-white/[0.05]
                      sm:px-5
                      sm:py-4
                      sm:text-base
                    "
                >
                  <div
                    className="
                        flex
                        items-center
                        gap-3
                      "
                  >
                    {Icon && <Icon size={18} />}

                    <span>{label}</span>
                  </div>

                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ======================
            Footer Bottom
        ====================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/10
            py-6
            text-xs
            text-muted
            sm:gap-6
            sm:py-8
            sm:text-sm
            md:flex-row
          "
        >
          <p>{conf?.footer?.copyright_text}</p>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span>{conf?.footer?.footer_text}</span>

            <ScrollLink
              to="home"
              smooth
              duration={700}
              className="
                flex
                h-10
                w-10
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
                sm:h-11
                sm:w-11
                lg:h-12
                lg:w-12
              "
            >
              <ChevronUp size={17} />
            </ScrollLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
