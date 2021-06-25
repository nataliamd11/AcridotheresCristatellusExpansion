<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Montserrat, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.font-title {
  font-family: 'Signika', sans-serif;
  font-size: xx-large;
}

.font-subtitle {
  font-family: 'Signika', sans-serif;
  font-size: large;
}

.font-content {
  font-family: 'Montserrat', sans-serif;
}

.dark-background {
  font-family:'Signika', sans-serif;
  background-color:#fb607e;
  /* background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%); */
  color:rgb(245, 239, 230);
  font-weight: 400;
}

.dark-border {
  border-color: brown;
}

.dark-background-gradient {
  color: rgb(245, 239, 230);
  background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
  /* background: rgb(237,107,134);
  background: linear-gradient(90deg, rgba(237,107,134,1) 0%, rgba(244,71,107,1) 31%, rgba(228,13,58,1) 65%, rgba(176,21,52,1) 100%); */
}

</style>
