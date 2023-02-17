/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        rs: {
          'black': "#191A19",
          green: {
            'dark': "#356C3F",
            'light': "#F7F8F6",
          },
          grey: {
            default : "#C0CAC2",
            'dark': '#808080',
            'light': "#E0E9E2",
            'midDark':'#8c8c8c',
          },
        }
      },
      fontSize: {
        xxs: ['11px', { // xxs
          letterSpacing: '0.34px',
        }],
        13: ['13px', {
          lineHeight: '16.47px',
          letterSpacing: '0.41px',
        }],
        body: ['15px', { // body
          lineHeight: '19px',
          letterSpacing: '0.47px',
        }],
        22: ['22px', '28px'],
        26: ['26px', '26px'],
        27: ['27px', '27px'],
        28: ["28px", '55px'],
        32: ["32px", '45px'],
        42: ['42px', '55px'],
      },
      lineHeight: {
        14: '0.875rem',
        18: '1.125rem',
      },
      letterSpacing: {
        0.25: '0.25px',
        0.34: '0.34px',
        0.4: '0.40px',
        0.5: '0.5px',
        0.63: '0.63px'
      },
    
      backgroundPosition: {
        center: "calc(50% + 535px) top",
      },
      spacing: {
        75: "18.75rem",
        100: "25px",
        125: "31.25rem",
        128:'32.25rem',
        176: "44.5rem",
      },
      maxWidth: {
        120: "30rem",
        172: "43.75rem",
        base: "92.5rem", // base
        modalSm:"42.75rem",
        modalLg:"58.75rem",
        102:'408px',
        210:'840px'
      },
      minHeight:{ 
        100: "25rem",
        124:'31.25rem',
      },
      fontFamily: {
        europa: ["europa", "sans-serif"],
      },
    },
  },
};
