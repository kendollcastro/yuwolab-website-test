<template>
  <section class="agent-buttons">
    <a class="primary-button primary-button__classic" :href="`https://agents.${BackEndUrl}/AgentSiteV2/`" target="_blank">agent classic</a>
    <a class="primary-button primary-button__new" :href="`https://adm.${BackEndUrl}/`" target="_blank">agent new</a>
  </section>
</template>

<script>
  export default {
    name: "AgentsButtons",
    setup() {
      const BackEndUrl = "mrsreels.com"

      return {
        BackEndUrl
      }
    },
  };
</script>
