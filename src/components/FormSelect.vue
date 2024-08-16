<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '' 
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

// Define emits
const emit = defineEmits(['update:modelValue']);

// Local state
const localModelValue = ref(props.modelValue);

// Watch for prop changes to sync local value
watch(() => props.modelValue, (newValue) => {
  localModelValue.value = newValue;
});

// Emit changes when local value updates
function handleChange(event) {
  emit('update:modelValue', localModelValue.value);
}
</script>

<template>
    <div class="form-input">
        <label :for="id" class="form-input-label">{{ label }}</label>
        <select
            :id="id"
            class="form-select"
            v-model="localModelValue"
            @change="handleChange">
            <slot name="options"></slot>
        </select>
    </div>
</template>
