<template>
  <div :class="['modal']">
    <button @click="toggleFalse">x</button>
    <slot>Loading slot</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Modal",
  props: {},
  setup() {
    const store = useStore();

    const toggleFalse = (): void => {
      store.commit("switchModalFalse");
      store.commit("setScrimState", false);
    };

    onMounted(() => {
      store.commit("setScrimState", true);
    });

    return {
      toggleFalse
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.modal {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 30px 50px;
  transform: translate(-50%, -50%);
  background-color: #ebe6d8;
  border-radius: 10px;

  button {
    float: right;
  }
}
</style>
