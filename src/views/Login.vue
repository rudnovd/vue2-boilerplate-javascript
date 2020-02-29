<template>
  <body>
    <section class="login-page">
      <div class="login-form">
        <form>
          <div class="labeled-input">
            <label for="login">Login</label>
            <input id="login" type="text" />
          </div>

          <div class="labeled-input">
            <label for="password">Password</label>
            <input id="password" type="password" />
          </div>

          <BaseButton class="button-primary button-login">Login</BaseButton>
        </form>
      </div>
    </section>
  </body>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'Login',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
}

.login-form {
  background: rgb(255, 255, 255);
  height: 40%;
  box-shadow: 0 0 5px #aaa;
  margin: auto;
  width: 40%;
  display: flex;

  form {
    width: 30%;
    margin: auto;
  }
}

.labeled-input {
  margin-bottom: 1rem;

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
}

.button-login {
  width: 100%;
}
</style>
