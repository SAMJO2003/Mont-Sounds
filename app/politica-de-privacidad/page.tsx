import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad — Mont Sounds",
  description:
    "Cómo Mont Sounds recopila, usa y protege los datos personales de sus clientes.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="1 de octubre de 2026">
      <div>
        <h2>1. Qué datos recopilamos</h2>
        <p>
          Cuando comprás una librería en Mont Sounds, recopilamos únicamente
          los datos necesarios para procesar tu compra y entregarte el
          producto: tu nombre, tu dirección de correo electrónico y el país
          de facturación. Estos datos son recopilados por nuestro procesador
          de pagos (Paddle) en el momento del pago. Mont Sounds nunca recibe
          ni almacena los datos de tu tarjeta u otro medio de pago.
        </p>
        <p>
          Además, como cualquier sitio web, nuestros proveedores de
          alojamiento registran datos técnicos básicos (como tu dirección IP
          y tipo de navegador) cuando visitás el sitio o descargás un
          archivo, con fines de seguridad y funcionamiento.
        </p>
      </div>

      <div>
        <h2>2. Cómo usamos tus datos</h2>
        <p>Usamos tus datos exclusivamente para:</p>
        <ul>
          <li>Procesar tu compra y emitir el comprobante correspondiente.</li>
          <li>Enviarte el enlace de descarga de tu librería.</li>
          <li>
            Brindarte soporte relacionado con tu compra, si lo solicitás
            (por ejemplo, reenviarte el enlace de descarga).
          </li>
        </ul>
      </div>

      <div>
        <h2>3. Con quién compartimos tus datos</h2>
        <p>
          Tus datos personales no se venden, alquilan ni comparten con
          terceros con fines comerciales o de mercadeo. Para operar la
          tienda trabajamos con los siguientes proveedores, que solo reciben
          los datos indispensables para prestar su servicio:
        </p>
        <ul>
          <li>
            <strong>Paddle</strong> — procesa el pago en su calidad de
            Merchant of Record (vendedor oficial) y trata tus datos conforme
            a su propia política de privacidad.
          </li>
          <li>
            <strong>Resend</strong> — envía el correo electrónico con tu
            enlace de descarga.
          </li>
          <li>
            <strong>Upstash</strong> — guarda temporalmente tu enlace de
            descarga asociado al número de tu compra (no almacena tu nombre
            ni tu correo).
          </li>
          <li>
            <strong>Vercel</strong> — aloja este sitio web.
          </li>
          <li>
            <strong>Google Drive</strong> — aloja los archivos que
            descargás.
          </li>
        </ul>
        <p>
          Algunos de estos proveedores pueden procesar datos fuera de Costa
          Rica, principalmente en Estados Unidos y la Unión Europea, bajo sus
          propias medidas de seguridad.
        </p>
      </div>

      <div>
        <h2>4. Cookies</h2>
        <p>
          Este sitio no utiliza cookies de publicidad ni herramientas de
          rastreo o analítica. Durante el pago, Paddle puede usar cookies
          estrictamente necesarias para procesar la transacción de forma
          segura y prevenir fraudes.
        </p>
      </div>

      <div>
        <h2>5. Cuánto tiempo conservamos tus datos</h2>
        <p>
          Tu enlace de descarga se elimina automáticamente a los 14 días. Los
          datos de la compra (comprobante y correo) se conservan mientras sea
          necesario para darte soporte y cumplir obligaciones legales y
          contables.
        </p>
      </div>

      <div>
        <h2>6. Tus derechos</h2>
        <p>
          De acuerdo con la Ley N.º 8968 de Protección de la Persona frente
          al Tratamiento de sus Datos Personales de Costa Rica, podés
          solicitarnos en cualquier momento el acceso, la rectificación o la
          eliminación de tus datos personales escribiéndonos a{" "}
          <a href="mailto:info@montsounds.com" className="text-crystal-cyan">
            info@montsounds.com
          </a>
          . Si considerás que no atendimos tu solicitud, también podés
          acudir a la Agencia de Protección de Datos de los Habitantes
          (PRODHAB).
        </p>
      </div>

      <div>
        <h2>7. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. La
          versión vigente siempre estará disponible en esta página, con su
          fecha de última actualización.
        </p>
      </div>
    </LegalLayout>
  );
}
