"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  Plus,
  BarChart3,
  GraduationCap,
  Clock,
  UserPlus,
  User,
  Hammer,
  CheckCircle2
} from "lucide-react";
import { RoiCalculator } from "@/components/roi-calculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function Home() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const comparisonData = [
    { label: "Conteúdo organizado e estruturado", v1: true, v2: true, v3: false },
    { label: "Foco em aplicação real", v1: true, v2: false, v3: false },
    { label: "Cálculos sem fórmulas complexas", v1: true, v2: false, v3: true },
    { label: "Suporte e atualizações", v1: true, v2: true, v3: false },
    { label: "Investimento acessível", v1: true, v2: false, v3: true },
    { label: "Acesso Vitalício", v1: true, v2: false, v3: false }
  ];

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
        backgroundImage: "radial-gradient(ellipse at top right, rgba(255,107,0,0.12), transparent 55%)" 
      }}>
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-20">
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-10">
            {/* Texto e Conteúdo Principal */}
            <div className="fade-in-up flex flex-col">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                Aprenda Energia Solar do Zero e Entenda Como Funciona um dos{" "}
                <span style={{ color: "#FF6B00" }}>Mercados que Mais Crescem</span> no Brasil
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                Mais de 4 mil homens já usaram este guia para dar os primeiros passos no mercado solar, aprendendo de forma prática como entender, dimensionar e instalar sistemas fotovoltaicos.
              </p>
              
              {/* Imagem Mobile (Visível apenas entre P e CTA no mobile) */}
              <div className="mt-8 md:hidden">
                <div className="relative mx-auto max-w-[320px]">
                  <div className="absolute -inset-2 rounded-2xl opacity-10 blur-xl" style={{ backgroundColor: "#FF6B00" }}></div>
                  <Image 
                    src={getImg('hero-solar')?.imageUrl || ""} 
                    alt="Instalação Solar" 
                    width={600} 
                    height={400}
                    className="relative rounded-xl object-cover shadow-2xl h-48 w-full"
                    data-ai-hint="solar installation"
                  />
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-10 py-5 text-base sm:text-xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-100 w-full sm:w-auto cta-pulse" style={{ backgroundColor: "#FF6B00", boxShadow: "0 10px 30px -5px rgba(255, 107, 0, 0.5)" }}>
                  QUERO COMEÇAR AGORA
                </a>
              </div>
            </div>
            
            {/* Imagem Desktop (Visível apenas em telas médias/grandes) */}
            <div className="hidden md:block fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ backgroundColor: "#FF6B00" }}></div>
                <Image 
                  src={getImg('hero-solar')?.imageUrl || ""} 
                  alt="Instalador profissional" 
                  width={1000} 
                  height={800}
                  className="relative h-72 w-full rounded-2xl object-cover sm:h-96 md:h-[32rem]"
                  data-ai-hint="solar installer"
                />
              </div>
            </div>
          </div>

          {/* Cards Técnicos de Benefícios */}
          <div className="mt-16 w-full fade-in-up">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {[
                { title: "Passo a Passo Simples", sub: "Metodologia prática e aplicável" },
                { title: "Cálculos Claros", sub: "Dimensionamento sem complicação" },
                { title: "Todos os Sistemas", sub: "On-grid, Off-grid e Híbrido" },
                { title: "Instalação Completa", sub: "Equipamentos, estruturas e segurança" },
                { title: "Uso Versátil", sub: "Para trabalho ou uso próprio" }
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex w-full flex-col items-center justify-center rounded-sm border border-white/10 bg-[#121212] p-8 text-center transition-all hover:bg-[#1A1A1A] hover:border-white/20 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                  style={{ borderLeft: "4px solid #FF6B00" }}
                >
                  <h3 className="text-xl font-black text-white sm:text-2xl tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-gray-400 uppercase tracking-wide">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 1: Um Mercado em Crescimento */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Um Mercado em Crescimento. Uma Habilidade Cada Vez Mais Valorizada.
            </h2>
            <div className="mt-8 space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>A energia solar deixou de ser tendência. <span className="text-white font-bold">Virou realidade.</span></p>
              <p>Todos os meses milhares de novos sistemas são instalados em residências, empresas e propriedades rurais.</p>
              <p>O problema? A procura cresce mais rápido que a quantidade de profissionais preparados.</p>
              <p className="text-primary font-bold">Por isso cada vez mais pessoas estão buscando aprender essa habilidade.</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { icon: Sun, val: "+3 milhões", label: "Instalações ativas" },
              { icon: TrendingUp, val: "50%", label: "Crescimento anual" },
              { icon: DollarSign, val: "R$8k–R$25k", label: "Ticket por projeto" },
              { icon: Users, val: "Alta demanda", label: "Falta de profissionais" }
            ].map((stat, i) => (
              <div key={i} className="fade-in-up">
                <div className="h-full rounded-2xl border p-6 text-center transition-all bg-[#1A1A1A]" style={{ borderColor: "rgba(255,107,0,0.2)" }}>
                  <stat.icon className="mx-auto h-10 w-10 text-primary" />
                  <div className="mt-4 text-2xl sm:text-3xl font-black text-white">{stat.val}</div>
                  <p className="mt-2 text-sm text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 2: Por Que o Mercado Solar Tem Chamado a Atenção de Tantos Profissionais? */}
      <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Por Que o Mercado Solar Tem Chamado a Atenção de Tantos Profissionais?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Um setor em crescimento, com demanda prática e espaço para quem busca desenvolver uma habilidade técnica valorizada.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
            {/* Coluna Esquerda */}
            <div className="flex flex-col gap-8 order-2 md:order-1">
              <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 transition-all group-hover:w-20"></div>
                <h3 className="text-xl font-bold text-white mb-3">Mercado em Expansão</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  O setor de energia solar segue crescendo no Brasil, abrindo espaço para profissionais que entendem instalação, dimensionamento e aplicação prática dos sistemas.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 transition-all group-hover:w-20"></div>
                <h3 className="text-xl font-bold text-white mb-3">Aplicação em Diferentes Cenários</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  O conhecimento pode ser aplicado em sistemas on-grid, off-grid e híbridos, tanto em projetos residenciais quanto em demandas comerciais.
                </p>
              </div>
            </div>

            {/* Coluna Central - Imagem */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group p-1">
                <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
                <div className="relative bg-[#1A1A1A] p-2 rounded-2xl border border-white/10">
                  <Image 
                    src={getImg('solar-tech')?.imageUrl || ""} 
                    alt="Tecnologia Solar" 
                    width={400} 
                    height={500}
                    className="rounded-xl object-cover h-[350px] md:h-[450px] w-full"
                    data-ai-hint="solar technology"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-black text-xs uppercase tracking-widest">Habilidade Prática</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col gap-8 order-3 md:order-3">
              <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 transition-all group-hover:w-20"></div>
                <h3 className="text-xl font-bold text-white mb-3">Habilidade Técnica Valorizada</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Saber interpretar equipamentos, estruturas, cálculos e etapas de instalação torna o profissional mais preparado para atuar em projetos reais.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary/30 transition-all group">
                <div className="h-1 w-12 bg-primary mb-6 transition-all group-hover:w-20"></div>
                <h3 className="text-xl font-bold text-white mb-3">Mais Segurança para Atuar</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Um passo a passo claro ajuda a reduzir dúvidas, evitar improvisos e entender melhor o processo completo de uma instalação fotovoltaica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3: Para Quem Este Guia Foi Criado */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Para Quem Este Guia Foi Criado</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Clock, title: "CLT Cansado", desc: "Quer aprender uma habilidade prática para criar uma nova fonte de renda." },
              { icon: Zap, title: "Eletricista", desc: "Quer aumentar o valor dos seus serviços sem começar do zero." },
              { icon: Hammer, title: "Autônomo", desc: "Quer atuar em um mercado mais valorizado e requisitado." },
              { icon: User, title: "Homem 35+", desc: "Quer construir uma nova fase profissional com conhecimento sólido." },
              { icon: UserPlus, title: "Iniciante", desc: "Nunca teve contato com energia solar, mas quer aprender do zero." }
            ].map((avatar, i) => (
              <div key={i} className="fade-in-up">
                <div className="h-full rounded-2xl border bg-white/5 p-6 border-white/10 hover:border-primary/50 transition-colors">
                  <avatar.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{avatar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{avatar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 4: Pain Points */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-5">
          <div className="fade-in-up">
            <h2 className="text-center text-2xl sm:text-4xl font-black text-black leading-tight">Você quer trabalhar com energia solar, mas...</h2>
          </div>
          <div className="mt-12 space-y-4">
            {[
              "Não sabe por onde começar sua jornada",
              "Tem receio de cometer erros nos cálculos de dimensionamento",
              "Acha que é necessário um curso de anos ou formação acadêmica",
              "Não entende a parte comercial e técnica de uma instalação",
              "Tem medo da complexidade técnica dos sistemas atuais"
            ].map((text, i) => (
              <div key={i} className="fade-in-up">
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-5 py-5 shadow-sm">
                  <CircleX className="h-6 w-6 flex-shrink-0 text-red-600" />
                  <span className="text-base sm:text-lg font-bold text-gray-800">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-up">
            <div className="mt-12 border-t-2 border-primary/20 pt-10 text-center">
              <p className="text-xl sm:text-3xl font-black text-primary">O Guia do Instalador Solar foi feito para encurtar seu caminho.</p>
              <p className="mt-6 text-base sm:text-lg font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto">Organizamos todo o conhecimento técnico e prático de forma simples, direta e sem a enrolação dos cursos tradicionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5: O Que Você Vai Aprender */}
      <section id="conteudo" className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              O Que Você <span className="text-primary">Vai Aprender</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">Um cronograma pensado na aplicação prática do conhecimento.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "01", icon: Sun, title: "Fundamentos do Sistema Solar", desc: "A base técnica: como a energia é captada e convertida em eletricidade." },
              { id: "02", icon: BarChart3, title: "Cálculos e Dimensionamento", desc: "Como calcular exatamente o que o cliente precisa, sem margem para erro." },
              { id: "03", icon: Radio, title: "Tipos de Sistema", desc: "As diferenças e aplicações de sistemas On-grid, Off-grid e Híbrido." },
              { id: "04", icon: Briefcase, title: "Equipamentos Essenciais", desc: "Painéis, inversores e proteções: aprenda a escolher o hardware certo." },
              { id: "05", icon: Hammer, title: "Estruturas e Fixação", desc: "Técnicas profissionais de montagem para todos os tipos de telhados e solos." },
              { id: "06", icon: Wrench, title: "Instalação Passo a Passo", desc: "A sequência lógica da obra, do primeiro painel à entrega final do sistema." }
            ].map((mod, i) => (
              <div key={i} className="fade-in-up">
                <div className="h-full rounded-2xl p-8 bg-[#1A1A1A] border-l-4 border-primary shadow-lg hover:bg-[#222] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">Módulo {mod.id}</span>
                    <mod.icon className="h-6 w-6 text-primary/60" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{mod.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 6: Aprenda Sem Complicação */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">Aprenda Sem Complicação</h2>
          </div>
          <div className="space-y-20">
            {[
              {
                title: "Dimensionamento Simplificado",
                desc: "Esqueça fórmulas matemáticas complexas que ninguém usa no dia a dia. Ensinamos o método prático para dimensionar sistemas que funcionam.",
                img: "solar-blueprint"
              },
              {
                title: "Equipamentos e Tecnologia",
                desc: "Entenda a fundo como funcionam os painéis, inversores e sistemas de proteção. Saiba o que comprar e como configurar cada componente.",
                img: "solar-tech"
              },
              {
                title: "Instalação na Prática",
                desc: "Mostramos como é o dia a dia de uma instalação real. As melhores práticas de segurança e fixação para garantir um serviço impecável.",
                img: "solar-install-closeup"
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col gap-10 md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="flex-1 fade-in-up">
                  <Image 
                    src={getImg(item.img)?.imageUrl || ""} 
                    alt={item.title} 
                    width={800} 
                    height={500}
                    className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
                    data-ai-hint="solar installation"
                  />
                </div>
                <div className="flex-1 fade-in-up">
                  <h3 className="text-2xl sm:text-3xl font-black text-black mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 7: Como Funciona na Prática */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-4xl px-5">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Como Funciona na Prática</h2>
            <p className="mt-4 text-gray-400">Siga o passo a passo lógico para dominar a instalação.</p>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-0.5 before:bg-primary/20 sm:before:left-1/2">
            {[
              { step: "01", title: "Aprenda os fundamentos", desc: "Entenda o conceito de energia fotovoltaica e como o sistema se integra à rede elétrica." },
              { step: "02", stepTitle: "Entenda equipamentos", desc: "Conheça os componentes, marcas e como selecionar os melhores custo-benefícios." },
              { step: "03", stepTitle: "Dimensione corretamente", desc: "Aprenda a fazer o levantamento de carga e definir o tamanho do sistema para cada cliente." },
              { step: "04", stepTitle: "Execute a instalação", desc: "Parta para a montagem das estruturas, cabeamento e conexão final." },
              { step: "05", stepTitle: "Aplique o conhecimento", desc: "Comece a atuar como um profissional qualificado no mercado de energia solar." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between gap-10">
                <div className={`hidden sm:block w-1/2 ${i % 2 === 0 ? 'text-right' : 'invisible'}`}>
                  <h4 className="text-xl font-bold text-white mb-2">{item.stepTitle || item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                    {item.step}
                  </div>
                </div>
                <div className={`w-full pl-16 sm:pl-0 sm:w-1/2 ${i % 2 !== 0 ? 'sm:text-left' : 'sm:invisible'}`}>
                  <h4 className="text-xl font-bold text-white mb-2">{item.stepTitle || item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 8: Comparação */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="fade-in-up text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">O Que Torna Este Guia Diferente</h2>
          </div>
          
          {/* Tabela Desktop */}
          <div className="hidden sm:block fade-in-up overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
            <table className="w-full min-w-[550px] text-center border-collapse overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-black">
                  <th className="p-6 text-left font-bold text-lg">Recurso</th>
                  <th className="p-6 font-black text-white text-lg" style={{ backgroundColor: "#FF6B00" }}>📗 Guia Solar</th>
                  <th className="p-6 font-bold text-lg text-gray-500">🏫 Curso Técnico</th>
                  <th className="p-6 font-bold text-lg text-gray-500">📺 YouTube</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {comparisonData.map((item, i) => (
                  <tr key={i} className="border-t border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="p-5 text-left font-semibold text-gray-700">{item.label}</td>
                    <td className="p-5" style={{ backgroundColor: "rgba(255,107,0,0.03)" }}>
                      {item.v1 ? <CircleCheck className="mx-auto h-7 w-7" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-7 w-7 text-red-500" />}
                    </td>
                    <td className="p-5">
                      {item.v2 ? <CircleCheck className="mx-auto h-7 w-7" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-7 w-7 text-gray-300" />}
                    </td>
                    <td className="p-5">
                      {item.v3 ? <CircleCheck className="mx-auto h-7 w-7" style={{ color: "#FF6B00" }} /> : <CircleX className="mx-auto h-7 w-7 text-gray-300" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards Mobile */}
          <div className="sm:hidden space-y-4">
            {comparisonData.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h4 className="text-base font-bold text-black mb-4 border-b border-gray-50 pb-2">{item.label}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-primary">📗 Guia Solar</span>
                    {item.v1 ? <CircleCheck className="h-5 w-5 text-primary" /> : <CircleX className="h-5 w-5 text-red-500" />}
                  </div>
                  <div className="flex items-center justify-between text-sm opacity-60">
                    <span className="font-medium text-gray-600">🏫 Curso Técnico</span>
                    {item.v2 ? <CircleCheck className="h-5 w-5 text-primary" /> : <CircleX className="h-5 w-5 text-gray-300" />}
                  </div>
                  <div className="flex items-center justify-between text-sm opacity-60">
                    <span className="font-medium text-gray-600">📺 YouTube</span>
                    {item.v3 ? <CircleCheck className="h-5 w-5 text-primary" /> : <CircleX className="h-5 w-5 text-gray-300" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador Tool */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <RoiCalculator />
      </section>

      {/* BLOCO 9: Testimonials */}
      <section className="py-24" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-black leading-tight">
              Quem Aplicou Já Está <span className="text-primary">Colhendo Resultado</span>
            </h2>
          </div>
          
          <Carousel setApi={setApi} className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {[
                { name: "Carlos M.", sub: "Eletricista", img: 'testimonial-carlos', text: "O guia me ajudou a entender a lógica por trás da instalação. Hoje faço serviços solares com muito mais segurança." },
                { name: "Rafael T.", sub: "Autônomo", img: 'testimonial-rafael', text: "Material direto ao ponto. Consegui fazer minha primeira instalação seguindo o passo a passo do guia." },
                { name: "Priscila R.", sub: "Estudante", img: 'testimonial-priscila', text: "Excelente para quem está começando. A didática é muito simples e facilita o aprendizado de temas técnicos." }
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-transform">
                      <div className="relative bg-black h-[350px] overflow-hidden">
                        <Image 
                          src={getImg(t.img)?.imageUrl || ""} 
                          alt={`Depoimento ${t.name}`} 
                          fill 
                          className="object-cover object-top opacity-90"
                          data-ai-hint="whatsapp chat"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-lg font-black text-black">{t.name}</div>
                            <div className="text-xs font-bold text-gray-500 uppercase">{t.sub}</div>
                          </div>
                          <CircleCheck className="h-6 w-6 text-green-500" />
                        </div>
                        <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Dots Indicadores */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-3 w-3 rounded-full transition-all duration-300",
                    current === index ? "bg-primary w-8" : "bg-gray-300"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* BLOCO 10: Bonuses */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="fade-in-up mb-12">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black bg-primary mb-5">Exclusivo para quem começar hoje</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Você também recebe esses bônus práticos:</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {[
              { id: 1, title: "Limpeza de Painéis Solares", desc: "Aprenda a oferecer esse serviço de manutenção preventiva e gere renda recorrente.", price: "R$67,00" },
              { id: 2, title: "Contratos de Manutenção Solar", desc: "Como estruturar contratos fixos mensais com seus clientes para garantir estabilidade.", price: "R$19,90" },
              { id: 3, title: "Checklist do Instalador", desc: "Uma lista completa de verificação para não esquecer nenhum detalhe técnico em campo.", price: "R$39,00" }
            ].map((b, i) => (
              <div key={i} className="fade-in-up">
                <div className="flex h-full flex-col rounded-3xl border-2 p-8 transition-all hover:border-primary/40 bg-[#1A1A1A]" style={{ borderColor: "rgba(255,107,0,0.2)" }}>
                  <Gift className="h-12 w-12 text-primary mb-6" />
                  <div className="text-xs font-black tracking-widest text-primary uppercase mb-2">BÔNUS {b.id}</div>
                  <h3 className="text-xl font-black text-white mb-3">{b.title}</h3>
                  <p className="flex-1 text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                  <div className="mt-6 flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-white/40 line-through text-sm font-bold">{b.price}</span>
                    <span className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-[10px] font-black text-green-500 uppercase">GRÁTIS HOJE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 11: BLOCO DE OFERTA */}
      <section id="oferta" className="py-20" style={{ backgroundColor: "#FF6B00" }}>
        <div className="mx-auto max-w-3xl px-5">
          <div className="fade-in-up">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-14 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">Tudo o Que Você Vai Receber Hoje</h2>
                <p className="mt-4 text-gray-600 font-medium">O combo completo para sua formação no mercado solar.</p>
              </div>
              <div className="grid gap-4 mb-10">
                {[
                  "Guia Completo do Instalador Solar",
                  "Módulos do Fundamento ao Avançado",
                  "Dimensionamento Passo a Passo",
                  "Guia de Tipos de Sistemas (On/Off/Híbrido)",
                  "Manual de Equipamentos e Tecnologia",
                  "Técnicas de Estruturas e Fixação",
                  "Acesso Vitalício ao Conteúdo",
                  "Garantia Incondicional de 7 Dias",
                  "🎁 Bônus: Checklist de Instalação Profissional",
                  "🎁 Bônus: Guia de Limpeza de Painéis",
                  "🎁 Bônus: Contratos de Manutenção"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <CircleCheck className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm sm:text-base text-gray-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Investimento único de</div>
                <div className="text-6xl sm:text-7xl font-black text-primary leading-none mb-4">R$19,90</div>
                <div className="text-xs text-gray-500 font-bold">SEM MENSALIDADES • ACESSO IMEDIATO</div>
              </div>
              <div className="mt-8">
                <a href="https://pay.kiwify.com.br/FyBJS48" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-10 py-6 text-lg sm:text-2xl font-black text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 active:scale-100 cta-pulse w-full shadow-xl" style={{ backgroundColor: "#FF6B00" }}>
                  QUERO COMEÇAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 12: Guarantee */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="fade-in-up">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 mb-8">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">Garantia Total de 7 Dias</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
              Você tem 7 dias para acessar todo o guia, ler os bônus e avaliar o conteúdo. Se achar que o material não é para você, devolvemos seu investimento integralmente. Sem perguntas, sem letras miúdas. Seu aprendizado está protegido.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 13: FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="mx-auto max-w-3xl px-5">
          <div className="fade-in-up text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">Perguntas Frequentes</h2>
          </div>
          <div className="fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Preciso de conhecimento prévio em elétrica?", a: "Não. O guia começa pelos fundamentos básicos e explica tudo em linguagem simples para quem está começando agora." },
                { q: "Como recebo o guia após o pagamento?", a: "O acesso é imediato. Assim que o pagamento é confirmado, você recebe os dados de acesso no seu e-mail cadastrado." },
                { q: "O guia serve para quem quer apenas instalar em casa?", a: "Sim! Ele cobre toda a parte técnica de dimensionamento e montagem que serve tanto para profissionais quanto para projetos próprios." },
                { q: "Terei acesso por quanto tempo?", a: "O acesso é vitalício. Você pode consultar o material sempre que precisar de uma ajuda em campo ou para novos cálculos." },
                { q: "Os bônus estão incluídos no preço de R$19,90?", a: "Sim, todos os 3 bônus exclusivos são liberados automaticamente junto com o guia principal." },
                { q: "O pagamento é seguro?", a: "Sim. Utilizamos uma das maiores plataformas de pagamentos digitais do Brasil, garantindo total segurança para seus dados." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-base sm:text-lg font-bold text-black hover:no-underline py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* BLOCO 14: Final CTA */}
      <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">O Mercado Continua Crescendo</h2>
            <div className="mt-8 space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
              <p>Enquanto você pensa, novos sistemas continuam sendo instalados todos os dias.</p>
              <p className="text-white">A pergunta é simples:</p>
              <p className="text-primary font-bold">Você vai aprender agora... Ou esperar mais um ano para descobrir que deveria ter começado antes?</p>
            </div>
            <div className="mt-12">
              <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 sm:px-14 py-7 text-xl sm:text-2xl font-extrabold text-white text-center uppercase tracking-wide transition-all duration-200 hover:scale-[1.03] hover:-translate-y-1 active:scale-100 cta-pulse w-full sm:w-auto shadow-[0_15px_40px_-10px_rgba(255,107,0,0.6)]" style={{ backgroundColor: "#FF6B00" }}>
                QUERO COMEÇAR AGORA
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
              <span className="flex items-center gap-1.5 text-xs font-bold text-white"><Lock className="h-4 w-4" /> COMPRA 100% SEGURA</span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-white"><Zap className="h-4 w-4" /> ACESSO VITALÍCIO</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-6xl px-5 text-center text-xs text-gray-500 font-medium">
          <p>© 2025 Guia do Instalador Solar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
