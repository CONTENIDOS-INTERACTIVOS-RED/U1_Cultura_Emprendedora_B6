<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. ¿Qué es la Cultura Emprendedora?'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La cultura emprendedora es el conjunto de valores, creencias, actitudes y conocimientos que fomentan la iniciativa, la creatividad y la innovación para la creación de nuevos negocios o proyectos. Se basa en la capacidad de asumir riesgos, identificar oportunidades y generar soluciones innovadoras para el desarrollo económico y social.
    
    p.mb-4 Más allá de la creación de empresas, esta cultura impulsa a las personas a adoptar una mentalidad de crecimiento, asumir desafíos y contribuir con ideas que transformen el entorno.

    h2(data-aos="fade-left") Origen de la cultura emprendedora
    p.mb-5 A lo largo de la historia, la cultura emprendedora ha evolucionado con la influencia de distintos momentos clave. La siguiente tabla resume algunos de los hitos más importantes en su desarrollo:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Revolución Industrial (Siglo XVIII-XIX)") Innovación tecnológica y eficiencia productiva. Surgen empresarios como Henry Ford con la producción en cadena.
          p(numero="2" titulo="Escuelas de pensamiento económico (Siglo XIX-XX)") Joseph Schumpeter define el emprendimiento como motor de la innovación y la destrucción creativa. Se populariza el intraemprendimiento.
          p(numero="3" titulo="Expansión del capitalismo y globalización (Siglo XX-XXI)") Crecen ecosistemas de emprendimiento, como Silicon Valley. Se fortalecen modelos de financiamiento para startups.
          p(numero="4" titulo="Transformación digital y nuevas economías (Siglo XXI)") Digitalización y creación de negocios globales con bajos costos iniciales. Auge del comercio electrónico y tecnologías emergentes.
    
    h2(data-aos="fade-left") Características de la cultura emprendedora
    p.mb-5 Para que la cultura emprendedora sea efectiva, debe contar con ciertos atributos fundamentales. A continuación, se presentan las principales características que la definen:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Innovación
              p.mb-0 Buscar nuevas formas de hacer las cosas.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Proactividad
              p.mb-0 Anticiparse a los cambios del mercado.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Resiliencia
              p.mb-0 Adaptarse y aprender de los fracasos.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Liderazgo
              p.mb-0 Inspirar y motivar en la visión del proyecto.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Toma de riesgos
              p.mb-0 Explorar oportunidades con responsabilidad.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Colaboración
              p.mb-0 Construir redes de apoyo y alianzas estratégicas. 

    h2(data-aos="fade-left") Importancia de la cultura emprendedora

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La cultura emprendedora es clave para el desarrollo económico y social, ya que impulsa la generación de empleo, fomenta la innovación y permite la independencia financiera. A continuación, se destacan algunos de sus principales beneficios:
    
        .bg-h85-2.px-4.pt-4(data-aos="fade-left")
          .row.align-items-end
            .col-lg-3.order-2
              img(src="@/assets/curso/tema1/9.svg").mx-auto
            .col-lg-9.order-1
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Genera empleo y dinamiza la economía.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Fomenta la innovación y la competitividad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Promueve la independencia financiera.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Desarrolla habilidades como el pensamiento crítico y la resolución de problemas.
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Ejemplo:
              p.mb-0 Empresas como Airbnb, Uber y Spotify surgieron con una fuerte cultura emprendedora que les permitió revolucionar sus industrias.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        p.mb-0 Más allá de la creación de empresas, la cultura emprendedora implica adoptar una mentalidad innovadora, resiliente y proactiva ante los desafíos. A lo largo de esta unidad, se explorarán los fundamentos del emprendimiento, la evolución de las empresas y el proceso de planificación para pasar de la idea a la acción. También se abordará el papel de la creatividad y el liderazgo en el mundo empresarial.






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/276468" target="_blank" rel="noopener noreferrer") Masferrer, A. (2024). Desarrollo y liderazgo de equipos creativos: guía práctica en su camino hacia la madurez: (1 ed.). Editorial GG. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://economipedia.com/definiciones/empresa.html" target="_blank" rel="noopener noreferrer") Javier Sánchez Galán,(15 diciembre 2024). ¿Qué es una Empresa? Definición, tipos y ejemplos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PrYiBkDUBYQ&t=2887s&ab_channel=Dinstinto" target="_blank" rel="noopener noreferrer") Alzate C. (2024, 11 de agosto). Los 7 secretos para ser más creativo. [archivo de video] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
