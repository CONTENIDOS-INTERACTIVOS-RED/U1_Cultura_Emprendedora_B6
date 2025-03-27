<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. <em>PYMES</em> (Pequeñas y Medianas Empresas)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema6/1.png', alt='')
        .col-lg.order-2.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Ser emprendedor no solo implica tener una idea de negocio, sino también la capacidad de innovar y liderar equipos para convertir esa idea en una empresa exitosa. La combinación de creatividad y liderazgo es clave en cualquier emprendimiento, ya que permite encontrar soluciones innovadoras y, al mismo tiempo, motivar a un equipo para alcanzar los objetivos.
    
    p.mb-4 En esta sección, se explorará la relación entre creatividad y liderazgo en el emprendimiento, cómo potenciar estas habilidades y qué estrategias aplicar para su desarrollo.

    h2(data-aos="fade-left") Diferencias entre creatividad y liderazgo
    p.mb-5 Si bien la creatividad y el liderazgo son habilidades complementarias, cada una cumple un propósito diferente en el mundo del emprendimiento. La siguiente tabla muestra sus diferencias y cómo se aplican en un negocio:

    TabsC.color-primario
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Creatividad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Creatividad
            p Capacidad de generar ideas originales y pensar de manera innovadora.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                h5 Ejemplo en el emprendimiento
                  p Un emprendedor que desarrolla una aplicación que resuelve un problema cotidiano de manera novedosa.

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Liderazgo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Liderazgo
            p Habilidad para guiar, motivar y coordinar un equipo para lograr una meta común.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                h5 Ejemplo en el emprendimiento
                  p Un fundador de empresa que inspira a su equipo a desarrollar y comercializar un nuevo producto.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/3.png', alt='')
    
    div.bg-color-1.p-4.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema6/4.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En un emprendimiento, ambos elementos son esenciales: la creatividad permite diferenciarse en el mercado, mientras que el liderazgo asegura que esas ideas puedan convertirse en proyectos viables.

    h2.mb-5(data-aos="fade-left") La creatividad como motor del emprendimiento

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/5.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p.mb-5 La creatividad en el emprendimiento va más allá de tener una idea única. Implica la capacidad de identificar oportunidades, resolver problemas de manera innovadora y adaptarse a los cambios del mercado.
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          h5 Ejemplo:  
          p.mb-0 Steve Jobs revolucionó la industria de la tecnología al pensar más allá de lo convencional, desarrollando productos como el iPhone, que transformaron la forma en que las personas interactúan con la tecnología.

    h2(data-aos="fade-left") Estrategias para potenciar la creatividad
    p.mb-5 Para desarrollar la creatividad en el emprendimiento, se pueden aplicar diversas estrategias. La siguiente tabla presenta algunas de las más efectivas:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/6.svg" alt="" style="width: 90px")
              h5.text-center Cuestionar lo establecido
              p.mb-0.text-center Preguntar constantemente "¿Por qué se hace así?" y buscar nuevas formas de hacerlo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/6.svg" alt="" style="width: 90px")
              h5.text-center Pensar en las necesidades del cliente
              p.mb-0.text-center Analizar cómo resolver un problema de manera diferente e innovadora.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/6.svg" alt="" style="width: 90px")
              h5.text-center Fomentar un entorno creativo
              p.mb-0.text-center Crear espacios que promuevan la colaboración y el intercambio de ideas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/6.svg" alt="" style="width: 90px")
              h5.text-center Aplicar metodologías innovadoras
              p.mb-0.text-center Usar técnicas como <em>design thinking o brainstorming</em> para generar ideas disruptivas.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/7.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-5.mb-3(data-aos="fade-left")
              h5 Ejemplo práctico:  
              p.mb-0 Un emprendedor del sector de la moda sostenible podría diseñar ropa hecha con materiales reciclados y ofrecer un sistema de intercambio de prendas para reducir el desperdicio textil.
            p.mb-5 Ser emprendedor implica liderar equipos y tomar decisiones estratégicas, pero también requiere creatividad para encontrar soluciones innovadoras. La combinación de ambas habilidades permite desarrollar negocios sólidos y con alto impacto en el mercado.
    
    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ideas de negocio
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Ideas de negocio</b>, una guía para identificar oportunidades en el mercado y transformar una idea innovadora en un emprendimiento viable. En este contenido encontrarán estrategias para analizar problemas en la sociedad, detectar tendencias emergentes y evaluar habilidades personales para diseñar un modelo de negocio sólido.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ideas de negocio.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/8.png', alt='')

    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://economipedia.com/definiciones/innovacion.html" target="_blank" rel="noopener noreferrer") Rosario Peiró(25 enero 2024). Innovación: Definición, áreas y beneficios. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema6',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes definiciones describe mejor el concepto de empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Una organización que integra recursos para producir bienes o servicios con el objetivo de satisfacer necesidades y generar utilidades.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Una institución sin fines de lucro que solo busca el bienestar social.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Un organismo gubernamental dedicado a regular la economía.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Una entidad informal que opera sin estructura ni objetivos definidos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes características es típica de las Pymes (Pequeñas y Medianas Empresas)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Cuentan con estructuras organizativas muy rígidas y burocráticas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Poseen alta flexibilidad, menor escala y, en muchos casos, una gestión cercana al propietario.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Operan exclusivamente en mercados internacionales con grandes volúmenes de producción.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'No tienen capacidad para innovar o adaptarse a cambios del mercado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'El espíritu emprendedor se caracteriza principalmente por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La aversión al riesgo y la preferencia por la estabilidad.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La búsqueda constante de oportunidades, innovación y la disposición a asumir riesgos calculados.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La dependencia exclusiva de métodos tradicionales y estructuras rígidas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La falta de iniciativa y la resistencia al cambio.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Dentro del proceso de planificación del emprendedor, ¿cuál de los siguientes elementos es fundamental para el éxito del negocio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La improvisación y la ausencia de un plan formal.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La elaboración de un plan de negocio que contemple análisis de mercado, objetivos y estrategias.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La dependencia exclusiva del financiamiento sin definir estrategias de gestión.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La eliminación de estudios de mercado para agilizar la puesta en marcha.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué transformación caracteriza a la transición de una empresa tradicional a una moderna en el contexto del emprendimiento?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Mantener los métodos tradicionales sin incorporar tecnologías o nuevas ideas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Integrar creatividad, liderazgo innovador y la adaptación a tendencias y oportunidades emergentes en el mercado.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Centrarse únicamente en la producción sin considerar la innovación en productos o procesos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Evitar el desarrollo de nuevas ideas de negocio para reducir riesgos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
