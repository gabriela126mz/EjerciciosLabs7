import './globals.css'; 
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <title>My Application</title>
      </head>
      <body className={inter.className}>
        <div className="layout">
          <nav className="sidebar">
            <p>Layout general</p>
            <ul>
              <li>
                <Link href="/applications/counter">Counter</Link>
              </li>
              <li>
                <Link href="/applications/notes">Notes</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
