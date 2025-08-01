import { LLMModel, LLMModelProvider } from "@/types/llm"
export const provider: LLMModelProvider = {
  id: 'gemini',
  providerName: 'Gemini',
  apiStyle: 'gemini',
}

export const modelList: LLMModel[] = [
  {
    'id': 'gemini-2.5-pro',
    'displayName': 'Gemini 2.5 Pro',
    'supportVision': true,
    'supportTool': true,
    'selected': true,
    provider
  },
  {
    'id': 'gemini-2.5-flash',
    'displayName': 'Gemini 2.5 Flash',
    'supportVision': true,
    'supportTool': true,
    'selected': true,
    provider
  },
  {
    'id': 'gemini-2.0-flash',
    'displayName': 'Gemini 2.0 Flash',
    'supportVision': true,
    'supportTool': true,
    'selected': true,
    provider
  },
  {
    'id': 'gemini-2.0-flash-exp-image-generation',
    'displayName': 'Gemini2.0 Flash Exp Image Generation',
    'supportVision': true,
    'supportTool': false,
    'selected': true,
    provider
  }
]