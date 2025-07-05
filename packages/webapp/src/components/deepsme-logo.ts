import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

@customElement('deepsme-logo')
export class DeepSMELogo extends LitElement {
  @property({ type: Number }) size = 48;
  @property({ type: Boolean }) animated = true;

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .logo-container:hover {
      transform: scale(1.05);
    }
    
    .logo-svg {
      width: var(--logo-size, 48px);
      height: var(--logo-size, 48px);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .logo-container:hover .logo-svg {
      filter: drop-shadow(0 4px 12px rgba(46, 139, 87, 0.3));
    }
    
    .animated .circuit-node {
      animation: pulse 2s infinite ease-in-out;
    }
    
    .animated .circuit-line {
      animation: flow 3s infinite ease-in-out;
    }
    
    .animated .ai-chip {
      animation: glow 2.5s infinite ease-in-out;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes flow {
      0% { stroke-dasharray: 0 20; }
      50% { stroke-dasharray: 10 10; }
      100% { stroke-dasharray: 20 0; }
    }
    
    @keyframes glow {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; transform: scale(1.02); }
    }
  `;

  private logoSVG = `
    <svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2E8B57;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Main circle background -->
      <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" stroke="#fff" stroke-width="2"/>
      
      <!-- Building/Business icon -->
      <rect x="12" y="18" width="6" height="12" fill="#fff" rx="1"/>
      <rect x="20" y="15" width="6" height="15" fill="#fff" rx="1"/>
      <rect x="28" y="20" width="6" height="10" fill="#fff" rx="1"/>
      
      <!-- Windows on buildings -->
      <rect x="14" y="20" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="16" y="20" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="14" y="23" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="16" y="23" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      
      <rect x="22" y="17" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="24.5" y="17" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="22" y="20" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="24.5" y="20" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      
      <rect x="30" y="22" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="32" y="22" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="30" y="25" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      <rect x="32" y="25" width="1.5" height="1.5" fill="url(#logoGradient)"/>
      
      <!-- AI/Tech elements - circuit lines -->
      <path class="circuit-line" d="M8 12 L16 12 L16 8 L20 8" stroke="url(#accentGradient)" stroke-width="2" fill="none"/>
      <path class="circuit-line" d="M28 8 L32 8 L32 12 L40 12" stroke="url(#accentGradient)" stroke-width="2" fill="none"/>
      <path class="circuit-line" d="M8 36 L16 36 L16 40 L20 40" stroke="url(#accentGradient)" stroke-width="2" fill="none"/>
      <path class="circuit-line" d="M28 40 L32 40 L32 36 L40 36" stroke="url(#accentGradient)" stroke-width="2" fill="none"/>
      
      <!-- Circuit nodes -->
      <circle class="circuit-node" cx="8" cy="12" r="2" fill="url(#accentGradient)"/>
      <circle class="circuit-node" cx="40" cy="12" r="2" fill="url(#accentGradient)"/>
      <circle class="circuit-node" cx="8" cy="36" r="2" fill="url(#accentGradient)"/>
      <circle class="circuit-node" cx="40" cy="36" r="2" fill="url(#accentGradient)"/>
      
      <!-- Central AI brain/chip -->
      <rect class="ai-chip" x="20" y="6" width="8" height="6" fill="url(#accentGradient)" rx="1"/>
      <rect x="21" y="7" width="2" height="1" fill="#fff"/>
      <rect x="25" y="7" width="2" height="1" fill="#fff"/>
      <rect x="21" y="9" width="6" height="1" fill="#fff"/>
    </svg>
  `;

  render() {
    return html`
      <div 
        class="logo-container ${this.animated ? 'animated' : ''}"
        style="--logo-size: ${this.size}px"
      >
        <div class="logo-svg">
          ${unsafeSVG(this.logoSVG)}
        </div>
      </div>
    `;
  }

  private onClick() {
    this.dispatchEvent(new CustomEvent('logo-click', {
      bubbles: true,
      composed: true,
      detail: { message: 'DeepSME Copilot logo clicked!' }
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.onClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deepsme-logo': DeepSMELogo;
  }
}
