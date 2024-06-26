<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.png" alt="#">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {};
</script>
