'use client'
import React from 'react'
import Image from 'next/image'
import { BiLogoGithub, BiLogoFacebookSquare } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Home() {
  const [introRef, introInView] = useInView({
    triggerOnce: false,
    fallbackInView: true
  })
  return (
    <div className='w-full mx-auto'>
      <div className='flex justify-center flex-col items-center h-[70vh] md:h-[90vh] text-left'>
        <Element name='intro'>
          <div
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 2s, transform 1s',
              ...(introInView && {
                opacity: 1,
                transform: 'translateY(0)'
              })
            }}
            ref={introRef}
          >
            <h1 className='hidden md:flex py-10 text-center md:text-left text-[1rem] md:text-[3rem] lg:text-[5rem] xl:text-[8rem] font-semibold text-gray-900 leading-none  text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-red-700'>
              Web Developer
            </h1>
          </div>
        </Element>
        <h1 className='md:hidden py-10 text-center md:text-left text-[3rem] md:text-[3rem] lg:text-[5rem] xl:text-[8rem] font-semibold text-gray-900 leading-none  text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-red-700'>
          Web Developer
        </h1>
        <Element name='intro'>
          <div
            style={{
              opacity: 0,
              transform: 'translateY(-30px)',
              transition: 'opacity 2s, transform 1s',
              ...(introInView && {
                opacity: 1,
                transform: 'translateY(0)'
              })
            }}
            ref={introRef}
          >
            <div className='hidden md:block text-center md:text-left my-2 text-2xl md:text-4xl font-semibold  antialiased text-transparent  bg-clip-text bg-gradient-to-r from-red-700 to-red-500 hover:to-cyan-500'>
              Nguyễn Minh Huy
            </div>
          </div>
        </Element>
        <div className='md:hidden text-center md:text-left mt-2 text-xl font-semibold  antialiased text-transparent  bg-clip-text bg-gradient-to-r from-red-700 to-red-500 hover:to-cyan-500'>
          Nguyễn Minh Huy
        </div>
        <Element name='intro'>
          <div
            style={{
              opacity: 0,
              transform: 'translateX(300px)',
              transition: 'opacity 2s, transform 1s',
              ...(introInView && {
                opacity: 1,
                transform: 'translateX(0)'
              })
            }}
            ref={introRef}
          >
            <div className='flex justify-center md:justify-start gap-10 mt-6 cursor-pointer'>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <a href='https://github.com/NguyenHuyu'>
                  <BiLogoGithub size={40} />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <a href='https://www.facebook.com/nhyn.nmh/'>
                  <BiLogoFacebookSquare size={40} />
                </a>
              </motion.div>
            </div>
          </div>
        </Element>
        <div className='md:hidden flex justify-center md:justify-start gap-10  cursor-pointer'>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <a href='https://github.com/NguyenHuyu'>
              <BiLogoGithub size={40} />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <a href='https://www.facebook.com/nhyn.nmh/'>
              <BiLogoFacebookSquare size={40} />
            </a>
          </motion.div>
        </div>
      </div>

      <div className='flex justify-center flex-col items-center bg-[#061629] h-[70vh] md:h-[90vh] text-left space-y-10'>
        <h2 className='text-center text-3xl md:text-5xl'>WE ARE COMPLETE SOLUTION FOR EVERY IDEA</h2>
        <p className='text-xl font-light'>
          We are confident that you will find great things here. Lets explore and experience with us!
        </p>
        <Link href='project'>
          <div className='p-8 py-16 rounded-full bg-red-900'>View project</div>
        </Link>
      </div>
      <hr />
      <div className='flex flex-col justify-center bg-[#061629] h-screen text-left space-y-10 gap-14'>
        <div className='flex justify-around items-center'>
          <h2 className='w-[40rem] text-center text-3xl md:text-5xl'>Our Services Cover A Wide Range Of Areas</h2>
          <h2 className='text-xl md:text-2xl text-[#20c781]'>SERVICES</h2>
        </div>
        <div className='grid md:grid-cols-4 mx-auto md:max-w-7xl gap-4'>
          <div className='flex flex-col justify-center items-left border border-[#093240] hover:bg-[#093240] p-4 rounded-sm'>
            <Image src='/services-user-interface.svg' alt='user' width={40} height={40} className='py-4' />
            <h3 className='text-xl md:text-2xl'>UI/UX Design</h3>
            <p className='text-left py-4'>Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing</p>
            <button className=''>Read more</button>
          </div>
          <div className='flex flex-col justify-center items-left border border-[#093240] hover:bg-[#093240] p-4 rounded-sm'>
            <Image src='/services-user-interface.svg' alt='user' width={40} height={40} className='py-4' />
            <h3 className='text-xl md:text-2xl'>Web Design</h3>
            <p className='text-left py-4'>Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing</p>
            <button className=''>Read more</button>
          </div>
          <div className='flex flex-col justify-center items-left border border-[#093240] hover:bg-[#093240] p-4 rounded-sm'>
            <Image src='/services-user-interface.svg' alt='user' width={40} height={40} className='py-4' />
            <h3 className='text-xl md:text-2xl'>Development</h3>
            <p className='text-left py-4'>Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing</p>
            <button className=''>Read more</button>
          </div>
          <div className='flex flex-col justify-center items-left border border-[#093240] hover:bg-[#093240] p-4 rounded-sm'>
            <Image src='/services-user-interface.svg' alt='user' width={40} height={40} className='py-4' />
            <h3 className='text-xl md:text-2xl'>App</h3>
            <p className='text-left py-4'>Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing</p>
            <button className=''>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}
