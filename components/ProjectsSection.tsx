import React from 'react';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-card">
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI-Text to 3D</div>
          </div>
          <div className="project-content">
            <h3>AI-based Image to 3D Model Generator</h3>
            <p>Transform text prompts into stunning images and then into interactive 3D models using local LLM and Openfabric ecosystem. Features memory persistence, voice interaction, and seamless app chaining.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LLaMA</span>
              <span className="tech-tag">Openfabric</span>
              <span className="tech-tag">Pinecone</span>
              <span className="tech-tag">Streamlit</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/AI_based-Image_to_3D_model_generator" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Blockchain</div>
          </div>
          <div className="project-content">
            <h3>Blockchain Cryptocurrency Exchange</h3>
            <p>Decentralized cryptocurrency exchange platform built with smart contracts. Features secure trading, wallet integration, and real-time market data with a modern web interface.</p>
            <div className="project-tech">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Smart Contracts</span>
              <span className="tech-tag">Web3</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/Blockchain-Cryptocurrency-Exchange.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI Extractor</div>
          </div>
          <div className="project-content">
            <h3>Smart Contract Extraction with AI</h3>
            <p>AI-powered contract parsing system that extracts, validates, and transforms key fields from contract documents using LLMs. Features hybrid validation with regex/NLP techniques and integration with Zenskar API.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">GPT-4</span>
              <span className="tech-tag">SpaCy</span>
              <span className="tech-tag">LLM</span>
              <span className="tech-tag">NLP</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/Smart-Contract-Extraction-with-AI" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI-CSV Modifier</div>
          </div>
          <div className="project-content">
            <h3>AI-enabled CSV Modifier</h3>
            <p>Intelligent CSV data modification tool powered by AI. Automatically processes and modifies CSV files with smart data transformation capabilities, featuring input/output directory management and comprehensive logging.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">AI</span>
              <span className="tech-tag">CSV Processing</span>
              <span className="tech-tag">Data Transformation</span>
              <span className="tech-tag">Logging</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/AI-enabled-csv-Modifier" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI-ChatBot</div>
          </div>
          <div className="project-content">
            <h3>MAYA - The Chat Bot</h3>
            <p>Advanced AI chatbot with a modern web interface built using React and TypeScript. Features intelligent conversation capabilities, real-time responses, and a user-friendly design. Deployed on Vercel for seamless accessibility.</p>
            <div className="project-tech">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/MAYA-The-chat-bot.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              <a href="https://maya-the-chat-bot.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Django</div>
          </div>
          <div className="project-content">
            <h3>Django Event Manager</h3>
            <p>Full-stack event management platform built with Django. Features event creation, management, user registration, and comprehensive event tracking with a modern web interface.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Django</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/Django-Event-manager.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AgenticAI</div>
          </div>
          <div className="project-content">
            <h3>Multi-Agent AI Startup Builder</h3>
            <p>AI-powered web application that helps entrepreneurs create and refine business ideas using multiple AI agents. Features startup name generation, business model creation, and elevator pitch crafting with collaborative AI insights.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Streamlit</span>
              <span className="tech-tag">LiteLLM</span>
              <span className="tech-tag">CrewAI</span>
              <span className="tech-tag">Docker</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/AI-Startup-builder.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Blockchian-NFT</div>
          </div>
          <div className="project-content">
            <h3>SafeCase - NFT Marketplace on Hive</h3>
            <p>Decentralized application (DApp) built on the Hive blockchain for secure, transparent, and tamper-proof management of digital assets. Features image upload, editing, versioning, and authentication with immutable blockchain history.</p>
            <div className="project-tech">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Hive Blockchain</span>
              <span className="tech-tag">IPFS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/NFT-market-place-on-Hive.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">VoicebotAI</div>
          </div>
          <div className="project-content">
            <h3>Voice AI Chatbot</h3>
            <p>Voice AI Chatbot that allows users to interact using voice input and receive spoken responses in real-time. Features speech-to-text transcription with Whisper ASR, AI responses using Google Gemini, and text-to-speech conversion with pyttsx3.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Whisper ASR</span>
              <span className="tech-tag">Google Gemini AI</span>
              <span className="tech-tag">pyttsx3</span>
              <span className="tech-tag">Gradio</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhangi-mish/My-replication-voicebot.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 