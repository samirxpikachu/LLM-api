const axios = require('axios');

async function generateLLMResponse(query) {
  try {
    const prompt = `${query}`;
    const apiUrl = 'https://api.together.xyz/inference';
    
    const response = await axios.get(apiUrl, {
      params: {
        model: "NousResearch/Nous-Hermes-Llama2-13b",
        max_tokens: 512,
        prompt,
        request_type: "",
        temperature: 0.7,
        top_p: 0.95,
        top_k: 50,
        repetition_penalty: 1,
        stream_tokens: false,
        sessionKey: "",
      },
      headers: {
        Authorization: 'Bearer e4d624c65a26e4d68c4ffcfcb187dfc5aa03f31a559ce2e30c1a571a202db2f2',
        'Content-Type': 'application/json',
      },
    });

    const textResult = response.data?.output?.choices?.[0]?.text || 'An error occurred.';
    return textResult;
  } catch (error) {
    throw error;
  }
}

module.exports = { generateLLMResponse };
