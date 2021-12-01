<template>
  <el-container>
    <el-main>
      <el-table
        :data="state.tableData"
        style="width: 99.5%"
        row-key="id"
        border
        stripe
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        size="mini"
        height="calc(100vh - 180px)"
      >
        <el-table-column prop="title" label="菜单标题"> </el-table-column>
        <el-table-column prop="id" label="菜单ID" width="100" align="center">
        </el-table-column>
        <el-table-column
          prop="parentID"
          label="父级ID"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="菜单类型"
          align="center"
          width="100"
        >
          <template #default="{ row }">
            {{ row.type === 1 ? '前台' : '后台' }}
          </template>
        </el-table-column>
        <el-table-column prop="menusName" label="menusName"> </el-table-column>
        <el-table-column prop="path" label="菜单Path"> </el-table-column>
        <el-table-column prop="icon" label="icon"> </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template #default="{ row, $index }">
            <div>
              <el-button
                icon="el-icon-plus"
                size="mini"
                type="success"
                @click="addMenus(row.id)"
              ></el-button>
              <el-button
                type="info"
                icon="el-icon-edit"
                size="mini"
                @click="edit(row, $index)"
              ></el-button>
              <el-popconfirm
                confirmButtonText="确定"
                cancelButtonText="取消"
                icon="el-icon-info"
                iconColor="red"
                title="确定删除吗？"
                @confirm="deleteMenus(row, $index)"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    size="mini"
                  ></el-button>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="菜单编辑"
        v-model="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <el-form ref="form" :model="state.form" label-width="110px">
          <el-form-item label="菜单标题">
            <el-input v-model="state.from.title"></el-input>
          </el-form-item>
          <el-form-item label="菜单唯一标识符">
            <el-input v-model="state.from.menusName"></el-input>
          </el-form-item>
          <el-form-item label="菜单路径">
            <el-input v-model="state.from.path"></el-input>
          </el-form-item>
          <el-form-item label="菜单icon图标">
            <el-input v-model="state.from.icon"></el-input>
          </el-form-item>
          <el-form-item label="菜单类型">
            <el-select v-model="state.from.type" placeholder="请选择">
              <el-option label="前台" :value="1" />
              <el-option label="后台" :value="2" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="state.status === '修改' ? updateMenu() : insertMenu()"
              >确 定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </el-main>
    <el-footer>
      <el-form :inline="true" class="demo-form-inline">
        <!--         <el-form-item>
          <el-input
            size="mini"
            v-model="input"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="addMenus(0)"
            plain
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </el-footer>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, onBeforeMount } from 'vue'
import { ElMessage } from 'element-plus'
import { getInfo, insertMenus, delMenus, updateMenus } from '@/api/user/index'
export default defineComponent({
  setup() {
    const state = reactive({
      tableData: [],
      from: {
        title: '',
        menusName: '',
        path: '',
        icon: '',
        parentID: 0,
        type: 1,
        id: 0,
      },
      status: '修改',
    })
    interface dataType {
      title: string
      menusID: string
      parentID: number
      menusName: string
      conponent: string
      path: string
      icon: string
      type: 1
    }
    const addMenus = (parentID) => {
      console.log('id', parentID)
      state.status = '新增'
      state.from = {
        title: '',
        menusName: '',
        path: '',
        icon: '',
        parentID: parentID,
        type: 1,
        id: 0,
      }
      dialogVisible.value = true
    }
    const insertMenu = async () => {
      const { code, msg } = await insertMenus(state.from)
      code === 200 ? ElMessage.success(msg) : ElMessage.error(msg)
      getInfos()
      dialogVisible.value = false
    }
    const giveUp = (row: any, index: number) => {
      if (row.ParentID === 0 && !row.MenusID) {
        state.tableData.splice(index, 1)
      }
    }
    const edit = (row: any, index: number) => {
      state.from = row
      state.status = '修改'
      dialogVisible.value = true
    }
    const deleteMenus = async (row: any, index: number) => {
      await delMenus({ id: row.id })
      getInfos()
    }
    const input = ref('')
    const getInfos = async () => {
      const data = await getInfo()
      state.tableData = data
    }
    const dialogVisible = ref(false)
    const updateMenu = async () => {
      const { code, msg } = await updateMenus(state.from)
      code === 200 ? ElMessage.success(msg) : ElMessage.error(msg)
      getInfos()
      dialogVisible.value = false
    }
    getInfos()
    onBeforeMount(() => {})
    return {
      state,
      giveUp,
      edit,
      deleteMenus,
      input,
      dialogVisible,
      updateMenu,
      addMenus,
      insertMenu,
    }
  },
})
</script>
<style lang="scss">
.el-header,
.el-main {
  margin: 0px;
  padding: 0px;
}
.el-footer {
  height: 40px !important;
  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 0px !important;
  }
}
.el-main {
  height: calc(100vh - 180px);
}
</style>