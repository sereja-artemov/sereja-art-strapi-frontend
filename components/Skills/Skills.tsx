'use client'

import { skillsData } from '@/data/skillsData';
import { motion } from 'framer-motion';
import React from 'react'
import {SiAdobephotoshop, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass} from "react-icons/si";
import { BsWordpress } from 'react-icons/bs';
import { AiOutlineSmallDash } from 'react-icons/ai';
import { FaYandex } from 'react-icons/fa';
import { FadeContainer, popUp } from '@/utils/framerMotionVariants';

const Skills = () => {

  const activeSkillsArray = skillsData.filter((item) => {
    return item.active;
  })

  return (
    <section>
      <h2 className="block-title">Мои основные навыки</h2>
      <motion.div initial="hidden"
                  whileInView="visible"
                  variants={FadeContainer}
                  viewport={{ once: true }} className='grid lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(auto-fill,minmax(132px,1fr))] gap-3'>
        {activeSkillsArray.map((skill, index) => {
          return <SkillsItem key={index} name={skill.name} />
        })}
      </motion.div>
    </section>
  )
}

export default Skills


type SkillsItemProps = {
  name: string,
};

const SkillsItem: React.FC<SkillsItemProps> = ({name}) => {
  const Icon = chooseIcon(name);

  return (
    <motion.div
      variants={popUp} className='dark:bg-darkSecondary bg-whiteSecondary p-3 lg:p-4 rounded-md lg:rounded-[.5vw] flex gap-3 items-center lg:text-base shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]'>
        <Icon className='w-full max-w-[25px] lg:max-w-[30px] h-auto' />
        <p>{name}</p>
    </motion.div>
  )
}

/* To choose the Icon according to the Name */
function chooseIcon(title: string) {
  let Icon;
  switch (title) {
    case "JavaScript":
      Icon = SiJavascript;
      break;
    case "HTML":
      Icon = SiHtml5;
      break;
    case "CSS":
      Icon = SiCss3;
      break;
    case "SCSS":
      Icon = SiSass;
      break;
    case "React":
      Icon = SiReact;
      break;
    case "NextJS":
      Icon = SiNextdotjs;
      break;
    case "Figma":
      Icon = SiFigma;
      break;
    case "Photoshop":
      Icon = SiAdobephotoshop;
      break;
    case "WordPress":
      Icon = BsWordpress;
      break;
    case "Яндекс.Директ":
      Icon = FaYandex;
      break;
    default:
      Icon = AiOutlineSmallDash;
      break;
  }
  return Icon;
}
