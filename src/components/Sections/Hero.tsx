/* eslint-disable react-memo/require-usememo */
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import React, {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
// import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description} = heroData;

  const heroButtons = React.useMemo(() => ([
    {
      href: "#portfolio",
      label: "See Portfolio",
      primary: true,
    },
    {
      href: "#contact",
      label: "Contact Me",
      primary: false,
    },
  ]), []);

  const heroButtonElements = heroButtons.map((button) =>
    <a
      className={classNames(
        'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
        button.primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
      )}
      href={button.href}
      key={button.label}
    >
      {button.label}
    </a>
  );

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
          style={{backgroundPosition:'center', opacity:0.1}}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              {/* <Socials /> */}
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {heroButtonElements}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
