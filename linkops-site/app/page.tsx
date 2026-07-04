import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-green-500/30">
      
      {/* === 1. BARRA DE STATUS NO TOPO (ACCENT BAR) === */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 shadow-[0_0_20px_rgba(34,197,94,0.6)] z-[60]"></div>

      {/* ================= 2. NAVBAR INTEGRADA (HEADER) ================= */}
      <header className="fixed top-1 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LADO ESQUERDO: LOGO COM EFEITO DE MÓDULO */}
          <div className="flex items-center group">
            <div className="relative p-2 bg-black border border-slate-800 rounded-sm group-hover:border-green-500/50 transition-colors duration-500">
              <Image 
                src="/linkops_final.png" 
                alt="LinkOps Logo" 
                width={200} 
                height={80} 
                className="object-contain h-16 w-auto"
                priority
              />
              <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* LADO DIREITO: LINKS (AUMENTADOS PARA 15PX) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[15px] font-mono tracking-[0.2em] text-slate-400 uppercase">
              <a href="#servicos" className="hover:text-green-400 transition-all duration-300 relative group">
                <span className="text-green-500/50 mr-1 opacity-0 group-hover:opacity-100 font-bold transition-opacity">01.</span>
                Serviços
              </a>
              <a href="#cases" className="hover:text-green-400 transition-all duration-300 relative group">
                <span className="text-green-500/50 mr-1 opacity-0 group-hover:opacity-100 font-bold transition-opacity">02.</span>
                Cases
              </a>
              <a href="#faq" className="hover:text-green-400 transition-all duration-300 relative group">
                <span className="text-green-500/50 mr-1 opacity-0 group-hover:opacity-100 font-bold transition-opacity">03.</span>
                FAQ
              </a>
            </div>

            <a href="https://wa.me/5531999999999" target="_blank" className="ml-4 px-5 py-2 border border-green-500/30 bg-green-500/5 text-green-400 text-[15px] font-mono tracking-widest uppercase hover:bg-green-500 hover:text-black transition-all duration-300 rounded-sm font-bold">
              Inicia_Projeto
            </a>
          </div>
        </nav>
      </header>

      {/* ESPAÇADOR REDUZIDO */}
      <div className="h-20"></div>

      {/* ================= 3. HERO SECTION (MAIS COMPACTA) ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-900/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs md:text-sm font-mono shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System.status: Operacional & Integrado
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.0] text-white">
            Acelerando sua operação com <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              engenharia de processos
            </span> 
            <br className="hidden md:block" /> e automação inteligente.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light text-center">
            Implementações estratégicas de Bitrix24 que eliminam gargalos operacionais e transformam o caos em um fluxo de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a href="https://wa.me/5531999999999" target="_blank" className="px-10 py-4 bg-green-600 hover:bg-green-500 text-slate-950 font-bold rounded-md transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:scale-105 flex items-center justify-center">
              Agendar Diagnóstico Gratuito
            </a>
            <a href="#cases" className="px-10 py-4 bg-slate-900/80 border border-slate-700 hover:border-green-500/50 hover:bg-slate-800 text-slate-200 font-bold rounded-md transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
              Ver Cases Reais
            </a>
          </div>
        </div>
      </section>

      {/* ================= 4. CASES DE SUCESSO (PADDING AJUSTADO) ================= */}
      <section id="cases" className="py-20 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-900">
        <div className="mb-12 text-center md:text-left">
          <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            // Arquitetura na Prática
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Casos de <span className="text-slate-500 italic">Sucesso.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Case 1 */}
          <div className="group bg-slate-900/30 border border-slate-800/50 p-8 rounded-lg hover:border-green-500/40 transition-all duration-500 relative flex flex-col h-full backdrop-blur-sm">
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">Google Apps Script</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">Bitrix24 API</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">Refatoração de Pipeline CRM</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Migração de fluxo Make para código customizado (GAS). Implementação de algoritmos de contenção para mitigar Rate Limit da API do Bitrix24.</p>
            <div className="mt-auto pt-6 border-t border-slate-800/50 font-mono text-xs text-green-400">{'>'} Custo Operacional ZERO.</div>
          </div>

          {/* Case 2 */}
          <div className="group bg-slate-900/30 border border-slate-800/50 p-8 rounded-lg hover:border-green-500/40 transition-all duration-500 relative flex flex-col h-full backdrop-blur-sm">
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">RegEx</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">Looker Studio</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">Pipeline ETL Automático</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Construção de processador em lote via JavaScript para extrair, limpar e enriquecer dados brutos de leads, alimentando dashboards de BI.</p>
            <div className="mt-auto pt-6 border-t border-slate-800/50 font-mono text-xs text-green-400">{'>'} Fim das falhas humanas.</div>
          </div>

          {/* Case 3 */}
          <div className="group bg-slate-900/30 border border-slate-800/50 p-8 rounded-lg hover:border-green-500/40 transition-all duration-500 relative flex flex-col h-full backdrop-blur-sm">
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">WhatsApp API</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded border border-green-500/20 uppercase">Webhooks</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">Escala Omnichannel</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Integração da API Oficial da Meta com Bitrix24. Criação de ramificações dinâmicas e captura estruturada de variáveis, liberando o time.</p>
            <div className="mt-auto pt-6 border-t border-slate-800/50 font-mono text-xs text-green-400">{'>'} Resposta {'<'} 1 min.</div>
          </div>
        </div>
      </section>

      {/* ================= 5. SEÇÃO FAQ (AS 6 PERGUNTAS MANTIDAS) ================= */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto relative z-10 border-t border-slate-900">
        <div className="mb-12 text-center">
          <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-3 block">// FAQ_PROTOCOL</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter text-center">
            Perguntas que todo <span className="text-slate-500 italic">Gestor</span> faz.
          </h2>
        </div>

        <div className="space-y-4">
          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">Qual o investimento necessário para estruturar a engenharia de processos?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">O investimento é calculado com base na complexidade operacional. Focamos em soluções de custo recorrente zero, garantindo ROI acelerado.</div>
          </details>

          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">Qual o ciclo médio para atingir estabilidade operacional e ROI?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">As primeiras automações de impacto entregam resultados na primeira semana. A consolidação total ocorre entre 30 a 60 dias.</div>
          </details>

          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">A arquitetura LinkOps é escalável para operações em crescimento?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">Sim. Utilizamos métodos de engenharia de software (APIs e Webhooks) para suportar crescimento massivo sem gargalos.</div>
          </details>

          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">Como mitigar o risco de baixa adesão da equipe ao novo ecossistema?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">Incluímos treinamentos práticos e automações que eliminam o trabalho braçal. A adesão é imediata quando a ferramenta ajuda o colaborador.</div>
          </details>

          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">É possível centralizar canais oficiais (WhatsApp Business API) no Bitrix24?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">Totalmente. Homologamos sua conta na Meta e integramos via API oficial para segurança jurídica e estabilidade total.</div>
          </details>

          <details className="group bg-slate-900/20 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500/30">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-lg font-medium text-slate-200 group-hover:text-green-400 transition-colors">O protocolo suporta migração de dados de sistemas legados?</span><span className="text-green-500 font-mono text-2xl transition-transform group-open:rotate-45">+</span></summary>
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">Sim. Criamos scripts de saneamento para garantir que seu histórico seja migrado com integridade absoluta.</div>
          </details>
        </div>
      </section>

      {/* ================= 6. RODAPÉ (FOOTER) ================= */}
      <footer className="py-12 border-t border-slate-900 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <Image src="/linkops_final.png" alt="LinkOps Logo" width={150} height={60} className="object-contain opacity-50 grayscale hover:grayscale-0 transition-all" />
            <p className="text-slate-500 text-sm mt-4 font-mono">© 2026 LINKOPS // ENGENHARIA DE PROCESSOS.</p>
          </div>
          <div className="flex gap-10 font-mono text-xs tracking-widest text-slate-500">
            <a href="#" className="hover:text-green-400 uppercase">LinkedIn</a>
            <a href="#" className="hover:text-green-400 uppercase">GitHub</a>
            <a href="#" className="hover:text-green-400 uppercase">Instagram</a>
          </div>
        </div>
      </footer>

      {/* ================= 7. BOTÃO WHATSAPP FLUTUANTE ================= */}
      <a 
        href="https://wa.me/553191979264?text=Olá,%20gostaria%20de%20um%20diagnóstico%20operacional." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></span>
        <div className="relative p-4 bg-green-600 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
          <svg className="w-8 h-8 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>

    </main>
  );
}