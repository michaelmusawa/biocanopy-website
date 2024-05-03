import '@app/global.css';
import { inter } from '@/app/ui/fonts';
import { Nav } from '@app/ui/navbar';
import Footer from './ui/footer';

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Nav />
        {children}
      </body>
      <section className='footer'>
        <Footer />
      </section>
        
    </html>
  );
}