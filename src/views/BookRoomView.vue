<script setup>
import MeetingInfo from '../components/MeetingInfo.vue';
import RoomInfo from '../components/RoomInfo.vue';
import { ref, computed } from 'vue';

const roomInfo = ref(null);
const meetingInfo = ref(null);

const selectedUnit = computed(() => roomInfo.value?.selectedUnit || '');
const selectedRoom = computed(() => roomInfo.value?.selectedRoom || '');
const capacity = computed(() => roomInfo.value?.capacity || '');
const selectedDate = computed(() => meetingInfo.value?.selectedDate || '');
const startTime = computed(() => meetingInfo.value?.startTime || '');
const endTime = computed(() => meetingInfo.value?.endTime || '');
const consumption = computed(
	() => meetingInfo.value?.selectedConsumptions || ''
);
const consumptionSelectedIds = computed(() => consumption.value.map(item => item.id));
const totalAttendance = computed(
	() => meetingInfo.value?.totalAttendance || ''
);
const consumptionNominal = computed(
	() => meetingInfo.value?.consumptionNominal || ''
);

const formFilled = computed(() => {
  return (
    selectedUnit.value &&
    selectedRoom.value &&
    capacity.value &&
    selectedDate.value &&
    startTime.value &&
    endTime.value &&
    consumption.value.length !== 0 &&
    totalAttendance.value &&
    consumptionNominal.value
  )
})

function showData() {
    alert(
        'Unit:' + selectedUnit.value + '\n' +
        'Ruang Meeting:' + selectedRoom.value + '\n' +
        'Kapasitas:' + capacity.value + '\n' +
        'Tanggal Rapat:' + selectedDate.value + '\n' +
        'Waktu Mulai:' + startTime.value + '\n' +
        'Waktu Selesai:' + endTime.value + '\n' +
        'Jenis Konsumsi:' + consumptionSelectedIds.value + '\n' +
        'Jumlah Peserta:' + totalAttendance.value + '\n' +
        'Nominal Konsumsi:' + consumptionNominal.value
        )
}
</script>

<template>
	<section class="book-room">
		<div class="card">
			<div class="card-body p-0">
				<div class="card-section">
					<h6>Informasi Ruang Meeting</h6>
					<RoomInfo ref="roomInfo" />
				</div>
				<hr class="border" />
				<div class="card-section">
					<h6>Informasi Rapat</h6>
					<MeetingInfo ref="meetingInfo" :capacity="capacity" />
				</div>
				<hr class="border" />
				<div class="card-button text-end">
					<router-link class="btn btn-cancel" to="/ruang-meeting">Batal</router-link>
					<button @click="showData" class="btn btn-fill" :disabled="!formFilled">
						Simpan
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.book-room {
	margin-top: 2rem;
}

.card-section > * + * {
	margin-top: 1rem;
}

.card {
	box-shadow: 0px 4px 20px 0px #6a6a6a1a;
	padding: 1.25rem 1.75rem;
	border: 1px solid #eeeeee;
	border-radius: 8px;
}

.card-body > * + * {
	margin-top: 2.25rem !important;
}

hr {
	border: 2px solid #eeeeee;
	margin: 0;
}

.card-button > * + * {
	margin-left: 0.5rem;
}

.btn-fill {
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.192rem;
	letter-spacing: 0.03em;
	padding: 0.75rem 1rem 0.75rem 1rem;
	background-color: var(--color-primary);
	color: white;
}

.btn-fill:focus {
	background-color: var(--color-primary);
	color: white;
}

.btn-cancel {
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.192rem;
	letter-spacing: 0.03em;
	padding: 0.75rem 1rem 0.75rem 1rem;
	background-color: white;
	color: #ff6363;
}

.btn-cancel:focus {
	background-color: white;
	color: #ff6363;
}
</style>
