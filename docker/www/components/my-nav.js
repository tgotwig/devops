class MyNav extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <nav>
        <div class="nav-wrapper">
          <a href="index.html" class="brand-logo">Home</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
      </nav>
      
      <style>
        nav {
          padding-left: 1rem;
        }
      </style>
    `
  }
}

window.customElements.define('my-nav', MyNav)
