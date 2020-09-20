<template>
  <div id="axios">
    <h2>Axios</h2>
  </div>
</template>

<script>

export default {
  name: "Axios",
  created() {
    this.$axios.post('/mock/demo/axios',{
      t: new Date().getTime()
    }).then((resp) => {
      console.log(resp)
    }).catch((resp) => {
      console.error(resp)
    })
  }
}
</script>

<style lang="scss">

</style>

<style scoped>

</style>
