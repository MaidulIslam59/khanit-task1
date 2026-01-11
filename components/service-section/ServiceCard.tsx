interface ServiceCardProps {
  icon: any
  title: any
  description: any
}
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group h-full">
      <div className="h-full bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 hover:from-blue-50 hover:to-slate-50">
        <div className="text-4xl mb-4 inline-block">{icon}</div>

        <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>

        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard