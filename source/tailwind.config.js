const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#2B88FB",
    500: "#006EEF",
  },
  warning: {
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: {
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: "#FDB703",
    2: "#F48400",
  },
  secondary: {
    1: "#3AAFA9",
    2: "#2B7A78",
    3: "#17252A",
    4: '#DEF2F1',
  },
  gradient: {
    1: {
      start: "#2B7A78",
      // mid:'',
      end: "#3AAFA9",
    },
    2: {
      start: "#3AAFA9",
      // mid:'',
      end: "#DEF2F1",
    },
  },
  neutral: {
    1: {
      50: "#DDE2E9",
      100: "#D2D8E0",
      200: "#CDD3DB",
      300: "#A1ACB8",
      400: "#929DAA",
      500: "#858F9B",
      600: "#6B7280",
      700: "#5A6271",
      800: "#424752",
      900: "#2C333A",
    },
    2: {
      50: "#F2F4F7",
      100: "#E9EDF2",
      200: "#E2E7ED",
      300: "#DAE0E6",
    },
    3: {
      50: "#F8F9FB",
      100: "#F0F1F3",
      200: "#EBEDEF",
      300: "#E3E6E9",
    },
  },
  
};

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
          'heading-1': ['40px', '53px'],
          'heading-2': ['32px', '43px'],
          'heading-3': ['28px', '37px'],
          'heading-4': ['24px', '32px'],
          'title-1':['16px','24px'],
          'title-2':['14px','24px'],
          'body-1': ['16px', '24px'],
          'body-2': ['14px', '22px'],
          'body-3': ['18px', 'auto'],
          'caption-1': ['13px', '16px'], 
          'caption-2': ['12px', '20px'],
          'button': ['18px', '24px'],
          'display-1': ['80px', 'auto'],
          'display-2': ['72px', 'auto'],
          'display-3': ['64px', 'auto'],
          'display-4': ['56px', 'auto'],
          'display-5': ['48px', 'auto'],
          'display-6': ['40px', 'auto'],
      },
      fontFamily: {
        opensan: ['Open Sans', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        productsans: ['Product Sans', 'sans-serif'],
      },
      backgroundImage: {
        'home-1': "url('/src/img/home-bg-1.png')",
        'tablet-home_1': "url('/src/img/home-tablet-bg_1.png')",
        'mb-home_1': "url('/src/img/home-mb-bg_1.png')",
        'home-2': "url('/src/img/home-bg-2.png')",
        'home-3': "url('/src/img/home-bg-3.png')",
        'home-4': "url('/src/img/home-bg-4.png')",
        'about_us-1': "url('/src/img/about_us-bg-1.png')",
        'tablet-about_us-1': "url('/src/img/about_us-tablet-bg-1.png')",
        'mb-about_us-1': "url('/src/img/about_us-mb-bg-1.png')",
        'about_us-2': "url('/src/img/about_us-bg-2.png')",
        'about_us-3': "url('/src/img/about_us-bg-3.png')",
        'tablet-about_us-3': "url('/src/img/about_us-tablet-bg-3.png')",
        'mb-about_us-3': "url('/src/img/about_us-mb-bg-3.png')",
        'about_us-4': "url('/src/img/about_us-bg-4.png')",
        'product-1': "url('/src/img/product-bg-1.png')",
        'tablet-product-1': "url('/src/img/product-tablet-bg-1.png')",
        'mb-product-1': "url('/src/img/product-mb-bg-1.png')",
        'basket-1': "url('/src/img/basket-bg-1.png')",
        'tablet-basket-1': "url('/src/img/basket-tablet-bg-1.png')",
        'mb-basket-1': "url('/src/img/basket-mb-bg-1.png')",
        'contact-1': "url('/src/img/contact-bg-1.png')",
        'tablet-contact-1': "url('/src/img/contact-tablet-bg-1.png')",
        'mb-contact-1': "url('/src/img/contact-mb-bg-1.png')",
      },
      animation: {
        'header': 'spin 300ms ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};