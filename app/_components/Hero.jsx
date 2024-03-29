import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
                width={800}
                height={800}
                alt=""
                src="/assets/img/MentalHealth(3).png"
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
            />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Let's Find & Booking Your <span classNameName="text-primary">Therapist</span></h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <Link
            href='/login'
            className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
 
  )
}

export default Hero