import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import classNames from "classnames";
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  DiscIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  FrameIcon,
  LaptopIcon,
  BarChartIcon,
  DrawingPinIcon,
  Link2Icon,
  QuoteIcon,
  CalendarIcon,
  PersonIcon,
  ArchiveIcon,
  TwitterLogoIcon,
  RocketIcon,
  ChatBubbleIcon,
  EnterIcon,
} from "@radix-ui/react-icons";
import useSound from "use-sound";
// import Link from './Link'
import Link from "next/link";

function DropMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleIcon = () => {
      setIsOpen(!isOpen);
    };

    const [ThemeSound] = useSound("/static/sounds/page-change.mp3");

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600">
          <motion.button
            className="flex h-8 w-8 items-center justify-center p-2"
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            aria-label="Toggle List Menu"
            type="button"
          >
            {isOpen ? (
              <HamburgerMenuIcon className="h-4 w-4" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </motion.button>
        </Menu.Button>
      </div>
    </Menu>
  );
}

export default DropMenu;
