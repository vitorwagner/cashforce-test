<template>
  <table>

    <tr>
      <th>NOTA FISCAL</th>
      <th>SACADO</th>
      <th>CEDENTE</th>
      <th>EMISSÃO</th>
      <th>VALOR</th>
      <th>STATUS</th>
    </tr>
    <tr v-for="order in tableData" :key="order.id" id="table-body">
      <td>{{ order.nNf }}</td>
      <td>{{ order.buyer.name }}</td>
      <td>{{ order.provider.name }}</td>
      <td>{{ new Intl.DateTimeFormat("pt-BR").format(new Date(order.emissionDate))
        }}</td>
      <td id="table-body-value">{{ new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(+order.value) }}</td>
      <td id="table-body-status">{{ buyerStatus[order.orderStatusBuyer] }}</td>
      <p id="buyer-data">Dados do cedente</p>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      buyerStatus: [
        "PENDENTE DE CONFIRMAÇÃO",
        "PEDIDO CONFIRMADO",
        "NÃO RECONHECE O PEDIDO",
        "MERCADORIA NÃO RECEBIDA",
        "RECEBIDA COM AVARIA",
        "DEVOLVIDA",
        "RECEBIDA COM DEVOLUÇÃO PARCIAL",
        "RECEBIDA E CONFIRMADA",
        "PAGAMENTO AUTORIZADO",
      ],
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      const response = await fetch('http://localhost:3001/orders');
      const data = await response.json();

      this.tableData = data;
      console.log(this.tableData);
    }
  }
}

</script>

<style scoped>
table {
  margin-left: 30px;
  margin-right: 30px;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 18px;
}

th {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #a1a8b8;
  text-align: left;
}

th,
td {
  padding: 10px 40px 10px 10px;
  padding-left: 30px;
}

#table-body {
  border-collapse: collapse;
  box-shadow: 0 0 0 1px rgb(223, 226, 235);
  border-radius: 10px;
  height: 65px;
  font-size: 12px;
}

#table-body-value,
#table-body-status {
  color: rgb(0, 173, 140);
}

#buyer-data {
  border: 2px solid rgb(202, 211, 255);
  border-radius: 40px;
  text-align: center;
  padding: 10px 60px;
  margin-top: 10px;
  margin-right: 30px;
}

#buyer-data:hover {
  background-color: rgb(0, 173, 140);
  color: white;
  border: 2px solid rgb(0, 173, 140);
  cursor: pointer;
}
</style>