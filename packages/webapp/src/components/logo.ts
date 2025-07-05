import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('deepsme-logo')
export class DeepSMELogo extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 48px;
      height: 48px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    :host(:hover) {
      transform: scale(1.1);
    }

    .logo-container {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .neural-pulse {
      animation: pulse 2s infinite;
    }

    .neural-pulse:nth-child(1) { animation-delay: 0s; }
    .neural-pulse:nth-child(2) { animation-delay: 0.3s; }
    .neural-pulse:nth-child(3) { animation-delay: 0.6s; }
    .neural-pulse:nth-child(4) { animation-delay: 0.9s; }
    .neural-pulse:nth-child(5) { animation-delay: 1.2s; }
    .neural-pulse:nth-child(6) { animation-delay: 1.5s; }

    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }

    .neural-synapse {
      animation: synapse 1.5s infinite;
    }

    .neural-synapse:nth-child(1) { animation-delay: 0s; }
    .neural-synapse:nth-child(2) { animation-delay: 0.2s; }
    .neural-synapse:nth-child(3) { animation-delay: 0.4s; }
    .neural-synapse:nth-child(4) { animation-delay: 0.6s; }
    .neural-synapse:nth-child(5) { animation-delay: 0.8s; }
    .neural-synapse:nth-child(6) { animation-delay: 1.0s; }
    .neural-synapse:nth-child(7) { animation-delay: 1.2s; }
    .neural-synapse:nth-child(8) { animation-delay: 1.4s; }

    @keyframes synapse {
      0% { opacity: 0.4; }
      50% { opacity: 0.9; }
      100% { opacity: 0.4; }
    }
  `;

  render() {
    return html`
      <div class="logo-container">
        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
              <stop offset="30%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="70%" style="stop-color:#06b6d4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
              <stop offset="70%" style="stop-color:#06b6d4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <!-- Main hexagonal base for SME structure -->
          <polygon points="24,4 35,10 35,26 24,32 13,26 13,10" fill="url(#aiGradient)" stroke="#1e40af" stroke-width="1.5" filter="url(#glow)"/>
          
          <!-- Neural network layers -->
          <circle cx="24" cy="18" r="12" fill="none" stroke="#06b6d4" stroke-width="0.8" opacity="0.4"/>
          <circle cx="24" cy="18" r="8" fill="none" stroke="#06b6d4" stroke-width="0.6" opacity="0.6"/>
          <circle cx="24" cy="18" r="5" fill="none" stroke="#06b6d4" stroke-width="0.4" opacity="0.8"/>
          
          <!-- SME Business nodes -->
          <circle cx="16" cy="10" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          <circle cx="32" cy="10" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          <circle cx="36" cy="18" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          <circle cx="32" cy="26" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          <circle cx="16" cy="26" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          <circle cx="12" cy="18" r="1.2" fill="#06b6d4" class="neural-pulse"/>
          
          <!-- Central AI processing core -->
          <circle cx="24" cy="18" r="4" fill="url(#coreGradient)" stroke="#ffffff" stroke-width="0.8">
            <animate attributeName="r" values="3.5;4.5;3.5" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <!-- Neural connections -->
          <path d="M16,10 Q20,14 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          <path d="M32,10 Q28,14 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          <path d="M36,18 Q30,18 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          <path d="M32,26 Q28,22 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          <path d="M16,26 Q20,22 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          <path d="M12,18 Q18,18 24,18" stroke="#06b6d4" stroke-width="0.8" fill="none" opacity="0.7"/>
          
          <!-- SME text -->
          <text x="24" y="20" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="5" font-weight="bold">SME</text>
          
          <!-- Business buildings -->
          <rect x="19" y="35" width="2" height="6" rx="0.5" fill="#06b6d4" opacity="0.8"/>
          <rect x="22" y="33" width="2" height="8" rx="0.5" fill="#06b6d4" opacity="0.8"/>
          <rect x="25" y="36" width="2" height="5" rx="0.5" fill="#06b6d4" opacity="0.8"/>
          <rect x="28" y="34" width="2" height="7" rx="0.5" fill="#06b6d4" opacity="0.8"/>
          
          <!-- Neural synapses -->
          <circle cx="20" cy="8" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="28" cy="8" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="38" cy="15" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="38" cy="21" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="28" cy="28" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="20" cy="28" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="10" cy="21" r="0.6" fill="#ffffff" class="neural-synapse"/>
          <circle cx="10" cy="15" r="0.6" fill="#ffffff" class="neural-synapse"/>
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deepsme-logo': DeepSMELogo;
  }
}
