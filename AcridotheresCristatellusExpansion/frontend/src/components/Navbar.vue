<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid m-2 ms-lg-5">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-menu" aria-controls="collapse-menu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapse-menu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li id="home-route" class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Expansion Map</router-link>
        </li>
        <li id="species-route" class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/species/">About the species</router-link>
        </li>
        <li id="data-route" class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">About the data</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
      routeName() {
        console.log(this.$route.name);
        return this.$route.name
      },
  },
  methods: {
    removeActiveClass() {
      let routesEl = document.getElementsByTagName("li");
      routesEl.forEach(element => {
        console.log(element);
        element.classList.remove("active");
      });
    },
  },
  watch: {
    routeName() {
      this.removeActiveClass();
      let routeElement;
      document.class
      if (this.routeName === "Home") {
        routeElement = document.getElementById("home-route");
        routeElement.classList.add("active");
      } else if (this.routeName === "Species") {
        routeElement = document.getElementById("species-route");
        routeElement.classList.add("active");
      } else {
        routeElement = document.getElementById("data-route");
        routeElement.classList.add("active");
      }
    }
    }
}
</script>

<style scoped>
    .bg-light {
        color: #2a2420;
        background-color: #faebd7 !important;
    }
    .nav-item.active {
        text-decoration: underline;
    }

   .nav-item:hover {
	    color: rgba(0,0,0,.7);
        font-weight: 600;
    }
</style>