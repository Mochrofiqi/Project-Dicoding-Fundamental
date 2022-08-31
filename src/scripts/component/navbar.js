class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="navbar"> 
          <h5 class="pt-1"> Selamat mencari kata berbasis KBBI INDONESIA</h5>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", Navbar);