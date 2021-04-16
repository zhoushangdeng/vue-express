<template>
  <el-container class="login">
    <el-header>
      <h2 style="text-align: center">dengruo</h2>
    </el-header>
    <el-main>
      <div style="height: 400px; width: 400px; margin: 0px auto">
        <el-form
          label-position="top"
          style="margin-top: 5em"
          ref="formRef"
          :rules="loginRules"
          :model="formState"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model.trim="formState.email"
              placeholder="请输入用户名/邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model.trim="formState.password"
              type="password"
              placeholder="请输入密码，六位数以上"
              @keyup.enter="goLogin"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div style="display: flex; justify-content: center">
              <el-button
                @click="goLogin"
                type="success"
                round
                @keyup.enter="goLogin"
                >登录</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <p style="text-align: center">
        服务热线：15074850577<br />
        Email：1912504939@qq.com<br />
      </p>
    </el-footer>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { ElMessage, ElLoading } from 'element-plus'
import { useRouter } from 'vue-router'
import { setToken } from '@/util/auth'
import { login } from '@/api/user/login'
import { useStore } from 'vuex'
export default defineComponent({
  setup: () => {
    interface FormState {
      email: string
      password: string
    }
    const router = useRouter()
    const formRef = ref()
    const formState: FormState = reactive({
      email: '',
      password: '',
    })
    const loginRules = reactive({
      email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
      ],
    })
    const store = useStore()
    const goLogin = async () => {
      await formRef.value.validate(async (valid: any) => {
        let loadingInstance = ElLoading.service({
          fullscreen: true,
          background: '#2c3e5000',
        })
        try {
          if (valid) {
            const { code, data } = await login(formState)
            if (code == 200) {
              ElMessage.success('登录成功！')
              setToken(data.token, data.id)
              router.push('/Home')
            } else {
              ElMessage.error(data)
            }
          }
        } catch (error) {
          console.log(error)
        }
        loadingInstance.close()
      })
    }
    return {
      formRef,
      formState,
      loginRules,
      goLogin,
    }
  },
})
</script>
<style lang="scss">
.login {
  margin: 0;
  width: 100%;
  height: 100vh;
  color: #fff;
  /*背景颜色设置渐变*/
  background: linear-gradient(0deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  .el-header,
  .el-footer {
    margin: 0;
    padding: 0;
    height: 35px;
    color: white;
  }
  .el-main {
    margin: 0;
    padding: 0;
    height: calc(100vh - 120px);
    /* background-image: url('@/assets/莫哈韦沙漠晚上.jpg'); */
  }
  p,
  .el-form-item__label {
    color: white;
  }
}
@keyframes gradientBG {
  0% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 50% 50%;
  }
}

.el-loading-spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  -webkit-animation: typing 2s linear infinite alternate;
  -moz-animation: typing 1s linear infinite alternate;
  animation: typing 2s linear infinite alternate;
  margin: 10px auto;
  position: relative;
  left: 50px;
}
@keyframes typing {
  75% {
    background-color: rgb(2, 243, 130);
    box-shadow: 40px 0px 0px 0px rgb(2, 243, 130),
      80px 0px 0px 0px rgb(2, 243, 130);
  }
}
.el-loading-spinner .circular {
  display: none; //隐藏之前element-ui默认的loading动画
}
</style>