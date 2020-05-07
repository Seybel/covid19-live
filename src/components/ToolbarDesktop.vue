<template>
    <div>
        <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
            <h3 class="md-title" style="flex: 1">Covid19 World Confirmed cases</h3>
            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button">
                  <md-icon><i class="fa fa-github"></i></md-icon>
                  <md-tooltip md-direction="bottom">Repo</md-tooltip>
                </md-button>
            </div>
        </md-toolbar>
    </div>
</template>

<style lang="scss" scoped>
.showHide { display: none; } // Toggle toolbar and scrollbar display on desktop

.md-toolbar {
  position: fixed;
  overflow-x: hidden;
}

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
}
</style>
