// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { links } from "@/lib/data";
// import Link from "next/link";
// import clsx from "clsx";
// import { useActiveSectionContext } from "@/context/active-section-context";

// export default function Header() {
//   const { activeSection, setActiveSection, setTimeOfLastClick } =
//     useActiveSectionContext();

//   return (
//     <header className="z-[999] relative">
//       {/* Background bar */}
//       <motion.div
//         className="fixed top-2 left-1/2 w-[92%] max-w-[380px] rounded-full border border-white/30 bg-white/70 shadow-md backdrop-blur-md dark:bg-gray-950/70 dark:border-black/40 sm:top-6 sm:h-[3.25rem] sm:max-w-[36rem]"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       />

//       {/* Navigation */}
//       <nav className="fixed top-[0.5rem] left-1/2 -translate-x-1/2 w-[92%] max-w-[380px] sm:top-[1.7rem] sm:max-w-[36rem]">
//         <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 py-1 text-[0.85rem] font-medium text-gray-600 dark:text-gray-400 sm:flex-nowrap sm:gap-5 sm:text-[0.9rem]">
//           {links.map((link) => (
//             <motion.li
//               key={link.hash}
//               className="relative flex items-center justify-center"
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <Link
//                 href={link.hash}
//                 className={clsx(
//                   "relative flex items-center justify-center px-3 py-2 rounded-md transition-colors hover:text-gray-950 dark:hover:text-gray-200",
//                   {
//                     "text-gray-950 dark:text-gray-100 font-semibold":
//                       activeSection === link.name,
//                   }
//                 )}
//                 onClick={() => {
//                   setActiveSection(link.name);
//                   setTimeOfLastClick(Date.now());
//                 }}
//               >
//                 {link.name}
//                 {link.name === activeSection && (
//                   <motion.span
//                     className="absolute inset-0 -z-10 bg-gray-100 dark:bg-gray-800 rounded-md"
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   />
//                 )}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Background bar */}
      <motion.div
        className="fixed top-2 left-1/2 w-[92%] max-w-[380px] rounded-xl border border-white/30 bg-white/90 shadow-md backdrop-blur-md
          dark:bg-gray-950/90 dark:border-black/40 dark:shadow-lg sm:top-6 sm:h-[3.25rem] sm:max-w-[36rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Navigation */}
      <nav className="fixed top-[0.5rem] left-1/2 -translate-x-1/2 w-[92%] max-w-[380px] sm:top-[1.7rem] sm:max-w-[36rem]">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 py-2 text-[0.9rem] font-medium text-gray-700 dark:text-gray-300 sm:flex-nowrap sm:gap-5 sm:text-[0.95rem]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "relative flex items-center justify-center px-3 py-2 rounded-md transition-colors hover:text-gray-900 dark:hover:text-gray-100",
                  {
                    "text-gray-900 dark:text-gray-100 font-semibold":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gray-100 dark:bg-gray-800 rounded-md"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
