<script setup>
import { ref, onMounted, watch, defineExpose, defineEmits } from 'vue';
import axios from 'axios';

const props = defineProps({
	checkedValue: Array,
});
const emit = defineEmits(['update:checkedConsumptions']);

const consumptions = ref([]);
const checkedIds = ref([]);

onMounted(() => {
	axios
		.get(
			'https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi'
		)
		.then((response) => {
			consumptions.value = response.data;
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
});

watch(() => props.checkedValue, (newVal) => {
		updateCheckedIds(newVal);
	}
);

const updateCheckedIds = (newVal) => {
	checkedIds.value = [];
	newVal.forEach((val) => {
		checkedIds.value.push(val);
    });
	emitCheckedConsumptions();
};

const emitCheckedConsumptions = () => {
	const selectedConsumptions = consumptions.value.filter(item => checkedIds.value.includes(Number(item.id))); 
	emit('update:checkedConsumptions', selectedConsumptions);
};
</script>

<template>
	<div class="form-input">
		<div class="form-input-label">Jenis Konsumsi</div>
		<div
			class="form-check"
			v-for="consumption in consumptions"
			:key="consumption.id">
			<input
				class="form-check-input"
				type="checkbox"
				:value="consumption.id"
				:id="'consumption-' + consumption.id"
				v-model="checkedIds" disabled/>
			<label
				class="form-check-label"
				:for="'consumption-' + consumption.id">
				{{ consumption.name }}
			</label>
		</div>
	</div>
</template>

<style scoped>
.form-check-input:disabled, .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
 	opacity: 1 !important;
}
</style>
