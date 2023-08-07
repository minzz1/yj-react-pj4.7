/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  //  현재폴더안에 src 모든 폴더 밑에 모든 확장자 html,js를 수정 ???? 하 
  theme: {
    extend: {
      keyframes:{
        dots: {
          "0%" : {
            opacity: 0,
            transform: "translateY(0)"
          },
          "25%" : {
            opacity: 1,
            transform: "translateY(0)"
          },
          "50%" : {
            opacity: 1,
            transform: "translateY(120px) scale(1)"
          },
          "75%" : {
            opacity: 0,
            transform: "translateY(120px) scale(8)"
          },
          "100%" : {
            opacity: 0,
            transform: "translateY(120px)"
          }
        }
      },
      animation:{
        "moving-dot": "dots 2s linear infinite"
      },
      height: {
        "header-height": "150px",
        "footer-height": "200px",
      },
      padding: {
        "layout-padding": "80px"
      },
      width: {
        "layout-padding": "80px"
      }
    },
  },
  plugins: [],
}

