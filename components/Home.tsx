'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BiLogoGithub, BiLogoFacebookSquare } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
  useEffect(() => {
    const textContainer = document.querySelector('.marquee-container')
    const text = document.querySelector('.marquee-text') as HTMLElement // Ép kiểu thành HTMLElement

    if (textContainer && text) {
      const textLength = text.clientWidth
      const containerWidth = textContainer.clientWidth
      const animationDuration = (textLength / containerWidth) * 10 + 's'

      text.style.animation = `marquee ${animationDuration} linear infinite`

      return () => {}
    }
  }, [])

  const images = [
    {
      title:
        '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      name: 'Mr A',
      img: '/a1.jpg'
    },
    {
      title:
        '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      name: 'Mr B',
      img: '/a2.png'
    },
    {
      title:
        '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      name: 'Mr A',
      img: '/a1.jpg'
    },
    {
      title:
        '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      name: 'Mr B',
      img: '/a2.png'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [setCurrentIndex])

  const cards = [
    {
      title: 'UI/UX Design',
      content: 'Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing',
      image: '/services-user-interface.svg'
    },
    {
      title: 'Web Design',
      content: 'Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing',
      image: '/services-user-interface.svg'
    },
    {
      title: 'Development',
      content: 'Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing',
      image: '/services-user-interface.svg'
    },
    {
      title: 'App',
      content: 'Lorem ipsum dolor sit amet adisicing lorem ipsum dolor sit amet adisicing',
      image: '/services-user-interface.svg'
    }
  ]
  const card2s = [
    {
      title: 'Crypto Exchange App',
      image: '/1.jpg'
    },
    {
      title: 'Web Design',
      image: '/2.jpg'
    },
    {
      title: 'Payment Gateway App',
      image: '/3.jpg'
    },
    {
      title: 'App',
      image: '/4.jpg'
    }
  ]
  const card3s = [
    {
      title: 'Mr A',
      image: '/11.jpg'
    },
    {
      title: 'Mr B',
      image: '/22.jpg'
    },
    {
      title: 'Mr C',
      image: '/33.jpg'
    },
    {
      title: 'Mr D',
      image: '/44.jpg'
    }
  ]

  return (
    <div className='w-full flex flex-col h-full  font-serif  bg-[#061629] '>
      <div className='container mx-auto h-screen  px-6 py-16 text-center'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-3xl  text-[#40ca71] lg:text-6xl font-sans'>GLOBAL CREATIVE MINDS AGENCY</h1>
          <p className='mt-6 text-gray-500 dark:text-gray-300  font-serif'>
            Our digital agency specializes in helping businesses of all sizes navigate the ever-evolving digital
            landscape. From website design and development to digital marketing.
          </p>
          <button className='mt-6 rounded-lg  accordion-down bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto'>
            Welcome !
          </button>
        </div>

        <div className='mt-10 flex justify-center h-[24rem]'>
          <Image
            width={1000}
            height={1000}
            alt='wwww'
            className='h-full md:h-96 w-full ] rounded-xl object-cover '
            src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
          />
        </div>
      </div>
      <div className=' flex justify-center flex-col items-center py-20 bg-[#061629]  text-left space-y-10'>
        <h2 className='text-center text-xl md:text-5xl'>
          <div className='md:hidden'>
            WE ARE COMPLETE <br /> SOLUTION FOR EVERY IDEA
          </div>
          <div className='hidden md:block'> WE ARE COMPLETE SOLUTION FOR EVERY IDEA</div>
        </h2>
        <p className='text-[0.5rem] md:text-xl font-light text-center'>
          We are confident that you will find great things here. Lets explore and experience with us!
        </p>
        <Link href='project'>
          <div className='md:p-8 md:py-14 text-sm md:text-md p-4 rounded-full bg-red-900'>View project</div>
        </Link>
      </div>

      <div className='flex flex-col justify-center bg-[#061629] md:py-20  text-left md:space-y-10 md:gap-14'>
        <div className='flex justify-around items-center pt-10 md:pt-0 p-4'>
          <h2 className='w-[40rem] text-xl md:text-5xl  '>
            Our Services Cover <br /> A Wide Range Of Areas
          </h2>
          <h2 className='text-xl md:text-2xl text-[#20c781]'>SERVICES</h2>
        </div>

        <div className='grid-container'>
          <div className='flex gap-3 '>
            {cards.map((card, index) => (
              <div
                key={index}
                className='card w-[90vw] md:w-[500px] h-72 border border-[#093240] bg-[#061629] hover:bg-[#093240]'
              >
                <Image src={card.image} alt='user' width={40} height={40} className='py-4' />
                <h3 className='text-xl md:text-2xl md:w-60'>{card.title}</h3>
                <p className='text-left py-4'>{card.content}</p>
                <button className=''>Read more</button>
              </div>
            ))}
          </div>
        </div>

        <div className='marquee-container py-16 md:my-20'>
          <div className='marquee-text text-[2rem] md:text-[8rem] text-[#117b6b] font-light'>
            CONNECTING YOUR BRAND TO THE DIGITAL WORLD ELEVATING YOUR ONLINE
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center bg-[#061629]  text-left space-y-10 md:gap-14'>
        <div className='flex justify-around items-center pt-10 md:pt-0 p-4'>
          <h2 className='w-[40rem] text-xl md:text-5xl '>
            Expolore Our <br /> Recent Sucessfull Work
          </h2>
          <h2 className='text-xl md:text-2xl text-[#20c781]'>SERVICES</h2>
        </div>
        <div className='grid-container'>
          <div className='flex gap-3 '>
            {card2s.map((card, index) => (
              <div
                key={index}
                className=' card w-[90vw] md:w-[900px] md:h-[21rem] border border-[#093240] bg-[#061629] hover:bg-[#093240]'
              >
                <Image
                  src={card.image}
                  alt='user'
                  width={1000}
                  height={1000}
                  className=' hover:scale-95 duration-250'
                />
                <p className='px-5 text-lg pt-3 md:w-60'>Crypto Exchange App</p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid md:grid-cols-4 mx-auto gap-4 md:max-w-6xl py-10 md:py-2'>
          <div className=' flex flex-col justify-center items-center  rounded-sm'>
            <div className='text-7xl'>123</div>
            <p className=' -bottom-10 px-5  text-xl'>Project Complete</p>
          </div>
          <div className=' flex flex-col justify-center items-center  rounded-sm'>
            <div className='text-7xl'>400</div>
            <p className=' -bottom-10 px-5  text-xl'>Happy Customers</p>
          </div>
          <div className=' flex flex-col justify-center items-center  rounded-sm'>
            <div className='text-7xl'>100</div>
            <p className=' -bottom-10 px-5  text-xl'>Years Experiences</p>
          </div>
          <div className=' flex flex-col justify-center items-center  rounded-sm'>
            <div className='text-7xl'>200</div>
            <p className=' -bottom-10 px-5  text-xl'>Awards Achivement</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center h-[80vh]   px-2 md:h-screen bg-[#061629] text-left space-y-10 '>
        <div className='flex justify-around items-center'>
          <h2 className='w-[40rem] md:relative text-3xl md:text-5xl'>
            <p className='md:absolute -top-5 right-[27rem] text-green-600 text-left text-[1rem]'>DEDICATED TEAM</p>
            Our Dedicated Team Members
          </h2>
          <h2 className='text-xl md:text-2xl text-[#20c781]'>SERVICES</h2>
        </div>

        <div className='grid-container p-0'>
          <div className='flex z-20 gap-3 p-0'>
            {card3s.map((card, index) => (
              <div
                key={index}
                className='card  w-[90vw] md:w-[500px] md:h-[23rem] border border-[#093240] bg-[#061629] hover:bg-[#093240]'
              >
                <Image
                  src={card.image}
                  alt='user'
                  width={1000}
                  height={1000}
                  className='hover:scale-105 md:hover:scale-125 duration-250'
                />
                <p className='text-left pt-8 md:w-60'>{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='relative flex flex-col  pt-96 items-center  justify-center md:h-screen bg-[#061629] text-center space-y-10  '>
        <Image src='/ima2.jpg' width={10000} height={10000} alt='hahah' className=' absolute h-[70vh] md:h-full' />
        <div className='absolute'>
          <p className='text-[#20c781] text-[2rem]'>TEAM</p>
          <p className='md:text-5xl text-xl'>Our Professional Team</p>
          <div className='pt-10'>
            {images?.length > 0 && (
              <div className='max-w-screen  flex '>
                <Carousel
                  className='max-w-screen'
                  selectedItem={currentIndex}
                  onChange={(index) => setCurrentIndex(index)}
                  infiniteLoop
                  autoPlay
                  interval={15000}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                >
                  {images.map((imageUrl: any, index: any) => (
                    <div
                      key={index}
                      className='max-h-[300px] gap-10 flex flex-col max-w-xs mx-auto justify-center items-center md:max-h-[600px] lg:max-h-[60vh]'
                    >
                      <div className=' text-[0.7rem] md:text-[1rem] object-cover  duration-200 transition-opacity text-center'>
                        {imageUrl.title}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Image src={imageUrl.img} width={1000} height={1000} alt='$4df' />
                        <div className='w-full object-cover  duration-200 transition-opacity md:text-[1rem]'>
                          {imageUrl.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
