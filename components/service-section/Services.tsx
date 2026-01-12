import React from 'react'
import ServiceCard from './ServiceCard'
import icon1 from '../../public/assets/icon-img/Frame.png'

const Service = () => {
    const services = [
  {
    icon: "📊",
    title: "SEO Service",
    description: "Improve Google ranking and get more organic views on your...",
  },
  {
    icon: "🎨",
    title: "Web Design",
    description: "Create website that connect with customers and result conversion...",
  },
  {
    icon: "📱",
    title: "Facebook Ads",
    description: "Attract calls and target audience through Facebook ads...",
  },
  {
    icon: "🔍",
    title: "Google Ads",
    description: "Search impression and get high quality viewers with Google ads...",
  },
  {
    icon: "✍️",
    title: "Content Writing",
    description: "Best and high quality content for your website and social...",
  },
  {
    icon: "🏢",
    title: "Branding",
    description: "Differentiate your business and make strong brand value...",
  },
  {
    icon: "🎯",
    title: "UI/UX Design",
    description: "Design user experience design for your business success today...",
  },
  {
    icon: "🖼️",
    title: "Graphic Design",
    description: "Graphic professional design that attracts customers...",
  },
]
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div>          
            <p className="text-sm text-blue-600 mb-8"><span className="bg-slate-100 px-4 py-4 rounded-4xl">Our Services</span></p>
        </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Full-stack Digital Marketing Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We manage your business right presence at all channels for your brand.
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service