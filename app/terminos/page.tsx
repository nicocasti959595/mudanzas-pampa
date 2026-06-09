import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio y los servicios de ${site.brandFull}.`,
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <LegalLayout title="Términos y condiciones" updated="Junio 2026">
      <p>
        Estos términos regulan el uso del sitio web de {site.brandFull} y la
        contratación de nuestros servicios de fletes y mudanzas. Al utilizar el
        sitio o solicitar un presupuesto, aceptás las condiciones detalladas a
        continuación.
      </p>

      <h2>Presupuestos</h2>
      <p>
        Los presupuestos son sin cargo y se elaboran en base a la información que
        nos brindás (origen, destino, volumen y servicios solicitados). El precio
        final se confirma antes de iniciar el trabajo. Cualquier variación
        significativa respecto de lo informado podrá ajustar el presupuesto, lo
        que será comunicado previamente.
      </p>

      <h2>Reservas y fechas</h2>
      <p>
        La fecha de la mudanza queda confirmada una vez acordada con el cliente.
        Recomendamos coordinar con anticipación, especialmente para mudanzas
        grandes o de larga distancia. Ante imprevistos de fuerza mayor (clima,
        cortes, etc.) coordinaremos una nueva fecha a la brevedad.
      </p>

      <h2>Responsabilidad y seguro</h2>
      <p>
        Tratamos tus pertenencias con el máximo cuidado y trabajamos con seguro de
        carga durante el traslado. El alcance de la cobertura se informa antes de
        contratar. Es responsabilidad del cliente declarar objetos de valor
        especial y embalar adecuadamente los bienes que decida embalar por su
        cuenta.
      </p>

      <h2>Cancelaciones</h2>
      <p>
        Podés cancelar o reprogramar tu mudanza comunicándote con nosotros con la
        mayor anticipación posible. Las cancelaciones con poca antelación a la
        fecha pactada podrán estar sujetas a condiciones particulares informadas
        al momento de la reserva.
      </p>

      <h2>Sitio de demostración</h2>
      <p>
        Este sitio es una demostración. La marca, los datos de contacto, las
        direcciones y las reseñas son ilustrativos y no corresponden a una empresa
        real en funcionamiento.
      </p>

      <h2>Contacto</h2>
      <p>
        Por cualquier consulta sobre estos términos, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
