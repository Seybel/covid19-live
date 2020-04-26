<template>
    <div class="md-toolbar main-header md-theme-default md-elevation-2 md-elevation-2">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button class="md-button md-icon-button menu md-theme-default">
                    <div class="md-ripple">
                        <div class="md-button-content">
                            <i class="md-icon md-icon-font md-theme-default">menu</i>
                        </div>
                    </div>
                </md-button>

                <div class="md-title">
                    <h1 class="md-title">Covid19 <span class="md-xsmall-hide">World Confirmed Cases</span></h1>
                </div>
            </div>

            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button">
                    <md-icon>refresh</md-icon>
                </md-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-header {
        margin: auto;
        max-width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 3;
        transition: .3s cubic-bezier(.4,0,.2,1),box-shadow .4s cubic-bezier(.25,.8,.25,1) .1s;
        will-change: box-shadow,max-width,background-color;
    }

    @media (max-width: 600px) {
        .menu {
            display: inline-block;
        }
    }
</style>
