<script setup>
import { ref, computed, onMounted, defineExpose } from 'vue';
import axios from 'axios';
import Select from './FormSelect.vue'

const units = ref([]);
const rooms = ref([]);

const selectedUnit = ref('');
const selectedRoom = ref('');

const capacity = ref('');

const filteredRooms = computed(() => {
	if (!selectedUnit.value) return [];
	return rooms.value.filter((room) => room.officeId === selectedUnit.value);
});

function onUnitChange() {
	selectedRoom.value = '';
    capacity.value = '';
}

function updateCapacity() {
  const room = rooms.value.find(room => room.id === selectedRoom.value);
  capacity.value = room ? room.capacity : '';
}

async function fetchData() {
	try {
		const unitsResponse = await axios.get(
			'https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice'
		);
		const roomsResponse = await axios.get(
			'https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms'
		);

		units.value = unitsResponse.data;
		rooms.value = roomsResponse.data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

onMounted(() => {
	fetchData();
});

defineExpose({
  selectedUnit,
  selectedRoom,
  capacity
});
</script>

<template>
	<div class="row">
		<div class="col-3">
			<Select
				v-model="selectedUnit"
				id="input-unit"
				label="Unit"
				@update:modelValue="onUnitChange">
				<template #options>
					<option value="">Pilih Unit</option>
					<option
						v-for="unit in units"
						:key="unit.id"
						:value="unit.id">
						{{ unit.officeName }}
					</option>
				</template>
			</Select>
		</div>
		<div class="col-3">
			<Select
				v-model="selectedRoom"
				id="input-meeting-room"
				label="Ruang Meeting"
				@update:modelValue="updateCapacity">
				<template #options>
					<option value="">Pilih Ruang Meeting</option>
					<option
						v-for="room in filteredRooms"
						:key="room.id"
						:value="room.id">
						{{ room.roomName }}
					</option>
				</template>
			</Select>
		</div>
	</div>
	<div class="row">
		<div class="col-3 form-input">
			<label for="input-capacity" class="form-input-label">Kapasitas</label>
			<input
				id="input-capacity"
				type="text"
				class="form-control"
				placeholder="0"
                :value="capacity"
				disabled />
		</div>
	</div>
</template>