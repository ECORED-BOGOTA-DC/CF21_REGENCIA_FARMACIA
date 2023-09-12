<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fitoquímica
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Al igual que la farmacognosia, con la cual guarda una relación muy estrecha, la fitoquímica es una ciencia muy importante y de gran aporte en diversos sectores, siendo el más notorio en el farmacéutico y la salud.
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Es una rama de la química que estudia los metabolitos secundarios extraídos de las plantas.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Estudia cada grupo de la planta, desde su estructura química molecular hasta las propiedades biológicas.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #7E5EE3;")
            | Realiza relevamientos y análisis de los componentes químicos de las plantas, como los principios activos, los olores, pigmentos, etc.

    .row.justify-content-start.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.px-0
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 40px;")
      .col-auto.BGRB01
        .h4.mb-0 Objetivo de la fitoquímica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Es una disciplina que tiene como objeto el aislamiento, purificación, análisis, elucidación de la estructura y caracterización de la actividad biológica de diversas sustancias producidas por los vegetales.
        p.mb-5 Mediante el proceso mencionado anteriormente, se obtienen las:
        .h5.mb-5 Sustancias químicas de origen vegetal
        p Compuestos orgánicos constituyentes de alimentos de origen vegetal, que no son nutrientes y que proporcionan al alimento unas propiedades fisiológicas que van más allá de las nutricionales propiamente dichas.
        p.mb-0 Algunos de los nombres de dichas sustancias químicas son:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Cumarina]: tratamiento de coágulos de sangre en los vasos sanguíneos (anticoagulante).
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Flavonol]: mejoran la circulación sanguínea y actividad antiinflamatoria.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Xantona]: combaten virus, hongos, bacterias y parásitos.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Cannabinoide]: tratamiento de la depresión, la ansiedad, el insomnio, la demencia o la adicción, entre otros padecimientos.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Antraquinona]: tratamiento dermatológico de la psoriasis.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Benzofenona]: sustancia utilizada en productos cosméticos (lociones, jabones), para evitar que la luz ultravioleta UV degrade el color y el olor de estos productos.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Estilbeno]: posee actividades antioxidantes y ayudan a la prevenir y tratar enfermedades oncológicas y neurodegenerativas, asma, depresión, parkinson, alzheimer y recientemente diabetes y obesidad.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Ácido fenilpropanoico]: conservante en productos alimenticios.
          li(style="margin-bottom: 2px")
            i.fas.fa-atom(style="color: #00BCD4;")
            p.mb-0 #[strong Neolignano]: posibles propiedades para el tratamiento de cáncer de seno.

    .h5.text-center.mb-5(data-aos="fade-right") Dentro de las sustancias fitoquímicas más importantes se pueden encontrar las siguientes:

    .BGIMG02.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="fade-right")
          .tarjeta-numerada.color-primario.hg-01.ps-5.pe-2.py-4
            .tarjeta-numerada__numero
              .h2 1
            .h5.text-center Terpenos
            p <a style="color: #FFBA00; font-weight: 900">Carotenoides</a> (amarillo, anaranjado o enrojecido).
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-leaf(style="color: #81D4FA; margin-left: -10%")
                | Alfacaroteno, betacaroteno, betacritoxantina, licopeno, luteína, zeaxantina.
              li(style="margin-bottom: 2px")
                i.fas.fa-leaf(style="color: #81D4FA; margin-left: -10%")
                | Damasco, naranja, maíz, frutillas, zanahorias, tomate, espinacas, etc.
        .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="flip-up")
          .tarjeta-numerada.color-secundario.hg-01.ps-5.pe-2.py-4
            .tarjeta-numerada__numero
              .h2 2
            .h5.text-center Fenoles
            p.mb-5 <a style="color: #592C95; font-weight: 900">Flavonoides</a> (azul, azul anaranjado, violeta).
            img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
        .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="flip-up")
          .tarjeta-numerada.color-acento-contenido.hg-01.ps-5.pe-2.py-4
            .tarjeta-numerada__numero
              .h2 3
            .h5.text-center Quercetinas
            p.mb-5 Cebolla.
            img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")
        .col-xl.col-md-6(data-aos="fade-left")
          .tarjeta-numerada.color-primario.hg-01.ps-5.pe-2.py-4
            .tarjeta-numerada__numero
              .h2 4
            .h5.text-center Antocianinas
            p <a style="color: #592C95; font-weight: 900">(Rubí violáceo)</a>
            p.mb-1 Uvas, cerezas, grosellas, moras, frambuesas, etc.
            ul.lista-ul--color
              li(style="margin-bottom: 2px; margin-left: -10%")
                i.fas.fa-leaf(style="color: #81D4FA;")
                p.mb-0 #[strong Isoflavonoides].
              p.mb-1 (Porotos, soja, etc). 
              li(style="margin-bottom: 2px; margin-left: -10%")
                i.fas.fa-leaf(style="color: #81D4FA;")
                p.mb-0 #[strong Tioles.] 
              p.mb-1 Azufre (coliflor, repollo, bróculi, etc). 
              li(style="margin-bottom: 2px; margin-left: -10%")
                i.fas.fa-leaf(style="color: #81D4FA;")
                p.mb-0 #[strong Compuestos órgano sulfúrico].
              p.mb-1 (Ajo)

    p(data-aos="fade-right") Para el estudio de las plantas medicinales se requiere de una alta rigurosidad y del cumplimiento de cada una de las etapas para garantizar la calidad de las sustancias químicas.
    .h5(data-aos="fade-right") Las etapas constan de los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.justify-content-center
          .col-lg
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Identificación.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Recolección.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Higiene.
          .col-lg
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Transporte.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Recolección.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Secado.
          .col-lg
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Conservación.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Envasado.
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Extracción.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img06.png' alt="Imagen decorativa")

    .h5.text-center.mb-5(data-aos="fade-right") A continuación, se definen las características de cada una de las etapas del proceso de estudio de las plantas medicinales:

    TabsA.color-primario.mb-5(data-aos="zoom-in")
      .tarjeta.BGR04.p-4(titulo="Identificación")
        .h5.text-center.mb-5 En la identificación de la planta se tienen en cuenta aspectos como:
        figure.indicador__container(@click="modal1 = true")
          img(src='@/assets/curso/tema3/img07.svg' alt="Esquema con los aspectos a tener en cuenta en la planta como son:<br>Taxonomía. Es la ciencia de la clasificación de grupos (taxones) de organismos en categorías formales. <br>Sistemática.  Es el estudio de las relaciones entre grupos. <br>Especie. Es la unidad de clasificación que se define como un grupo de organismos que se cruzan entre sí. Se designan con un sistema binomial que comprende el número del género seguido por el epíteto específico. <br>Género.  Agrupa especies similares. Los géneros se agrupan en familias. <br>Familias. Las familias se agrupan en órdenes, los órdenes en clases, las clases en divisiones y las divisiones en reinos.<br>Ejemplo. «Llantén menor» Plantago Lanceolata (NC). «Llantén Mayor» Plantago Major NC). Plantago es el género, Lanceolata y Major son las especies.")
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.BGR04.p-4(titulo="Medidas recolección")
        p Para la recolección de las plantas medicinales se deben tener en cuenta ciertas medidas, recomendaciones y aspectos a evitar, los cuales buscan que se recolecte un material de buena calidad, sin contaminantes; que se utilicen herramientas adecuadas para no dañar la planta; qué partes de la planta utilizar y el momento adecuado para recolectar la planta teniendo en cuenta su madurez. 
        p Las recomendaciones para una correcta recolección son:
        figure.indicador__container(@click="modal2 = true")
          img(src='@/assets/curso/tema3/img08.svg' alt="Esquema con las recomendaciones para una correcta recolección, las cuales son:<br>No aprovechar las plantas que son escasas en la zona de recolección.<br>Las plantas jóvenes o poco desarrolladas no deben tocarse. Tampoco las que no serán usadas con fines medicinales. <br>Nunca se debe sacar una planta de raíz, a no ser que sus propiedades medicinales se encuentren precisamente allí. <br>Para cortar se usa un cuchillo afilado o una tijera de podar, para no dañar el resto de la planta. <br>No recolectar en lugares contaminados. No se debe recolectar en lugares tales como:<br>Calles u orillas de caminos, por las emanaciones tóxicas de los caños de escape. <br>En canales u otros cursos de agua contaminados.<br>Alrededor de industrias contaminadas.<br>Cerca de cultivos en potreros, porque en ellos se emplean plaguicidas.")
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.BGR04.p-4(titulo="Requisitos recolección")
        .h5.text-center.mb-5 De acuerdo con las características de la planta y el tipo es recomendable cumplir con los siguientes requisitos:
        figure.indicador__container(@click="modal3 = true")
          img(src='@/assets/curso/tema3/img09.svg' alt="Esquemas con los requisitos de recolección, los cuales son:<br>Árboles y arbustos altos. Cortar ramas solo si se necesita recolectar corteza. Nunca arrancar corteza de ramas principales, ni mucho menos de troncos, pues cada pedazo de corteza arrancado es una herida irrecuperable para la planta. <br>Arbustos bajos y hierbas perennes. Se cortan algunas ramas por planta, desde 10 cm del suelo para que la planta pueda recuperarse. <br>Hierbas anuales. Recolectar en lugares donde sean abundantes. Llevar solo algunas para que haya suficiente producción de semillas y el número de plantas no disminuya al año siguiente. <br>Flores, frutos y semillas. Recolectar siempre solo una pequeña cantidad por planta, para no alterar el proceso reproductivo de esta.")
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.BGR04.p-4(titulo="Higiene")
        p La higiene es un aspecto importante debido a que con esta se evita la contaminación de la planta. 
        .h5.text-center Las recomendaciones para cumplir con este requisito son las siguientes:
        .BGR06B.p-4.mb-4
          p.text-center.mb-0 No recolectar plantas muy húmedas, ni lavarlas por el peligro de pudrición.
        .BGR03B.p-4.mb-4
          p.text-center.mb-0 Separar las hierbas de tierra, palos y piedras.
        .BGR05B.p-4.mb-4
          p.text-center.mb-0 Solo escoger partes vegetales sanas, libres de parásitos, caracoles, mohos, polvo, etc.
        .BGR06B.p-4
          p.text-center.mb-0 Que se han secado naturalmente, no se usan porque han estado expuestas mucho tiempo al aire.
      .tarjeta.BGR04.p-4(titulo="Transporte")
        p Durante el transporte de las plantas pueden ocurrir ciertas situaciones que deterioren o alteren las propiedades de estas. Debido a esto, se deben cumplir con las siguientes recomendaciones:
        figure.indicador__container(@click="modal5 = true")
          img(src='@/assets/curso/tema3/img11.svg' alt="Esquema con las recomendaciones de transporte, las cuales son:<br>El transporte de las hierbas<br>Se hace en recipientes bien aireados, tales como bolsas de malla, sacos harineros limpios.<br>Evitar<br>El uso de bolsas de polietileno (plástico), porque provoca un comienzo de pudrición en pocas horas.")
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.BGR04.p-4(titulo="Tipos secado")
        p El secado es muy importante dentro del proceso, debido a que se realiza para poder guardar la planta para posteriores usos (la hierba se seca para poder guardarla y así usarla en una época en que no se pueda conseguir). Existen diferentes tipos de secado y para cumplir con un proceso adecuado de secado hay que tener en cuenta las siguientes consideraciones: 
        .row.justify-content-center
          .col-xl-4.px-1.mb-xl-0.mb-4
            .BGR05B.p-4.mb-2
              .h5.text-center.mb-0 En manojos
            .BGR01X.hg-02.p-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #81D4FA; font-size: xx-small")
                  | Es un buen sistema para secar ramas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #81D4FA; font-size: xx-small")
                  | Los manojos no deben ser muy tupidos, para que el aire circule dentro de ellos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #81D4FA; font-size: xx-small")
                  | El hilo que sujete el manojo debe estar suelto, para evitar que se pudran las partes apretadas, por falta de aire.
          .col-xl-4.px-1.mb-xl-0.mb-4
            .BGR03B.p-4.mb-2
              .h5.text-center.mb-0 En capas
            .BGR01Y.hg-02.p-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #CBBFF4; font-size: xx-small")
                  | Sirve especialmente para secar hojas sueltas, flores, pétalos y toda parte de hierba que sea muy corta para formar manojos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #CBBFF4; font-size: xx-small")
                  | Si se secan ramas, la capa de hierba tendrá una altura máxima de 15 cm.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #CBBFF4; font-size: xx-small")
                  | Si se secan flores, pétalos, cualquier hierba trozada, ramas muy tupidas o ramas entre las que quedó poco espacio para el aire, la altura máxima de la capa tiene que ser de 5 cm.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #CBBFF4; font-size: xx-small")
                  | La hierba se pone sobre papel, encima de una mesa.
          .col-xl-4.px-1
            .BGR06B.p-4.mb-2
              .h5.text-center.mb-0 En marcos
            .BGR01Z.hg-02.p-2
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #88F2FF; font-size: xx-small")
                  | Este es un sistema para cantidades más o menos grandes de hierbas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #88F2FF; font-size: xx-small")
                  | Se hacen marcos de madera de 1,20 m * 1,20 m, a los cuales se le pone un pedazo de arpillera, de malla de metal, de plástico o de hilo. 
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #88F2FF; font-size: xx-small")
                  | Sujetándoles con una estructura de madera, se los apila a una distancia de 20 cm. 
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #88F2FF; font-size: xx-small")
                  | Se pone la hierba en capas de 5 cm y se las remueve diariamente.
                li(style="margin-bottom: 2px")
                  i.fas.fa-play-circle(style="color: #88F2FF; font-size: xx-small")
                  | Las ventajas de este sistema son que la malla de los marcos y la distancia entre ellos garantizan una buena circulación del aire para toda la hierba puesta a secar, haciendo el secado mucho más rápido.
      .tarjeta.BGR04.p-4(titulo="Recomendaciones de secado")
        .h5.text-center.mb-5 Es de vital importancia tener presente las siguientes recomendaciones:
        figure.indicador__container(@click="modal6 = true")
          img(src='@/assets/curso/tema3/img12.svg' alt="Esquema con las recomendaciones de secado, las cuales son:<br>Tanto para el secado por capas, como para el secado en capas sobre marcos, no se pone la hierba apretada, sino más bien suelta, para que el aire circule bien. <br>Una planta bien secada es quebradiza, tiene buen aspecto y huele bien, su color cambia de tono. (Hojas verdes al verde claro, pétalos rosados a azules, pétalos amarillos a amarillo claro, pétalos blancos a crema)<br>Su aroma cambia ligeramente, lo que es notorio en plantas aromáticas. <br>Una planta café, negruzca, demasiado arrugada o de color desagradable está mal secada.")
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.BGR04.p-4(titulo="Conservación")
        p Existen diferentes aspectos que pueden influir de manera directa en la conservación del material durante el procesamiento de este. El impacto puede verse reflejado tanto en el crecimiento, desarrollo y en la biosíntesis de sus principios activos.
        .h5.mb-5 Los factores para considerar son los siguientes:
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img13.svg')
          
          div(x="59.5%" y="8.5%" tooltip="Factores climáticos" numero="+")
            .h5 <span style="color: #7E5EE3">Factores climáticos</span>
            p.mb-0 Pueden condicionar que se establezca un determinado tipo de cultivo en una región, ya que puede afectar el crecimiento, desarrollo y la síntesis de los principios activos.
          div(x="84%" y="62%" tooltip="Factores topográficos" numero="+")
            .h5 <span style="color: #7E5EE3">Factores topográficos</span>
            p.mb-0 Para tener en cuenta la influencia de los factores topográficos en la conservación de las plantas medicinales se deben contemplar las variables climáticas. La temperatura decrece a medida que la altitud aumenta y esto produce una gran variedad de pisos ecológicos. La radiación sola también incide sobre la vegetación.
          div(x="39%" y="62%" tooltip="Factores edáficos" numero="+")
            .h5 <span style="color: #7E5EE3">Factores edáficos</span>
            p.mb-0 En los factores edáficos se debe tener presente la influencia de las características físicas y químicas que tienen mucha influencia en el procesamiento de las plantas medicinales.
          div(x="17%" y="38%" tooltip="Temperatura" numero="+")
            .h5 Temperatura
            p.mb-0 Incide notablemente en el desarrollo y metabolismo de las plantas. Su influencia ha de considerarse no sólo en cuanto a los valores medios, sino teniendo en cuenta las fluctuaciones a lo largo del día y durante el año.
          div(x="38%" y="38%" tooltip="Humedad" numero="+")
            .h5 Humedad
            p.mb-0 El grado de hidratación del suelo y de la atmósfera incide directamente en el buen desarrollo de las plantas. El exceso y el defecto de agua en el suelo pueden ser factores limitantes para el crecimiento y metabolismo de determinadas plantas medicinales. Esta variable se encuentra relacionada también con el régimen de lluvias.
          div(x="58%" y="38%" tooltip="Radiación solar" numero="+")
            .h5 Radiación solar
            p.mb-0 La variable luz ha de entenderse tanto desde el punto de vista de la cantidad, es decir, del número de horas de exposición a la luz solar a lo largo del día, como de la calidad (intensidad y tipo de radiación). Está comprobado que este factor influye notablemente en la biosíntesis de los principios activos.
          div(x="78%" y="38%" tooltip="Calidad de la luz (longitud de onda)" numero="+")
            .h5 Calidad de la luz (longitud de onda)
            p.mb-0 Luz UV induce un incremento de productos polifenólicos como mecanismos de defensa (flavonoides, taninos, etc.).
          div(x="98%" y="38%" tooltip="Ejemplo" numero="+")
            .h5 Ejemplo
            p Producción de alcaloides en las Solanáceas, está directamente relacionada con el número de horas de insolación.
            p #[strong Naturaleza química]: mayor número de horas de insolación de las hojas de menta (Mentha piperita) biosintetizan preferentemente mentona y mentol, mientras que los días cortos producen mentofurano. 
            p.mb-0 Sirve para determinar la hora de recolección, y será en el momento que exista un mayor contenido de principios activos.
          div(x="17%" y="91%" tooltip="Características físicas" numero="+")
            .h5 Características físicas
            p El suelo está formado por un agregado de partículas de tamaños diferentes (textura) y por la asociación de estas partículas elementales en agregados (estructura).
            p La textura y la estructura unidas a la composición química del suelo confieren a este otros caracteres como son: porosidad y grado de aireación, capacidad de retención de agua y temperatura.
            p.mb-0 Un alto grado de humedad puede limitar la producción por los vegetales de productos cuya función sea precisamente actuar como reserva hídrica para ellos. Ejemplo: Raíz de Althea officinalis, que crecen en suelos muy húmedos, que tienen un menor contenido en sustancias mucilaginosas.
          div(x="38%" y="91%" tooltip="Características químicas" numero="+")
            .h5 Características químicas
            p La composición química del suelo puede afectar no solo el desarrollo.
            p El pH del suelo es una importante variable a tener en cuenta. Existen plantas acidófilas y plantas que requieren suelos alcalinos. 
            p.mb-0 Riqueza en materia orgánica y el contenido en nutrientes minerales, características que pueden ser modificados en los cultivos mediante la administración de distintos tipos de abonos.
          div(x="58%" y="91%" tooltip="Ejemplo" numero="+")
            .h5 Ejemplo
            p El uso de abonos nitrogenados incrementa la masa vegetal y algunos metabolitos como son los alcaloides. 
            p.mb-0 La incorporación de manganeso y molibdeno a cultivo de digitalis (Digitalis sp.) induce un incremento en el contenido de glicósidos cardiotónicos.
      .tarjeta.BGR04.p-4(titulo="Envasado")
        p Un aspecto para tener en cuenta luego de todo el procesamiento y de garantizar que se cumplan con las condiciones de todos los factores climáticos, topográficos y edáficos, es el envasado de las plantas naturales, que debe cumplir con las siguientes condiciones:
        .row.justify-content-center.mb-2
          .col.px-1
            .BGR06B.p-3
              p.mb-0 Las hierbas secas se guardan en frascos de vidrio en tarros o dentro de bolsas de papel celofán o cualquier otro material que no sea impermeable, nunca dentro de bolsas de plástico.
        .row.justify-content-center.mb-2
          .col-8.px-1
            .BGR05B.hg-03.p-3
              p.mb-0 Los envases tienen que estar bien cerrados, para proteger la planta de polvo, insectos, humedad y sobre todo para preservar al máximo sus principios activos.
          .col-4.px-1
            .BGR05B.hg-03.p-3
              p.mb-0 Para guardar grandes cantidades se pueden usar sacos de harina limpios.
        .row.justify-content-center.mb-2
          .col-4.px-1
            .BGR03B.hg-04.p-3
              p.mb-0 En ambos casos se etiquetan con el nombre de la hierba, fecha de recolección y fecha de envasado.
          .col-4.px-1
            .BGR03B.hg-04.p-3
              p.mb-0 Almacenar en lugar seco y oscuro.
          .col-4.px-1
            .BGR03B.hg-04.p-3
              p.mb-0 Se verifica cada cierto tiempo su color, olor y se palpa para ver si se conserva quebradiza y libre de mohos.

    ModalA(:abrir-modal.sync="modal1")
      div
        img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
      
    ModalA(:abrir-modal.sync="modal2")
      div
        img(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
      
    ModalA(:abrir-modal.sync="modal3")
      div
        img(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
    ModalA(:abrir-modal.sync="modal5")
      div
        img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
    ModalA(:abrir-modal.sync="modal6")
      div
        img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal5: false,
    modal6: false,
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
