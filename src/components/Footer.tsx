"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-48">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Salou Apartments</h3>
            <p className="text-gray-300">Tu destino perfecto de vacaciones en la Costa Dorada</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/34674763789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:your@email.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Salou Apartments. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}