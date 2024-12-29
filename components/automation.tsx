import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DecorativeCircles from './decorative-circles'

const automationServices = [
  {
    title: 'Procesamiento automático de costos y gastos',
    description: 'Optimiza la gestión financiera con nuestro sistema automatizado.'
  },
  {
    title: 'Conciliaciones bancarias asistidas',
    description: 'Simplifica y agiliza tus procesos de conciliación bancaria.'
  },
  {
    title: 'Integración de datáfonos con ERP',
    description: 'Conecta tus sistemas de pago directamente con tu ERP para una gestión más eficiente.'
  }
]

export default function Automation() {
  return (
    <section id="automation" className="py-16 bg-[#FFF5E6] text-black relative overflow-hidden">
      <DecorativeCircles position="top" />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Innovamos con tecnología para tu tranquilidad financiera
        </h2>
        <div className="w-20 h-1 bg-[#FE9A00] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {automationServices.map((service, index) => (
            <Card key={index} className="border-black shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-black">Beneficios destacados</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Reducción de operatividad</li>
            <li>Mejora de la exactitud</li>
            <li>Optimización de procesos</li>
          </ul>
        </div>
      </div>
      <DecorativeCircles position="bottom" />
    </section>
  )
}