import Image from "next/image";
import { 
  Lock, 
  Zap, 
  CircleCheck, 
  Sun, 
  TrendingUp, 
  DollarSign, 
  Users, 
  CircleX, 
  ShoppingCart, 
  BookOpen, 
  Wrench, 
  Radio, 
  Sprout, 
  House, 
  Briefcase, 
  MessageCircle, 
  Gift, 
  Flame, 
  ShieldCheck, 
  Minus, 
  Plus 
} from "lucide-react";
import { RoiCalculator } from "@/components/roi-calculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <main className="min-h-screen font-body selection:bg-primary selection:text-white" style={{ backgroundColor: "#0A0A0A", color: "#fff" }}>
      {/* Sticky Banner */}
      <div className="sticky top-0 z-50 w-full text-black" style={{ backgroundColor: "#FF6B00" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3 py-2 text-center text-xs sm:text-sm font-bold">
          <span>⚡ OFERTA ESPECIAL — Acesso completo por apenas R$19,90</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ 
        backgroundColor: "#0A0A0A", 
        backgroundImage: "radial-gradient(ellipse at top right, rgba(255,107,0,0.18), transparent 55%), radial-gradient(ellipse at bottom left, rgba(255,107,0,0.08), transparent 60%)" 
      }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:py-20 md:grid-cols-2 md:items-center">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-black" style={{ backgroundColor: "#FF6B00" }}>
              🌞 O mercado solar mais aquecido do Brasil
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Aprenda a Instalar Energia Solar e Comece a{" "}
              <span style={{ color: "#FF6B00" }}>Ganhar Dinheiro Ainda Este Mês</span>{" "}
              — Mesmo Sem Nenhuma Experiência
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              Mais de 847 pessoas já usaram esse guia para entrar no mercado solar. Você vai ser o próximo ou vai deixar essa oportunidade passar?
            </p>
            <div className="mt-7">
              <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-10 py-5 text-base sm:text-xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100 w-full sm:w-auto cta-pulse" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                ⚡ QUERO ENTRAR NO MERCADO SOLAR — R$19,90
              </a>
            </div>
            <div className="mt-5">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-white/80">
                <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4" style={{ color: "#FF6B00" }} />Compra Segura</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4" style={{ color: "#FF6B00" }} />Acesso em 2 Minutos</span>
                <span className="inline-flex items-center gap-1.5"><CircleCheck className="h-4 w-4" style={{ color: "#FF6B00" }} />Garantia de 7 Dias</span>
              </div>
            </div>
          </div>
          <div className="fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ backgroundColor: "#FF6B00" }}></div>
              <Image 
                src={getImg('hero-solar')?.imageUrl || ""} 
                alt="Instalador profissional" 
                width={1000} 
                height={800}
                className="relative h-72 w-full rounded-2xl object-cover sm:h-96 md:h-[28rem]"
                data-ai-hint="solar installer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-white leading-tight">
              Por que energia solar é a <span style={{ color: "#FF6B00" }}>maior oportunidade</span> do Brasil agora?
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="fade-in-up">
              <div className="h-full rounded-2xl border p-5 sm:p-6 text-center transition-all hover:bg-[#252525]" style={{ backgroundColor: "#2A2A2A", borderColor: "rgba(255,107,0,0.25)" }}>
                <Sun className="mx-auto h-8 w-8" style={{ color: "#FF6B00" }} />
                <div className="mt-3 text-2xl sm:text-3xl font-black" style={{ color: "#FF6B00" }}>+3 Milhões</div>
                <p className="mt-2 text-sm text-gray-300">Instalações ativas no Brasil</p>
              </div>
            </div>
            <div className="fade-in-up">
              <div className="h-full rounded-2xl border p-5 sm:p-6 text-center transition-all hover:bg-[#252525]" style={{ backgroundColor: "#2A2A2A", borderColor: "rgba(255,107,0,0.25)" }}>
                <TrendingUp className="mx-auto h-8 w-8" style={{ color: "#FF6B00" }} />
                <div className="mt-3 text-2xl sm:text-3xl font-black" style={{ color: "#FF6B00" }}>50% ao ano</div>
                <p className="mt-2 text-sm text-gray-300">Crescimento do setor solar</p>
              </div>
            </div>
            <div className="fade-in-up">
              <div className="h-full rounded-2xl border p-5 sm:p-6 text-center transition-all hover:bg-[#252525]" style={{ backgroundColor: "#2A2A2A", borderColor: "rgba(255,107,0,0.25)" }}>
                <DollarSign className="mx-auto h-8 w-8" style={{ color: "#FF6B00" }} />
                <div className="mt-3 text-2xl sm:text-3xl font-black" style={{ color: "#FF6B00" }}>R$8k–R$25k</div>
                <p className="mt-2 text-sm text-gray-300">Ticket médio por instalação</p>
              </div>
            </div>
            <div className="fade-in-up">
              <div className="h-full rounded-2xl border p-5 sm:p-6 text-center transition-all hover:bg-[#252525]" style={{ backgroundColor: "#2A2A2A", borderColor: "rgba(255,107,0,0.25)" }}>
                <Users className="mx-auto h-8 w-8" style={{ color: "#FF6B00" }} />
                <div className="mt-3 text-2xl sm:text-3xl font-black" style={{ color: "#FF6B00" }}>Falta gente</div>
                <p className="mt-2 text-sm text-gray-300">Alta demanda, pouca oferta</p>
              </div>
            </div>
          </div>
          <div className="fade-in-up">
            <p className="mx-auto mt-10 max-w-3xl text-center text-base sm:text-lg text-white/90">
              Enquanto você lê isso, dezenas de clientes estão buscando um instalador qualificado na sua cidade. A pergunta é:{" "}
              <span className="font-bold" style={{ color: "#FF6B00" }}>vai ser você ou vai deixar esse dinheiro na mesa?</span>
            </p>
          </div>
        </div>
      </section>

      {/* ROI Tool - Added custom feature */}
      <section className="py-16 bg-white overflow-hidden">
        <RoiCalculator />
      </section>

      {/* Pain Points Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-black leading-tight">Você quer trabalhar com energia solar, mas...</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              "Não sabe por onde começar",
              "Tem medo de errar nos cálculos",
              "Acha que precisa de curso caro ou faculdade",
              "Não sabe quanto cobrar ou como fechar clientes",
              "Tem medo de fazer algo errado e se machucar"
            ].map((text, i) => (
              <div key={i} className="fade-in-up">
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-4 sm:px-5 py-4 shadow-sm">
                  <CircleX className="h-6 w-6 flex-shrink-0 text-red-600" />
                  <span className="text-base sm:text-lg font-medium text-gray-900">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up">
            <div className="mt-10 border-t border-gray-200 pt-8 text-center">
              <p className="text-xl sm:text-3xl font-black" style={{ color: "#FF6B00" }}>E se eu te dissesse que nada disso é verdade?</p>
              <p className="mt-5 text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">O mercado solar cresceu 50% só no último ano. Cada dia sem agir é um cliente que vai pro concorrente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div className="fade-in-up">
            <Image 
              src={getImg('house-solar')?.imageUrl || ""} 
              alt="Casa residencial com painéis" 
              width={1000} 
              height={600}
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
              data-ai-hint="solar house"
            />
          </div>
          <div className="fade-in-up">
            <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white">
              O <span style={{ color: "#FF6B00" }}>Guia do Instalador Solar</span> resolve tudo isso em um único lugar
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Do zero ao avançado em linguagem simples",
                "Cálculos de dimensionamento sem fórmulas difíceis",
                "On-grid, Off-grid e Híbrido explicados com clareza",
                "Passo a passo completo de instalação com segurança",
                "Todos os equipamentos e estruturas explicados",
                "Como cobrar, precificar e fechar seus primeiros clientes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-6 w-6 flex-shrink-0" style={{ color: "#FF6B00" }} />
                  <span className="text-base sm:text-lg text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-10 py-5 text-base sm:text-xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100 w-full sm:w-auto" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                ✅ QUERO APRENDER E COMEÇAR A FATURAR — R$19,90
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#FF6B00" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-black leading-tight">É mais simples do que você imagina</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { id: "01", icon: ShoppingCart, title: "Compre e Acesse", desc: "Finalize sua compra com segurança e receba acesso ao guia em menos de 2 minutos, direto no seu celular ou computador." },
              { id: "02", icon: BookOpen, title: "Siga o Passo a Passo", desc: "Assista e leia os módulos no seu ritmo. Cada seção foi criada pra ser simples, clara e aplicável do dia seguinte." },
              { id: "03", icon: Wrench, title: "Execute e Fature", desc: "Aplique o que aprendeu, faça sua primeira instalação com segurança e comece a gerar renda com o mercado solar." }
            ].map((step, i) => (
              <div key={i} className="fade-in-up">
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-xl h-full">
                  <div className="text-5xl sm:text-6xl font-black leading-none" style={{ color: "#FF6B00" }}>{step.id}</div>
                  <step.icon className="mt-4 h-9 w-9 text-[#0A0A0A]" />
                  <h3 className="mt-4 text-xl font-black text-black">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-black leading-tight">Esse guia foi feito exatamente pra você que...</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Eletricista", desc: "Quer expandir serviços e cobrar mais por instalação" },
              { icon: Wrench, title: "Autônomo", desc: "Busca uma nova fonte de renda com alta demanda" },
              { icon: Radio, title: "Segurança Eletrônica", desc: "Já atende clientes, quer adicionar solar" },
              { icon: Sprout, title: "Iniciante do Zero", desc: "Nunca instalou nada mas quer entrar nesse mercado" },
              { icon: House, title: "Dono de Imóvel", desc: "Quer entender o processo antes de investir no próprio sistema" },
              { icon: Briefcase, title: "Empreendedor", desc: "Quer montar um negócio no setor solar" }
            ].map((card, i) => (
              <div key={i} className="fade-in-up">
                <div className="h-full rounded-xl border-2 bg-white p-5 sm:p-6 transition-transform hover:-translate-y-1 hover:border-primary" style={{ borderColor: "rgba(255,107,0,0.35)" }}>
                  <card.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-black text-black">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up">
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg sm:text-2xl font-black" style={{ color: "#FF6B00" }}>Não precisa de experiência. Não precisa de faculdade. Precisa só de vontade e do guia certo.</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative py-16 sm:py-20" style={{ 
        backgroundColor: "#1A1A1A", 
        backgroundImage: "linear-gradient(rgba(10,10,10,0.88), rgba(10,10,10,0.94)), url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80)", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-white leading-tight">
              Tudo que você precisa pra <span style={{ color: "#FF6B00" }}>começar a instalar e faturar</span>:
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "01", title: "Fundamentos do Sistema Solar", desc: "Como a energia solar funciona de verdade, em linguagem simples e sem enrolação." },
              { id: "02", title: "Cálculos e Dimensionamento", desc: "Aprenda a calcular consumo e dimensionar sistemas sem fórmulas complicadas." },
              { id: "03", title: "Tipos de Sistema", desc: "On-grid, Off-grid e Híbrido: entenda qual usar em cada situação." },
              { id: "04", title: "Equipamentos Essenciais", desc: "Placas, inversores, proteções e acessórios — tudo que você precisa conhecer." },
              { id: "05", title: "Estruturas e Fixação", desc: "Como fixar com segurança em diversos tipos de telhado: cerâmico, metálico, etc." },
              { id: "06", title: "Instalação Passo a Passo", desc: "O processo completo de instalação com todos os cuidados de segurança." }
            ].map((mod, i) => (
              <div key={i} className="fade-in-up">
                <div className="h-full rounded-xl p-6 transition-all hover:bg-[#333]" style={{ backgroundColor: "#2A2A2A", borderTop: "4px solid #FF6B00" }}>
                  <div className="text-sm font-black uppercase tracking-wider" style={{ color: "#FF6B00" }}>Módulo {mod.id}</div>
                  <h3 className="mt-2 text-xl font-black" style={{ color: "#FF6B00" }}>{mod.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up">
            <div className="mt-10 flex justify-center">
              <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-10 py-5 text-base sm:text-xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                📲 ACESSAR O GUIA AGORA POR R$19,90
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-black leading-tight">O retorno mais rápido que você vai ver na vida</h2>
          </div>
          <div className="fade-in-up overflow-x-auto mt-10 rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full min-w-[520px] text-center text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-gray-50 text-black">
                  <th className="p-4 text-left font-bold"></th>
                  <th className="p-4 font-black text-white" style={{ backgroundColor: "#FF6B00" }}>📗 Guia Solar</th>
                  <th className="p-4 font-bold">🏫 Curso Técnico</th>
                  <th className="p-4 font-bold">📺 YouTube</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 text-gray-800">
                  <td className="p-4 text-left font-semibold">Investimento</td>
                  <td className="p-4" style={{ backgroundColor: "rgba(255,107,0,0.08)" }}><span className="font-bold">R$19,90</span></td>
                  <td className="p-4"><span className="font-bold">R$2.000+</span></td>
                  <td className="p-4"><span className="font-bold">R$0</span></td>
                </tr>
                {[
                  ["Conteúdo organizado", true, true, false],
                  ["Foco em ganhar dinheiro", true, false, false],
                  ["Acesso imediato", true, false, true],
                  ["Do zero ao avançado", true, true, false],
                  ["Bônus exclusivos", true, false, false]
                ].map(([label, v1, v2, v3], i) => (
                  <tr key={i} className="border-t border-gray-200 text-gray-800">
                    <td className="p-4 text-left font-semibold">{label as string}</td>
                    <td className="p-4" style={{ backgroundColor: "rgba(255,107,0,0.08)" }}>
                      {v1 ? <CircleCheck className="mx-auto h-6 w-6" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-6 w-6 text-red-500" />}
                    </td>
                    <td className="p-4">
                      {v2 ? <CircleCheck className="mx-auto h-6 w-6" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-6 w-6 text-red-500" />}
                    </td>
                    <td className="p-4">
                      {v3 ? <CircleCheck className="mx-auto h-6 w-6" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-6 w-6 text-red-500" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="fade-in-up">
            <div className="mt-8 rounded-xl border-2 p-5 sm:p-6 text-center text-base sm:text-lg text-black" style={{ backgroundColor: "rgba(255,107,0,0.10)", borderColor: "#FF6B00" }}>
              💡 <strong>Uma única instalação residencial</strong> gera entre R$800 e R$2.000 de lucro. Com o guia por R$19,90, você precisa de <strong>UMA</strong> instalação pra recuperar o investimento mais de <strong>40 vezes</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="h-3.5 w-3.5" /> Mensagens reais de alunos
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black text-black leading-tight">
              Quem aplicou o guia, <span style={{ color: "#FF6B00" }}>já está colhendo resultado</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">Conversas reais de quem comprou o Guia do Instalador Solar e decidiu compartilhar a experiência com a gente.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { id: "carlos", name: "Carlos M.", sub: "Eletricista", img: 'testimonial-carlos', text: "Eu era eletricista, mas não entendia nada de energia solar. O material é bem direto e fácil de acompanhar." },
              { id: "rafael", name: "Rafael T.", sub: "Renda extra nos fins de semana", img: 'testimonial-rafael', text: "Comprei pensando em fazer uma renda extra e já consegui meu primeiro serviço ajudando em uma instalação." },
              { id: "priscila", name: "Priscila R.", sub: "Começou do zero", img: 'testimonial-priscila', text: "O conteúdo é bem explicado e consegui entender todo o processo. Hoje já me sinto preparada para buscar minhas primeiras oportunidades." }
            ].map((t, i) => (
              <div key={i} className="fade-in-up">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                  <div className="relative bg-black h-[420px] overflow-hidden">
                    <Image 
                      src={getImg(t.img)?.imageUrl || ""} 
                      alt={`Depoimento ${t.name}`} 
                      fill 
                      className="object-cover object-top"
                      data-ai-hint="whatsapp chat"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md" style={{ backgroundColor: "#25D366" }}>
                      <MessageCircle className="h-3 w-3" /> WhatsApp
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-black text-black">{t.name}</div>
                        <div className="text-xs font-semibold text-gray-500">{t.sub}</div>
                      </div>
                      <CircleCheck className="h-5 w-5" style={{ color: "#25D366" }} />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">"{t.text}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up mt-12 flex flex-wrap items-center justify-center gap-3 rounded-2xl py-5 px-6 text-center text-base sm:text-lg font-black text-black shadow-lg" style={{ backgroundColor: "#FF6B00" }}>
            <Users className="h-6 w-6" />+3.100 pessoas já acessaram o guia este mês
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="fade-in-up">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black" style={{ backgroundColor: "#FF6B00" }}>Exclusivo para quem comprar hoje</span>
            <h2 className="mt-5 text-2xl sm:text-4xl font-black text-white leading-tight">Leve 3 bônus práticos completamente <span style={{ color: "#FF6B00" }}>GRÁTIS</span>:</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            {[
              { id: 1, title: "Como Ganhar Dinheiro com Limpeza de Painéis Solares", desc: "Descubra como criar renda recorrente com limpeza de painéis, baixo custo operacional.", price: "R$67,00" },
              { id: 2, title: "Como Fechar Contratos de Manutenção Solar", desc: "Aprenda a garantir renda mensal fixa com contratos de manutenção, clientes recorrentes.", price: "R$19,90" },
              { id: 3, title: "Checklist Completo do Instalador Solar", desc: "Um checklist profissional pra você não esquecer nada e agilizar instalações.", price: "R$39,00" }
            ].map((b, i) => (
              <div key={i} className="fade-in-up">
                <div className="flex h-full flex-col rounded-2xl border-2 p-6 transition-all hover:border-primary/50" style={{ backgroundColor: "#1A1A1A", borderColor: "#FF6B00" }}>
                  <Gift className="h-10 w-10 text-primary" />
                  <div className="mt-3 text-sm font-black tracking-wider text-primary">BÔNUS {b.id}</div>
                  <h3 className="mt-1 text-lg sm:text-xl font-black text-white">{b.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-white/80 leading-relaxed">{b.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-white/60 line-through">{b.price}</span>
                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-black text-black">GRÁTIS HOJE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up mt-8 rounded-xl border border-white/15 bg-white/5 p-5 text-base sm:text-lg text-white">
            Total dos bônus: <span className="line-through text-white/60">R$153,00</span> → <span className="font-black text-primary">Você leva tudo GRÁTIS ao comprar hoje</span>
          </div>
        </div>
      </section>

      {/* Main Offer Card */}
      <section id="oferta" className="py-16 sm:py-20" style={{ backgroundColor: "#FF6B00" }}>
        <div className="mx-auto max-w-3xl px-5">
          <div className="fade-in-up">
            <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border-[4px] border-primary">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white" style={{ backgroundColor: "#FF6B00" }}>
                  <Flame className="h-3.5 w-3.5" /> Oferta especial de lançamento
                </span>
                <h2 className="mt-5 text-2xl sm:text-4xl font-black text-black leading-tight">Tudo que você vai receber hoje:</h2>
              </div>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Guia do Instalador de Energia Solar (Completo)",
                  "Módulo de Fundamentos ao Avançado",
                  "Cálculos e Dimensionamento Simplificado",
                  "Instalação Passo a Passo com Segurança",
                  "Bônus 1: Limpeza de Painéis — R$67",
                  "Bônus 2: Contratos de Manutenção — R$19,90",
                  "Bônus 3: Checklist do Instalador — R$39",
                  "Acesso Vitalício",
                  "Acesso Imediato em 2 Minutos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    <span className="text-sm sm:text-base text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-7 border-gray-200" />
              <div className="text-center">
                <div className="text-sm text-gray-500">De <span className="line-through">R$97,00</span></div>
                <div className="mt-1 text-gray-600">Por apenas:</div>
                <div className="mt-2 text-5xl sm:text-7xl font-black leading-none text-primary">R$19,90</div>
                <div className="mt-2 text-xs sm:text-sm text-gray-500">Pagamento único. Sem mensalidade.</div>
              </div>
              <div className="mt-6 rounded-xl bg-gray-100 p-4 text-center text-sm sm:text-base text-gray-800">
                💡 Uma instalação residencial te dá de R$800 a R$2.000 de lucro. Você recupera esse investimento na <strong>primeira hora</strong> de trabalho.
              </div>
              <div className="mt-6 rounded-xl border-2 border-red-600 bg-red-50 p-4 text-center text-sm sm:text-base font-black text-red-700">
                ⚠️ Esse preço pode subir a qualquer momento. Garanta agora por R$19,90.
              </div>
              <div className="mt-5 flex justify-center">
                <a href="https://pay.kiwify.com.br/FyBJS48" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-10 py-5 text-base sm:text-xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100 cta-pulse w-full" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                  🔥 SIM! GARANTIR MEU ACESSO POR R$19,90
                </a>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-gray-700">
                <span>💳 Pix | Cartão | Boleto</span>
                <span className="inline-flex items-center gap-1"><Lock className="h-4 w-4" /> Ambiente 100% Seguro</span>
                <span className="inline-flex items-center gap-1"><Zap className="h-4 w-4" /> Acesso em 2 Minutos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="fade-in-up">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,107,0,0.12)" }}>
              <ShieldCheck className="h-14 w-14 text-primary" />
            </div>
            <h2 className="mt-6 text-2xl sm:text-4xl font-black text-black leading-tight">Garantia Total de 7 Dias — Risco Zero</h2>
            <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              Você tem 7 dias completos pra acessar todo o conteúdo, aplicar o que aprendeu e ver os resultados. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia. Sem enrolação. A decisão é toda sua.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mx-auto max-w-3xl px-5">
          <div className="fade-in-up text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-black leading-tight">Perguntas Frequentes</h2>
          </div>
          <div className="fade-in-up">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Preciso ser eletricista para entender o guia?", a: "Não. O guia foi criado para ser acessível a qualquer pessoa, mesmo sem conhecimento técnico. As explicações são didáticas e progressivas." },
                { q: "Serve para instalar em casa ou só para profissionais?", a: "Ambos! Se você quer economizar instalando seu próprio sistema ou se quer iniciar uma carreira lucrativa, o guia atende perfeitamente." },
                { q: "O guia ensina cálculo e dimensionamento?", a: "Sim! Temos um módulo dedicado a dimensionamento simplificado para você saber exatamente quantas placas e qual inversor usar em cada projeto." },
                { q: "Como funciona o acesso após a compra?", a: "Imediato. Assim que o pagamento for aprovado, você recebe um e-mail com seus dados de acesso para ler e assistir onde quiser." },
                { q: "Por quanto tempo terei acesso?", a: "O acesso é vitalício. Você pode consultar o material sempre que precisar de uma ajuda em campo ou para novos cálculos." },
                { q: "Os bônus são entregues juntos?", a: "Sim, todos os 3 bônus exclusivos são liberados automaticamente junto com o guia principal." },
                { q: "Funciona no celular?", a: "Sim! Todo o conteúdo é otimizado para celulares, tablets e computadores." },
                { q: "E se eu não gostar, como peço reembolso?", a: "Basta enviar um único e-mail para nosso suporte dentro dos 7 dias e faremos o estorno total sem questionamentos." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border border-gray-200 px-5 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-base sm:text-lg font-bold text-black hover:no-underline py-4 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">O mercado não vai esperar por você.</h2>
            <p className="mt-4 text-lg sm:text-2xl font-bold text-primary">Enquanto você pensa, outro instalador está fechando o cliente que poderia ser seu.</p>
            <div className="mt-8 flex justify-center">
              <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-14 py-6 text-xl sm:text-2xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100 cta-pulse w-full sm:w-auto" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                ⚡ QUERO COMEÇAR HOJE — R$19,90
              </a>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-white/80">
                <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4 text-primary" />Compra Segura</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" />Acesso em 2 Minutos</span>
                <span className="inline-flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-primary" />Garantia de 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-5 text-center text-xs sm:text-sm text-gray-500 space-y-2">
          <p>© 2025 Guia do Instalador Solar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
