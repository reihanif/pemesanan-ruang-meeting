<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<nav
			class="navbar navbar-expand-lg fixed-top bg-body-tertiary text-white">
			<div class="container-fluid px-0 mx-4">
				<a class="navbar-brand text-white" href="#">
					<img src="./assets/logo.svg" alt="logo" class="logo" />
					iMeeting
				</a>
				<div class="d-flex align-items-center">
					<div
						class="me-4 d-flex align-items-center justify-content-center"
						style="height: 2.625rem; width: 2.625rem">
						<svg
							width="1.125rem"
							height="1.125rem"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.39 11.4075L14.04 10.05V6.70498C14.058 5.46285 13.6259 4.25616 12.8236 3.30773C12.0213 2.3593 10.9029 1.73318 9.67499 1.54498C8.96235 1.45113 8.23789 1.51034 7.54995 1.71866C6.862 1.92698 6.2264 2.27962 5.68554 2.75305C5.14468 3.22648 4.711 3.80981 4.41345 4.46413C4.1159 5.11844 3.96131 5.82869 3.95999 6.54748V10.05L2.60999 11.4075C2.44042 11.5799 2.32543 11.7984 2.27939 12.0358C2.23336 12.2732 2.25832 12.5189 2.35115 12.7422C2.44399 12.9655 2.60058 13.1565 2.80136 13.2912C3.00213 13.426 3.23818 13.4986 3.47999 13.5H5.99999V13.755C6.03503 14.5164 6.37046 15.2328 6.93279 15.7474C7.49512 16.2619 8.23848 16.5325 8.99999 16.5C9.7615 16.5325 10.5049 16.2619 11.0672 15.7474C11.6295 15.2328 11.965 14.5164 12 13.755V13.5H14.52C14.7618 13.4986 14.9979 13.426 15.1986 13.2912C15.3994 13.1565 15.556 12.9655 15.6488 12.7422C15.7417 12.5189 15.7666 12.2732 15.7206 12.0358C15.6746 11.7984 15.5596 11.5799 15.39 11.4075ZM10.5 13.755C10.4584 14.1157 10.2792 14.4465 9.9998 14.6785C9.72037 14.9104 9.36223 15.0256 8.99999 15C8.63776 15.0256 8.27962 14.9104 8.00019 14.6785C7.72076 14.4465 7.54159 14.1157 7.49999 13.755V13.5H10.5V13.755ZM4.13249 12L5.01749 11.115C5.15787 10.9754 5.26924 10.8095 5.34519 10.6267C5.42113 10.4439 5.46015 10.2479 5.45999 10.05V6.54748C5.4604 6.04153 5.56903 5.54152 5.77859 5.08101C5.98815 4.6205 6.29379 4.21015 6.67499 3.87748C7.05106 3.53674 7.49667 3.28179 7.981 3.13028C8.46532 2.97877 8.97679 2.93431 9.47999 2.99998C10.3474 3.14081 11.1346 3.59024 11.6969 4.26552C12.2592 4.94079 12.5586 5.79646 12.54 6.67498V10.05C12.5389 10.2474 12.5767 10.4431 12.6513 10.6258C12.726 10.8086 12.836 10.9748 12.975 11.115L13.8675 12H4.13249Z"
								fill="currentColor" />
						</svg>
					</div>
					<div class="dropdown">
						<a
							class="nav-link dropdown-toggle d-flex align-items-center"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<img
								src="https://ui-avatars.com/api/?name=John+Doe"
								alt="User Avatar"
								class="avatar rounded-circle" />
              				<span>
							  John Doe
              				</span>
							<svg
								viewBox="0 0 18 18"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.75 6.87752C12.6095 6.73783 12.4194 6.65942 12.2213 6.65942C12.0231 6.65942 11.833 6.73783 11.6925 6.87752L9.00002 9.53252L6.34502 6.87752C6.2045 6.73783 6.01441 6.65942 5.81627 6.65942C5.61813 6.65942 5.42804 6.73783 5.28752 6.87752C5.21723 6.94724 5.16143 7.03019 5.12335 7.12159C5.08528 7.21298 5.06567 7.31101 5.06567 7.41002C5.06567 7.50903 5.08528 7.60706 5.12335 7.69845C5.16143 7.78985 5.21723 7.8728 5.28752 7.94252L8.46752 11.1225C8.53724 11.1928 8.6202 11.2486 8.71159 11.2867C8.80298 11.3248 8.90101 11.3444 9.00002 11.3444C9.09903 11.3444 9.19706 11.3248 9.28846 11.2867C9.37985 11.2486 9.4628 11.1928 9.53252 11.1225L12.75 7.94252C12.8203 7.8728 12.8761 7.78985 12.9142 7.69845C12.9523 7.60706 12.9719 7.50903 12.9719 7.41002C12.9719 7.31101 12.9523 7.21298 12.9142 7.12159C12.8761 7.03019 12.8203 6.94724 12.75 6.87752Z"
									fill="white" />
							</svg>
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							<li>
								<a class="dropdown-item" href="#">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Another action</a>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" href="#">Something else here</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<aside class="sidebar d-flex flex-column">
			<router-link class="sidebar-link" to="/">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15 6L10.5 2.055C10.0875 1.68604 9.55346 1.48206 9.00001 1.48206C8.44656 1.48206 7.91253 1.68604 7.50001 2.055L3.00001 6C2.76179 6.21306 2.57169 6.47442 2.44236 6.76669C2.31304 7.05895 2.24747 7.37542 2.25001 7.695V14.25C2.25001 14.8467 2.48706 15.419 2.90902 15.841C3.33098 16.263 3.90327 16.5 4.50001 16.5H13.5C14.0967 16.5 14.669 16.263 15.091 15.841C15.513 15.419 15.75 14.8467 15.75 14.25V7.6875C15.7515 7.36918 15.6854 7.05416 15.5561 6.76327C15.4268 6.47237 15.2373 6.21222 15 6ZM10.5 15H7.50001V11.25C7.50001 11.0511 7.57903 10.8603 7.71968 10.7197C7.86033 10.579 8.0511 10.5 8.25001 10.5H9.75001C9.94892 10.5 10.1397 10.579 10.2803 10.7197C10.421 10.8603 10.5 11.0511 10.5 11.25V15ZM14.25 14.25C14.25 14.4489 14.171 14.6397 14.0303 14.7803C13.8897 14.921 13.6989 15 13.5 15H12V11.25C12 10.6533 11.763 10.081 11.341 9.65901C10.919 9.23706 10.3467 9 9.75001 9H8.25001C7.65327 9 7.08098 9.23706 6.65902 9.65901C6.23706 10.081 6.00001 10.6533 6.00001 11.25V15H4.50001C4.3011 15 4.11033 14.921 3.96968 14.7803C3.82903 14.6397 3.75001 14.4489 3.75001 14.25V7.6875C3.75014 7.58102 3.77296 7.47578 3.81692 7.37879C3.86089 7.2818 3.92501 7.19529 4.00501 7.125L8.50501 3.1875C8.64188 3.06727 8.81783 3.00095 9.00001 3.00095C9.18219 3.00095 9.35814 3.06727 9.49501 3.1875L13.995 7.125C14.075 7.19529 14.1391 7.2818 14.1831 7.37879C14.2271 7.47578 14.2499 7.58102 14.25 7.6875V14.25Z" fill="currentColor"/>
				</svg>
			</router-link>
			<router-link class="sidebar-link" to="/ruang-meeting">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15 6.705C14.9922 6.6361 14.9771 6.56822 14.955 6.5025V6.435C14.9189 6.35788 14.8708 6.287 14.8125 6.225L10.3125 1.725C10.2505 1.66666 10.1796 1.61856 10.1025 1.5825H10.035C9.95881 1.53881 9.87467 1.51076 9.7875 1.5H5.25C4.65326 1.5 4.08097 1.73705 3.65901 2.15901C3.23705 2.58097 3 3.15326 3 3.75V14.25C3 14.8467 3.23705 15.419 3.65901 15.841C4.08097 16.2629 4.65326 16.5 5.25 16.5H12.75C13.3467 16.5 13.919 16.2629 14.341 15.841C14.7629 15.419 15 14.8467 15 14.25V6.75V6.705ZM10.5 4.0575L12.4425 6H11.25C11.0511 6 10.8603 5.92098 10.7197 5.78033C10.579 5.63968 10.5 5.44891 10.5 5.25V4.0575ZM13.5 14.25C13.5 14.4489 13.421 14.6397 13.2803 14.7803C13.1397 14.921 12.9489 15 12.75 15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H9V5.25C9 5.84674 9.23705 6.41903 9.65901 6.84099C10.081 7.26295 10.6533 7.5 11.25 7.5H13.5V14.25Z" fill="currentColor"/>
				</svg>
			</router-link>
		</aside>
	</header>

	<main>
		<RouterView />
	</main>
