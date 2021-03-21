<template>
  <el-container class="login">
    <el-header>
      <h2>dengruo</h2>
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
          <el-form-item label="用户名/邮箱" prop="email">
            <el-input
              v-model="formState.email"
              placeholder="请输入用户名/邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formState.password"
              type="password"
              placeholder="请输入密码，六位数以上"
              @keyup.enter.native="goLogin"
            >
              <i slot="suffix" class="el-icon-view ispan" @click="showPwd"></i>
            </el-input>
          </el-form-item>
          <el-button
            @click="goLogin"
            type="success"
            round
            @keyup.enter.native="goLogin"
            >登录</el-button
          >
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <p>服务热线：15074850577 Email：1912504939@qq.com</p>
      <p>dengruo.com.cn(桂ICP备******) dengruo工作网版权所有©2019</p>
    </el-footer>
  </el-container>
</template>
<script lang="ts" setup="props">
import { setToken } from '@/util/auth'
import { login } from '@/api/user/login'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
interface FormState {
  user: String
  password: String
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
const goLogin = async () => {
  await formRef.value.validate(async (valid) => {
    if (valid) {
      const { code, data } = await login(formState)
      console.log(data)
      if (code === 200) {
        ElMessage.success('登录成功！')
        setToken(data.token, data.id)
        router.push('/')
      } else {
        ElMessage.error(data)
      }
    } else {
      console.log('no')
    }
  })
}
</script>
<style>
.login {
  margin: 0;
  width: 100%;
  height: 100vh;
  color: #fff;
  /*背景颜色设置渐变*/
  background: linear-gradient(0deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
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

.el-header,
.el-footer {
  margin: 0;
  padding: 0;
  height: 35px;
  /*   background-image: url('@/assets/莫哈韦沙漠晚上.jpg'); */
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
</style>