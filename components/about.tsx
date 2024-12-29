import DecorativeCircles from './decorative-circles'

export default function About() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <DecorativeCircles position="top" />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">¿Quiénes somos?</h2>
        <div className="w-20 h-1 bg-[#FE9A00] mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
            <p className="text-gray-700 mb-4 text-lg">
              Somos una compañía de Asesorías Contables, Fiscales y Financieras
              que en conjunto con nuestro grandioso equipo de trabajo llevamos
              más de 10 años en el sector real de la economía Colombiana.
            </p>
            <p className="text-gray-700 text-lg">
              Acompañamos empresas Pequeñas, Medianas y Grandes,
              aportándoles todas nuestras capacidades y análisis de la información,
              para que conjuntamente con el liderazgo de las empresas, se logre un
              crecimiento exponencial del desarrollo de sus negocios.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="/placeholder.png" alt="Equipo de Golden" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <DecorativeCircles position="bottom" />
    </section>
  )
}