</template>

<style scoped>
.navbar {
	background: rgb(24, 162, 186);
	background: linear-gradient(
		90deg,
		rgba(24, 162, 186, 1) 0%,
		rgba(41, 99, 119, 1) 100%
	);
}

.navbar-brand {
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.362rem;
	letter-spacing: 0.0025em;
	padding: 0;
}

.navbar-brand .logo {
	height: 3.25rem;
	width: 2.375rem;
	margin-right: 1.25rem;
}

.avatar {
	height: 2.5rem;
	width: 2.5rem;
	margin-right: 0.75rem;
}

.dropdown-toggle {
	font-size: 0.875rem;
	letter-spacing: 0.0025em;
	line-height: 1.192rem;
	letter-spacing: 0.0025em;
}

.dropdown-toggle svg {
	height: 1.125rem;
	width: 1.125rem;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-toggle span {
  display: none;
}

@media (min-width: 576px) { 
  .dropdown-toggle span {
    display: inline;
    margin-right: 0.75rem;
  }
}

.sidebar {
    width: 4.5rem;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: auto;
    min-height: 100%;
    overflow-y: auto;
    white-space: nowrap;
    height: 100%;
    z-index: 1;
    box-shadow: 4px 0px 20px 0px #6a6a6a1a;
    padding: 88px 15px 24px 15px;
}

.sidebar > * + * {
  margin-top: 12px;
}

.sidebar .sidebar-link {
  text-decoration: none;
  color: var(--color-primary);
  padding: 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
}

.sidebar .sidebar-link.router-link-active {
  text-decoration: none;
  color: white;
  background-color: var(--color-primary);
  padding: 12px;
}
</style>
