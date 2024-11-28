'use server';

import { allPrompts } from "@/prompts/sample_prompt";
import { getOpenAIResponse } from "./openai-actions";


export async function getGroupCheckResponse(userCode: string, part: number): Promise<string> {
    const result = await getOpenAIResponse(allPrompts()[part]['prompt'], userCode);
    return result;
}