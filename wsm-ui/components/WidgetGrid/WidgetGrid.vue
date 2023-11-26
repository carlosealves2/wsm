<script setup lang="ts">
import {GridStack} from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";
import type {Widget} from "~/components/models/widget";
import {onMounted, ref} from "vue";


export interface Props {
  widgets?: Widget[];
}

const props = withDefaults(defineProps<Props>(), {});

const grid = ref<GridStack | null>(null);


function initGridStack() {
  grid.value = GridStack.init({
    column: 4,
    cellHeight: 100,
    minRow: 1,
    margin: 10,
  });

  makeWidgets(props.widgets!)
}

function makeWidgets(widgets: Widget[]) {
  widgets.forEach((widget) => {
    makeWidget(widget);
  });
}

function makeWidget(widget: Widget) {
  const elementSelector = `#${widget.id}`;
  return grid.value?.makeWidget(
      elementSelector
  );
}


onMounted(() => {
  initGridStack();
});
</script>

<template>
  <div class="grid-stack">
    <div
        v-for="widget in widgets"
        :key="widget.id"
        :id="widget.id"
        :gs-id="widget.id"
        :gs-x="widget.grid.x"
        :gs-y="widget.grid.y"
        :gs-w="widget.grid.w"
        :gs-h="widget.grid.h"
    >
      <div
          class="grid-stack-item-content p-4 bg-gray-200 m-3 rounded shadow-md flex items-center justify-center text-gray-700">
        <span class="text-md">
          {{ widget.title }}
        </span>
      </div>
    </div>
  </div>
</template>
