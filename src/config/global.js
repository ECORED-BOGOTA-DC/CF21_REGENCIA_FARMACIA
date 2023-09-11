export default {
  global: {
    componenteFormativo: 'Farmacognosia y fitoquímica',
    descripcionCurso:
      'En este componente formativo se abordarán los temas relacionados con la farmacognosia y la fitoquímica, partiendo de su concepto, historia, evolución, las ramas que la componen, la relación con otras ciencias, sus aplicaciones, procesamiento de las plantas, conservación y métodos de extracción de estas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Farmacognosia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicaciones y relaciones con otras ciencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fitoquímica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos de extracción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Método de extracción mecánica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Método de extracción por destilación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Método de extracción con solventes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Proceso de extracción con solventes',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF21_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Farmacognosia',
      referencia:
        'Palacios, M. (2013). Texto digital de farmacognosia y fitoquímica.',
      tipo: 'Texto digital',
      link: 'https://issuu.com/leono/docs/farmacognosia_y_fitoqu__mica_tf',
    },
  ],
  glosario: [
    {
      termino: 'Disolventes',
      significado:
        'son conocidos como sustancias que se usan para disolver, extraer o suspender otras sustancias con el objetivo de poder formar una disolución.',
    },
    {
      termino: 'Droga',
      significado:
        'toda sustancia farmacológicamente activa, cualquiera que sea su origen y características, que se utilice para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del hombre o de los animales.',
    },
    {
      termino: 'Droga vegetal',
      significado:
        'parte de la planta que contiene los principios activos que se utiliza en terapéutica.',
    },
    {
      termino: 'Extracto vegetal',
      significado:
        'son compuestos que se producen por la obtención de sustancias activas a nivel biológico y que se encuentran en los tejidos de las plantas y que son extraídas por medio de solventes y otros procesos de extracción.',
    },
    {
      termino: 'Farmacognosia',
      significado:
        'ciencia enfocada particularmente al estudio de los principios activos de origen vegetal, animal y mineral, así como de los derivados que pudieran tener una aplicación terapéutica, comercial o industrial. En un sentido más amplio la farmacognosia abarca el estudio de la historia, el cultivo, la recolección, preparación, preservación, comercialización, distribución, identificación y evaluación de los componentes químicos de origen natural, la farmacología y el uso tradicional de esos compuestos o sus derivados para mejorar la salud y el bienestar del ser humano.',
    },
    {
      termino: 'Fitoquímica',
      significado:
        'estudia las estructuras y propiedades químicas de los productos naturales de las plantas.',
    },
    {
      termino: 'Medicamento',
      significado:
        'toda droga o mezcla de drogas, con o sin adición de sustancias auxiliares, preparada para ser presentada como formas farmacéuticas que se utilizan para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del hombre y de los animales.',
    },
    {
      termino: 'Planta medicinal',
      significado:
        'cualquier especie vegetal que contenga en uno de sus órganos los principios activos con actividad farmacológica, que se puedan utilizar con fines terapéuticos.',
    },
    {
      termino: 'Principio activo',
      significado:
        'sustancia químicamente pura responsable de la actividad farmacológica y del uso terapéutico que se atribuye a esa droga.',
    },
    {
      termino: 'Productos fitoterapéuticos',
      significado:
        'según el Decreto 2266 de 2004 es el producto medicinal empacado y etiquetado, cuyas sustancias activas provienen del material de una planta medicinal o asociaciones de esta, presentado en estado bruto o en forma farmacéutica que se utiliza con fines terapéuticos. También puede provenir de extractos, tinturas y aceites.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bruneton, J. (1993). Farmacognosia. Fitoquímica plantas medicinales. Editorial Acribia.',
    },
    {
      referencia:
        'Cruz, J.  (2007). Más de 100 plantas medicinales. Obra social de la caja de Canarias.',
    },
    {
      referencia:
        'Kuklinski, C. (2000). Farmacognosia. Estudio de las drogas y sustancias medicamentosas de origen natural. Editorial Omega.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Edwin Amir Moreno Moreno',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
