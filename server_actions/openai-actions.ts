'use server';

import { OpenAI } from "openai";

// Define the type for the response
export async function getOpenAIResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '', // Ensure the API key is in your .env
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: systemPrompt },
                 { role: "user", content: userPrompt }
      ],
      response_format: { "type": "json_object" },
    });

    // Return the completion text
    return response.choices[0].message.content || '';
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Error in fetching data from OpenAI.";
  }
}