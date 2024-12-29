import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { FaCalculator, FaChartLine, FaCogs } from 'react-icons/fa'
import DecorativeCircles from './decorative-circles'

const services = [
  {
    title: 'Tributarios',
    icon: <FaCalculator className="w-12 h-12 text-[#FE9A00]" />,
    items: [
      'Impuestos Nacionales (IVA, Renta, Impuesto al consumo, Exógena)',
      'Impuestos Territoriales (Industria y Comercio, Exógena)',
      'Discusiones ante la DIAN',
      'Régimen Aduanero y Régimen Cambiario'
    ]
  },
  {
    title: 'Contables',
    icon: <FaChartLine className="w-12 h-12 text-[#FE9A00]" />,
    items: [
      'Outsourcing Contable y Teneduría de libros',
      'Outsourcing Financiero y Análisis de información',
      'Revisoría Fiscal',
      'Creación de empresas y políticas contables NIIF',
      'Estructuración de procesos y controles'
    ]
  },
  {
    title: 'Servicios Integrales',
    icon: <FaCogs className="w-12 h-12 text-[#FE9A00]" />,
    items: [
      'Automatización de procesos internos',
      'Conciliaciones bancarias automáticas',
      'Integración de datáfonos a ERP',
      'Acompañamiento Legal (Comercial, Penal, Tributario, Civil)'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      <DecorativeCircles position="top" />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Nuestros servicios</h2>
        <div className="w-20 h-1 bg-[#FE9A00] mx-auto mb-12"></div>
        <p className="text-xl text-center mb-12 text-gray-700">Somos profesionales de calidad listos para trabajar contigo</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-black shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-black text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                {service.icon}
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-[#FE9A00] text-white hover:bg-[#E08A00]">Ver más</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                    </DialogHeader>
                    <ul className="list-disc pl-5 space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <DecorativeCircles position="bottom" />
    </section>
  )
}