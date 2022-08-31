class TemplateHasil extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <div class="template">
      <div class="template2">
        <h4 class="pt-3 pb-1">Hasil Pencarian :</h4>
  
        <div class="p-4 word-element">
        </div>
      </div>
      </div>
    `;
    }
}

customElements.define("template-hasil", TemplateHasil);