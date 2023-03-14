import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa accusantium! Quidem soluta velit optio dolorib inventore et  aliquid quo perspiciatis natus",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa accusantium! Quidem soluta velit optio dolorib inventore et  aliquid quo perspiciatis natus",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa accusantium! Quidem soluta velit optio dolorib inventore et  aliquid quo perspiciatis natus",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ipsa accusantium! Quidem soluta velit optio doloribus inventore et
            aliquid quo perspiciatis natus, blanditiis voluptas perferendis esse
            eaque expedita assumenda doloremque?
          </p>
        </motion.div>

        {/* BENEFITS  */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION  */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC  */}
        <img
          className="mx-auto"
          src={BenefitsPageGraphic}
          alt="benefits-page-auto"
        />

        {/* DESCRIPTION  */}
        <div>
          {/* TITLE  */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>

          {/* DESC  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              beatae consectetur voluptatibus similique praesentium voluptas
              amet. Iusto similique facilis, doloribus labore dolores voluptate,
              accusantium error necessitatibus dolore provident nulla culpa?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              suscipit minima vel dolorem iure doloribus, velit, iusto quaerat
              rerum eum laudantium odit rem. Officiis, quas illum dolore harum
              nulla neque. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Necessitatibus dolorum aliquid repudiandae iusto pariatur
              veniam recusandae, omnis, eum qui mollitia voluptatum commodi
              velit tenetur laboriosam alias autem sequi est illum?
            </p>

            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, saepe
              debitis impedit similique consequuntur harum culpa, laborum
              molestias repellat fugiat ex voluptatibus possimus praesentium
              fugit inventore perferendis suscipit est? Suscipit! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint quam vel odio
              numquam, ipsum praesentium quasi fugit, qui nisi expedita, quidem
              est. Eaque commodi expedita aliquam voluptatibus voluptas odio
              delectus!
            </p>
          </motion.div>

          {/* BUTTON  */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
