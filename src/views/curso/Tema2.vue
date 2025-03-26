<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Concepto de empresa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
           
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una empresa es una entidad económica y social que combina recursos humanos, materiales y financieros para producir bienes o servicios con el objetivo de satisfacer necesidades del mercado. Puede operar con o sin fines de lucro y en diversos sectores económicos.
        p(data-aos="fade-left") Las empresas no solo generan ganancias, sino que también impulsan el desarrollo económico, la innovación y la generación de empleo.
    
    h2(data-aos="fade-left") Evolución del concepto de empresa
    p.mb-5 El concepto de empresa ha evolucionado a lo largo de la historia, adaptándose a los cambios económicos y tecnológicos. En la siguiente tabla se presentan los principales periodos y sus características:

    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Época antigua (mercados primitivos)") Comerciantes y artesanos organizados en gremios intercambiaban productos en mercados locales y rutas comerciales.
          p(numero="2" titulo="Edad media (feudalismo y gremios)") Surgen los gremios medievales que regulaban la producción y calidad. Aparecen ferias comerciales y asociaciones mercantiles.
          p(numero="3" titulo="Edad moderna (mercantilismo y revolución industrial)") Aparecen empresas comerciales como la Compañía Británica de las Indias Orientales. Se desarrolla la producción en masa.
          p(numero="4" titulo="Siglo XX: Corporaciones y globalización") Surgen multinacionales, modelos de administración como el Taylorismo y el Fordismo, y empresas tecnológicas.
          p(numero="5" titulo="Siglo XXI: Digitalización y nuevas economías") Empresas digitales, economía colaborativa y plataformas tecnológicas redefinen el panorama empresarial.
    
    h2(data-aos="fade-left") Principales enfoques del concepto de empresa 
    p.mb-5 Las empresas pueden analizarse desde diferentes perspectivas, según su función en la economía y la sociedad. A continuación, se presentan los principales enfoques sobre el concepto de empresa:


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Económico
              p.mb-0.text-center La empresa busca optimizar recursos y generar rentabilidad.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Social
              p.mb-0.text-center Contribuye al bienestar de la sociedad a través del empleo y la innovación.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Jurídico
              p.mb-0.text-center Está regulada por leyes comerciales y laborales.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Administrativo
              p.mb-0.text-center Funciona como un sistema organizado con procesos y objetivos definidos.
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p.mb-0.text-white El concepto de empresa ha evolucionado desde los mercados primitivos hasta las grandes corporaciones digitales actuales, adaptándose a los cambios tecnológicos y culturales.
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Características de una empresa
    p.mb-5 Toda empresa, independientemente de su tamaño o sector, debe contar con ciertos elementos esenciales para su funcionamiento. La siguiente tabla presenta sus principales características:

    .bg-full-width.bg-h85-3
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Organización.</b> Cuenta con estructura interna, roles definidos y procesos eficientes.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Producción de bienes o servicios.</b> Su propósito es satisfacer necesidades del mercado.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Objetivos.</b> Puede incluir crecimiento financiero, expansión o innovación.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Recursos.</b> Requiere capital, personal capacitado, tecnología y materiales.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .bg-full-width.bg-color-6
      .px-4.px-md-5.py-4
        p.mb-0 Las empresas han sido fundamentales en la evolución económica, adaptándose a las transformaciones tecnológicas y culturales. Desde los mercados primitivos hasta las economías digitales actuales, su impacto en la sociedad sigue creciendo.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/267031" target="_blank" rel="noopener noreferrer") Kotler, P. (2024). Marketing empresarial: más allá del profesionalismo, hacia la creatividad, el liderazgo y la sostenibilidad: (1 ed.). Ediciones Granica.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://asana.com/es/resources/blue-ocean-strategy" target="_blank" rel="noopener noreferrer") Asana (29 de julio de 2024). Estrategia del océano azul: Qué es y cómo crear nuevas oportunidades de mercado para tu empresa.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/show/1gAfviEkHBq1qyfpz74VWz?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer") Llerena A. (2024). Piensa como empresaria. [archivo de audio] Podcast-Spotify.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
