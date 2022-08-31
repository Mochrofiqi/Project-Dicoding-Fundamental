class SearchWord extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="input-group mb-3 p-5">
      <input type="text" class="form-control" id="search-word" placeholder="Cari..">
      <button class="btn btn-outline-secondary" type="button" id="search-button">Search</button>
    </div>
      `;
  }
}

customElements.define("search-word", SearchWord);