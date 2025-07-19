import {BoltIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';


// import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
        href="#project">
        <BoltIcon className="h-5 w-5 text-yellow" />
        <span>
          Provided by <span className="text-white"> - </span>
          <span className="italic text-yellow">Holub Dasha</span>
        </span>
      </a>
      <span className="text-sm text-neutral-700">© Copyright {currentYear} D.H</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
