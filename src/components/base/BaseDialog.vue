<template>
  <transition name="dialog-transition">
    <dialog v-if="open" class="dialog" :class="`dialog-${size}`" @keydown.esc="onClose">
      <div v-if="!headerHidden" class="dialog-header">
        <h4 class="header-title">
          <slot name="header"></slot>
        </h4>
        <BaseButton class="close-button" @click="onClose" />
      </div>

      <div class="dialog-content">
        <BaseButton v-if="headerHidden && !closeHidden" class="close-button" @click="onClose" />
        <slot name="content"></slot>
      </div>
    </dialog>
  </transition>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'BaseDialog',
  components: {
    BaseButton
  },
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(size) {
        return ['small', 'medium', 'large', 'maximum'].indexOf(size) !== -1
      }
    },
    headerHidden: {
      type: Boolean,
      required: false,
      default: false
    },
    closeHidden: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    open() {
      if (this.open) this.$nextTick(() => this.$el.showModal())
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  min-height: 50%;
  max-height: 90%;
  top: 5vh;
  min-width: 300px;
  max-width: 1024px;
  min-height: 300px;
  border-radius: 0.3rem;
  width: 90%;
  background: rgb(255, 255, 255);
  border: 0;
  outline: 0;
  padding: 0;
  overflow: hidden;
  pointer-events: auto;
  transition: opacity $transition-standard linear;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
}

.dialog-minimum {
  max-width: 300px;
}

.dialog-small {
  max-width: 576px;
}

.dialog-medium {
  max-width: 768px;
}

.dialog-large {
  max-width: 1024px;
}

.dialog-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(150, 150, 150);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
}

.header-title {
  margin: 0;
}

.dialog-content {
  background-clip: padding-box;
  padding: 1rem;
  position: relative;
  text-align: left;
  overflow-wrap: break-word;
  overflow-y: auto;
  max-height: 85vh;
}

.close-button {
  margin-right: 0.5rem;
  margin-left: auto;
}

.dialog-transition-enter-active,
.dialog-transition-leave-active {
  transition: opacity $transition-standard linear;
}

.dialog-transition-enter-active,
.dialog-transition-leave-active {
  opacity: 0;
}
</style>
