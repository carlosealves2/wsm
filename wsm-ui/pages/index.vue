<script setup lang="ts">
import type {Widget} from "~/components/models/widget";
import {ref} from "vue";

const widgets = ref<Widget[]>([
  {
    id: 1,
    title: "Widget 1",
    grid: {
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    }
  },
  {
    id: 2,
    title: "Widget 2",
    grid: {
      x: 2,
      y: 0,
      w: 2,
      h: 1,
    }
  },
  {
    id: 3,
    title: "Widget 3",
    grid: {
      x: 0,
      y: 2,
      w: 2,
      h: 1,
    }
  },
  {
    id: 4,
    title: "Widget 4",
    grid: {
      x: 2,
      y: 2,
      w: 1,
      h: 2,
    }
  },
  {
    id: 5,
    title: "Widget 5",
    grid: {
      x: 3,
      y: 2,
      w: 1,
      h: 2,
    },
  },
  {
    id: 6,
    title: "Widget 6",
    grid: {
      x: 0,
      y: 3,
      w: 2,
      h: 1,
    }
  }
]);
</script>

<template>
  <NuxtLayout>
    <div class="p-8 bg-gray-50 min-h-screen">
      <WidgetGrid :widgets="widgets"/>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>