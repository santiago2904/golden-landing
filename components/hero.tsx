import { Button } from '@/components/ui/button'
import DecorativeCircles from './decorative-circles'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Contact from './contact'

export default function Hero() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <DecorativeCircles position="top" />
      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-5xl font-bold mb-4 text-black">Golden Asesores Tributarios y Contables</h1>
        <div className="w-24 h-1 bg-[#FE9A00] mx-auto mb-8"></div>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
          Más de 10 años liderando el crecimiento financiero de empresas en Colombia
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#FE9A00] text-white hover:bg-[#E08A00] text-lg px-8 py-3 shadow-lg">
              Contáctanos ahora
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contáctanos</DialogTitle>
            </DialogHeader>
            <Contact />
          </DialogContent>
        </Dialog>
      </div>
      <DecorativeCircles position="bottom" />
    </section>
  )
}


