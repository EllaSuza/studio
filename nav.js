class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <a href="/#studio">
                <div id="studioBtn"><span></span>+</div>
            </a>
            <a href="/#ella">
                <div id="ellaBtn"><span style="transform:rotate(135deg);"></span>ELLA SUZANNE<span style="transform:rotate(-45deg);"></span></div>
				<div id="ellaPhone">ES</div>
            </a>
            <a href="/#market">
                <div id="marketBtn">+<span></span></div>
            </a>
        </nav>
    `;
  }
}
customElements.define('my-nav', MyNav);
