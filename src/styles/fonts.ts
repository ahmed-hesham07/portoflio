import localFont from 'next/font/local';

export const autography = localFont({
  src: [
    {
      path: '../public/fonts/Autography.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-autography',
});
