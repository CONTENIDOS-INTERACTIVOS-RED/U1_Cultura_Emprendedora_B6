<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. <em>PYMES</em> (Pequeñas y Medianas Empresas)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Las PYMES son organizaciones económicas con un número limitado de empleados, una facturación moderada y una estructura organizativa flexible. Son fundamentales para el desarrollo económico, ya que generan empleo, fomentan la innovación y dinamizan los mercados locales. El término PYME varía según el país y las normativas locales, pero en general se define en función de los siguientes criterios:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 01
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Número de empleados.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 02
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Volumen de ventas anual.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 03
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Activos totales.
    
    h2(data-aos="fade-left") Origen del concepto de <em>PYMES</em>
    p.mb-5 El concepto de PYMES ha evolucionado a lo largo de la historia. La siguiente tabla resume sus principales etapas de desarrollo:

    .row.align-items-center.mb-5
      .col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Revolución Industrial (Siglo XVIII-XIX)") Antes de la industrialización, predominaban los talleres y gremios. Con la producción en masa, las pequeñas unidades económicas comenzaron a evolucionar.
          p(numero="2" titulo="Siglo XX - Desarrollo del comercio y servicios") Durante el período de entreguerras y después de la Segunda Guerra Mundial, se reconoció el papel de las pequeñas empresas en la recuperación económica.
          p(numero="3" titulo="Década de 1950 - Regulación y apoyo") Gobiernos de EE.UU. y Europa desarrollaron programas de financiamiento y asistencia técnica para pequeñas empresas.
          p(numero="4" titulo="1970-1990 - Globalización y adaptación") Con el avance tecnológico, las <em>PYMES</em> aprovecharon nuevos mercados y oportunidades en sectores emergentes.
          p(numero="5" titulo="Siglo XXI - Innovación y digitalización") La digitalización y el comercio electrónico han permitido la expansión global de las <em>PYMES</em>.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        h2(data-aos="fade-left") Objetivos del concepto de <em>PYMES</em>
        p.mb-5 El concepto de <em>PYMES</em> fue creado con el propósito de:
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Facilitar políticas de apoyo
                p.text-center Incentivos fiscales, financiamiento y capacitación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Distinguirlas de las grandes empresas
                p.text-center Proteger a las empresas con menor capacidad económica y operativa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impulsar la economía local
                p.text-center Generan empleo y fomentan el consumo en mercados emergentes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fomentar la innovación
                p.text-center Su flexibilidad permite desarrollar productos y servicios novedosos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acceder a financiamiento diferenciado
                p.text-center Existen líneas de crédito y programas de inversión adaptados a su realidad.
    
          .col-lg-4.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/2.png', alt='')
    
    h2(data-aos="fade-left") Clasificación general de las <em>PYMES</em>
    p.mb-5 Dependiendo del país y sus regulaciones, las <em>PYMES</em> se clasifican en tres tipos principales:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Microempresa
                p.mb-0 Hasta 10 empleados y facturación baja.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Pequeña empresa
                p.mb-0 Hasta 50 empleados y un volumen de ventas moderado.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Mediana empresa
                p.mb-0 Hasta 250 empleados, con mayor capacidad de inversión y producción.

        h2(data-aos="fade-left") Ventajas y desafíos de las <em>PYMES</em>
        p.mb-5 Las <em>PYMES</em> presentan ventajas que las hacen competitivas, pero también enfrentan retos significativos.

        .titulo-figura.mb-4
          h5 Tabla 1.
          span Ventajas y desafíos de las <em>PYMES</em>

    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-7.text-center Ventajas
            th.bg-color-7.text-center Desafíos
        tbody.text-center
          tr
            td Flexibilidad y adaptabilidad a cambios del mercado.
            td Acceso limitado a financiamiento.
          tr
            td Atención más personalizada al cliente.
            td Dificultad para competir con grandes empresas.
          tr
            td Menos burocracia y toma de decisiones más ágil.
            td Dependencia de pocos clientes o proveedores.
          tr
            td Capacidad de innovación y adaptación tecnológica.
            td Limitaciones en infraestructura y recursos.
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg").mx-auto
          .col-lg
            h5 Ejemplo práctico:
            p.mb-0  Un café artesanal de barrio es una PYME que compite con grandes cadenas como Starbucks. Su ventaja radica en la personalización de productos y atención al cliente.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.santanderx.com/es/blog/espiritu-emprendedor.html" target="_blank" rel="noopener noreferrer") SantanderX (09/11/2021). Espíritu emprendedor: lo que necesitas para sacar adelante tu proyecto.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.weforum.org/" target="_blank" rel="noopener noreferrer") El Foro Económico Mundial (2024). Informe sobre el futuro del crecimiento 2024. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-rGKRbnYiB0&ab_channel=MagicMarkers" target="_blank" rel="noopener noreferrer") Magic Markers (2020, 2 de marzo). ¿Cómo ser un buen emprendedor?. YOUTUBE. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
