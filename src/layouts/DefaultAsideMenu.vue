<template>
  <v-navigation-drawer
      :rail="true"
      expand-on-hover
      rail-width="88"
      permanent
      :class="{ DashboardAsideMenu: true, 'DashboardAsideMenu--collapsed': true }"
      @mouseover="onFocus"
      @mouseleave="onLeaveFocus"
  >
    <v-list color="transparent">
      <v-list-item
          :prepend-icon="mdiViewDashboard"
          base-color="blue-grey-darken-2"
          color="blue-grey-lighten-5"
          rounded="xl"
          title="Dashboard"
          :to="{ name: 'HomeView' }"
          exact
      />
      <v-list-item
          :prepend-icon="mdiMapMarkerCircle"
          base-color="yellow-grey-darken-2"
          color="yellow-grey-lighten-5"
          rounded="xl"
          title="Map"
          :to="{ name: 'MapView' }"
          exact
      />
      <v-list-item
          :prepend-icon="mdiAccount"
          base-color="yellow-grey-darken-2"
          color="yellow-grey-lighten-5"
          rounded="xl"
          title="Jobs"
          :to="{ name: 'JobView' }"
          exact
      />
      <v-list-item
          :prepend-icon="mdiClockTimeSeven"
          base-color="yellow-grey-darken-2"
          color="yellow-grey-lighten-5"
          rounded="xl"
          title="Timesheet"
          :to="{ name: 'TimesheetView' }"
          exact
      />
      <v-list-item
          :prepend-icon="mdiClockTimeSeven"
          base-color="yellow-grey-darken-2"
          color="yellow-grey-lighten-5"
          rounded="xl"
          title="Chat"
          :to="{ name: 'ChatView' }"
          exact
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {mdiClockTimeSeven, mdiMapMarkerCircle, mdiViewDashboard} from "@mdi/js/commonjs/mdi";
import {mdiAccount} from "@mdi/js";

const onFocus = () => {

};
const onLeaveFocus = () => {

};
</script>

<style lang="scss">

@import "@/assets/scss/variables";

.DashboardAsideMenu {
  ::-webkit-scrollbar {
    width: 2px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.3);
  }

  .sub-item-container {
    margin: 10px !important;
    min-height: 40px !important;
  }

  &.v-navigation-drawer {
    border-radius: 16px 0 0 16px;
    padding: 8px 5px 16px 10px;
  }

  &.v-navigation-drawer--rail {
    .v-list-item {
      .v-list-item__prepend > .v-icon ~ .v-list-item__spacer {
        width: 0 !important;
      }
    }
  }

  &.v-navigation-drawer--is-hovering {
    .v-list-item {
      .v-list-item__prepend > .v-icon ~ .v-list-item__spacer {
        width: 16px !important;
      }
    }
  }

  .v-list-group .v-list-item:first-child,
  .v-list-item + .v-list-item {
    margin-top: 8px;
  }

  .v-list-item {
    &--active {
      color: $yakka-primary-yellow !important;

      & > .v-list-item__overlay {
        opacity: 0.5;
        background-color: #eceff1;
      }

      .v-list-item__content {
        z-index: 1;
      }
    }

    padding-inline: 23px !important;
  }

  .v-list-item__prepend > .v-badge ~ .v-list-item__spacer,
  .v-list-item__prepend > .v-icon ~ .v-list-item__spacer,
  .v-list-item__prepend > .v-tooltip ~ .v-list-item__spacer {
    width: 16px;
  }

  .v-list-group {
    .v-list-group__items {
      --indent-padding: 0px;
    }
  }

  .v-list-item-title {
    color: $yakka-primary-darker;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
  }

  &--collapsed {
    &:not(.v-navigation-drawer--is-hovering) {
      .DashboardAsideMenu__group-list {
        .v-list-item {
          .v-list-item__overlay {
            opacity: 1;
            background-color: transparent !important;
          }

          .v-list-item__append {
            display: none;
          }
        }
      }

      .v-list {
        display: flex;
        flex-direction: column;
        align-items: center;

        .v-list-item {
          display: flex;
          justify-content: center;
          height: 50px;
          width: 50px;

          &--active {
            .v-list-item__prepend > .v-icon ~ .v-list-item__spacer {
              width: 0 !important;
            }

            display: flex;
            justify-content: center;

            & > .v-list-item__overlay {
              opacity: 0.5;
              background-color: #eceff1;
            }

            .v-list-item__content {
              z-index: 1;
            }
          }
        }

        .v-list-group {
          .v-list-group__items {
            display: none;
          }
        }
      }
    }
  }
}
</style>
