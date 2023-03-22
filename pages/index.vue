<template>
  <div>
    <HelloMessage :name="name" />
    <p>
      <input type="text" v-model="name" />
    </p>
  </div>
  <div>
    <CountButton :click-count="clickCount" :click-handler="clickHandler" />
  </div>
</template>

<script setup lang="ts">
import CountButton from '~~/components/CountButton.vue';

const name = ref("World");

const clickCount = useState<number>("clickCount", () => 0)
const clickHandler = () => {
  clickCount.value = clickCount.value + 1
}
</script>
