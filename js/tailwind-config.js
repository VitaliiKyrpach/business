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
            colorFeat3: '#F03E3D'
        },
        boxShadow: {
            headerShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)'
          },
    }
    }
}