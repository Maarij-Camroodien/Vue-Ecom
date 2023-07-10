<template>
  <Navbar/>
  
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Open+Sans:wght@300&family=Press+Start+2P&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rgba(32,33,36,255);
    overflow-x: hidden;
}

::-webkit-scrollbar{
        display: none;
    }

    h1 {
    color: white;
    font-family: 'Bangers', cursive;
    margin-top: 1rem;
}
</style>
