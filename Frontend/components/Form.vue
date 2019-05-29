<template>
  <ElForm ref="form" :model="form" :rules="rules" label-position="top">
    <ElFormItem label="Full Name" prop="name">
      <ElInput v-model="form.name" name="fullname" placeholder="Your Name" />
    </ElFormItem>
    <ElFormItem label="Email" prop="email">
      <ElInput v-model="form.email" name="email" placeholder="Your Email" />
    </ElFormItem>
    <ElFormItem label="Message" prop="message">
      <ElInput
        v-model="form.message"
        name="message"
        :autosize="{
          minRows: 8,
          maxRows: 20,
        }"
        type="textarea"
        placeholder="Message"
      />
    </ElFormItem>
    <ElFormItem porp="recaptcha">
      <VueRecaptcha
        ref="invisibleRecaptcha"
        class="recaptcha"
        :sitekey="sitekey"
        size="invisible"
        @verify="onVerify"
      />
    </ElFormItem>
    <ElButton
      :disabled="isDisable"
      :loading="isSubmitting"
      type="primary"
      class="submit"
      @click="executeRecaptcha"
    >
      {{ button }}
    </ElButton>
    <span v-if="message" class="message"> {{ message }} </span>
  </ElForm>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  head: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true,
      },
    ],
  },
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      sitekey: process.env.GOOGLE_RECAPTCHA_SITEKEY,
      button: 'Send Message',
      isSubmitting: false,
      isDisable: false,
      message: '',
      form: {
        name: '',
        email: '',
        message: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input your name',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ],
        recaptcha: [
          {
            required: true,
            type: 'string',
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  methods: {
    onVerify(res) {
      this.form.recaptcha = res
      this.onSubmit()
    },
    executeRecaptcha() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$refs.invisibleRecaptcha.execute()
        }
      })
    },
    onSubmit() {
      this.isSubmitting = true
      this.isDisable = true
      this.button = 'Sending ...'
      setTimeout(() => {
        this.$axios
          .request({
            method: 'POST',
            baseURL: 'https://api.floatingdots.com/v1/message',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            data: JSON.stringify(
              {
                name: this.form.name,
                email: this.form.email,
                message: this.form.message,
              },
              undefined,
              1
            ),
          })
          .then(() => {
            this.isSubmitting = false
            this.isDisable = true
            this.$refs.invisibleRecaptcha.reset()
            this.button = 'DONE'
            this.message = 'Thank you for submitting.'
          })
          .catch(() => {
            this.isSubmitting = false
            this.isDisable = false
            this.$refs.invisibleRecaptcha.reset()
            this.button = 'Try Again'
            this.message = 'Error. Please try again.'
          })
      }, 1500)
    },
  },
}
</script>
