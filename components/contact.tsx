'use client'
import { Mail, Instagram, Phone, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto w-full">
      <div className="p-4 sm:p-6">
        <div className="text-center mb-6">
        <Image src="/golden-logo-1.jpeg" alt="Logo" width={96} height={96} className="mx-auto mb-4 rounded-full" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Golden Asesores</h2>
          <p className="text-sm sm:text-base text-gray-600">Asesores Tributarios y Contables</p>
        </div>
        
        <div className="space-y-2 bg-gray-50 rounded-xl overflow-hidden">
          <ContactItem 
            href="mailto:Golden.asesorestc@gmail.com" 
            icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" />}
            text="Enviar correo"
          />
          
          <ContactItem 
            href="https://www.instagram.com/golden_asesores/" 
            icon={<Instagram className="w-5 h-5 sm:w-6 sm:h-6" />}
            text="Instagram"
          />
          
          <ContactItem 
            href="https://wa.me/573001234567" 
            icon={
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            }
            text="WhatsApp"
          />
          
          <ContactItem 
            href="tel:+573001234567" 
            icon={<Phone className="w-5 h-5 sm:w-6 sm:h-6" />}
            text="Llamar"
          />
        </div>

        <div className="mt-4 sm:mt-6">
          <Button 
            onClick={() => {
              const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Golden Asesores
ORG:Asesores Tributarios y Contables
TEL:+573001234567
EMAIL:Golden.asesorestc@gmail.com
URL:https://www.goldenasesores.com
END:VCARD`;
              const blob = new Blob([vcardData], { type: 'text/vcard' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'golden_asesores.vcf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} 
            className="w-full flex items-center justify-center p-3 sm:p-4 bg-[#FE9A00] text-white rounded-xl hover:bg-[#E08A00] transition-colors text-sm sm:text-base"
          >
            <UserPlus className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
            Guardar contacto
          </Button>
        </div>
      </div>
    </div>
  )
}

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

function ContactItem({ href, icon, text }: ContactItemProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center p-3 sm:p-4 hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 bg-gray-200 rounded-full">
        {icon}
      </div>
      <span className="text-gray-800 text-sm sm:text-base">{text}</span>
      <span className="text-gray-400 ml-auto">&gt;</span>
    </a>
  )
}





