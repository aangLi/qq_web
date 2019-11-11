<template>
  <div>
    <div class="home-contianer">
      <HomeButton @click.native="setShowLogin">登录</HomeButton>
      <HomeButton @click.native="setShowRegister">注册</HomeButton>
      <HomeLogin v-if="showLogin"></HomeLogin>
      <HomeLogin v-if="showRegister"></HomeLogin>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/home_page/home_button.vue'
import HomeLogin from '@/components/home_page/home_login.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  components: {
    HomeButton,
    HomeLogin
  },
  computed: {
    ...mapState({
      showLogin: state => {
        // console.log(state.homeSwitch.showLogin)
        return state.homeSwitch.showLogin
      },
      showRegister: state => state.homeSwitch.showRegister
    })
  },
  methods: {
    setShowLogin () {
      this.$store.commit('homeSwitch/setShowLogin')
    },
    setShowRegister () {
      this.$store.commit('homeSwitch/setShowRegister')
    }
  }
}
</script>

<style>
  .home-contianer {
    margin: 0 auto;
  }
</style>
