import { Inter, Poppins} from 'next/font/google'
import './globals.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '400'  })
export const metadata = {
  title: 'Pei SAS - App',
  description: 'Sistema para seguimiento de equipos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <main>{children}</main>
      </body>
    </html>
  );
}
