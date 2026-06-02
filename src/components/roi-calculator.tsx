"use client";

import { useState } from "react";
import { calculatePersonalizedRoi, type PersonalizedRoiOutput } from "@/ai/flows/roi-calculator-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calculator, Zap, TrendingUp, DollarSign, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function RoiCalculator() {
  const [target, setTarget] = useState<number>(4);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedRoiOutput | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await calculatePersonalizedRoi({ monthlyInstallationsTarget: target });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-5">
      <Card className="border-2 border-primary/20 bg-card shadow-2xl overflow-hidden">
        <CardHeader className="text-center bg-primary/5 pb-8">
          <Badge variant="outline" className="w-fit mx-auto mb-4 border-primary text-primary font-bold">
            FERRAMENTA EXCLUSIVA
          </Badge>
          <CardTitle className="text-2xl sm:text-3xl font-black text-foreground">
            Calculadora de <span className="text-primary">Potencial de Lucro</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base max-w-lg mx-auto">
            Descubra quanto você pode faturar no mercado solar investindo apenas R$19,90 no nosso guia.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 sm:p-10">
          <form onSubmit={handleCalculate} className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="target" className="text-lg font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Meta de Instalações Mensais
                </Label>
                <div className="flex gap-4">
                  <Input
                    id="target"
                    type="number"
                    min={1}
                    max={50}
                    value={target}
                    onChange={(e) => setTarget(parseInt(e.target.value) || 1)}
                    className="text-xl font-bold h-12"
                  />
                  <Button 
                    disabled={loading} 
                    type="submit" 
                    className="h-12 px-8 text-lg font-black bg-primary hover:bg-primary/90 transition-all cta-pulse"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "CALCULAR ROI"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dica: Um instalador iniciante costuma fazer de 2 a 4 instalações por mês.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold flex items-center gap-2 text-primary">
                  <Zap className="w-4 h-4" /> Sabia que?
                </h4>
                <p className="text-sm mt-1 text-muted-foreground">
                  O lucro médio por instalação residencial varia entre R$800 e R$2.000, dependendo da complexidade e tamanho do sistema.
                </p>
              </div>
            </div>

            <div className="relative">
              {!result && !loading && (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-muted rounded-2xl">
                  <Calculator className="w-16 h-16 text-muted mb-4" />
                  <p className="text-muted-foreground font-medium">Preencha sua meta ao lado para ver sua projeção financeira personalizada pela nossa IA.</p>
                </div>
              )}

              {loading && (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <p className="text-lg font-medium animate-pulse">Nossa IA está calculando sua projeção...</p>
                </div>
              )}

              {result && !loading && (
                <div className="space-y-6 fade-in-up">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Lucro Mensal Mín.</p>
                      <p className="text-2xl font-black text-primary">R$ {result.minMonthlyProfit.toLocaleString()}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Lucro Mensal Máx.</p>
                      <p className="text-2xl font-black text-primary">R$ {result.maxMonthlyProfit.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-foreground text-background p-6 rounded-2xl shadow-inner border border-white/10">
                    <h4 className="font-black text-primary mb-3 flex items-center gap-2 uppercase tracking-wide">
                      <DollarSign className="w-5 h-5" /> Análise de ROI
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium italic">
                      "{result.roiAnalysis}"
                    </p>
                  </div>

                  <div className="text-center p-4 border border-green-500/30 bg-green-500/5 rounded-xl">
                    <p className="text-sm font-bold text-green-600">
                      ✅ O guia se paga com apenas {result.breakEvenInstallations} instalação!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
