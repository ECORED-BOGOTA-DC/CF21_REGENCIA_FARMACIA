<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La preparación de productos farmacéuticos implica tener un conocimiento amplio de las fuentes naturales como materia prima (plantas), su estructura química molecular, sus propiedades biológicas, al igual que conocer de estas su historia, evolución, relación con otras ciencias, su procesamiento, extracción y las diversas aplicaciones que de estas se hacen, atendiendo además la normativa en salud existente para este tipo de productos. Por lo anterior el componente formativo visto apropió los diversos temas que se esquematizan a través del siguiente mapa conceptual: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la farmacognosia y fitoquímica, explicando en qué consiste cada una y los procesos de extracción que utilizan.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
