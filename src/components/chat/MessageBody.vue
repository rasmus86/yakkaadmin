<template class="message-body--wrapper">
  <div v-if="isReceiver" class="message-body--wrapper__user">
    <v-avatar size="30">
      <img :src="user?.image" :alt="user?.name">
    </v-avatar>
  </div>
  <div class="message-body--wrapper__message mb-2" :class="isReceiver ? 'grey' : 'yellow'">
    <p>{{ message.message }}</p>
    <p style="font-size: 10px; font-weight: 400; text-align: left;">{{ timeAgo }}</p>
  </div>
</template>

<script setup lang="ts">
import {IMessage} from "@/interfaces/chat/chat-store.interface.ts";
import {IUser} from "@/interfaces/user/user-store.interface.ts";
import {PropType, defineProps} from "vue";
import {useTimeAgo} from "@/composables/useTimeAgo.ts";

const props = defineProps({
  message: {
    type: Object as PropType<IMessage>,
    required: true
  },
  isReceiver: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object as PropType<IUser>,
    required: false
  }
})

const {timeAgo} = useTimeAgo(props.message.datetime);


</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.message-body--wrapper {
  display: flex;
  align-items: center;
  justify-content: start;

  &__message {
    width: 50%;
    padding: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: left;
    &.yellow {
      background: rgba($yakka-primary-yellow, 0.6);
    }
    &.grey {
      background: rgba($yakka-primary-grey, 0.9);
    }
  }

  &__user {
    margin-right: 10px;
  }
}
</style>
