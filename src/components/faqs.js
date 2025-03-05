import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cuánto puedo ganar con mi depa?",
      a: "Hasta 40% más que con una renta fija. Depende de la ubicación y la demanda, pero te hacemos un cálculo gratis."
    },
    {
      q: "¿Cuánto cobran por la gestión de mi propiedad?",
      a: "Una comisión del 20% sobre los ingresos, sin tarifas ocultas ni costos adicionales inesperados."
    },
    {
      q: "¿Qué pasa si quiero usar mi depa?",
      a: "Solo bloqueas las fechas en el calendario y listo. Sin restricciones."
    },
    {
      q: "¿Qué pasa si un huésped daña mi propiedad?",
      a: "Airbnb tiene cobertura contra daños y nosotros aplicamos un protocolo de mantenimiento estricto."
    },
    {
      q: "¿Cómo y cuándo me pagan?",
      a: "Recibes tus ingresos mensual y puntualmente con reportes claros y sin trucos."
    }
  ];

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}