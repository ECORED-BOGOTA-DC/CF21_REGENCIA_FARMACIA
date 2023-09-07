<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Métodos de extracción
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.png')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Para la realización de esta actividad se parte de la droga y se lleva a cabo el proceso de extracción para realizar el aislamiento de los principios activos de manera directa de las drogas. Entre los métodos de extracción existen los siguientes:
        .row.justify-content-center.mb-4
          .col-lg-5
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Método de extracción mecánica.
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Método de extracción por destilación.
          .col-lg-5
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Método de extracción con solventes.
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Proceso de extracción con solventes.
        p.mb-0 Analice cada uno de ellos.
      
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Método de extracción mecánica

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Permite obtener los principios activos disueltos en los fluidos propios de la planta, los cuales una vez extraídos, se denominan jugo. La extracción mecánica se puede realizar por expresión, la cual consiste en ejercer una presión sobre la droga, por calor o mediante incisiones por las que fluyen los fluidos de la planta.

    p.mb-5 A continuación, se muestra un ejemplo del método de expresión por calor y presión, el cual se refiere a la acción mecánica que se lleva a cabo cuando se exprime un material vegetal para obtener la esencia de este. Se utiliza en casos como la lima, limón, mandarina y naranja. Se exprimen todas las esencias que contienen los materiales vegetales dentro de este y se realiza la recolección para su uso luego de pasar por el proceso de filtración.

    TabsB.color-primario.mb-5
      .BG07(titulo="Extracción por expresión" :icono="require('@/assets/curso/tema4/img03.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-10
            img(src='@/assets/curso/tema4/img04.svg')
      .BG07(titulo="Extracción por presión" :icono="require('@/assets/curso/tema4/img05.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-10
            img(src='@/assets/curso/tema4/img06.svg')
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Método de extracción por destilación

    p Es una técnica que se basa en la diferente volatilidad de los componentes de la droga, lo cual permite la separación de componentes volátiles de otros que son menos o nada volátiles. Se suelen hacer destilaciones por arrastre de vapor o de hidrodestilaciones que facilitan la extracción de los principios activos volátiles. La destilación permite obtener, por ejemplo, las esencias de las drogas. Es un método en el que se utiliza una fuente de calor, por lo que solo es aplicable a principios activos termoestables.
    .h5.text-center.mb-5 En la siguiente figura se muestra el montaje que se debe hacer, los implementos y el proceso para este tipo de extracción.

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          img(src='@/assets/curso/tema4/img07.svg')
    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Método de extracción con solventes

    p Los procesos de extracción con solventes son los más utilizados para la obtención de principios activos, consisten en poner en contacto la droga con solventes en los cuales sea solubles. Los principios activos deben pasar de la droga al disolvente, con el fin de obtener un extracto líquido. Luego de este proceso, el extracto se debe concentrar hasta que la cantidad de disolvente sea mínima. 
    .h5.mb-5 Para que la extracción se lleve a cabo de manera correcta hay que tener presente las siguientes recomendaciones: 

    .BGM08.pb-4.px-md-5.px-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 <a style="color: #00BCD4">Características de la droga</a>
            p.mb-0 Se debe trabajar con drogas desecadas y con un grado de división adecuado (mayor en drogas duras con las cortezas y menor en drogas blandas como flores y hojas), para facilitar el máximo contacto entre los principios activos y el disolvente.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img08.png')
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 <a style="color: #00BCD4">Naturaleza del solvente</a>
            p Principalmente se utilizan en las extracciones el agua y las mezclas hidroalcohólicas (agua y alcohol etílico) en proporción variable. 
            p.mb-0 También es posible utilizar otros solventes orgánicos como acetona, éter etílico, hexano, propilenglicol (muy usado en cosmética), entre otros. El agua es un buen solvente de muchos principios activos de las drogas; pero por esta misma razón, resulta generalmente poco selectivo. Además, muchos principios activos se hidrolizan en agua. Por otra parte, los extractos acuosos tienen una estabilidad poco duradera una vez preparados y deben de ser obtenidos para su utilización en un periodo de tiempo relativamente corto. La utilización de mezclas variables de agua y alcohol permite seleccionar las sustancias sin interés farmacológico, así como separar los principios activos entre sí.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img09.png')
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 <a style="color: #00BCD4">Temperatura</a>
            p.mb-0 El aumento de la temperatura favorece la extracción de principios activos de las drogas porque aumenta su solubilidad en los solventes utilizados, pero a su vez, puede favorecer la degradación de dichos compuestos, por lo que es necesario controlarla para obtener una máxima extracción sin consecuencias indeseables. En ningún caso se pueden utilizar temperaturas elevadas para extraer principios activos termolábiles.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img10.png')
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 <a style="color: #00BCD4">Tiempo de contacto entre la droga y el disolvente</a>
            p.mb-0 Depende de las características de la droga (dureza, grado de división) y de la naturaleza de los principios activos (volátiles, hidrolizables, oxidables, entre otros).
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img11.png')
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 <a style="color: #00BCD4">Control de la difusión celular</a>
            p.mb-0 Una correcta difusión se consigue cuando la droga ofrece un grado de difusión adecuado (mayor superficie de difusión) y cuando se renueva constantemente el solvente utilizado en las extracciones. Al renovar el solvente se mantiene una diferencia de concentración de principios activos entre la droga y el solvente utilizado en la extracción.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img12.png')
    
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Proceso de extracción con solventes

    p Los procesos de extracción más simples que se utilizan se dividen de acuerdo con el tipo de disolvente utilizado. Se conocen dos tipos:
    .h5.text-center.mb-5 Extracción con agua
 
    TabsB.color-primario.mb-5
      .BG07(titulo="Infusión" :icono="require('@/assets/curso/tema4/img13.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Junto con las decocciones son las preparaciones de este tipo más antiguas que se conocen.
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Infusiones o infusos: son formas farmacéuticas líquidas, constituidas por una solución extractiva, obtenida por la acción continuada del agua caliente durante 20 minutos, sobre las drogas convenientemente divididas. 
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Es también una maceración abreviada. Se vierte el agua hirviendo sobre la droga dividida, en cantidad aproximadamente igual al total, se tapa el recipiente preferentemente de cierre perfecto y se macera durante 20 minutos, finalmente se filtra para clarificar la solución obtenida.
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | La temperatura máxima que se alcanza es de 80 o 90 °C. Durante la extracción decrece lentamente. 
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Las infusiones poco activas se preparan al 5% P/V, las heroicas o muy activas deberán ser de concentración prescripta por el médico. 
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Se emplea para drogas de tejidos delicados, fácilmente penetrables (hojas, yemas, flores).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img13.png')
      .BG07(titulo="Decocción o cocimiento" :icono="require('@/assets/curso/tema4/img14.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            ul.lista-ul--color.mb-0
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Es un método extractivo enérgico donde el solvente actúa a temperatura de ebullición y durante 20 minutos extrae los principios solubles de la droga.
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Cocimiento, decocción o decocta: es una forma farmacéutica líquida de preparación extemporánea constituida por una solución extractiva, preparada por la acción del agua mantenida a ebullición, sobre la droga más o menos dividida o también entera cuando está formada por piezas pequeñas.
              li(style="margin-bottom: 2px")
                i.fas.fa-play-circle(style="color: #00BCD4; font-size: xx-small")
                | Se deberá reponer el agua que se va evaporando, para que no se queme la droga.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img14.png')
      .BG07(titulo="Destilación en corriente de vapor" :icono="require('@/assets/curso/tema4/img15.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-11
            .tarjeta.tarjeta--blanca.p-4
              img(src='@/assets/curso/tema4/img16.svg')

    .h5.text-center.mb-5 Extracción con disolventes orgánicos:
    TabsB.color-primario.mb-5
      .BG07(titulo="Infusión" :icono="require('@/assets/curso/tema4/img17.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            p La droga con el grado de tenuidad prescripto se pone en contacto con el solvente en un recipiente de cierre perfecto a temperatura ambiente. Se deben realizar agitaciones frecuentes a lo largo de varios días, tratando de influenciar el gradiente de concentración.
            p Al principio de la extracción este gradiente se encuentra en su punto máximo, con el correr de los días a pesar de la agitación, va disminuyendo.
            p Como norma se macera la droga por 7 días con agitación frecuente y protegido de la luz solar. Si el menstruo es agua, no sobrepasar las 48 horas para evitar fermentación y formación de mohos.
            p Se separa el extracto del residuo por medio de un colado o prensado, se lava el residuo con el líquido de extracción. 
            p.mb-0 La maceración es útil cuando los principios son fácilmente solubles en frío y cuando la acción de la temperatura los altera.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img17.png')
      .BG07(titulo="Digestión" :icono="require('@/assets/curso/tema4/img18.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            p Es un procedimiento similar a la maceración, pero abreviado y efectuado con ayuda del calor (35 - 55 °C, aunque se acepta de 40 a 80 °C).
            p Se emplea para p. a. que son poco solubles en frío y cuando el solvente a ebullición puede alterarlos o disolver otras sustancias perjudiciales o inactivas. La temperatura de trabajo previene el ataque microbiano.
            p Cuando el menstruo es volátil se debe adaptar un sistema de refrigerante a reflujo. 
            p.mb-0 Ejemplo, Jarabe de Tolú, codificado en FNA VI Ed.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img18.png')
      .BG07(titulo="Percolación o lixiviación" :icono="require('@/assets/curso/tema4/img19.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Se trata de un proceso de paso, si bien hay una maceración previa, el disolvente se renueva de manera continua y debido a ello mantiene el gradiente de concentración lo más alto posible, el disolvente corre de arriba hacia abajo a través de la capa de la droga, el disolvente puro desplaza al que contiene la sustancia extraída sin ser necesario aplicar presión.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img19.png')
      .BG07(titulo="Extracción por aparato soxhlet" :icono="require('@/assets/curso/tema4/img20.svg')")
        .row.justify-content-center.py-4.py-md-5
          .col-lg-7.order-lg-1.order-2
            p.mb-0 El uso de un aparato soxhlet es una manera conveniente de preparar extractos crudos de plantas. Este proceso usa preferentemente solventes puros, aunque algunos autores han utilizado mezclas binarias (mezclas de dos solventes) o terciarias (de tres solventes).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img21.svg')


</template>

<script>
export default {
  name: 'Tema4',
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
