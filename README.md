# qq_web

> A Vue.js project

- 2019.10.17
  创建基础文件包
  
- 2019.10.23
  对于初始界面的设计和素材的收集

- 2019.11.11
  1. 初步解决 vuex 中 mapMutations 无法访问方法，解决方法采用 this.$store.commit("/homeSwitch/methodName")
  2. 尝试过 ...mapMutation['methodName'] ...mapMutation({methodName: function{...}}) 无效， 原因目前不明
  3. 绝对定位和固定定位 不参与 flex 布局解决方法 在外部设置一个盒子, 设计蒙版特效，其中有position 定位对象的问题。