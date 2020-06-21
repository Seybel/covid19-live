<template>
  <div>
    <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
      <h3 class="md-title"  style="flex: 1"><router-link to="/"> World Confirmed cases</router-link></h3>
      <div class="md-toolbar-section-end">
        <Searchbox />
        <md-button href="https://github.com/Seybel/covid19-live" class="md-icon-button">
          <md-icon><i class="fa fa-github"></i></md-icon>
          <md-tooltip md-direction="bottom">Repo</md-tooltip>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import Searchbox from '@/components/Searchbox'
export default {
  components: {
    Searchbox
  }
}
</script>

<style lang="scss" scoped>
.showHide { display: none; } // Toggle toolbar and scrollbar display on desktop

.md-toolbar {
  position: fixed;
  overflow-x: hidden;
  .md-title a {
    color: #fff;
    &:hover{
      text-decoration: none;
      color: #fff;
    }
  }
}

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
}
</style>
