import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white py-8 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-[#FE9A00] mb-4 md:mb-0">Golden</div>
          <nav>
            <ul className="flex space-x-4">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FE9A00] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Golden Asesores Tributarios y Contables. Todos los derechos reservados.</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-[#FE9A00] opacity-20"></div>
    </footer>
  )
}