import type { Config } from 'tailwindcss'

const config: Config = {
    //theme removes tailwind defaults 
    theme: {
      //extend add back tailwind defaults 
      extend: {
        colors: {
            content: {
                primary: "var(--black-100)",
            }
        },
      },
    },
  }

  export default config