"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Zap, TrendingUp, DollarSign, Minus, Plus, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function RoiCalculator() {
  const [projects, setProjects] = useState<number>(4);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Constantes para cálculos educativos
  const REVENUE_PER_PROJECT = 1200;
  const COST_PER_PROJECT = 350;
  const NET_PER_PROJECT = 850;

  const grossRevenue = projects * REVENUE_PER_PROJECT;
  const estimatedCosts = projects * COST_PER_PROJECT;
  const netResult = projects * NET_PER_PROJECT;

  const increment = () => setProjects((prev) => Math.min(prev + 1, 32));
  const decrement = () => setProjects((prev) => Math.max(prev - 1, 1));

  // Função auxiliar para formatar moeda com segurança de hidratação
  const formatCurrency = (value: number) => {
    if (!isMounted) return "...";
    return value.toLocaleString('pt-BR');
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-5">
      <Card className="border-2 border-primary/20 bg-card shadow-2xl overflow-hidden">
        <CardHeader className="text-center bg-primary/5 pb-8">
          <Badge variant="outline" className="w-fit mx-auto mb-4 border-primary text-primary font-bold">
            FERRAMENTA DE PLANEJAMENTO
          </Badge>
          <CardTitle className="text-2xl sm:text-3xl font-black text-foreground">
            Simulador de <span className="text-primary">Potencial de Projetos</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base max-w-lg mx-auto">
            Veja uma estimativa educativa de como a quantidade de projetos pode impactar o potencial de receita no mercado solar.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-10">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Projetos por mês
                </Label>
                
                <div className="flex items-center gap-4 bg-muted/50 p-2 rounded-2xl border border-input">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decrement}
                    disabled={projects <= 1}
                    className="h-12 w-12 rounded-xl"
                  >
                    <Minus className="h-6 w-6" />
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-black text-primary">{projects}</span>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Projetos</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increment}
                    disabled={projects >= 32}
                    className="h-12 w-12 rounded-xl"
                  >
                    <Plus className="h-6 w-6" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground font-medium">
                  Selecione uma quantidade entre 1 e 32 projetos mensais.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                <h4 className="font-bold flex items-center gap-2 text-primary text-sm uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4" /> Nota importante
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                  Esta simulação é apenas uma referência. Os valores podem variar conforme região, complexidade do projeto, custos, experiência profissional, parcerias e forma de atuação.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-muted/30 border border-input">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Receita Bruta Estimada</p>
                    <Zap className="h-4 w-4 text-primary opacity-50" />
                  </div>
                  <p className="text-2xl font-black text-foreground">R$ {formatCurrency(grossRevenue)}</p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/30 border border-input">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Custos Operacionais Est.</p>
                    <div className="h-1.5 w-8 rounded-full bg-red-500/20" />
                  </div>
                  <p className="text-2xl font-black text-foreground">R$ {formatCurrency(estimatedCosts)}</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0F1A14] text-white shadow-xl border border-green-500/20 ring-4 ring-green-500/5">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold text-green-500 uppercase tracking-widest">Resultado Líquido Est.</p>
                    <DollarSign className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-4xl font-black text-white">R$ {formatCurrency(netResult)}</p>
                  <div className="mt-4 pt-4 border-t border-green-500/10">
                    <p className="text-[10px] leading-tight text-white/40 font-medium italic">
                      Estimativa meramente educativa. Os resultados reais dependem da região, demanda, execução, custos, experiência e capacidade comercial de cada profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}