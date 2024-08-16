<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import Select from './FormSelect.vue';
import Datepicker from '../components/Datepicker.vue';
import Checkbox from '../components/FormCheckbox.vue';

import { defineProps } from 'vue';

const props = defineProps({
  capacity: [String, Number]
});

const datepicker = ref(null);

const selectedDate = computed(() => datepicker.value?.selectedDate || '');
const startTime = ref('');
const endTime = ref('');
const totalAttendance = ref('');
const selectedConsumptions = ref([]);

const consumptionNominal = computed(() => {
  const totalAttendanceValue = parseFloat(totalAttendance.value) || 0;
  const totalMaxPrice = selectedConsumptions.value.reduce((sum, item) => sum + item.maxPrice, 0);
  return totalAttendanceValue * totalMaxPrice;
});

const formattedConsumptionNominal = computed({
  get() {
    const number = consumptionNominal.value;
    return number.toLocaleString('id-ID');
  },
  set(value) {
    const number = parseFloat(value.replace(/\./g, '').replace(/,/g, '.'));
    if (!isNaN(number)) {
      consumptionNominal.value = number;
    }
  }
});

const availableTimes = computed(() => {
	const times = [];
	let currentTime = new Date();
	currentTime.setHours(0, 0, 0, 0);
	const endTime = new Date();
	endTime.setHours(23, 45, 0, 0);

	while (currentTime <= endTime) {
		times.push(currentTime.toTimeString().substring(0, 5));
		currentTime.setMinutes(currentTime.getMinutes() + 15);
	}
	return times;
});

const availableStartTimes = computed(() => {
	return availableTimes.value.filter(
		(time) => !endTime.value || time < endTime.value
	);
});

const availableEndTimes = computed(() => {
	return availableTimes.value.filter(
		(time) => !startTime.value || time > startTime.value
	);
});

const selectedCheckbox = computed(() => {
	const values = [];

	if (startTime.value && startTime.value < '11:00') {
		values.push(1);
	}

	if (endTime.value && (endTime.value >= '11:00' || (startTime.value && startTime.value >= '11:00' && startTime.value < '14:00'))) {
		values.push(2);
	}

	if (endTime.value && (endTime.value >= '14:00' || (startTime.value && startTime.value >= '14:00'))) {
		values.push(3);
	}

	return values;
});

const filterNumericInput = (event) => {
  const input = event.target;
  let filteredValue = input.value.replace(/[^0-9]/g, '');

  let numericValue = Number(filteredValue);

  if (numericValue > props.capacity) {
    numericValue = props.capacity;
  } else if (numericValue < 0) {
    numericValue = 0;
  }

  filteredValue = numericValue.toString();
  input.value = filteredValue;
  totalAttendance.value = filteredValue;
};

const handleCheckedConsumptions = (consumptions) => {
  selectedConsumptions.value = consumptions;
};

defineExpose({
  selectedDate,
  startTime,
  endTime,
  selectedConsumptions,
  totalAttendance,
  consumptionNominal,
});
</script>

<template>
	<div class="row">
		<div class="col-3">
			<Datepicker ref="datepicker" />
		</div>

		<div class="col-3">
			<Select
				v-model="startTime"
				id="input-start-time"
				label="Waktu Mulai">
				<template #options>
					<option value="">Pilih Waktu Mulai</option>
					<option
						v-for="time in availableStartTimes"
						:key="'start-' + time"
						:value="time">
						{{ time }}
					</option>
				</template>
			</Select>
		</div>

		<div class="col-3">
			<Select v-model="endTime" id="input-end-time" label="Waktu Selesai">
				<template #options>
					<option value="">Pilih Waktu Selesai</option>
					<option
						v-for="time in availableEndTimes"
						:key="'start-' + time"
						:value="time">
						{{ time }}
					</option>
				</template>
			</Select>
		</div>
	</div>

	<div class="row">
		<div class="col-3">
			<Checkbox :checked-value="selectedCheckbox" @update:checkedConsumptions="handleCheckedConsumptions"/>
		</div>
	</div>

	<div class="row">
		<div class="col-3 form-input">
			<label for="input-total-attendance" class="form-input-label">Jumlah Peserta</label>
			<input
				id="input-total-attendance"
        v-model="totalAttendance"
				type="text"
        @input="filterNumericInput"
				class="form-control"
				placeholder="Masukkan Jumlah Peserta" />
		</div>
	</div>

	<div class="row">
		<div class="col-3 form-input">
			<label for="input-consumption-nominal" class="form-input-label">Nominal Konsumsi</label>
			<div class="input-group mb-3">
				<span class="input-group-text" id="currency">Rp.</span>
				<input
					id="input-consumption-nominal"
          			v-model="formattedConsumptionNominal"
					type="text"
					class="form-control"
					placeholder="0"/>
			</div>
		</div>
	</div>
</template>
