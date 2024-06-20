tailwind.config = {
    theme: {
        fontFamily: {
    'main': ['Poppins', 'sans-serif'],
    'add': ['Inter', 'sans-serif']
    },
    screens:{
        sm: '410px',
        md: '768px',
        bg: '1024px'
    },
    extend:{
        colors:{
            colorPrim: '#22343D',
            colorPrimAdd: '#173A56',
            colorSec: '#FFFFFF',
            colorSecAdd: '#AFAFAF',
            colorSecAddHov: '#e7e7e7',
            colorAccent: '#02897A',
            colorAccentHov: '#015f54',
            colorAccentAdd: 'BCD0E5',
            colorFeat1: '#4D8DFF',
            colorFeat2: '#740A76',
            colorFeat3: '#F03E3D',
            colorFeat4: '#FF9900'
        },
        boxShadow: {
            headerShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
            stuffShadow: '0px 2px 8px rgba(86, 117, 146, 0.1)'
          },
        backgroundImage: {
            'back-feature': "url('../img/featureback.png')",
            'back-stuff': "url('../img/stuffback.png')"
        },
        width:{
            stuffMD: 'calc(408px - 105px)',
          }
    }
    }
}