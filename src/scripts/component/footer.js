class FooterWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
        <div id="copyright">
            <div class="wrapper">
                <b>KBBI Copyright &copy; 2022. </b> Moch. Rofiqi
            </div>
        </div>
    </footer>
    `;
    }
}

customElements.define("footer-web", FooterWeb);