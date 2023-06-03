<template>
  <div>
    <section class="schedule">
      <div class="schedule-content">
        <div class="schedule-content__info">
          <div class="content-heading schedule-content__info--heading">
            <span><svg width="23" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.233C5.003 8.233.13 12.835.13 18.79c0 6.09 4.603 10.557 11.37 10.557v-5.145c-2.853-.075-5.143-2.53-5.143-5.547 0-3.018 2.29-5.472 5.143-5.548V8.233Z" fill="#44BE75"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 29.347c6.497 0 11.37-4.602 11.37-10.557 0-6.09-4.603-10.557-11.37-10.557v4.874c2.853.075 5.143 2.53 5.143 5.547s-2.29 5.472-5.143 5.548v5.145Z" fill="#F95106"/><circle cx="7.44" cy="3.631" r="2.978" fill="#44BE75"/><circle cx="15.56" cy="3.631" r="2.978" fill="#F95106"/></svg></span>
            <h2>Agende su cita con nosotros</h2>
          </div>
          <div class="schedule-content__info--steps">
            <div class="schedule-content__info--steps-item">
              <span>01</span>
              <p>Escuchamos</p>
            </div>
            <div class="schedule-content__info--steps-item">
              <span>02</span>
              <p>Asesoramos</p>
            </div>
            <div class="schedule-content__info--steps-item">
              <span>03</span>
              <p>Planificamos</p>
            </div>
            <div class="schedule-content__info--steps-item--line"></div>
          </div>
          <button class="header-content__button primary-button primary-button__third" @click="openCalendly">
            Agendar cita
            <span class="material-symbols-rounded">arrow_right_alt</span>
          </button>
        </div>
        <div class="schedule-content__img">
          <img src="../assets/images/calendar.svg" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ScheduleComponent",

  methods: {
    openCalendly() {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/yuwolab/cita-consultoria'
      });
    }
  }
}
</script>
