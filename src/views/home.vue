<template>
  <div>
    <el-button type="primary" @click="add()">新增</el-button>
    <el-button type="primary">导入</el-button>
    <el-button type="primary">导出</el-button>
    <div style="width: 260px; padding: 8px 0px 8px 0px; display: flex">
      <el-input
        v-model="search"
        placeholder="请输入关键字"
        clearable
        @change="userList()"
      ></el-input>
      <el-button @click="userList()" type="primary" style="margin-left: 15px"
        >查询</el-button
      >
    </div>
    <el-table  :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" v-loading="loading" border stripe>
      <el-table-column prop="id" sortable label="ID"> </el-table-column>
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-popconfirm
            @confirm="delItem(scope.row)"
            title="这是一段内容确定删除吗？"
          >
            <el-button type="danger" slot="reference" style="margin-left: 10px"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input style="width: 85%" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            style="width: 85%"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input style="width: 85%" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input
            style="width: 85%"
            type="textarea"
            v-model="form.address"
          ></el-input>
        </el-form-item>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm(addOrEditor, 'form')"
          >确 定</el-button
        >
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
export default {
  data() {
    return {
      addOrEditor: "1", //1新增2、编辑
      loading: false,
      search: "",
      currentPage: 1,
      pageSize: 10,
      total: 10,
      dialogVisible: false,
      // drawer:false,
      form: {
        username: "",
        password: "",
        sex: "",
        age: "",
        address: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        address: [{ required: true, message: "请填写地址", trigger: "blur" }],
      },
      tableData: [],
    };
  },
  mounted() {
    this.userList();
  },
  methods: {
    //删除
    delItem(row) {
      api.post("/delete", row).then((res) => {
        if (res.code == 0) {
          this.$message.success("删除成功");
          this.userList();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    //获取列表
    userList() {
      this.loading = true;
      let params = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        search: this.search,
      };
      api.userList(params).then((res) => {
        if (res.code == 0) {
          this.tableData = res.data.list;
          this.total = res.data.total;
        }
        this.loading = false;
      });
    },
    add() {
      this.dialogVisible = true;
      this.form = {};
    },
    submitForm(index, formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (index == 1) {
            api
              .post("/user", this.form)
              .then((res) => {
                if (res.code == 0) {
                  this.dialogVisible = false;
                  this.userList();
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            //编辑
            this.redact();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    redact() {
      api
        .post("/editor", this.form)
        .then((res) => {
          if (res.code == 0) {
            this.$message.success("修改成功");
            this.dialogVisible = false;
            this.userList();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleEdit(i, item) {
      this.addOrEditor = 2;
      this.form = item;
      this.dialogVisible = true;
    },
    handleDelete() {},
    handleSizeChange(val) {
      this.pageSize = val;
      this.userList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.userList();
    },
  },
};
</script>

<style scoped>
.block {
  padding-top: 8px;
}
</style>
