import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, Users, Briefcase } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-green-700" />,
      title: 'Office Location',
      details: ['Solukhumbu District', 'Province No. 1, Nepal'],
    },
    {
      icon: <Phone className="h-6 w-6 text-green-700" />,
      title: 'Phone',
      details: ['+977 123 456 7890', '+977 098 765 4321'],
    },
    {
      icon: <Mail className="h-6 w-6 text-green-700" />,
      title: 'Email',
      details: ['info@everestagro.org', 'contact@everestagro.org'],
    },
    {
      icon: <Clock className="h-6 w-6 text-green-700" />,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat: 10:00 AM - 3:00 PM'],
    },
  ];

  const inquiryTypes = [
    {
      icon: <Users className="h-8 w-8 text-green-700" />,
      title: 'Partnership Inquiries',
      description: 'Interested in collaborating on projects or initiatives',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-700" />,
      title: 'Career Opportunities',
      description: 'Join our team and make a difference',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-700" />,
      title: 'General Information',
      description: 'Learn more about our programs and services',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-green-800/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get In Touch
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              We'd love to hear from you. Whether you have questions, partnership ideas, or want to learn more about our work, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Types Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-gray-600">Choose the inquiry type that best matches your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inquiryTypes.map((type, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors border-2 border-transparent hover:border-green-700"
              >
                <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-xl p-8 lg:p-16 min-h-[730px]">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24-48 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                        placeholder="example@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-700 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? (
                      'Message Sent Successfully!'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border-2 border-green-200 text-green-700 rounded-lg text-center">
                      <p className="font-semibold">Thank you for reaching out!</p>
                      <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="shrink-0 p-3 bg-green-100 rounded-lg">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-green-700 text-white rounded-lg shadow-lg p-6 ">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-100 mb-6">Follow our social media channels for updates and news about our initiatives.</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <div className="h-1 w-16 bg-green-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Located in the heart of the Everest region</p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.8583895346157!2d86.71207397536273!3d27.694819076195447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e9d5c5a3a7e5c5%3A0x5b3b3b3b3b3b3b3b!2sSolukhumbu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;