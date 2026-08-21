import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad — Mont Sounds",
  description:
    "Cómo Mont Sounds recopila, usa y protege los datos personales de sus clientes.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="20 de agosto de 2026">
      <div>
        <h2>1. Qué datos recopilamos</h2>
        <p>
          Cuando comprás una librería en Mont Sounds, recopilamos únicamente
          los datos necesarios para procesar tu compra y entregarte el
          producto: tu nombre y tu dirección de correo electrónico. Estos
          datos son recopilados por nuestro procesador de pagos (Paddle) en
          el momento del pago.
        </p>
      </div>

      <div>
        <h2>2. Cómo usamos tus datos</h2>
        <p>Usamos tu nombre y correo electrónico exclusivamente para:</p>
        <ul>
          <li>Procesar tu compra y emitir el comprobante correspondiente.</li>
          <li>
            Enviarte tus archivos de descarga, claves de licencia e
            instrucciones de instalación.
          </li>
          <li>
            Brindarte soporte técnico relacionado con tu compra, si lo
            solicitás.
          </li>
          <li>
            Enviarte novedades sobre nuevas librerías, únicamente si te
            suscribiste voluntariamente a nuestro boletín.
          </li>
        </ul>
      </div>

      <div>
        <h2>3. Protección de tus datos</h2>
        <p>
          Tus datos personales están protegidos y no se comparten, venden ni
          alquilan a terceros con fines comerciales o de mercadeo. El acceso a
          esta información está limitado a lo estrictamente necesario para
          operar Mont Sounds.
        </p>
        <p>
          La única excepción es nuestro procesador de pagos, Paddle, que
          recibe los datos indispensables para completar la transacción en su
          calidad de Merchant of Record, y los trata conforme a su propia
          política de privacidad.
        </p>
      </div>

      <div>
        <h2>4. Tus derechos</h2>
        <p>
          Podés solicitarnos en cualquier momento el acceso, la corrección o
          la eliminación de tus datos personales escribiéndonos a{" "}
          <a href="mailto:info@montsounds.com" className="text-crystal-cyan">
            info@montsounds.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2>5. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. La
          versión vigente siempre estará disponible en esta página.
        </p>
      </div>
    </LegalLayout>
  );
}
