import { Target, Eye, Heart, Award, Users, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-green-700" />,
      title: 'Our Mission',
      description: 'To empower local communities through sustainable agricultural practices and responsible tourism development, creating economic opportunities while preserving natural beauty.',
    },
    {
      icon: <Eye className="h-8 w-8 text-green-700" />,
      title: 'Our Vision',
      description: 'A thriving Everest region where agriculture and tourism coexist harmoniously, providing prosperity for all while protecting the environment for future generations.',
    },
    {
      icon: <Heart className="h-8 w-8 text-green-700" />,
      title: 'Our Values',
      description: 'Sustainability, community empowerment, cultural preservation, innovation, and integrity guide every decision we make and project we undertake.',
    },
    {
      icon: <Award className="h-8 w-8 text-green-700" />,
      title: 'Our Impact',
      description: 'Through collaborative efforts, we have helped hundreds of farmers adopt modern techniques and welcomed thousands of tourists to experience authentic Everest culture.',
    },
  ];

  const approach = [
    {
      icon: <Users className="h-10 w-10 text-green-700" />,
      title: 'Research & Planning',
      description: 'We conduct thorough research to understand community needs and develop comprehensive plans that ensure successful implementation.'
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-700" />,
      title: 'Community Engagement',
      description: 'Local participation is at the heart of our work. We collaborate closely with communities throughout every project phase.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-700" />,
      title: 'Sustainable Impact',
      description: 'Our projects are designed for long-term success, ensuring benefits continue to flow to communities for years to come.'
    }
  ];

  const achievements = [
    { number: '8+', label: 'Years of Experience' },
    { number: '500+', label: 'Farmers Supported' },
    { number: '25+', label: 'Villages Reached' },
    { number: '50+', label: 'Projects Completed' }
  ];

  const coreValues = [
    'Sustainability and Environmental Stewardship',
    'Community-Centered Development',
    'Cultural Preservation and Respect',
    'Innovation and Modern Practices',
    'Transparency and Accountability',
    'Long-term Partnership and Commitment'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://rpcdn.ratopati.com/media/albums/agri_PphAIgFsnJ.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/85 to-green-800/75"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Our Organization
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Everest Agro and Tourism Development is dedicated to creating sustainable growth in the agricultural and tourism sectors of the Everest region through community partnership and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="border-l-4 border-green-700 pl-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower local communities through sustainable agricultural practices and responsible tourism development, creating economic opportunities while preserving the natural beauty and cultural heritage of the Everest region.
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-4 border-blue-700 pl-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A thriving Everest region where agriculture and tourism coexist harmoniously, providing prosperity for all while protecting the environment for future generations and preserving the unique cultural identity of mountain communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="h-1 w-16 bg-green-700 mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Everest Agro and Tourism Development was founded with a clear vision to transform the Everest region through sustainable development initiatives. Our organization brings together experienced professionals, local community leaders, and international experts committed to creating lasting positive change.
                </p>
                <p>
                  We operate at the intersection of agriculture, tourism, and community development, leveraging our expertise to design and implement programs that address the unique challenges faced by mountain communities while capitalizing on their strengths and opportunities.
                </p>
                <p>
                  Our multidisciplinary team combines deep local knowledge with international best practices in agriculture, tourism management, community development, and environmental conservation. This allows us to deliver comprehensive, culturally sensitive solutions that create measurable impact.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-green-700 pl-6">
                    <div className="text-4xl font-bold text-green-700 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-green-700 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-16 bg-green-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, and define our approach to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 border-l-4 border-green-700 hover:bg-green-50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-green-700 mr-4 shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <div className="h-1 w-16 bg-green-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, community-centered methodology that ensures sustainable results and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {approach.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 border-t-4 border-green-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement Section */}
      <section className="bg-cover bg-center overflow-hidden"
         style={{
          backgroundImage: "url('https://rpcdn.ratopati.com/media/albums/agri_PphAIgFsnJ.jpg')",
          backgroundAttachment: 'fixed'
        }}>

        <div className='py-40 bg-linear-to-r from-green-900/85 to-green-800/75'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-4xl font-bold">Our Impact</h2>
              </div>
              <div className="h-1 w-16 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Through collaborative efforts with local communities, government agencies, and international partners, we have helped hundreds of farmers adopt modern sustainable techniques, supported the development of eco-tourism infrastructure, and contributed to the economic empowerment of mountain communities across the Everest region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in our mission to create sustainable development in the Everest region. 
            Whether you're a community member, organization, or supporter, there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg">
              Get Involved
            </button>
            <button className="px-8 py-4 bg-white border-2 border-red-700 text-red-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;