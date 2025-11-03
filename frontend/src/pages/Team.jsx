import { Linkedin, Twitter, Mail, Award, Briefcase, GraduationCap } from 'lucide-react';

function Team() {
  const leadership = [
    {
      name: 'Rajesh Sharma',
      role: 'Executive Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Leading the organization with 15+ years of experience in rural development and agricultural innovation. Rajesh has spearheaded multiple successful initiatives across Nepal.',
      expertise: ['Rural Development', 'Strategic Planning', 'Policy Advocacy'],
      education: 'MBA, Rural Management',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh@everestagro.org',
      },
    },
    {
      name: 'Sita Kumari',
      role: 'Director of Agriculture',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Agricultural expert specializing in sustainable farming practices and organic cultivation methods. Sita brings deep technical knowledge and practical field experience.',
      expertise: ['Organic Farming', 'Soil Science', 'Crop Management'],
      education: 'PhD, Agricultural Sciences',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sita@everestagro.org',
      },
    },
    {
      name: 'Pemba Sherpa',
      role: 'Tourism Development Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Expert mountaineer and tourism consultant with deep knowledge of Everest region culture and traditions. Pemba has guided expeditions for over 12 years.',
      expertise: ['Eco-Tourism', 'Cultural Heritage', 'Mountain Safety'],
      education: 'Masters, Tourism Management',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'pemba@everestagro.org',
      },
    },
  ];

  const team = [
    {
      name: 'Anjali Thapa',
      role: 'Community Relations Manager',
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Passionate about community empowerment with expertise in stakeholder engagement and capacity building.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'anjali@everestagro.org',
      },
    },
    {
      name: 'Kiran Poudel',
      role: 'Project Coordinator',
      image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Managing project implementation and monitoring with focus on delivering measurable community impact.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kiran@everestagro.org',
      },
    },
    {
      name: 'Maya Gurung',
      role: 'Research & Development Head',
      image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Agricultural scientist driving innovation through research in climate-resilient farming techniques.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maya@everestagro.org',
      },
    },
    {
      name: 'Bikash Rai',
      role: 'Finance Manager',
      image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Ensuring financial sustainability and transparent resource management across all projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'bikash@everestagro.org',
      },
    },
    {
      name: 'Sunita Tamang',
      role: 'Training Coordinator',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Designing and delivering training programs that empower farmers and tourism professionals.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sunita@everestagro.org',
      },
    },
    {
      name: 'Dipak Shrestha',
      role: 'Communications Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Managing organizational communications and building awareness about our initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'dipak@everestagro.org',
      },
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-green-800/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Meet Our Team
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              A dedicated group of professionals committed to transforming agriculture and tourism in the Everest region through innovation, expertise, and community partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="h-1 w-16 bg-green-700 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Experienced leaders guiding our mission with vision, expertise, and commitment to sustainable development.
            </p>
          </div>

          <div className="space-y-12">
            {leadership.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`lg:col-span-4 relative ${index % 2 === 1 ? 'lg:col-start-9' : ''}`}>
                  <div className="h-full min-h-[400px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-yellow-400 font-semibold text-lg">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-8 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-green-700 mr-3 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Areas of Expertise</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-green-700 mr-3 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Education</p>
                        <p className="text-gray-700">{member.education}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-green-700 hover:text-green-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-green-700 hover:text-green-700 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-green-700 hover:text-green-700 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Team</h2>
            <div className="h-1 w-16 bg-green-700 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Dedicated professionals working on the ground to implement our vision and deliver impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-green-700 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-green-700 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-green-700 hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <div className="h-1 w-16 bg-green-700 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-green-100 rounded-lg mr-4 shrink-0">
                    <Briefcase className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Meaningful Impact</h3>
                    <p className="text-gray-600">Work on projects that directly improve lives and create lasting change in mountain communities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-green-100 rounded-lg mr-4 shrink-0">
                    <Award className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Growth</h3>
                    <p className="text-gray-600">Opportunities for learning, skill development, and career advancement in a dynamic environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-green-100 rounded-lg mr-4 shrink-0">
                    <GraduationCap className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">Join a team of passionate professionals who value collaboration, innovation, and excellence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-green-700 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate, talented individuals who want to make a real difference. If you share our vision for sustainable development, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              View Open Positions
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;