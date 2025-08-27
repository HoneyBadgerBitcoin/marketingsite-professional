import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  description: string;
  features: string[];
  ctaText: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

const tabContents: TabContent[] = [
  {
    id: 'buy-online',
    title: 'Buy Online',
    heading: 'Buy Bitcoin & Crypto Online',
    description: 'Get instant access to 70+ cryptocurrencies with our secure online platform. Buy, sell, and trade crypto with competitive fees and 24/7 support.',
    features: [
      'Instant transactions with e-Transfer',
      'Competitive trading fees of 0.15%-0.25%',
      'Secure wallet integration'
    ],
    ctaText: 'Start Buying Online',
    media: {
      type: 'image',
      src: '/business-1.png',
      alt: 'Online crypto trading platform'
    }
  },
  {
    id: 'find-atm',
    title: 'Find an ATM',
    heading: 'Find a Bitcoin ATM Near You',
    description: 'Access our network of Bitcoin ATMs across Canada. Buy and sell crypto with cash at convenient locations near you.',
    features: [
      '200+ ATM locations nationwide',
      'Buy with cash instantly',
      'No KYC for transactions under $1000'
    ],
    ctaText: 'Locate ATM',
    media: {
      type: 'video',
      src: '/crypto-hero.webm',
      alt: 'Bitcoin ATM location map'
    }
  },
  {
    id: 'guided-purchase',
    title: 'Guided Purchase',
    heading: 'Personalized Crypto Assistance',
    description: 'New to crypto? Our expert team provides personalized guidance through your first purchase and beyond.',
    features: [
      'One-on-one expert consultation',
      'Step-by-step purchase guidance',
      'Ongoing portfolio support'
    ],
    ctaText: 'Get Expert Help',
    media: {
      type: 'image',
      src: '/business-3.png',
      alt: 'Expert crypto consultation'
    }
  }
];

export default function TabServices() {
  const [activeTab, setActiveTab] = useState(0);
  const currentContent = tabContents[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Explore what's possible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect way to buy cryptocurrency that fits your needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b-2 border-gray-200">
            {tabContents.map((tab, index) => (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(index)}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-3 text-lg font-medium transition-all duration-200
                  ${activeTab === index
                    ? 'text-primary-600 border-b-2 border-primary-600 -mb-[2px]'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`${activeTab % 2 === 1 ? 'lg:order-2' : ''}`}>
              <h3 className="text-3xl text-gray-900 mb-6">
                {currentContent.heading}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {currentContent.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="btn-primary">
                {currentContent.ctaText} →
              </button>
            </div>

            {/* Media Content */}
            <div className={`relative ${activeTab % 2 === 1 ? 'lg:order-1' : ''}`}>
              {currentContent.media.type === 'video' ? (
                <video
                  src={currentContent.media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-xl"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={currentContent.media.src}
                  alt={currentContent.media.alt}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
