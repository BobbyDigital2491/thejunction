/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Next2 = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-black">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl text-white">
      Built on <span className='blue'>Layer 2 Technology</span>
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="How companies harvest your data"
          src="https://miro.medium.com/max/500/0*Nt12TKBkszs4het3"
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-400">
          <p>
          Our user-friendly interface and detailed documentation make it easy for anyone to get 
           started.
          </p>

          <p className='text-white'>
          Viccci Protocol is a decentralized social exchange built on the Polygon 
          network using layer 2 technology. Our platform allows users to trade, connect, 
          and engage with one another in a trustless and decentralized environment. By leveraging 
          the power of the Polygon network, we are able to provide fast and low-cost transactions 
          while maintaining the security and integrity of the blockchain. Our vision is to create a 
          new standard for social exchange, one that is truly decentralized and community-driven. 
          We believe that by giving users the ability to control their own data and assets, we can 
          empower them to participate in the digital economy in a more meaningful way. With Viccci 
          Protocol, you can trade a wide variety of digital assets, including NFTs, tokens, and more.
           Our platform also features a social layer that allows users to connect and engage with one 
           another, creating a unique and vibrant community. We are committed to making Viccci 
           Protocol accessible to everyone, regardless of their technical expertise. 
           
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Next2