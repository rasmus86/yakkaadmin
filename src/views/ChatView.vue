<template>
  <v-layout>
    <v-main class="w-full chat-main">
      <section class="chat-wrapper">
        <v-row>
          <v-col cols="3">
            <h2 class="pl-8 font-weight-medium mt-4 mb-8">Users</h2>
            <v-divider color="primaryDefault"></v-divider>
            <section class="chat-wrapper__users__body">
              <div v-for="user in users" :key="user.id" class="chat-wrapper__users__body__user"
                   :class="selectedUser && userSelected?.email ==  user.email ? 'selected' : ''">
                <v-row class="d-flex justify-center items-center" @click="handleUserClick(user)">
                  <v-col cols="3">
                    <v-avatar size="45">
                      <img :src="user.image" alt="">
                    </v-avatar>
                  </v-col>
                  <v-col cols="9">
                    <p style="font-size: 15px; font-weight: 400; text-align: left;">{{ user.first_name }}</p>
                    <p style="font-size: 10px; font-weight: 400; text-align: left;">{{ user.email }}</p>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </div>
            </section>
          </v-col>
          <v-col cols="9 p-8">
            <div class="chat-wrapper__chat">
              <v-container class="chat-wrapper__chat__messages">
                <section v-for="message in groupMessage.messages" :key="message.id" class="chat-wrapper__chat__messages__message"
                         :class="message.sender == currentUser.email ? 'left': 'right'">
                  <MessageBody :message="message" :is-receiver="message.sender === currentUser.email" :user="selectedUser ?? undefined"/>
                </section>
              </v-container>
              <v-divider></v-divider>
              <v-container>
                <form @submit.prevent="submit">
                  <v-row class="d-flex">
                    <v-col cols="10">
                      <v-text-field :disabled="groupMessageSelectedId == null" v-model="message" :counter="255" label="Message"
                                    density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-btn :disabled="groupMessageSelectedId == null" color="primaryDefault" type="submit">Send</v-btn>
                    </v-col>
                  </v-row>
                </form>
              </v-container>
            </div>
          </v-col>
        </v-row>

      </section>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import {onMounted, ref, computed} from "vue";
import {useUser} from "@/composables/useUser.ts";
import {useChat} from "@/composables/useChat.ts";
import {useAuth} from "@/composables/useAuth.ts";
import {IMessage} from "@/interfaces/chat/chat-store.interface.ts";
import MessageBody from "@/components/chat/MessageBody.vue";
import {generateChildId} from "@/utils/core.ts";
import {IUser} from "@/interfaces/user/user-store.interface.ts";

const {handleCurrentUser, currentUser} = useAuth()
const {handleGetUsers, users} = useUser()
const {handleGetMessage, handleSendMessage, clearGroupMessage, groupMessage, userSelected} = useChat()

const message = ref<string | null>(null);
const groupMessageSelectedId = ref<string | null>(null);


const selectedUser = computed<IUser | null>(() => {
  return userSelected.value != null ? userSelected.value : null;
});

const submit = async () => {
  if (groupMessageSelectedId.value) {
    await handleSendMessage(groupMessageSelectedId?.value, <IMessage>{
          sender: userSelected.value?.email ?? '',
          receiver: userSelected.value?.email ?? '',
          message: message.value,
          profile: 'labour',
          seen: false,
          type: 'text'
        }, `${userSelected.value?.first_name ?? ''} ${userSelected.value?.last_name ?? ''}`,
        currentUser.value.displayName ?? '');
    message.value = '';
  }
}

const handleUserClick = async (user: IUser) => {
  userSelected.value = user;
  if (currentUser.value?.email) {
    groupMessageSelectedId.value = generateChildId(currentUser.value?.email, user.email)
    await handleGetMessage(groupMessageSelectedId.value);
  }
}

const initConfig = async () => {
  if (!groupMessageSelectedId.value) {
    clearGroupMessage();
  }
  if (userSelected.value) {
    await handleUserClick(userSelected.value);
  }
  await handleGetUsers('Builder');
}

onMounted(() => {
  handleCurrentUser();
  initConfig();
})

</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';

.chat-main {
  flex-direction: column;
  padding: 40px 40px;

}

.chat-wrapper {
  background: rgba(#e3e4e7, 0.3);
  border-radius: 20px;
  padding: 20px 0;


  &__users {
    padding: 10px;
    background: white;
    border-radius: 20px;

    &__body {
      overflow-x: hidden;
      overflow-y: scroll;
      height: 800px;
      padding-left: 10px;

      &__user {
        padding: 5px 0;

        &:hover, &.selected {
          background: rgba($yakka-primary-yellow, 0.8);
          border-radius: 100px;
          cursor: pointer;
        }

      }

    }

  }

  &__chat {
    height: 600px;

    &__messages {
      height: 800px;
      padding: 20px;
      background: white;
      border-radius: 10px;
      position: relative;

      &__message {
        display: flex;

        &.right {
          align-items: end;
          justify-content: end;
        }

        &.left {
          align-items: start;
          justify-content: start;
        }

        width: 100%;

      }
    }
  }
}
</style>
