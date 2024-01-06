# Multiple Large Language Model API Wrapper

**Created by Samir**

---

## Overview

This project serves as a wrapper for multiple large language models, providing a unified interface for easy integration. The primary functionality includes interaction with Google's Text Service API, ChatGPT, and a custom BardAI assistant.

---

## Installation

To use this API wrapper, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/samirdevp/multiple-lm-api-wrapper.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

## Usage

### Google's Text Service API

- **Endpoint:** /api/tools/text-service
- **Method:** POST
- **Body:**
  ```json
  {
    "prompt": "Your prompt text here"
  }
  ```
- **Response:**
  ```json
  {
    "output": "Generated text output"
  }
  ```

### ChatGPT

- **Endpoint:** /api/tools/chatgpt
- **Method:** GET
- **Query Parameter:**
  - question: Your question text
- **Response:**
  ```json
  {
    "response": "Generated response from ChatGPT"
  }
  ```

### BardAI

- **Endpoint:** /api/tools/bard
- **Method:** GET
- **Query Parameter:**
  - question: Your question text
- **Response:**
  ```json
  {
    "message": "Generated message",
    "imageUrls": ["url1", "url2"]
  }
  ```

## Credits

Samir - Creator

Feel free to explore and integrate this API wrapper into your projects!
