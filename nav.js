class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <a href="/studio/#portfolioIndex">
                <div id="portfolio"><span></span>PORTFOLIO</div>
            </a>
            <a href="/studio/#ellaPage">
                <div id="ella"><span style="transform:rotate(135deg);"></span>ELLA SUZANNE<span style="transform:rotate(-45deg);"></span></div>
				<div id="ellaPhone">ES</div>
            </a>
            <a href="/studio/#paintingIndex">
                <div id="contact">PAINTINGS<span></span></div>
            </a>
        </nav>
    `;
  }
}
customElements.define('my-nav', MyNav);