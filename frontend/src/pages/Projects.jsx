import { CheckCircle, Clock, Sprout, Mountain, Users, TrendingUp, ArrowRight, Calendar, MapPin } from 'lucide-react';

function Projects() {
  const featuredProjects = [
    {
      title: 'Organic Farming Initiative',
      description: 'A comprehensive training program transforming agricultural practices across the Everest region. Over 500 farmers have been trained in organic farming methods, leading to improved crop yields, reduced environmental impact, and increased market access for organic produce.',
      status: 'Active',
      category: 'Agriculture',
      icon: <Sprout className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2022',
      location: 'Solukhumbu District',
      impact: '500+ Farmers Trained'
    },
    {
      title: 'Everest Eco-Tourism Trail',
      description: 'Development of sustainable trekking routes that showcase local culture, traditional villages, and pristine natural environments while ensuring economic benefits flow directly to local communities and environmental conservation remains a priority.',
      status: 'Active',
      category: 'Tourism',
      icon: <Mountain className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2021',
      location: 'Everest Region',
      impact: '15 Villages Connected'
    },
    {
      title: 'Community Training Centers',
      description: 'State-of-the-art training facilities established in key locations to provide skill development programs in agriculture, hospitality, handicrafts, and entrepreneurship, empowering local communities with knowledge and practical skills.',
      status: 'Completed',
      category: 'Community',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2020',
      location: 'Multiple Districts',
      impact: '1000+ People Trained'
    },
  ];

  const allProjects = [
    {
      title: 'Sustainable Livestock Management',
      description: 'Implementing modern livestock management practices to increase productivity and ensure animal welfare.',
      status: 'Active',
      category: 'Agriculture',
      icon: <TrendingUp className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2023'
    },
    {
      title: 'Heritage Site Preservation',
      description: 'Restoration and conservation of cultural heritage sites to attract tourism while preserving history.',
      status: 'Active',
      category: 'Tourism',
      icon: <Mountain className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2022'
    },
    {
      title: 'Farmer Cooperative Network',
      description: 'Building a network of farmer cooperatives for better market access and collective bargaining power.',
      status: 'Completed',
      category: 'Community',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2021'
    },
    {
      title: 'Agro-Tourism Integration',
      description: 'Creating farm-stay experiences that generate additional income for farmers while educating visitors.',
      status: 'Active',
      category: 'Agriculture',
      icon: <Sprout className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/2889687/pexels-photo-2889687.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2023'
    },
    {
      title: 'Mountain Guide Certification',
      description: 'Professional training program for local guides to ensure safety and quality tourism experiences.',
      status: 'Completed',
      category: 'Tourism',
      icon: <Mountain className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2022'
    },
    {
      title: 'Women Empowerment Program',
      description: 'Skill development and entrepreneurship training specifically designed for women in rural communities.',
      status: 'Active',
      category: 'Community',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2023'
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Agriculture: 'bg-green-100 text-green-700 border-green-200',
      Tourism: 'bg-blue-100 text-blue-700 border-blue-200',
      Community: 'bg-purple-100 text-purple-700 border-purple-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const stats = [
    { number: '50+', label: 'Total Projects' },
    { number: '10K+', label: 'Lives Impacted' },
    { number: '25+', label: 'Communities Served' },
    { number: '8+', label: 'Years of Impact' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-green-800/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Projects & Initiatives
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Transforming communities through innovative agriculture and sustainable tourism development across the Everest region.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="h-1 w-16 bg-green-700"></div>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-700 mr-4">
                      {project.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 text-green-700 mr-3" />
                      <span className="font-medium">Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 text-green-700 mr-3" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <TrendingUp className="h-5 w-5 text-green-700 mr-3" />
                      <span className="font-medium">{project.impact}</span>
                    </div>
                  </div>

                  <button className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <div className="h-1 w-16 bg-green-700 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Browse our complete portfolio of projects spanning agriculture, tourism, and community development initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className="text-white text-sm font-semibold">{project.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-700 mr-3">
                      {project.icon}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <button className="inline-flex items-center text-green-700 font-semibold text-sm hover:text-green-800 transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner With Us on Future Projects
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Interested in collaborating or learning more about our initiatives? We're always looking for partners who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors shadow-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;