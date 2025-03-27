<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Proceso de Planificación del Emprendedor'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p.text-white El proceso de planificación es fundamental para convertir una idea en un negocio sostenible y exitoso. No basta con tener una buena idea; es necesario estructurar cada paso, evaluar riesgos y oportunidades, y establecer estrategias para su ejecución.
                p.mb-0.text-white Este proceso se compone de seis etapas clave que guían al emprendedor desde la concepción de la idea hasta la implementación y optimización del negocio.

              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema5/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") 1. Identificación de la idea de negocio
    p.mb-5 Toda empresa nace a partir de una idea. Sin embargo, no todas las ideas son viables o sostenibles en el tiempo. Para evaluar el potencial de una idea, es importante responder a las siguientes preguntas:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Resuelve un problema real en el mercado?

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Es innovadora o mejora una solución existente?

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cuenta con un público objetivo claramente definido?
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Es factible en términos de costos y recursos disponibles?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-2.p-5
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico:
            p.mb-0  Un emprendedor nota que hay poca oferta de comidas rápidas nutritivas en su ciudad. Identifica la oportunidad de crear un servicio de comida saludable a domicilio.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema5/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") 2. Estudio de mercado
    p.mb-5 Antes de lanzar un negocio, es fundamental entender si hay demanda y quiénes serían los clientes potenciales. Para ello, se realizan estudios de mercado que incluyen:

    .bg-full-width.bg-fondo-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema5/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="94.5%" numero="+")
                h5 Segmentación del público objetivo
                p Definir el perfil del cliente ideal (edad, intereses, nivel socioeconómico, ubicación, etc.).
    
              .bg-color-white.box-shadow.p-3(x="37%" y="94.5%" numero="+")
                h5 Análisis de la competencia
                p Conocer qué empresas ofrecen productos o servicios similares y qué ventajas competitivas se pueden desarrollar.
    
              .bg-color-white.box-shadow.p-3(x="63%" y="94.5%" numero="+")
                h5 Tendencias del mercado
                p Identificar oportunidades en el sector mediante el análisis de hábitos de consumo y tendencias emergentes.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="94.5%" numero="+")
                h5 Herramientas recomendadas
                p Encuestas, entrevistas, análisis de datos de la industria y observación de patrones de consumo.
    .bg-full-width.bg-color-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                h5 Ejemplo práctico: 
                p.mb-0 Antes de lanzar su negocio de comida saludable, el emprendedor realiza encuestas en redes sociales para conocer los hábitos alimenticios de su público objetivo.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema5/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") 3. Definición del modelo de negocio
    p.mb-5 El modelo de negocio describe cómo una empresa crea, entrega y captura valor. Una herramienta ampliamente utilizada para definirlo es el Business Model Canvas, que se compone de los siguientes elementos:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Propuesta de valor
                p.text-center ¿Qué problema soluciona el producto o servicio y qué beneficios ofrece?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Segmentos de clientes
                p.text-center ¿Quiénes son los clientes y cuáles son sus necesidades?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Canales de distribución
                p.text-center ¿Cómo se entregará el producto o servicio a los clientes?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Relación con clientes
                p.text-center ¿Cómo se mantendrá la fidelización y satisfacción de los clientes?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fuentes de ingresos
                p.text-center ¿Cómo generará dinero la empresa?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Recursos clave
                p.text-center ¿Qué infraestructura, personal y materiales se necesitan?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Actividades clave
                p.text-center ¿Cuáles son los procesos esenciales para el negocio?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Socios clave
                p.text-center ¿Qué aliados estratégicos pueden fortalecer el negocio?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estructura de costos
                p.text-center ¿Cuáles serán los gastos operativos y cómo se optimizarán?
    
          .col-lg-4.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema5/9.png', alt='')
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-3.px-4.py-5(data-aos="fade-left")
          h5 Ejemplo práctico:  
          p.mb-0 El emprendedor define su modelo de negocio con el Business Model Canvas y decide que su servicio de comida saludable funcionará a través de una plataforma digital con suscripciones semanales.
    
    h2(data-aos="fade-left") 4. Elaboración del plan financiero
    p.mb-5 Un negocio no puede operar sin un plan financiero sólido. Es necesario estimar costos, proyecciones de ingresos y definir fuentes de financiamiento.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/20.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Inversión inicial") Cálculo de los recursos necesarios para comenzar (equipos, insumos, licencias, etc.).
          p(numero="2" titulo="Costos fijos y variables") Gastos operativos como alquiler, nómina, materia prima y publicidad.
          p(numero="3" titulo="Flujo de caja") Proyección de ingresos y egresos en un periodo determinado.
          p(numero="4" titulo="Punto de equilibrio") Momento en el que los ingresos cubren los costos y se empieza a generar ganancias.
          p(numero="5" titulo="Opciones de financiamiento") Evaluación de recursos propios, inversionistas, préstamos o programas de apoyo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-1.p-5
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico:
            p.mb-0  El emprendedor determina que necesita $50,000 para lanzar su negocio de comida saludable y evalúa opciones de financiamiento, incluyendo un crédito bancario y una alianza con un inversor.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema5/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") 5. Estrategia de marketing y ventas
    p.mb-5 Una idea bien planificada necesita una estrategia de marketing para atraer clientes y generar ventas.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Definición del público objetivo
              p.mb-0 ¿Quiénes son los clientes y cómo llegar a ellos?

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Posicionamiento de marca
              p.mb-0 Creación de una identidad visual y mensajes clave.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Canales de comunicación
              p.mb-0 Uso de redes sociales, página web, email marketing, entre otros.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Publicidad y promociones
              p.mb-0 Estrategias para atraer clientes (descuentos, pruebas gratuitas, colaboraciones).
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Técnicas de ventas
              p.mb-0 Métodos de conversión de clientes y servicio postventa.


    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/23.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.px-4.py-5.h-100(data-aos="fade-left")
          h5 Ejemplo práctico:  
          p.mb-0 El emprendedor lanza una campaña en redes sociales con influencers que promueven su comida saludable y ofrece descuentos a los primeros clientes
    
    h2(data-aos="fade-left") 6. Ejecución y monitoreo
    p.mb-5 Una vez que el negocio está en marcha, es crucial monitorear su desempeño y hacer ajustes para garantizar su crecimiento.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/24.png")
            .col-lg-7.order-2.order-lg-1
              h5 Indicadores clave de desempeño (KPI)
              p Seguimiento de ventas, satisfacción del cliente, <em>engagement</em> en redes sociales, etc.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/25.png")
            .col-lg-7.order-2.order-lg-1
              h5 Escucha activa del cliente
              p Recopilación de comentarios y sugerencias para mejorar el servicio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/26.png")
            .col-lg-7.order-2.order-lg-1
              h5 Optimización continua
              p Ajustes en la estrategia de marketing, costos y operaciones para mejorar la rentabilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/27.png")
            .col-lg-7.order-2.order-lg-1
              h5 Expansión del negocio
              p Evaluación de oportunidades para crecer, lanzar nuevos productos o llegar a nuevos mercados.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/28.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          h5 Ejemplo práctico:  
          p.mb-0 Después de tres meses de operación, el emprendedor analiza que su servicio es más popular en ciertos horarios y ajusta los tiempos de entrega para optimizar la logística.
        p El proceso de planificación del emprendedor es una hoja de ruta esencial para convertir una idea en un negocio rentable y sostenible. Desde la identificación de oportunidades hasta la ejecución y monitoreo, cada etapa contribuye a reducir riesgos y maximizar el potencial de éxito. Planificar con precisión permite a los emprendedores adaptarse a los cambios del mercado y tomar decisiones estratégicas fundamentadas en datos y análisis, asegurando así el crecimiento de su negocio.

    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") De la empresa tradicional a la moderna
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>De la empresa tradicional a la moderna</b>, un análisis sobre la evolución del mundo empresarial y las estrategias clave para adaptarse a un entorno dinámico. Este contenido explora cómo las empresas han pasado de modelos rígidos y jerárquicos a enfoques más flexibles, digitales e innovadores. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> De la empresa tradicional a la moderna.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/29.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://economipedia.com/definiciones/liderazgo.html" target="_blank" rel="noopener noreferrer") Pablo Orellana Nirian,(30 julio 2024). Liderazgo: Qué es y cómo influir en un equipo.

           

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
