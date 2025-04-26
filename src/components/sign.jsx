// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SignupHero = () => {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // Background fade effect (0.3 to 0.7 visibility)
//   const bgOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  
//   // Zoom effect (0 to 0.5 visibility, stopping at midpoint)
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

//   return (
//     <div ref={ref} className="h-[80vh] items-center justify-center flex relative">
//       {/* White overlay that fades in */}
//       <motion.div 
//         className="absolute inset-0 bg-white z-0"
//         style={{ opacity: bgOpacity }}
//       />
      
//       <motion.div 
//         className='h-[60vh] w-[60vw] rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col relative z-10 overflow-hidden'
//         style={{ scale }}
//       >
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-amber-200/10"
//               initial={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 width: `${Math.random() * 300 + 100}px`,
//                 height: `${Math.random() * 300 + 100}px`,
//                 opacity: 0.1
//               }}
//               animate={{
//                 x: [0, Math.random() * 100 - 50],
//                 y: [0, Math.random() * 100 - 50],
//                 rotate: [0, 360]
//               }}
//               transition={{
//                 duration: Math.random() * 30 + 20,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "linear"
//               }}
//             />
//           ))}
//         </div>

//         {/* Main content - all content will zoom with the container */}
//         <div className="relative z-10 flex-grow flex items-center justify-center px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl text-center"
//           >
//             <motion.h1
//               className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-100 mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Transform Your <span className="text-amber-500">Learning Experience</span>
//             </motion.h1>

//             <motion.p
//               className="text-xl md:text-2xl text-amber-200 mb-10 max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               Cocirql turns professional development into your team's superpower.
//               Access workshops, track progress, and achieve goals — all in one place.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap justify-center gap-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-amber-500 text-gray-900 text-lg font-medium rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Sign up for free
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gray-900 text-amber-300 border-2 border-amber-400 text-lg font-medium rounded-lg hover:bg-gray-800 transition-all shadow hover:shadow-md"
//               >
//                 Get a demo
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SignupHero;
import React from 'react';

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#66520b] to-[#cca416] text-white py-20 rounded-3xl">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold pb-16 mb-4">Build a Circle outside your <br/> <span className='text-[#191406]'>Circle</span>.</h1><div className="flex justify-center space-x-4">
          <button className="bg-white text-[#66520b] font-bold py-2 px-6 rounded-full hover:bg-purple-200 transition duration-300">
            Sign up for free
          </button>
          <button className="bg-[#66520b] border b-white text-white font-bold py-2 px-6 rounded-full hover:bg-purple-900 transition duration-300">
            Get a demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
