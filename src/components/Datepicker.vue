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
        <div class="position-relative">
			<div class="date-icon position-absolute h-100 d-flex align-items-center">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.4 3H13V2.25C13 2.05109 12.9263 1.86032 12.795 1.71967C12.6637 1.57902 12.4857 1.5 12.3 1.5C12.1143 1.5 11.9363 1.57902 11.805 1.71967C11.6737 1.86032 11.6 2.05109 11.6 2.25V3H7.4V2.25C7.4 2.05109 7.32625 1.86032 7.19497 1.71967C7.0637 1.57902 6.88565 1.5 6.7 1.5C6.51435 1.5 6.3363 1.57902 6.20503 1.71967C6.07375 1.86032 6 2.05109 6 2.25V3H4.6C4.04305 3 3.5089 3.23705 3.11508 3.65901C2.72125 4.08097 2.5 4.65326 2.5 5.25V14.25C2.5 14.8467 2.72125 15.419 3.11508 15.841C3.5089 16.2629 4.04305 16.5 4.6 16.5H14.4C14.957 16.5 15.4911 16.2629 15.8849 15.841C16.2788 15.419 16.5 14.8467 16.5 14.25V5.25C16.5 4.65326 16.2788 4.08097 15.8849 3.65901C15.4911 3.23705 14.957 3 14.4 3ZM15.1 14.25C15.1 14.4489 15.0263 14.6397 14.895 14.7803C14.7637 14.921 14.5857 15 14.4 15H4.6C4.41435 15 4.2363 14.921 4.10503 14.7803C3.97375 14.6397 3.9 14.4489 3.9 14.25V9H15.1V14.25ZM15.1 7.5H3.9V5.25C3.9 5.05109 3.97375 4.86032 4.10503 4.71967C4.2363 4.57902 4.41435 4.5 4.6 4.5H6V5.25C6 5.44891 6.07375 5.63968 6.20503 5.78033C6.3363 5.92098 6.51435 6 6.7 6C6.88565 6 7.0637 5.92098 7.19497 5.78033C7.32625 5.63968 7.4 5.44891 7.4 5.25V4.5H11.6V5.25C11.6 5.44891 11.6737 5.63968 11.805 5.78033C11.9363 5.92098 12.1143 6 12.3 6C12.4857 6 12.6637 5.92098 12.795 5.78033C12.9263 5.63968 13 5.44891 13 5.25V4.5H14.4C14.5857 4.5 14.7637 4.57902 14.895 4.71967C15.0263 4.86032 15.1 5.05109 15.1 5.25V7.5Z" fill="#4A8394"/>
				</svg>
			</div>

			<input
				id="input-date"
				type="text"
				class="form-control datepicker-input"
				v-model="formattedDate"
				@click="toggleCalendar"
				readonly
				placeholder="Pilih Tanggal Rapat" />
		</div>
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

#input-date {
	padding-left: 2.375rem !important;
}

.date-icon {
	margin-left: 0.75rem;
	pointer-events: none;
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