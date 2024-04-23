<template>
    <div>{{message}}</div>
    <button @click="sendMessage">Send Message to Parent</button>
</template>

<script>


export default {
props: ['message'],

  methods: {
    sendMessage() {
      this.$emit('messageToParent', 'Hello from child!!');
    },
  }
}
</script>
