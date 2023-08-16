<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicaciones y relaciones con otras ciencias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Cuando la farmacognosia se estableció como ciencia enfocó sus estudios en las sustancias de origen natural, interesándose más las drogas vegetales y su:
        .row.justify-content-center
          .col-lg.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Identificación.
          .col-lg.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Descripción.
          .col-lg.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Análisis.
          .col-lg.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Comercio.
          .col-lg
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-atom(style="color: #7E5EE3;")
                | Utilidad terapéutica.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Actualmente, la farmacognosia tiene un alto grado de perfeccionamiento en las actividades relacionadas con la extracción de los principios activos de fuentes naturales y la biosíntesis de sustancias con aplicaciones industriales y actividad terapéutica. Esto se debe al avance de otras ciencias y de la tecnología.
        p.mb-0 Es así como la farmacognosia ha tenido la oportunidad de relacionarse con diferentes ciencias, generando muchos beneficios en diferentes campos de acción. En la siguiente figura se observará las diferentes aplicaciones de esta ciencia.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img01.png' alt="Sustancias de origen natural")

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-6
          .titulo-sexto.color-acento-botones(data-aos="fade-right")
            h5 Figura 1.
            span Relación de la farmacognosia con otras ciencias
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema2/img02.svg' alt="Relación de la farmacognosia")

</template>

<script>
export default {
  name: 'Tema2',
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
