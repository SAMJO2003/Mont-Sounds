import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Mont Sounds",
  description:
    "Términos y condiciones de uso y licencia para las librerías y texturas de audio de Mont Sounds.",
};

export default function TerminosYCondicionesPage() {
  return (
    <LegalLayout title="Términos y Condiciones" updated="20 de agosto de 2026">
      <div>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder a este sitio web y/o adquirir cualquier librería de
          sonidos, instrumento virtual o textura de audio ofrecida por Mont
          Sounds (&quot;nosotros&quot;, &quot;nuestro&quot;), aceptás quedar
          sujeto a estos Términos y Condiciones. Si no estás de acuerdo con
          alguna parte de estos términos, no debés utilizar el sitio ni
          adquirir nuestros productos.
        </p>
      </div>

      <div>
        <h2>2. Naturaleza de los productos</h2>
        <p>
          Mont Sounds vende librerías de instrumentos musicales y texturas de
          sonido en formato digital, incluyendo archivos <code>.nki</code>{" "}
          diseñados para funcionar dentro de Native Instruments Kontakt. Los
          productos son entregados de forma digital e inmediata; no se envía
          ningún soporte físico.
        </p>
      </div>

      <div>
        <h2>3. Licencia de uso</h2>
        <p>
          Al comprar una librería, Mont Sounds te otorga una licencia de uso
          personal, no exclusiva e intransferible sobre las muestras de audio,
          instrumentos y texturas incluidas. Bajo esta licencia, podés:
        </p>
        <ul>
          <li>
            Utilizar los sonidos e instrumentos dentro de tus propias
            producciones musicales, bandas sonoras, proyectos audiovisuales,
            videojuegos y demás obras derivadas, incluyendo uso comercial.
          </li>
          <li>
            Instalar y usar la librería en los equipos que sean de tu uso
            personal o profesional.
          </li>
        </ul>
        <p>Bajo esta misma licencia, <strong>no está permitido</strong>:</p>
        <ul>
          <li>
            Revender, redistribuir, compartir o publicar las muestras de
            audio, instrumentos o texturas por separado, ya sea de forma
            gratuita o paga, en su forma original o modificada, aisladas de
            una obra musical que las contenga.
          </li>
          <li>
            Incluir las muestras de audio en cualquier producto competidor,
            librería de samples, banco de sonidos o herramienta de generación
            de audio destinada a ser redistribuida.
          </li>
          <li>
            Transferir, ceder o compartir tu licencia o tus archivos de
            descarga con terceros.
          </li>
        </ul>
      </div>

      <div>
        <h2>4. Propiedad intelectual</h2>
        <p>
          Todo el contenido de este sitio y de las librerías —incluyendo
          grabaciones, samples, scripts de Kontakt, interfaces gráficas,
          textos e imágenes— es propiedad de Mont Sounds y está protegido por
          las leyes de propiedad intelectual aplicables. La compra de una
          licencia no transfiere la propiedad de dicho contenido.
        </p>
      </div>

      <div>
        <h2>5. Precios y pagos</h2>
        <p>
          Los precios se muestran en dólares estadounidenses (USD) e incluyen
          los impuestos aplicables según tu ubicación. El procesamiento de
          pagos es gestionado por Paddle.com Market Limited, en calidad de
          Merchant of Record (comerciante registrado), quien se encarga de la
          facturación, el cobro y el cumplimiento fiscal correspondiente a tu
          compra.
        </p>
      </div>

      <div>
        <h2>6. Modificaciones</h2>
        <p>
          Mont Sounds puede actualizar estos Términos y Condiciones en
          cualquier momento. Los cambios entrarán en vigencia desde su
          publicación en esta página.
        </p>
      </div>

      <div>
        <h2>7. Contacto</h2>
        <p>
          Para consultas sobre estos términos, escribinos a{" "}
          <a href="mailto:info@montsounds.com" className="text-crystal-cyan">
            info@montsounds.com
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}
