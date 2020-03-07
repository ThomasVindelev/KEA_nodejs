$(document).ready(() => {
    let nav_bar = $("#nav-bar")
    nav_bar.append(
        `<nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="background-image: linear-gradient(#00010D, #222329);">
        <a class="navbar-brand" href="/">node.js documentation</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto" id="menu">
            </ul>
        </div>

        </nav>`)

    let menu = $("#menu")
    menu.append(
        `<li class="nav-item">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/syntax">Syntax</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/commands">Commands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/REST">REST</a>
        </li>`)
})
