<script setup>
import { ref, computed } from 'vue';

const showCalendar = ref(false);
const selectedDate = ref(null);
const currentDate = ref(new Date());

const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

const weekDays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

const days = computed(() => {
	const start = new Date(currentYear.value, currentMonth.value, 1);
	const end = new Date(currentYear.value, currentMonth.value + 1, 0);
	const daysArray = [];

	for (let i = start.getDay(); i > 0; i--) {
		daysArray.push('');
	}

	for (let i = 1; i <= end.getDate(); i++) {
		daysArray.push(i);
	}

	return daysArray;
});

const toggleCalendar = () => {
	showCalendar.value = !showCalendar.value;
};

const prevMonth = () => {
	const newDate = new Date(currentDate.value);
	newDate.setMonth(currentMonth.value - 1);
	currentDate.value = newDate;
};

const nextMonth = () => {
	const newDate = new Date(currentDate.value);
	newDate.setMonth(currentMonth.value + 1);
	currentDate.value = newDate;
};

const selectDate = (day) => {
	if (day && !isPastDate(day)) {
		selectedDate.value = new Date(
			currentYear.value,
			currentMonth.value,
			day
		);
		showCalendar.value = false;
	}
};

const formattedDate = computed(() => {
	if (!selectedDate.value) return '';
	const options = { day: 'numeric', month: 'long', year: 'numeric' };
	return selectedDate.value.toLocaleDateString('id-ID', options);
});

const isSelected = (day) => {
	if (!selectedDate.value) return false;
	return day === selectedDate.value.getDate();
};

const isPastDate = (day) => {
	if (!day) return false;
	const selectedDay = new Date(currentYear.value, currentMonth.value, day);
	const today = new Date();
	// Set the time to the beginning of the day for accurate comparison
	today.setHours(0, 0, 0, 0);
	return selectedDay < today;
};

const currentMonthName = computed(() => {
	return new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(
		currentDate.value
	);
});

defineExpose({
	selectedDate,
})
</script>

<template>
    <div class="form-input">
        <label for="input-date" class="form-input-label">Tanggal Rapat<span class="text-danger">*</span></label>
        <input
            id="input-date"
            type="text"
            class="form-control datepicker-input"
            v-model="formattedDate"
            @click="toggleCalendar"
            readonly
            placeholder="Pilih Tanggal Rapat" />
    </div>
	<div class="datepicker-container">
		<div v-if="showCalendar" class="calendar-wrapper">
			<div class="calendar-header">
				<button @click="prevMonth" class="btn btn-outline-secondary">
					&lt;
				</button>
				<span class="calendar-title"
					>{{ currentMonthName }} {{ currentYear }}</span
				>
				<button @click="nextMonth" class="btn btn-outline-secondary">
					&gt;
				</button>
			</div>
			<div class="calendar-body">
				<div class="weekdays">
					<span v-for="(day, index) in weekDays" :key="index">{{
						day
					}}</span>
				</div>
				<div class="days">
					<span
						v-for="(day, index) in days"
						:key="index"
						:class="{
							'selected-day': isSelected(day),
							'empty-day': !day,
							'past-day': isPastDate(day),
						}"
						@click="selectDate(day)">
						{{ day || '' }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.datepicker-container {
	position: relative;
	width: 250px;
}

.datepicker-input {
	cursor: pointer;
}

.calendar-wrapper {
	position: absolute;
	top: 100%;
	left: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: #fff;
	padding: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
}

.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
}

.calendar-title {
	font-weight: bold;
}

.calendar-body {
	font-size: 14px;
}

.weekdays {
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
}

.weekdays span {
	width: 14.28%;
	text-align: center;
	font-weight: bold;
	color: #6c757d;
}

.days {
	display: flex;
	flex-wrap: wrap;
}

.days span {
	width: 14.28%;
	text-align: center;
	padding: 5px;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color 0.3s, color 0.3s;
}

.days span:hover {
	background-color: #f0f0f0;
}

.selected-day {
	background-color: #007bff;
	color: #fff;
}

.empty-day {
	color: #ccc;
}

.past-day {
	color: #ccc;
	pointer-events: none;
}
</style>