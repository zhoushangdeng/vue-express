<template>
  <el-container>
    <el-header>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="addMenus"
            plain
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 99.5%"
        row-key="id"
        border
        stripe
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        size="mini"
        height="calc(100vh - 100px)"
      >
        <el-table-column prop="title" label="菜单标题">
          <template #default="{ row, $index }">
            <el-input
              v-model="row.title"
              placeholder="请输入"
              size="mini"
              v-if="currentEdit === $index"
            ></el-input>
            <span v-else>
              {{ row.title }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="MenusID"
          label="菜单ID"
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ParentID"
          label="父级ID"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column prop="MenusName" label="MenusName">
          <template #default="{ row, $index }">
            <el-input
              v-model="row.MenusName"
              placeholder="请输入"
              size="mini"
              v-if="currentEdit === $index"
            ></el-input>
            <span v-else>
              {{ row.MenusName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="Conponent" label="菜单路径">
          <template #default="{ row, $index }">
            <el-input
              v-model="row.Conponent"
              placeholder="请输入"
              size="mini"
              v-if="currentEdit === $index"
            ></el-input>
            <span v-else>
              {{ row.Conponent }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="path" label="菜单Path">
          <template #default="{ row, $index }">
            <el-input
              v-model="row.path"
              placeholder="请输入"
              size="mini"
              v-if="currentEdit === $index"
            ></el-input>
            <span v-else>
              {{ row.path }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="icon" label="icon">
          <template #default="{ row, $index }">
            <el-input
              v-model="row.icon"
              placeholder="请输入"
              size="mini"
              v-if="currentEdit === $index"
            ></el-input>
            <span v-else>
              {{ row.icon }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template #default="{ row, $index }">
            <div v-if="currentEdit === -1">
              <el-button
                icon="el-icon-plus"
                size="mini"
                type="success"
              ></el-button>
              <el-button
                type="info"
                icon="el-icon-edit"
                size="mini"
                @click="edit($index)"
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
            <div v-else>
              <el-button type="text" @click="complete(row, $index)"
                >完成</el-button
              >
              <el-button type="text" @click="giveUp(row, $index)"
                >放弃</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const tableData = reactive([])
    let currentEdit = ref(-1)
    const addMenus = (val = 0) => {
      tableData.unshift({
        title: '',
        MenusID: '',
        ParentID: 0,
        MenusName: '123',
        Conponent: '',
        path: '',
        icon: '',
      })
      currentEdit.value = 0
    }
    const giveUp = (row, index) => {
      if (row.ParentID === 0 && !row.MenusID) {
        tableData.splice(index, 1)
        currentEdit.value = -1
      }
    }
    const complete = (row, index) => {
      currentEdit.value = -1
    }
    const edit = (index) => {
      currentEdit.value = index
    }
    const deleteMenus = (row, index) => {
      tableData.splice(index, 1)
    }
    return {
      addMenus,
      tableData,
      currentEdit,
      giveUp,
      complete,
      edit,
      deleteMenus,
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
.el-header {
  height: 40px !important;
  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 0px !important;
  }
}
.el-main {
  height: calc(100vh - 100px);
}
</style>