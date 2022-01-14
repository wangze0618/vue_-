<template>
  <div>
    <span>全选：</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn()">反选</button>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <input type="checkbox" v-model="item.isChecked" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          isChecked: false,
        },
        {
          name: "孙悟空",
          isChecked: false,
        },
        {
          name: "唐僧",
          isChecked: false,
        },
        {
          name: "白龙马",
          isChecked: false,
        },]
    }
  },
  methods: {
    btn() {
      // 实现 反选功能
      this.arr.forEach(e => { e.isChecked = !e.isChecked });
    }
  },
  computed: {
    isAll: {
      set(val) {
        // 实现 全选 影响 小选框
        this.arr.forEach(e => { e.isChecked = val });
      },
      get() {
        // 实现 小选框 影响 全选框
        return this.arr.every(i => i.isChecked === true)
      }
    }
  }
}
</script>

<style>
</style>