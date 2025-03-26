<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El emprendimiento se ha convertido en un motor clave para el desarrollo económico y social, permitiendo la creación de nuevas oportunidades y el fortalecimiento de los mercados. Comprender los fundamentos de la cultura emprendedora es esencial para quienes desean generar soluciones innovadoras y sostenibles en un entorno cada vez más dinámico. Esta unidad proporciona un panorama integral sobre el concepto de empresa, la evolución de los modelos de negocio y el papel fundamental del espíritu emprendedor en la sociedad actual.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") A lo largo de esta unidad, se abordarán temas esenciales como el concepto de empresa, la importancia de las pequeñas y medianas empresas (Pymes), el desarrollo del espíritu emprendedor, la planificación estratégica para la creación de negocios, la transición de empresas tradicionales a modelos modernos, la creatividad y el liderazgo en el emprendimiento, así como la identificación y validación de ideas de negocio.
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                p.mb-0.text-white El aprendizaje de estos temas permitirá comprender cómo las empresas funcionan y evolucionan, identificar oportunidades de negocio y diseñar estrategias para su crecimiento y sostenibilidad. Se espera que, al finalizar la unidad, se logre reconocer los elementos clave para emprender con éxito, aplicar metodologías para la planificación de negocios y desarrollar un pensamiento innovador orientado a la resolución de problemas.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/intro/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

</template>
