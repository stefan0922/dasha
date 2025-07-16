

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.jpg';
import portfolio1 from "../images/portfolio/portfolio-1.jpg";
import portfolio2 from "../images/portfolio/portfolio-2.jpg";
import portfolio3 from "../images/portfolio/portfolio-3.jpg";
import portfolio4 from "../images/portfolio/portfolio-4.jpg";
import portfolio5 from "../images/portfolio/portfolio-5.jpg";
import portfolio6 from "../images/portfolio/portfolio-6.jpg";
import portfolio7 from "../images/portfolio/portfolio-7.jpg";
import portfolio8 from "../images/portfolio/portfolio-8.jpg";
import portfolio9 from "../images/portfolio/portfolio-9.jpg";
import portfolio10 from "../images/portfolio/portfolio-10.jpg";
import portfolio11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const secret_name = process.env.NEXT_PUBLIC_LIKE;

console.log("secret_name", secret_name);

/**
 * Hero section
 */

export const heroData: Hero = {
  
  imageSrc: heroImage,
  name: `My name is - ${process.env.NEXT_PUBLIC_NAME}`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ukraine based <strong className="text-stone-100">{process.env.NEXT_PUBLIC_STACK}</strong>, currently working
        at in samll TEAM helping build {process.env.NEXT_PUBLIC_SKILL}  and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {process.env.NEXT_PUBLIC_LIKE}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {process.env.NEXT_PUBLIC_DISLIKE}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My name is Dasha Holuba, and I’m a Shopify expert with years of hands-on experience creating high-converting, beautifully designed, and fully functional Shopify stores. I specialize in everything from store setup and theme customization to dropshipping integration, automation, and performance optimization.
I’ve helped clients across various industries launch their eCommerce businesses with confidence — ensuring clean UI/UX, fast load times, mobile responsiveness, and a seamless customer journey. Whether you're starting from scratch or looking to improve an existing store, I bring both the technical skills and creative eye to deliver real results.
I’m also experienced in working with tools like DSers, Oberlo, Klaviyo, and custom app integrations, and I always stay up-to-date with Shopify’s latest features and best practices.
Every project I take on is done with care, attention to detail, and friendly, responsive communication. I believe in building not just stores, but strong, trusting relationships with my clients.

Looking forward to possibly working together! 💛`,
  aboutItems: [
    {label: 'Location', text: process.env.NEXT_PUBLIC_COUNTRY+"", Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: process.env.NEXT_PUBLIC_NATION + "", Icon: FlagIcon},
    {label: 'Interests', text: process.env.NEXT_PUBLIC_LIKE+"", Icon: SparklesIcon},
    {label: 'Study', text: 'College', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Remote-Working', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Ukrainian',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: '@blade',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Laravel',
        level: 8,
      },
      {
        name: 'php',
        level: 7,
      },
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '#',
    image: portfolio11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'I learned from several SENIOR Teachers and train hardly!',
    location: '',
    title: '',
    content: <p></p>,
  },
  
];

export const experience: TimelineItem[] = [
  {
    date: 'Frontend Developer: Shopify, Wordpress, React.js , Next.js, CSS, Tailwind CSS, Bootstrap',
    location: '',
    title: 'Senior UI Developer',
    content: (
      <p>
        
      </p>
    ),
  },
  {
    date: 'Backend Engieer: Node.js PHP LARAVEL PYTHON SEO',
    location: '',
    title: 'Senior UX Engineer',
    content: (
      <p>
        
      </p>
    ),
  },
  {
    date: 'Database : MongoDB, MYSQL (RELATION)',
    location: '',
    title: 'Data struct Manager',
    content: (
      <p>
        
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'holubdasha@gmail.com',
      href: 'mailto:holubdasha@gmail.com',
    },
    {
      type: ContactType.Location,
      text: process.env.NEXT_PUBLIC_COUNTRY+"",
      href: '',
    },
    {
      type: ContactType.Instagram,
      text: '@h2000',
      href: '',
    },
    {
      type: ContactType.Github,
      text: '@h2000',
      href: '',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/@h2000'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/@h2000/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/@h2000/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/@h2000'},
];
