<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div v-for="(block, index) in blocks" :key="index">
        <template v-if="block.type === 'text'">
          <label>{{ block.props.title }}</label>
          <input type="text" :placeholder="block.props.placeholder" v-model="formData[block.token]" :required="block.props.required">
        </template>
        <template v-else-if="block.type === 'checkbox'">
          <label>
            <input type="checkbox" v-model="formData[block.token]">
            {{ block.props.title }}
          </label>
        </template>
        <template v-else-if="block.type === 'date'">
          <label>{{ block.props.title }}</label>
          <input type="date" :placeholder="block.props.placeholder" v-model="formData[block.token]" :required="block.props.required && formData[block.props.required]">
        </template>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      blocks: {
        PERSON_NAME: {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Doe"
          }
        },
        IS_PERSON_MINOR: {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "Is the current person minor?",
            default: false
          }
        },
        PERSON_DOB: {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000"
          }
        }
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        console.log("Form is valid, submitting...");
        console.log(this.formData);
      } else {
        console.log("Form is invalid, please fill in all required fields.");
      }
    },
    validateForm() {
      for (let token in this.blocks) {
        const block = this.blocks[token];
        if (block.props.required && !this.formData[block.token]) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>
