<script setup>
import Select from '../components/FormSelect.vue';
import 'vue3-circle-progress/dist/circle-progress.css';
import CircleProgress from 'vue3-circle-progress';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const selectedPeriod = ref('Jan-2024');
const summaries = ref([]);

onMounted(() => {
	axios
		.get('https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/summaryBookings')
		.then((response) => {
			summaries.value = response.data;
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
});

const filteredSummaries = computed(() => {
	if (!selectedPeriod.value) return [];
	return summaries.value.filter((summary) => summary.period === selectedPeriod.value);
});

const totalConsumptionPrice = (detail) => {
  const price = detail.totalConsumption.reduce(
		(sum, item) => sum + parseInt(item.totalPrice),
		0
	)

	return 'Rp ' + new Intl.NumberFormat('id-ID').format(price)
};

const totalConsumptionPackage = (detail) => {
	return detail.totalConsumption.reduce(
		(sum, item) => sum + parseInt(item.totalPackage),
		0
	);
};
 
</script>

<template>
	<section>
		<div class="row mb-4">
			<div class="col-3">
				<Select
					v-model="selectedPeriod"
					id="input-periode"
					label="Periode">
					<template #options>
						<option value="Jan-2024">Januari</option>
						<option value="Feb-2024">Februari</option>
					</template>
				</Select>
			</div>
		</div>
		<div
			v-for="(summary, index) in filteredSummaries"
			:key="index"
			class="row row-cols-5">
			<div v-for="(data, index) in summary.data" :key="index" class="unit-column col">
        <div class="unit d-flex align-items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.8648 9.87961L14.8567 0L5.31537 13.7274H10.6352L9.64337 23.6071L19.1847 9.87961H13.8648ZM12.2934 12.2274H8.18469L12.7862 5.60705L12.2067 11.3796H16.3154L11.7138 18L12.2934 12.2274Z"
              fill="#868E96" />
            <path
              d="M4.5 12.3034C4.5 8.33219 7.48755 5.05767 11.3373 4.6065L11.1627 3.1167C6.56611 3.65539 3 7.5624 3 12.3034C3 16.1399 5.33548 19.4292 8.6593 20.8304L9.24199 19.4482C6.45444 18.2731 4.5 15.5156 4.5 12.3034Z"
              fill="#868E96" />
            <path
              d="M14.5297 4.89392C17.6981 5.86748 20 8.8176 20 12.3034C20 16.4303 16.7739 19.8043 12.7066 20.0402L12.7934 21.5377C17.6495 21.256 21.5 17.2296 21.5 12.3034C21.5 8.14046 18.7506 4.62166 14.9703 3.46008L14.5297 4.89392Z"
              fill="#868E96" />
          </svg>
          <span class="unit-name">
          {{ data.officeName }}
          </span>
        </div>

				<div
					class="card"
					v-for="(detail, index) in data.detailSummary"
					:key="index">
					<div class="card-body">
						<div class="card-title">
							{{ detail.roomName }}
						</div>
						<div class="main-content d-flex align-items-center">
              <div class="flex-grow-1">
                <div class="sub-label">Persentase Pemakaian</div>
                <div class="number-label">
                    {{ detail.averageOccupancyPerMonth + '%' }}
                </div>
              </div>
              <circle-progress :percent="Number(detail.averageOccupancyPerMonth)" :border-width="8" :border-bg-width="8" :size="38" fill-color="#00A3E9" />
						</div>
						<div class="main-content">
							<div class="sub-label">Nominal Konsumsi</div>
							<div class="number-label">
								{{ totalConsumptionPrice(detail) }}
							</div>
						</div>
							<div class="row"
								v-for="(
									consumption, index
								) in detail.totalConsumption"
								:key="index">
								<div class="col-6 consumption-name d-flex align-items-center">
									{{ consumption.name }}
								</div>
								<div class="col-6 consumption-total">
									{{ consumption.totalPackage }}
                  <div class="progress">
                    <div class="progress-bar" :style="'width:'+ (consumption.totalPackage / totalConsumptionPackage(detail) * 100 ) + '%;'"></div>
                  </div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.unit {
  padding: 0.375rem 0;
}

.unit-name  {
  font-size: 1rem;
  font-weight: 700;
  line-height: 22px;
  color: #868E96;
  margin-left: 0.75rem;
}

.card {
  border-radius: 0.5rem !important;
  background-color: #F2F2F2 !important;
  border: none;
}

.card-body {
	padding: 0.75rem !important;
}

.card-body > * + * {
  margin-top: 0.25rem;
}

.card-title {
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 16.41px;
	letter-spacing: 0.02em;
	color: #4e4e4e !important;
}

.main-content {
  padding: 0.5rem 0 0.5rem 0;
}

.sub-label {
	font-size: 11px;
	font-weight: 400;
	line-height: 13.31px;
}

.number-label {
	font-size: 20px;
	font-weight: 700;
	line-height: 24.2px;
  margin-top: 0.375rem;
}

.consumption-name {
	font-size: 10px;
	font-weight: 600;
	line-height: 15px;
	letter-spacing: 0.02em;
}

.consumption-total {
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.02em;
}

.unit-column {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.unit-column > * + * {
  margin-top: 0.75rem;
}

.progress {
  margin-top: 0.125rem;
  height: 0.5rem;
  background-color: transparent;
  border-radius: 2px;
}

.progress-bar {
  background-color: #00A3E9;
  border-radius: 2px;
}
</style>
