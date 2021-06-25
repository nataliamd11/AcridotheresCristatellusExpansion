<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div style="margin-left: 4rem;">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <ul class="navbar-nav collapse navbar-collapse mr-auto" id="navbarTogglerDemo01">
                <li class="nav-item active">
                    <a class="nav-link color-light" href="#">Item 1 <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled color-light" href="#" tabindex="-1" aria-disabled="true">Item 2</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link disabled color-light" to="/">Home</router-link> 
                </li>
            </ul>
        </div>
    </nav> -->
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
    .navbar-style {
        background-color: rgb(95, 90, 90);
    }
    .color-light {
        color: antiquewhite;
        font-weight: 400;
        margin-left: 2rem;
    }

    .nav-link:focus, .nav-link:hover{
        color: white;
    }
    .nav-item:active {
        color: white;
    }
</style>