// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: "~/components", extensions: ["vue"] },
    { path: "~/components/atoms", extensions: ["vue"] },
    { path: "~/components/molecules", extensions: ["vue"] },
    { path: "~/components/organisms", extensions: ["vue"] },
  ],
  ignore: [
    "**/*.stories.{js,ts,jsx,tsx}",
    "**/*.{spec,test}.{js,ts,jsx,tsx}",
    "**/*.d.ts",
    ".output",
    "**/-*.*",
  ],
});
