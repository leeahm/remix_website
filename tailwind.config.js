/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        224: '56rem',
        240: '60rem',
        256: '64rem',
        272: '68rem',
        288: '72rem',
        304: '76rem',
        320: '80rem',
      },
      screens: {
        iphone12pro: '390px',
        iphoneX: '430px',
        lgPhone: '490px',
      },
      minWidth: {
        screen: 'width: 100vw;',
      },
    },
  },
  plugins: [],
};

