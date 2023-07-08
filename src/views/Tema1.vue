<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Farmacognosia
    
    p.mb-5 El término fue utilizado por primera vez en el año 1815 (Analectas Pharmacognostica) por el alemán Aenotheus Seydler, quien lo usó en su tesis doctoral. El nombre farmacognosia se deriva del griego #[strong #[em phamakon]], que significa droga y #[strong #[em gignosco]], adquirir el conocimiento de algo. Por lo tanto, la farmacognosia es la ciencia farmacéutica que se ocupa del estudio de las drogas y las sustancias medicamentosas de origen natural, bien sean:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Vegetal.
      .col-xxl-3.col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Microbiano (hongos. bacterias).
      .col-lg-3.col-md-8.col-10(data-aos="fade-left")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Animal.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.png' alt="Materia prima natural")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left") 
          p.mb-0 Es la ciencia encargada del estudio de las fuentes naturales de materia prima de interés farmacéutico, estudiando tanto sustancias con propiedades terapéuticas como sustancias tóxicas, excipientes u otras sustancias de interés farmacéutico, aunque su uso sea básicamente tecnológico y no terapéutico (por ejemplo, el algodón y el almidón). En general, trata sobre los aspectos botánicos, químicos, biológicos y económicos de las drogas, destinadas a la preparación de medicamentos, de aquí que muchos autores designan a la farmacognosia como “materia médica” o “materia farmacéutica”. La farmacognosia es la más antigua de las ciencias médicas, debido a que el hombre primitivo tuvo que aprender a distinguir los productos que le servían de alimento y los curativos de los tóxicos.
        p.mb-0 Es importante realizar un recorrido por la historia para conocer la importancia y el impacto que ha tenido la farmacognosia desde las civilizaciones antiguas hasta nuestros tiempos.

    .h5.text-center.mb-5 En la siguiente línea de tiempo se podrán observar los aportes de esta ciencia en periodos específicos.

    PasosA.color-primario.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 5000 A.C. China
          p.mb-0 Se utilizaba el té y el ruibarbo (purgante), el opio como analgésico; el extracto de soya para el tratamiento de abscesos y forúnculos, los cuales fueron precursores de los antibióticos. Toda la información quedó registrada en el libro “#[strong PEN TSAO]”.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img02.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start 3000 A.C. Egipto
          p.text-start Utilizaron drogas (aceites esenciales, resinas), de origen animal y vegetal para embalsamar cadáveres y azafrán, incienso, cilantro, etc.,  para curar enfermedades.
          p.text-start.mb-0 Todo quedó registrado en el #[strong Papiro Ebers].
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4  3000 A.C India
          p Se inició con el estudio de la morfología de los vegetales y con los primeros intentos para sistematizar la botánica.
          p.mb-0 La información quedó registrada en las #[strong VEDAS].
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img05.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Roma
          p.text-start.mb-0 Surge el primer farmacognosia o farmacólogo, Pedacio Dioscórides, se documentaron más de 600 plantas medicinales con sus indicaciones y formas de administración.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Árabes y mundo musulmán
          p.mb-0 Aparecen las primeras boticas y escuelas de farmacia y se documentaron cerca de 1500 drogas con las dosis, usos, forma de uso y posibles reacciones adversas.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img06.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img07.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Europa Renacimiento
          p.text-start.mb-0 Hubo un gran avance científico tras la aparición del Galileo Galilei, implementándose el método inductivo el cual consiste en llegar a conclusiones generales a partir de ideas específicas.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 1493 - 1541 Paracelso
          p.mb-0 Se incluyeron las primeras sustancias inorgánicas en la terapéutica. Se incluyó el término principio activo.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img08.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Siglo XVIII -XIX
          p.text-start.mb-0 Se aisló el primer principio activo (morfina), extraída del opio y se clasifica como “alcaloides”.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 1817 Pelletier y Caventou
          p.mb-0 Se aisló la emetina que es un alcaloide derivado de la ipecacuana y utilizado para el tratamiento de las amibas. También se aislaron la quinina, cincocina y la estricnina.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img11.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start 1830 Leroux
          p.text-start.mb-0 Se aisló la salicina (tratamiento de problemas reumáticos), la amigdalina (tratamiento del cáncer), la digitalina (tratamiento de afecciones cardiacas). Se utilizó por primera vez en microscopio para el estudio de las drogas.
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 1813 - 1878 Magendie y Claude Bernard
          p.mb-0 Se introdujo el método experimental para estudiar los efectos de los fármacos. Crearon la farmacología experimental.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img12.png' alt="Imagen decorativa")

    .row.justify-content-start.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.px-0
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 40px;")
      .col-auto.BGRB01
        .h4.mb-0 Clasificación de la farmacognosia
    
    .h5.text-center.mb-5 La farmacognosia se clasifica en:
    
    .tarjeta--container.row.justify-content-center.mb-5
      .col-lg-5.col-md.tarjeta.BG02.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/tema1/img13.svg', alt='Microescopio')        
        .h4.text-center Farmacognosia general
        p.mb-0 La farmacognosia general se encarga del estudio de las drogas en temas relacionados con su origen, historia, mecanismo a de recolección, formas de selección, desecación, comercialización, descripción, composición química, técnica para identificarlas, valorarlas, conservarlas y usarlas.
      .col-lg-5.col-md.tarjeta.BG03.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/tema1/img14.svg', alt='Drogas naturales')        
        .h4.text-center Farmacognosia especial
        p.mb-0 La farmacognosia especial enfoca sus estudios en las drogas naturales y las agrupa según su estructura química: alcaloides, aceites esenciales, glúcidos cardiotónicos, flavonoides, cumarinas, gomas, resinas, pectinas, cumarinas, etc. 

    .row.justify-content-start.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.px-0
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 40px;")
      .col-auto.BGRB01
        .h4.mb-0 Ramas de la farmacognosia
    
    p A inicios del siglo pasado el desarrollo de la farmacognosia había sido en el aspecto botánico, enfocándose en la identificación y descripción de las drogas enteras o las que se encontraban pulverizadas, teniendo en cuenta todo el proceso relacionado con su historia, comercialización, proceso para recolectarla, prepararla y almacenarla. 
    .h5.mb-5 Estas ramas son:

    TabsA.color-primario.mb-5
      .tarjeta.BGR04.p-4(titulo="Farmacoergasia")
        img(src='@/assets/curso/tema1/img15.svg', alt='Diagrama Farmacoergasia')
      .tarjeta.BGR04.p-4(titulo="Farmacoetnología")
        img(src='@/assets/curso/tema1/img16.svg', alt='Diagrama Farmacoetnología')
      .tarjeta.BGR04.p-4(titulo="Farmacogeografía")
        img(src='@/assets/curso/tema1/img17.svg', alt='Diagrama Farmacogeografía')
      .tarjeta.BGR04.p-4(titulo="Farmacoetimología")
        img(src='@/assets/curso/tema1/img18.svg', alt='Diagrama Farmacoetimología')
      .tarjeta.BGR04.p-4(titulo="Farmacoemporia")
        img(src='@/assets/curso/tema1/img19.svg', alt='Diagrama Farmacoemporia')
      .tarjeta.BGR04.p-4(titulo="Farmacodiascomia")
        p Estudia los empaques y los embalajes de las drogas naturales. Los recipientes más adecuados suelen ser los recipientes metálicos; pero también los de vidrio, los cuales son más utilizados.
        p Los recipientes de madera, tela o plástico no son recomendables porque suelen ser relativamente permeables al aire y a los agentes externos. Las esencias deben de conservarse en envases herméticos totalmente llenos y en un lugar frío y oscuro.
        p Observaciones similares son aplicables a los aceites fijos, especialmente al aceite de hígado de bacalao, en este último caso, el aire del recipiente se reemplaza por un gas inerte.
        p Las preparaciones farmacéuticas de Digitalis purpúrea y Digitales lanata deben estar en recipientes herméticamente cerrados protegidos de la luz, el contenido de humedad no debe de sobrepasar el 6% para así evitar la pérdida de principios activos.
        p.mb-0 Otro ejemplo relacionado con cuidados en la presentación farmacéutica es con relación a la pilocmpina. la cual se puede convertir en un isómero denominado isopilocarpina con pérdida potencial de la actividad.

    p.text-center Las ramas de la farmacognosia son muy importantes; sin embargo, se enfrentan al reto del rápido desarrollo de otros sectores que han frenado su desarrollo.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
