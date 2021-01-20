<template>
  <div class="flex flex-col w-256 m-2">
    <div class="m-2 w-128">
      <div class="mb-2 text-lg">Normal</div>
      <div class="center flex-col p-2 border">
        <app-text-field v-model="text"></app-text-field>
        <span class="m-4"> {{ text }} </span>
      </div>
    </div>
    <div class="m-2 w-128">
      <div class="mb-2 text-lg">Email</div>
      <div class="center flex-col p-2 border">
        <app-text-field
          v-model="email"
          type="TEXT_TYPE_EMAIL"
          errorMessage="メールアドレスが不正です。"
        ></app-text-field>
        <span class="m-4"> {{ email }} </span>
      </div>
    </div>
    <div class="m-2 w-128">
      <div class="mb-2 text-lg">Phone</div>
      <div class="center flex-col p-2 border">
        <app-text-field
          v-model="phone"
          type="TEXT_TYPE_PHONE"
          errorMessage="電話番号が不正です。"
        ></app-text-field>
        <span class="m-4"> {{ phone }} </span>
      </div>
    </div>
    <div class="m-2 w-128">
      <div class="mb-2 text-lg">Post Code</div>
      <div class="center flex-col p-2 border">
        <app-text-field
          v-model="postCode"
          type="TEXT_TYPE_ZIP_CODE"
          errorMessage="郵便番号が不正です。"
        ></app-text-field>
        <span class="m-4"> {{ postCode }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppTextField from '@atoms/text-field/index.vue'
export default {
  name: 'AppTextFieldSample',
  components: {
    AppTextField,
  },
  data: () => ({
    text: 'Change me',
    email: 'dev@softbrain.co.jp',
    phone: '080-1234-5678',
    postCode: '110-0001',
  }),
}
</script>
