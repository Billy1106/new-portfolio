<template>
  <v-container
    fluid
    class="contact d-flex align-center justify-center"
    id="contact"
  >
    <v-row justify="center">
      <v-col class="text-center" align-self="center">
        <v-row justify="center">
          <h6>Get in Touch</h6>
        </v-row>
        <v-row justify="center">
          <h1 class="font-weight-bold">Contact Me</h1>
        </v-row>
        <v-row justify="center">
          <v-card
            variant="outlined"
            class="rounded-xl my-10"
            width="80%"
            :style="{
              maxWidth: '800px',
            }"
          >
            <v-row justify="center" class="pa-5">
              <v-col cols="12" md="6" align-self="center">
                <v-text-field
                  label="Name"
                  variant="outlined"
                  class="mt-5"
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" align-self="center">
                <v-text-field
                  label="email"
                  variant="outlined"
                  class="mt-5"
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12" align-self="center">
                <v-textarea
                  label="Message"
                  variant="outlined"
                  class="mt-5"
                  v-model="message"
                ></v-textarea>
                <v-btn
                  class="mt-5"
                  variant="outlined"
                  @click="sendEmail"
                  :disabled="status === MessageType.SENDING"
                >
                  Send</v-btn
                >
                <v-alert
                  v-if="status === MessageType.ERROR"
                  type="error"
                  title="Error"
                  variant="outlined"
                  :text="errorMessage"
                  :style="{ border: 'none' }"
                ></v-alert>
                <v-alert
                  v-if="status === MessageType.SUCCESS"
                  type="success"
                  variant="outlined"
                  title="Success"
                  :style="{ border: 'none' }"
                ></v-alert>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGtag } from "vue-gtag-next";
const { event } = useGtag();
import { init, send } from "emailjs-com";
enum MessageType {
  SUCCESS = "success",
  ERROR = "error",
  PENDING = "pending",
  SENDING = "sending",
}
const config = useRuntimeConfig().public;
const status = ref<MessageType>(MessageType.PENDING);
const message = ref("");
const name = ref("");
const email = ref("");
const errorMessage = ref("");

const contentCheck = () => {
  if (name.value === "" || email.value === "" || message.value === "") {
    status.value = MessageType.ERROR;
    errorMessage.value = "Please fill in all the fields";
    return false;
  }
  if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
    status.value = MessageType.ERROR;
    errorMessage.value = "Please write a valid email";
    return false;
  }
  if (message.value.length < 10) {
    status.value = MessageType.ERROR;
    errorMessage.value = "Please write a longer message";
    return false;
  }
  return true;
};

const sendEmail = () => {
  if (!contentCheck()) {
    return;
  }
  init(config.EMAIL_USER_ID as string);
  send(config.EMAIL_SERVICE_ID as string, config.EMAIL_TEMPLATE_ID as string, {
    to_name: "Billysama",
    from_name: name.value,
    from_email: email.value,
    from_message: message.value,
  })
    .then(() => {
      status.value = MessageType.SUCCESS;
    })
    .catch((e) => {
      status.value = MessageType.ERROR;
      errorMessage.value = e.text;
    });
};
</script>

<style scoped>
.contact {
  min-height: 100vh;
}
</style>
