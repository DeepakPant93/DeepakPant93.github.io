import { motion } from "framer-motion";

const React = require("react");

export default function AnimatedSvg() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 0.5,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      // width="304.03391mm"
      // height="652.09436mm"
      viewBox="0 -100 300.63153 400.52031"
      version="1.1"
      id="svg5"
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(340.5463,0.93690589)">
        <motion.path
          style={{
            opacity: 1,
            fill: "none",
            stroke: "#000",
            strokeWidth: 7,
            // strokeLinecap: round,
          }}
          d="m -281.29518,72.258361 c 12.40282,-8.15642 22.31265,-19.34745 32.05332,-30.39301 10.38664,-12.94246 21.09557,-26.06677 28.59286,-40.98774 5.40707,-10.76111 6.35314,-15.23547 9.96322,-26.56369 2.19036,-10.12935 5.00285,-20.80165 1.75464,-31.07914 -0.90884,-2.87559 -3.42032,-7.53988 -6.64046,-8.85474 -1.59371,-0.65076 -3.429,-0.30954 -5.14347,-0.4643 -1.30233,0.81673 -2.85263,1.3315 -3.90694,2.45021 -3.13577,3.32728 -5.21108,9.18203 -6.35577,13.30955 -3.83056,13.81207 -3.27023,28.25149 -3.43794,42.42773 0.73715,39.55127 3.47548,79.04766 3.48458,118.61647 0.003,7.82637 -0.21312,15.65129 -0.31967,23.47693 -1.57879,25.3864 -2.95322,51.631 -11.79512,75.79034 -3.7261,10.18104 -5.67494,12.24873 -11.21714,20.79368 -2.05029,1.87574 -3.8607,4.05326 -6.15082,5.62719 -4.90115,3.36833 -11.3328,4.48683 -16.44883,0.88847 -3.05142,-2.14619 -4.35838,-6.52867 -5.75069,-9.57352 -3.99291,-15.59288 -0.9937,-31.57763 4.50908,-46.42948 1.33987,-3.61633 2.95714,-7.12373 4.43571,-10.68557 10.12177,-22.27077 24.27174,-42.29415 38.10214,-62.35176 14.35868,-20.23753 28.0583,-40.9066 40.42162,-62.42283 12.1762,-21.88244 23.26557,-44.35118 33.82684,-67.05058 3.38244,-7.16243 6.62096,-14.39201 9.98688,-21.56209 0.43665,-0.93014 2.29937,-3.22596 1.38727,-2.7528 -0.8446,0.43812 -1.67442,0.90421 -2.51161,1.35632 -10.69914,20.90369 -24.74227,39.84238 -38.54455,58.75527 -19.11734,25.72361 -40.20008,49.911 -62.12248,73.26357 -1.4003,1.43743 -7.28122,7.63593 -9.60644,9.57059 -0.26474,0.22027 -1.24851,0.56685 -0.96289,0.37444 0.90873,-0.61209 2.05041,-0.89072 2.8467,-1.6433 1.50916,-1.42634 2.61871,-3.22408 3.97089,-4.80004 1.94157,-2.26288 3.93949,-4.47675 5.90923,-6.71513 13.38086,-14.49353 26.55779,-29.48506 42.0369,-41.82946 2.14246,-1.7086 4.43759,-3.21646 6.65639,-4.82468 2.4579,-1.22687 6.11819,-4.24415 9.34852,-2.25462 0.9239,0.56902 1.08894,1.89651 1.416,2.93114 0.72882,2.30563 1.37191,4.65285 1.73693,7.04323 1.12244,7.35076 1.03892,15.82058 1.20798,23.14586 0,26.00208 -1.05206,52.1127 1.50609,78.0425 0.39391,3.9927 1.03159,7.95758 1.54736,11.93636 0.66546,3.0407 1.24188,6.10224 1.99639,9.12209 0.54131,2.16668 1.22224,4.29657 1.88876,6.42808 0.94546,3.02361 2.72489,6.24081 2.45141,9.50738 0.0526,0.33171 0.10525,0.66339 0.15788,0.99507 0,0 0.62153,0.34801 0.62153,0.34801 v 0 c 0.26258,-0.17659 0.52517,-0.35317 0.78775,-0.52975 0.13877,-2.08558 -0.67464,-3.58534 -1.42238,-5.5412 -2.46639,-6.45133 -4.53167,-13.02752 -5.5795,-19.88386 -3.39672,-29.84031 -3.39373,-59.84636 -2.81409,-89.84601 -0.11242,-7.16175 0.0172,-15.85368 -1.00427,-23.07865 -0.6717,-4.75142 -1.21468,-8.87569 -5.75194,-11.54745 -3.12798,-1.84193 -6.92044,1.33225 -9.15053,2.51264 -18.04173,13.52944 -33.39915,30.17216 -48.60695,46.73677 -1.99972,2.22152 -4.01934,4.42523 -5.99914,6.66451 -1.38266,1.56384 -3.03736,2.94023 -4.08765,4.74419 -0.52917,0.90889 -0.63733,2.07573 -0.48927,3.11697 0.0465,0.32748 0.61743,-0.26828 0.86273,-0.49019 2.49618,-2.25811 7.65593,-7.8032 9.44231,-9.67817 21.74902,-23.50079 42.77405,-47.72387 61.99077,-73.35628 13.86946,-18.8948 27.96503,-37.77028 39.14664,-58.43014 -0.1152,-0.99247 -0.21789,-1.98648 -0.34563,-2.97742 -0.13226,-1.02612 -0.76806,1.92183 -1.18446,2.86895 -3.19183,7.26 -6.45827,14.48702 -9.68399,21.73192 -10.49856,22.7272 -21.48842,45.24846 -33.71109,67.106 -12.42912,21.47393 -26.06249,42.17901 -40.42553,62.41145 -13.80976,20.07992 -27.79157,40.20675 -37.99832,62.43357 -7.98766,19.13967 -14.09483,36.17116 -9.1617,57.09288 0.91255,2.06417 1.42836,4.35427 2.7377,6.19255 5.31233,7.45839 14.00635,8.77321 21.39355,3.53099 2.26311,-1.60596 4.03312,-3.81277 6.04969,-5.71918 5.41893,-8.52847 7.449,-10.79547 11.07808,-20.90253 8.70524,-24.24441 9.94153,-50.5346 11.52089,-75.95547 0.0937,-7.83265 0.29003,-15.66474 0.28125,-23.49794 -0.0444,-39.51867 -2.70367,-78.97066 -3.21731,-118.4783 0.25241,-14.12041 -0.1851,-28.5054 3.72401,-42.23959 1.16218,-4.08322 3.28708,-9.90239 6.42321,-13.17897 1.05032,-1.09735 2.58683,-1.59304 3.88025,-2.38957 3.75594,-0.867 3.64434,-1.69116 6.83892,2.43557 8.18301,10.57084 3.87435,25.23901 1.54919,36.88732 -3.66342,11.58615 -4.41187,15.55099 -9.96807,26.54234 -7.53063,14.89725 -18.21638,28.03252 -28.63302,40.94683 -9.71542,11.01712 -19.53065,22.35475 -31.94884,30.43187 z"
          id="path459"
          variants={pathVariants}
        />
      </g>
    </motion.svg>
  );
}
