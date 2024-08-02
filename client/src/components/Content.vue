<script setup>
import TableComponent from './TableComponent.vue';
</script>

<template>
  <div class="content">
    <hr />
    <img src="../assets/image4.png" class="table-header" alt="Table header icon" />
    <TableComponent />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
}

.table-header {
  width: 255px;
  height: 53px;
  margin-left: 30px;
  margin-top: 30px;
}

hr {
  margin-top: 50px;
  padding: 0px;
  border: 1px solid rgb(239, 240, 245);
  width: 100%;
}
</style>