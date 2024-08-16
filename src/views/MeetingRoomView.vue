<template>
  <section class="d-flex align-items-center">
    <div class="flex-grow-1 d-flex align-items-start">
      <div v-if="this.$route.path == '/ruang-meeting/pesan-ruangan'">
        <router-link class="btn btn-back" to="/ruang-meeting">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.46749 9.00002L11.1225 6.34502C11.2622 6.2045 11.3406 6.01441 11.3406 5.81627C11.3406 5.61813 11.2622 5.42804 11.1225 5.28752C11.0528 5.21723 10.9698 5.16143 10.8784 5.12335C10.787 5.08528 10.689 5.06567 10.59 5.06567C10.491 5.06567 10.393 5.08528 10.3016 5.12335C10.2102 5.16143 10.1272 5.21723 10.0575 5.28752L6.87749 8.46752C6.80719 8.53724 6.7514 8.6202 6.71332 8.71159C6.67524 8.80298 6.65564 8.90101 6.65564 9.00002C6.65564 9.09903 6.67524 9.19706 6.71332 9.28846C6.7514 9.37985 6.80719 9.4628 6.87749 9.53252L10.0575 12.75C10.1276 12.8195 10.2107 12.8745 10.3021 12.9119C10.3934 12.9492 10.4913 12.9681 10.59 12.9675C10.6887 12.9681 10.7865 12.9492 10.8779 12.9119C10.9693 12.8745 11.0524 12.8195 11.1225 12.75C11.2622 12.6095 11.3406 12.4194 11.3406 12.2213C11.3406 12.0231 11.2622 11.833 11.1225 11.6925L8.46749 9.00002Z" fill="currentColor"/>
          </svg>
        </router-link>
      </div>
      <div class="heading">
        <h1>Ruang Meeting</h1>
        <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/ruang-meeting">Ruang Meeting</router-link></li>
            <svg v-if="this.$route.path == '/ruang-meeting/pesan-ruangan'" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1225 8.96752L7.94252 5.78752C7.8728 5.71723 7.78985 5.66143 7.69845 5.62335C7.60706 5.58528 7.50903 5.56567 7.41002 5.56567C7.31101 5.56567 7.21298 5.58528 7.12159 5.62335C7.03019 5.66143 6.94724 5.71723 6.87752 5.78752C6.73783 5.92804 6.65942 6.11813 6.65942 6.31627C6.65942 6.51441 6.73783 6.7045 6.87752 6.84502L9.53252 9.50002L6.87752 12.155C6.73783 12.2955 6.65942 12.4856 6.65942 12.6838C6.65942 12.8819 6.73783 13.072 6.87752 13.2125C6.9476 13.282 7.03071 13.337 7.12209 13.3744C7.21347 13.4117 7.31131 13.4306 7.41002 13.43C7.50872 13.4306 7.60657 13.4117 7.69795 13.3744C7.78933 13.337 7.87244 13.282 7.94252 13.2125L11.1225 10.0325C11.1928 9.9628 11.2486 9.87985 11.2867 9.78846C11.3248 9.69706 11.3444 9.59903 11.3444 9.50002C11.3444 9.40101 11.3248 9.30298 11.2867 9.21159C11.2486 9.1202 11.1928 9.03724 11.1225 8.96752Z" fill="#4A8394"/>
            </svg>
            <li v-if="this.$route.path == '/ruang-meeting/pesan-ruangan'" class="breadcrumb-item active" aria-current="page">Pesan Ruangan</li>
          </ol>
        </nav>
      </div>
    </div>
    <div v-if="this.$route.path == '/ruang-meeting'">
      <router-link class="btn btn-fill" to="/ruang-meeting/pesan-ruangan">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25 8.75H9.75V4.25C9.75 4.05109 9.67098 3.86032 9.53033 3.71967C9.38968 3.57902 9.19891 3.5 9 3.5C8.80109 3.5 8.61032 3.57902 8.46967 3.71967C8.32902 3.86032 8.25 4.05109 8.25 4.25V8.75H3.75C3.55109 8.75 3.36032 8.82902 3.21967 8.96967C3.07902 9.11032 3 9.30109 3 9.5C3 9.69891 3.07902 9.88968 3.21967 10.0303C3.36032 10.171 3.55109 10.25 3.75 10.25H8.25V14.75C8.25 14.9489 8.32902 15.1397 8.46967 15.2803C8.61032 15.421 8.80109 15.5 9 15.5C9.19891 15.5 9.38968 15.421 9.53033 15.2803C9.67098 15.1397 9.75 14.9489 9.75 14.75V10.25H14.25C14.4489 10.25 14.6397 10.171 14.7803 10.0303C14.921 9.88968 15 9.69891 15 9.5C15 9.30109 14.921 9.11032 14.7803 8.96967C14.6397 8.82902 14.4489 8.75 14.25 8.75Z" fill="currentColor"/>
        </svg>
        Pesan Ruangan
      </router-link>
    </div>
  </section>
  <router-view></router-view>
</template>

<style scoped>
.heading {
  margin-left: 1rem;
}

.heading > * + * {
  margin-top: 0.25rem;
}

.breadcrumb {
  margin: 0;
}

.breadcrumb > * + * {
  margin-left: 0.25rem;
}

.breadcrumb .breadcrumb-item {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.192;
  color: #9E9E9E;
}

.breadcrumb .breadcrumb-item a {
  text-decoration: none;
  color: inherit;
}

.breadcrumb .breadcrumb-item.active {
  color: var(--color-primary);
}

.btn-fill {
  font-size: 0.875rem;
  line-height: 1.192rem;
  letter-spacing: 0.03em;
  padding: 0.75rem 1rem 0.75rem 0.75rem;
  background-color: var(--color-primary);
  color: white;
}

.btn-fill:focus {
  background-color: var(--color-primary);
  color: white;
}

.btn-back {
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: white;
  display: inline-flex;
  align-items: center;
}

.btn-back:focus {
  background-color: var(--color-primary);
  color: white;
}
</style>
