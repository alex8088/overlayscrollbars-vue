<template>
  <div ref="rootRef" class="os-host">
    <div class="os-resize-observer-host"></div>
    <div class="os-padding">
      <div class="os-viewport">
        <div class="os-content">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-horizontal">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-vertical">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar-corner"></div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, onMounted, onUnmounted, watch, ref } from 'vue'
import OverlayScrollbars from 'overlayscrollbars'

export default defineComponent({
  name: 'OverlayScrollbars',
  props: {
    options: {
      type: Object as PropType<OverlayScrollbars.Options>
    },
    extensions: {
      type: [String, Array, Object] as PropType<OverlayScrollbars.Extensions>
    }
  },
  setup(props) {
    const rootRef = ref<HTMLElement>()
    const instance = ref<OverlayScrollbars | null>()

    onMounted(() => {
      if (rootRef.value) {
        instance.value = OverlayScrollbars(
          rootRef.value,
          props.options || {},
          props.extensions
        )
      }
    })

    onUnmounted(() => {
      if (instance.value && OverlayScrollbars.valid(instance.value)) {
        instance.value.destroy()
        instance.value = null
      }
    })

    watch(
      () => props.options,
      (c) => {
        if (instance.value && OverlayScrollbars.valid(instance.value)) {
          instance.value.options(c || {})
        }
      }
    )

    return {
      rootRef,
      instance
    }
  }
})
</script>
