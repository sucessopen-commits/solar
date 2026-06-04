
'use server';
/**
 * @fileOverview An AI-powered tool to calculate the potential return on investment (ROI) for a prospective solar installer.
 *
 * - calculatePersonalizedRoi - A function that calculates and presents a personalized financial projection.
 * - PersonalizedRoiInput - The input type for the calculatePersonalizedRoi function.
 * - PersonalizedRoiOutput - The return type for the calculatePersonalizedRoi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// --- Input Schema ---
const PersonalizedRoiInputSchema = z.object({
  monthlyInstallationsTarget: z
    .number()
    .int()
    .min(1)
    .describe('The target number of monthly installations the user aims for.'),
});
export type PersonalizedRoiInput = z.infer<typeof PersonalizedRoiInputSchema>;

// --- Output Schema ---
const PersonalizedRoiOutputSchema = z.object({
  roiAnalysis: z
    .string()
    .describe('A detailed analysis of the potential ROI and financial projection.'),
  breakEvenInstallations: z
    .number()
    .describe(
      'The number of installations required to recoup the investment in the guide.'
    ),
  minMonthlyProfit: z
    .number()
    .describe('The minimum potential monthly profit based on the target installations.'),
  maxMonthlyProfit: z
    .number()
    .describe('The maximum potential monthly profit based on the target installations.'),
  guideCost: z.number().describe('The cost of the guide (R$20.87).'),
});
export type PersonalizedRoiOutput = z.infer<typeof PersonalizedRoiOutputSchema>;

// --- Constants ---
const GUIDE_COST = 20.87;
const MIN_PROFIT_PER_INSTALLATION = 800;
const MAX_PROFIT_PER_INSTALLATION = 2000;

// --- Wrapper Function ---
export async function calculatePersonalizedRoi(
  input: PersonalizedRoiInput
): Promise<PersonalizedRoiOutput> {
  return personalizedRoiCalculatorFlow(input);
}

// --- Prompt Definition ---
// This prompt will generate the `roiAnalysis` text based on pre-calculated values.
const roiAnalysisGeneratorPrompt = ai.definePrompt({
  name: 'roiAnalysisGeneratorPrompt',
  input: {
    schema: z.object({
      monthlyInstallationsTarget: z.number(),
      guideCost: z.number(),
      breakEvenInstallations: z.number(),
      minMonthlyProfit: z.number(),
      maxMonthlyProfit: z.number(),
    }),
  },
  // The output of this prompt is just a string, which will be the roiAnalysis field.
  output: {schema: z.string().describe('A detailed analysis of the potential ROI and financial projection.')},
  prompt: `Com base nos seguintes dados:
- Custo do Guia: R$ {{{guideCost}}}
- Meta de Instalações Mensais: {{{monthlyInstallationsTarget}}}
- Instalações necessárias para cobrir o custo do guia: {{{breakEvenInstallations}}}
- Lucro mensal mínimo potencial: R$ {{{minMonthlyProfit}}}
- Lucro mensal máximo potencial: R$ {{{maxMonthlyProfit}}}

Forneça uma análise de ROI concisa e encorajadora e uma projeção financeira, destacando a rapidez com que o guia se paga e o potencial de ganhos mensais significativos. Concentre-se na proposta de valor. A saída deve ser uma única string formatada para um prospectivo instalador solar em Português do Brasil.`,
});

// --- Flow Definition ---
const personalizedRoiCalculatorFlow = ai.defineFlow(
  {
    name: 'personalizedRoiCalculatorFlow',
    inputSchema: PersonalizedRoiInputSchema,
    outputSchema: PersonalizedRoiOutputSchema,
  },
  async (input) => {
    const {monthlyInstallationsTarget} = input;

    // Perform the calculations within the flow
    const breakEvenInstallations = Math.ceil(GUIDE_COST / MIN_PROFIT_PER_INSTALLATION);
    const minMonthlyProfit = monthlyInstallationsTarget * MIN_PROFIT_PER_INSTALLATION;
    const maxMonthlyProfit = monthlyInstallationsTarget * MAX_PROFIT_PER_INSTALLATION;

    // Call the prompt to generate the narrative ROI analysis
    const {output: roiAnalysisText} = await roiAnalysisGeneratorPrompt({
      monthlyInstallationsTarget,
      guideCost: GUIDE_COST,
      breakEvenInstallations,
      minMonthlyProfit,
      maxMonthlyProfit,
    });

    if (!roiAnalysisText) {
      throw new Error('Failed to generate ROI analysis text from the prompt.');
    }

    // Return the combined result
    return {
      roiAnalysis: roiAnalysisText,
      breakEvenInstallations,
      minMonthlyProfit,
      maxMonthlyProfit,
      guideCost: GUIDE_COST,
    };
  }
);
