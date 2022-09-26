const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#109107100',
          100: '#f1f4fe',
          200: '#bccafa',
          300: '#8da4f7',
          400: '#587af3',
          500: '#2854f0',
          600: '#0f39d2',
          700: '#0b2999',
          800: '#071b64',
          900: '#030d30',
        },
        green: {
          50: '#109100103',
          100: '#f1fef8',
          200: '#bcfae0',
          300: '#8df7cb',
          400: '#58f3b3',
          500: '#28f09d',
          600: '#0fd280',
          700: '#0b995d',
          800: '#07643d',
          900: '#03301d',
        },
        red: {
          50: '#ff109106',
          100: '#fff0f4',
          200: '#ffbdd1',
          300: '#ff8aad',
          400: '#ff5286',
          500: '#ff1f62',
          600: '#e60045',
          700: '#a80032',
          800: '#700022',
          900: '#33000f',
        },
        yellow: {
          50: '#ff10210e',
          100: '#fffcf0',
          200: '#ffeeb3',
          300: '#ffe27a',
          400: '#ffd53d',
          500: '#ffc800',
          600: '#cca000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
        },
        dark: {
          50: '#116114107',
          100: '#f4f4fb',
          200: '#abb1e2',
          300: '#636dca',
          400: '#343e98',
          500: '#1d2254',
          600: '#191d48',
          700: '#15193d',
          800: '#111431',
          900: '#0d0f26',
        },
        twitter: {
          50: '#fafdff',
          100: '#fafdff',
          200: '#d4edfd',
          300: '#a3d9fa',
          400: '#6ec2f7',
          500: '#1ca0f2',
          600: '#0d91e3',
          700: '#0c84cf',
          800: '#0a72b3',
          900: '#085c91',
        },
        google: {
          50: '#fafcff',
          100: '#fafcff',
          200: '#d8e6fd',
          300: '#b2cefa',
          400: '#87b2f8',
          500: '#4387f4',
          600: '#307bf3',
          700: '#1d6ef2',
          800: '#0d5fe2',
          900: '#0b51c1',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro'],
        mono: ['IBM Plex Mono'],
      },
    },
  },
  plugins: [
    plugin(function more({ addUtilities }) {
      const utilities = {
        '.gr-primary': {
          background: `linear-gradient(276.62deg, #2753F0 0%, #476EFA 100%)`,
        },
        '.gr-green': {
          background: `linear-gradient(131.23deg, #70FFC3 0.16%, #27F09C 100%)`,
        },
        '.gr-yellow': {
          background: `linear-gradient(131.23deg, #FFE68E 0.16%, #FFC700 100%)`,
        },
        '.gr-red': {
          background: `linear-gradient(131.23deg, #FF5F8F 0.16%, #FF2063 100%)`,
        },
        '.gr-dark': {
          background: `linear-gradient(111.57deg, #1C2152 -0.11%, #0C0E2B 95.65%)`,
        },
        '.bg-hero': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1440' height='754' viewBox='0 0 1440 754' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='115.5' cy='481.5' r='193.5' stroke='url(%23paint0_linear)' stroke-width='80'/%3E%3Crect x='824' y='193.842' width='660.833' height='660.833' rx='50' transform='rotate(-40.2343 824 193.842)' fill='url(%23paint1_linear)'/%3E%3Crect x='897' y='415.419' width='696.768' height='676.102' rx='50' transform='rotate(-60 897 415.419)' fill='url(%23paint2_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='397' y1='365' x2='-48' y2='669.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.02'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='808.628' y1='209.214' x2='1342.43' y2='510.278' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2390A8FE' stop-opacity='0.04'/%3E%3Cstop offset='1' stop-color='%232753F0' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='880.792' y1='431.147' x2='1435.31' y2='753.457' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2390A8FE' stop-opacity='0.04'/%3E%3Cstop offset='1' stop-color='%232753F0' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
        },
        '.bg-header-light': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='616' height='740' viewBox='0 0 616 740' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='193.842' width='660.833' height='660.833' rx='50' transform='rotate(-40.2343 0 193.842)' fill='url(%23paint0_linear)'/%3E%3Crect x='83' y='401.419' width='696.768' height='676.102' rx='50' transform='rotate(-60 83 401.419)' fill='url(%23paint1_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='-15.3723' y1='209.214' x2='518.426' y2='510.278' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.04'/%3E%3Cstop offset='1' stop-color='%232753F0' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='66.7917' y1='417.147' x2='621.312' y2='739.457' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.04'/%3E%3Cstop offset='1' stop-color='%232753F0' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
        },
        '.bg-header-dark': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='616' height='633' viewBox='0 0 616 633' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='193.842' width='660.833' height='660.833' rx='50' transform='rotate(-40.2343 0 193.842)' fill='url(%23paint0_linear)'/%3E%3Crect x='83' y='401.419' width='696.768' height='676.102' rx='50' transform='rotate(-60 83 401.419)' fill='url(%23paint1_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='-15.3723' y1='209.214' x2='518.426' y2='510.278' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.15'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='66.7917' y1='417.147' x2='621.312' y2='739.457' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.15'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
        },
        '.bg-feature-section': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='780' viewBox='0 0 654 514' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M654 514L0 0H654V514Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='316.5' y1='514' x2='327' y2='7.83648e-06' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23EDF0FC' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23EDF0FC'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
        },
        '.bg-callout-section': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1280' viewBox='0 0 1135 603' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.9608 163.803C21.466 141.865 37.2175 122.055 59.1529 119.543L1049.25 6.14169C1073.35 3.3806 1094.35 22.5453 1093.79 46.8032L1083.43 496.36C1082.92 518.54 1064.46 536.066 1042.28 535.422L97.649 507.975C77.7573 507.397 61.3155 492.284 59.0669 472.512L23.9608 163.803Z' fill='url(%23paint0_linear)'/%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M30.6448 138.38C29.1838 116.35 45.8488 97.3018 67.878 95.823L1062.21 29.0741C1086.42 27.4489 1106.49 47.5789 1104.79 71.7837L1073.32 520.357C1071.76 542.488 1052.5 559.128 1030.38 557.442L88.0782 485.635C68.2355 484.123 52.5221 468.254 51.2052 448.398L30.6448 138.38Z' fill='url(%23paint1_linear)'/%3E%3C/g%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='30' y='28' width='1075' height='530'%3E%3Cpath d='M30.6448 138.38C29.1838 116.35 45.8488 97.3018 67.878 95.823L1062.21 29.0741C1086.42 27.4489 1106.49 47.5789 1104.79 71.7837L1073.32 520.357C1071.76 542.488 1052.5 559.128 1030.38 557.442L88.0782 485.635C68.2355 484.123 52.5221 468.254 51.2052 448.398L30.6448 138.38Z' fill='url(%23paint2_linear)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cpath opacity='0.6' d='M424.476 174.275L44.0829 123.458C17.8871 119.958 -4.44157 142.373 -0.840697 168.555L41.2547 474.633C43.7509 492.783 58.2588 506.917 76.4678 508.938L304.37 534.242C322.327 536.235 339.391 525.944 346.006 509.132L456.402 228.569C465.913 204.398 450.223 177.714 424.476 174.275Z' fill='url(%23paint3_linear)'/%3E%3Cpath opacity='0.6' d='M208.57 182.724L-55.8988 270.675C-82.0738 279.379 -91.7897 311.341 -74.8873 333.141L91.1053 547.225C99.4525 557.99 112.705 563.768 126.273 562.556L241.721 552.249C263.245 550.327 279.351 531.657 278.096 510.084L261.125 218.357C259.597 192.081 233.546 174.418 208.57 182.724Z' fill='url(%23paint4_linear)'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.555664' y='13.9822' width='1134.33' height='588.578' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='15'/%3E%3CfeGaussianBlur stdDeviation='15'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.0451389 0 0 0 0 0.055537 0 0 0 0 0.166667 0 0 0 0.15 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear' x1='-46.3828' y1='92.8285' x2='482.964' y2='935.145' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFE68E'/%3E%3Cstop offset='1' stop-color='%23FFC700'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='23.5' y1='29.5094' x2='904.466' y2='733.232' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%231C2152'/%3E%3Cstop offset='1' stop-color='%230C0E2B'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='23.5' y1='29.5094' x2='904.466' y2='733.232' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%231C2152'/%3E%3Cstop offset='1' stop-color='%230C0E2B'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='464' y1='184' x2='61.5' y2='467.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.02'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear' x1='249.257' y1='173.601' x2='2.85108' y2='599.82' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.02'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        },
        '.bg-square': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='555' height='784' viewBox='0 0 555 784' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.5' width='268' height='252' rx='20' fill='url(%23paint0_linear-954487)'/%3E%3Crect opacity='0.5' y='266' width='268' height='252' rx='20' fill='url(%23paint1_linear-987685)'/%3E%3Crect opacity='0.5' y='533' width='268' height='251' rx='20' fill='url(%23paint2_linear-902058)'/%3E%3Crect opacity='0.5' x='287' width='268' height='252' rx='20' fill='url(%23paint3_linear-448683)'/%3E%3Crect opacity='0.5' x='287' y='266' width='268' height='252' rx='20' fill='url(%23paint4_linear-192586)'/%3E%3Crect opacity='0.5' x='287' y='533' width='268' height='251' rx='20' fill='url(%23paint5_linear-118244)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear-954487' x1='134' y1='0' x2='134' y2='252' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear-987685' x1='134' y1='266' x2='134' y2='518' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear-902058' x1='134' y1='533' x2='134' y2='784' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear-448683' x1='421' y1='0' x2='421' y2='252' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear-192586' x1='421' y1='266' x2='421' y2='518' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint5_linear-118244' x1='421' y1='533' x2='421' y2='784' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.03'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
          backgroundPosition: '80%',
          backgroundRepeat: 'no-repeat',
        },
        '.rounded-hero': {
          borderRadius: '0 0 0 80px',
        },
        '.inset-hero': {
          top: -120,
          bottom: -240,
        },
        '.shadow-primary-lg': {
          boxShadow: '0 15px 30px rgba(39, 83, 240, .3)',
        },
        '.shadow-dark-lg': {
          boxShadow: '0 15px 30px rgba(12, 14, 43, .05)',
        },
        '.shadow-red-lg': {
          boxShadow: '0 15px 30px rgba(255, 32, 99, .3)',
        },
        '.shadow-green-lg': {
          boxShadow: '0 15px 30px rgba(39, 240, 156, .3)',
        },
        '.shadow-yellow-lg': {
          boxShadow: '0 15px 30px rgba(255, 199, 0, .3)',
        },
        '.shadow-google-sm': {
          boxShadow: '0 4px 8px rgba(67, 135, 244, 0.2)',
        },
        '.shadow-dark-sm': {
          boxShadow: '0 4px 8px rgba(13, 15, 38, 0.2)',
        },
        '.shadow-twitter-sm': {
          boxShadow: '0 4px 8px rgba(29, 161, 242, 0.2)',
        },
      };

      addUtilities(utilities, ['responsive']);
    }),
  ],
};
