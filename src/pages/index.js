import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import i10 from '../../public/landing/10.png';
import i11 from '../../public/landing/11.png';
import i12 from '../../public/landing/12.png';
import i13 from '../../public/landing/13.png';
import i14 from '../../public/landing/14.png';
import ico01 from '../../public/landing/icons/01.png';
import ico02 from '../../public/landing/icons/02.png';
import ico03 from '../../public/landing/icons/03.png';
import ico04 from '../../public/landing/icons/04.png';
import ico05 from '../../public/landing/icons/04.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Renta tu depa, da clic',
    description: 'Agenda una evaluación gratuita de tu depa y empieza a generar más rentas',
  };

  return (
    <>
      <section className="relative min-h-[64rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-full absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-left z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Tu depa en Airbnb puede generarte hasta 40% más ingresos que la renta tradicional
          </h1>
          <p className="ft-3 mt-4 py-2 text-white">Administración de propiedades en Airbnb</p>
          <div className="flex flex-col justify-start items-start mt-12">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-1 text-white md:text-left">{cta.description}</p>
          </div>
          <p className="material-icons text-white animate-bounce"><span className="ft-9">expand_more</span></p>

        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
        <div className="relative rounded-3xl overflow-hidden">
          <Image src={i01} layout="fill" objectFit="cover"/>
        </div>

        <p className="ft-2">
          Te cuento rápido que hacemos:
          <br/><br/>
          Administramos tus propiedades para
          rentarlas en Airbnb,
          nos encargamos de maximizar la
          rentabilidad de tu propiedad y te quitamos el
          desgaste de andar de cobrador.
          <br/><br/>
          Podrías ganar hasta 40% más que si lo
          rentaras a largo plazo y con nosotros solo
          te preocupas por ver caer el dinero en tu
          cuenta.
        </p>

      </section>

      <Blockbuster
        overhead="Testimonios"
        title="Más de 100 propiedades administradas hasta hoy, esto dicen sus dueños:"
        image={i07}
      />
      <section className="px-12 my-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative w-full pt-[200%]">
            <Image src={i08} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[200%]">
            <Image src={i09} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[200%]">
            <Image src={i10} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[200%]">
            <Image src={i11} layout="fill" objectFit="contain"/>
          </div>

        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué deberías dejar que nos encarguemos de tu depa?"
        description="Aquí cinco razones (aunque podríamos darte más, pero con estas te convencemos de sobra)"
        image={i02}
      />
      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico01} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Olvídate del mantenimiento y el drama</h3>
              <p>Nos encargamos de tener tu depa al 100 para que tú solo veas caer el dinero en tu cuenta.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico02} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Úsalo cuando quieras</h3>
              <p>Bloquea fechas cuando lo necesites y el resto del tiempo sigue generando billete.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico03} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Super Host en Airbnb</h3>
              <p>Tu propiedad tendrá mejor visibilidad, más reservas y huéspedes premium. ¿Traducción? Más lana, menos problemas.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico04} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Gana hasta 40% más que con una renta fija</h3>
              <p>Ajustamos tarifas según la demanda, la temporada y eventos especiales en la ciudad.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico05} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Cuidamos tu depa como si fuera nuestro</h3>
              <p>Le damos mantenimiento, revisamos cada reserva y además tienes cobertura contra daños de Airbnb.</p>
            </div>
          </div>
          <div className="relative w-full min-h-[20rem] flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <Image src={i14} layout="fill" className="object-cover"/>
          </div>

        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Amenidades"
        title="Tu depa con estrellita de Super Host, sin que hagas nada"
        image={i03}
      />
      <section className="container md:px-16 my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col rounded-2xl p-8 border-2 border-brand-3">
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i04} layout="fill" objectFit="cover"/>
            </div>
            <h3>Administración 100% integral, nosotros nos encargamos</h3>
            <p className="ft-2 mb-8">Fotos pro-level, descripciones irresistibles, gestión de reservas, comunicación con huéspedes y cualquier bronca. Tú solo ves cómo entra el dinero.</p>
          </div>
          <div className="flex flex-col rounded-2xl p-8 border-2 border-brand-3">
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i05} layout="fill" objectFit="cover"/>
            </div>
            <h3>Todo claro, sin trucos, sin letras chiquitas</h3>
            <p className="ft-2 mt-auto mb-8">Te entregamos reportes detallados de ocupación, ingresos y costos cada mes Para que tengas la tranquilidad de que las cosas se hacen bien.</p>
          </div>
          <div className="flex flex-col rounded-2xl p-8 border-2 border-brand-3">
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i06} layout="fill" objectFit="cover"/>
            </div>
            <h3>Financiamiento para equiparlo, porque un depa feo no se renta</h3>
            <p className="ft-2 mb-8">Te ayudamos a darle un upgrade sin que tengas que desembolsar todo de golpe. Puedes financiar los arreglos y pagar con las mismas ganancias de tus rentas.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="Más de 100 clientes viviendo de sus rentas"
        image={i12}
      />
      <section className="py-16 bg-[#1c1c1c]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-brand-1 text-center w-max">Sin contratos eternos ni letras chiquitas</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-brand-1 text-center w-max">100% transparente con reportes claros, sin trucos</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-brand-1 text-center w-max">Más reservas, mejores huéspedes, más billete</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-brand-1 text-center w-max">Protección contra daños de Airbnb</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('guarantees')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center text-white">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i13}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-white">
              Agenda una evaluación gratuita de tu depa y empieza a generar más rentas
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Déjanos tus datos, agenda una videollamada para conocernos y programemos una visita a tu depa.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
