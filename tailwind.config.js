/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // ベースカラー
      baseColor: '#FFFEF9',
      // アクセントカラー
      accentColor: 'rgba(214, 189, 165, 0.8)',
      // テキストカラー
      textColor: '#6C6059',
    },
    extend: {},
  },
  daisyui: {
    themes: ['autumn'],
  },
  plugins: [daisyui],
};
