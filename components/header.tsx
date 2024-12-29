import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative w-32 h-12">
          <Image
            src="/golden-logo.png"
            alt="Golden Asesores Contables"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {[
              { name: 'Inicio', href: '#hero' },
              { name: 'Sobre Golden', href: '#about' },
              { name: 'Servicios', href: '#services' },
              { name: 'Automatización', href: '#automation' },
              { name: 'Contacto', href: '#contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-gray-700 hover:text-[#FE9A00] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

