import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.SUPABASE_KEY": JSON.stringify(env.SUPABASE_KEY),
      "process.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL)
    },
    plugins: [vue()],
  };
});
