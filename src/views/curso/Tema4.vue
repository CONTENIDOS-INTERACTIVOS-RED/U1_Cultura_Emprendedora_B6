<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Espíritu emprendedor'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El espíritu emprendedor es la capacidad de identificar oportunidades, asumir riesgos y transformar ideas en proyectos o negocios con impacto económico y social. Para ello, se requiere un conjunto de habilidades, actitudes y valores que impulsan la innovación y la creación de iniciativas con valor agregado.
    
    h2(data-aos="fade-left") Características clave del espíritu emprendedor
    p.mb-5 Las personas con espíritu emprendedor suelen compartir ciertas cualidades esenciales:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Iniciativa y proactividad
              p.mb-0 Buscan oportunidades y actúan sin esperar.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Creatividad e innovación
              p.mb-0 Generan nuevas ideas o mejoran productos y servicios.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tolerancia al riesgo y resiliencia
              p.mb-0 Enfrentan desafíos con determinación.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Visión estratégica
              p.mb-0 Identifican oportunidades y planifican objetivos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Liderazgo y gestión
              p.mb-0 Inspiran y coordinan equipos de trabajo.
      
    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        h2(data-aos="fade-left") Origen del concepto de espíritu emprendedor
        p.mb-5 El término "emprendedor" ha evolucionado a lo largo del tiempo. A continuación, se presentan algunas de sus principales referencias históricas:

        .row.mb-5.justify-content-center
          .col-lg-10
            LineaTiempoD.color-primario.large-3(data-aos="fade-left")
              div(numero="XVIII" titulo="Siglo XVIII - Richard Cantillon") 
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/7.png").mx-auto
                  .col-lg 
                    p Acuñó el término "emprendedor" para describir a quienes asumían riesgos para obtener beneficios.
              div(numero="XIX" titulo="Siglo XIX - Joseph Schumpeter") 
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/8.png").mx-auto
                  .col-lg 
                    p Introdujo la teoría de la "destrucción creativa", resaltando al emprendedor como motor del cambio económico.
              div(numero="XX" titulo="Siglo XX - Peter Drucker") 
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/9.png").mx-auto
                  .col-lg 
                    p Destacó el emprendimiento como clave en la gestión empresarial y el desarrollo de mercados.
              div(numero="XXI" titulo="Siglo XXI - Revolución digital") 
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/10.png").mx-auto
                  .col-lg 
                    p La tecnología ha redefinido el emprendimiento, impulsando startups y modelos de negocio escalables.
    
    h2(data-aos="fade-left") Importancia del espíritu emprendedor en la creación de empresas
    p.mb-5 El espíritu emprendedor es clave en la creación y éxito de una empresa, ya que permite:

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Identificar oportunidades de negocio:</b> analizar tendencias del mercado y detectar necesidades no satisfechas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Diseñar modelos de negocio sostenibles:</b> aplicar metodologías como el Business Model Canvas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Gestionar recursos de manera eficiente:</b> administrar capital, tiempo y talento humano.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Desarrollar una mentalidad de crecimiento:</b> superar fracasos y adaptarse a cambios con resiliencia.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Generar impacto social y económico:</b> crear empleo y promover la innovación en la comunidad.
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema4/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") ¿El espíritu emprendedor se aprende o es parte de la personalidad?
    p.mb-5 Existen dos enfoques principales sobre el desarrollo del espíritu emprendedor:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Innato
                p.mb-0 Algunas personas nacen con habilidades como liderazgo, creatividad y resiliencia.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Adquirido
                p.mb-0 Las competencias emprendedoras pueden desarrollarse mediante educación, experiencia y entorno.
        
        p Estudios en psicología y educación empresarial han demostrado que el emprendimiento puede aprenderse a través de programas de formación, mentorías y experiencias prácticas.

    h2(data-aos="fade-left") Factores clave que influyen en el espíritu emprendedor
    p.mb-5 El desarrollo del espíritu emprendedor depende de varios factores. A continuación, se presentan los más relevantes:
      
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Personales
              p.mb-0 Pasión, motivación y mentalidad de crecimiento.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Educativos
              p.mb-0 Formación en liderazgo, gestión empresarial e innovación.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Sociales
              p.mb-0 Redes de apoyo, cultura emprendedora y acceso a financiamiento.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 El espíritu emprendedor combina habilidades y actitudes esenciales para la creación de empresas. Si bien algunas personas tienen una inclinación natural hacia el emprendimiento, la educación y la experiencia juegan un papel clave en su desarrollo. 
        .bg-color-11.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.p-0
              img(src="@/assets/curso/tema4/18.svg", style="max-width: 150px").mx-auto
            .col-lg
              h5 Ejemplo:
              p.mb-0 Elon Musk identificó la oportunidad de la movilidad eléctrica y fundó Tesla, revolucionando la industria automotriz.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://economipedia.com/definiciones/creatividad.html" target="_blank" rel="noopener noreferrer") Rosario Peiró.(1 agosto 2021). Creatividad. 

           
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
