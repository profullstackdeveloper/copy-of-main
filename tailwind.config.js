/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #F3A78F 0%, 20%, rgba(243,167,143,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(0,87,225,0.99) 0%, 25%, rgba(0,87,225,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #ED5829 0%, 42%, rgba(237,88,41,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #8015E8 0%, 42%, rgba(128,21,232,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)'
      },
      colors: {
        headerButton: 'rgb(51,51,51)'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        appearText: 'appear 1.4s ease-in-out 1'
      }
    },
  },
  plugins: [],
}
