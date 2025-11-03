import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Mountain, Users, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    {
      icon: <Sprout className="h-12 w-12 text-green-700" />,
      title: 'Agriculture Development',
      description: 'Empowering local farmers with sustainable farming practices and modern techniques.',
    },
    {
      icon: <Mountain className="h-12 w-12 text-green-700" />,
      title: 'Tourism Promotion',
      description: 'Showcasing the beauty of Everest region and promoting eco-tourism initiatives.',
    },
    {
      icon: <Users className="h-12 w-12 text-green-700" />,
      title: 'Community Building',
      description: 'Creating opportunities for local communities through collaborative projects.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Farmers Empowered' },
    { number: '50+', label: 'Projects Completed' },
    { number: '10K+', label: 'Lives Impacted' },
    { number: '25+', label: 'Villages Reached' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://www.discovertreks.com/wp-content/uploads/2017/09/Nepal-discover-himalayan-treks.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Agriculture,<br />
            Promoting Tourism,<br />
            <span className="">Elevating Everest.</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Join us in transforming the agricultural landscape and promoting sustainable tourism in the Everest region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-700 text-white font-semibold rounded-2xl hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-700 text-white font-semibold rounded-2xl hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-700 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600">
              Building a sustainable future through agriculture and tourism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making a Difference Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-700 mb-6">
                Making a Difference
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since our establishment, we have been dedicated to uplifting communities through
                innovative agricultural practices and sustainable tourism development.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our projects focus on creating lasting impact by combining traditional wisdom
                with modern technology, ensuring prosperity for generations to come.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-green-700 text-white font-semibold rounded-2xl hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agriculture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        className="relative py-32 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://annapurnaexpress.prixacdn.net/media/albums/nepal-rice_P21nsiKy22.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-200">Transforming lives across the Everest region</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-linear-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-700 mb-4">Community Voices</h2>
            <p className="text-xl text-gray-600">
              Hear from those we've helped along the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-green-700 text-5xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                The sustainable farming techniques have transformed my yield. My family's income has doubled in just two years.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Ram Sherpa</p>
                  <p className="text-sm text-gray-500">Local Farmer, Solukhumbu</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-green-700 text-5xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                Tourism initiatives brought new opportunities to our village. We now run a successful homestay business.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                  PT
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Pemba Tamang</p>
                  <p className="text-sm text-gray-500">Tourism Entrepreneur</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-green-700 text-5xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                The community projects united our village. Young people are staying instead of migrating to cities.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                  DL
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Dawa Lama</p>
                  <p className="text-sm text-gray-500">Community Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-red-700 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or want to get involved? We'd love to hear from you. 
                Reach out and let's work together to make a difference.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">Visit Us</p>
                    <p className="text-gray-600">Solukhumbu District, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+977-XXX-XXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">info@everestagritourism.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-linear-to-br from-green-100 to-blue-100 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  Become a partner in our journey to empower communities and preserve the beauty of the Everest region.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-green-700 font-semibold hover:text-green-800"
                >
                  Learn more about our work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                    placeholder="example@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-700 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;