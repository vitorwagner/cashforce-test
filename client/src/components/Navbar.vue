<template>
  <div class="navbar">
    <img src="../assets/image.png" class="logo" alt="Cashforce logo" />
    <img src="../assets/image3.png" class="nf-icon" alt="Icone notas fiscais" />

  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  width: 288px;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(251, 253, 254);
  margin: 0;
}

.logo {
  height: 80px;
}

.nf-icon {
  width: 50%;
  height: 64px;
  border-left: 5px solid rgb(31, 183, 154);
  padding-left: 10px;
}

.nf-icon:hover {
  cursor: pointer;
}
</style>