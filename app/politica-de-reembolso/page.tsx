import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Reembolso — Mont Sounds",
  description:
    "Política de reembolsos y devoluciones para las compras digitales de Mont Sounds.",
};

export default function PoliticaDeReembolsoPage() {
  return (
    <LegalLayout title="Política de Reembolso" updated="20 de agosto de 2026">
      <div>
        <h2>1. Producto digital de entrega inmediata</h2>
        <p>
          Todas las librerías y texturas de audio vendidas por Mont Sounds son
          productos digitales. Al completarse la compra, los archivos
          descargables y las claves de licencia correspondientes se entregan
          de forma inmediata a través de nuestro sistema de distribución
          digital, Pulse Downloader.
        </p>
      </div>

      <div>
        <h2>2. Política de no reembolso</h2>
        <p>
          Debido a la naturaleza digital del producto y a que la entrega de
          los archivos y claves de licencia ocurre de manera inmediata y
          automática al momento del pago,{" "}
          <strong>
            Mont Sounds no realiza reembolsos ni devoluciones bajo ninguna
            circunstancia una vez completada la compra
          </strong>
          , incluyendo casos de arrepentimiento de compra, error del
          comprador al seleccionar el producto, o incompatibilidad con un
          software o sistema no especificado previamente en la página del
          producto.
        </p>
        <p>
          Al completar el pago, aceptás expresamente esta política de no
          reembolso.
        </p>
      </div>

      <div>
        <h2>3. Antes de comprar</h2>
        <p>
          Te recomendamos revisar cuidadosamente la descripción del producto,
          los requisitos técnicos (incluyendo la versión de Kontakt
          requerida) y escuchar las demos disponibles antes de completar tu
          compra, ya que no se realizarán reembolsos una vez procesada la
          transacción.
        </p>
      </div>

      <div>
        <h2>4. Excepciones legales</h2>
        <p>
          Esta política no limita ningún derecho que te corresponda de forma
          obligatoria bajo la legislación de protección al consumidor
          aplicable en tu jurisdicción, cuando dicha legislación no permita
          excluir el derecho de desistimiento para contenido digital.
        </p>
      </div>

      <div>
        <h2>5. Problemas técnicos</h2>
        <p>
          Si tenés inconvenientes técnicos para descargar o activar tu
          librería, escribinos a{" "}
          <a href="mailto:info@montsounds.com" className="text-crystal-cyan">
            info@montsounds.com
          </a>{" "}
          y te ayudaremos a resolverlo — esto no constituye un reembolso, sino
          soporte técnico sobre un producto ya adquirido.
        </p>
      </div>
    </LegalLayout>
  );
}
