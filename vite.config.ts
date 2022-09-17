import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.ts'),
      name: 'SeekerMedia',
      fileName: 'seeker-media'
    }
  },
  plugins: [react()]
})
