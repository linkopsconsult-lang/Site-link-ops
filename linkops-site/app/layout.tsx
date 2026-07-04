import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Importando a Space Grotesk (Design Futurista/Tech)
const spaceTech = Space_Grotesk({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

// Os dados que aparecem na aba do navegador e no Google
export const metadata: Metadata = {
  title: "LINKOPS | Engenharia de Processos & Automação",
  description: "Acelerando sua operação com engenharia de processos e automação inteligente no Bitrix24.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Aplicando a fonte futurista no corpo inteiro do site */}
      <body className={`${spaceTech.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}