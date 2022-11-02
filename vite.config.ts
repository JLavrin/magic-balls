import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: (packageName) => {
          if (packageName.includes('node_modules')) {
            return (
              packageName
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            )
          }
        },
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    sourcemap: true
  },
  plugins: [react(), tsconfigPaths()]
})
