tailwind.config = {
    theme: {
        fontFamily: {
    'main': ['Poppins', 'sans-serif'],
    'add': ['Inter', 'sans-serif']
    },
    screens:{
        sm: '410px',
        md: '768px',
        bg: '1200px'
    },
    extend:{
        colors:{
            colorPrim: '#22343D',
            colorPrimAdd: '#173A56',
            colorSec: '#FFFFFF',
            colorSecAdd: '#AFAFAF',
            colorAccent: '#02897A',
        },
        boxShadow: {
            headerShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)'
          },
    }
    }
}