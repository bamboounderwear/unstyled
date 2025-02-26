import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: {
        siteName: 'Brockmann Inspired',
        year: new Date().getFullYear()
      },
      reloadOnPartialChange: true,
      compileOptions: {
        preventIndent: true
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
        project: resolve(__dirname, 'project.html'),
        ideas: resolve(__dirname, 'ideas.html'),
        blogPost: resolve(__dirname, 'blog-post.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});