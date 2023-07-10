<template>
    <div>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html">MANGAVERSE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="bi bi-list"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <router-link to="/" class="nav-link">HOME</router-link>
              <router-link to="/products" class="nav-link">PRODUCTS</router-link>
              <router-link to="/admin" class="nav-link">ADMIN</router-link>
              <router-link to="/checkout" class="nav-link">CHECKOUT</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
    background-color: black;
    height: 5rem;
}

.navbar-brand:hover {
    color: red;
}

.navbar-brand {
    font-family: 'Bangers', cursive;
    font-size: 2rem;
    color: white;
}

.nav-link:hover {
    color: red;
}

.nav-link {
    color: white;
}

</style>