<template>
  <div>
    <child-component
      :message="parentMessage"
      @messageToParent="receiveMessageFromChild"
    ></child-component>
  </div>

  <div>
    <p>{{ messageFromChild }}</p>
  </div>
</template>

<script>
import ChildComponent from "../components/ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: "Hello from parent!",
      messageFromChild: "",
    };
  },
  methods: {
    receiveMessageFromChild(message) {
      this.messageFromChild = message;
    },
  },
};
</script>