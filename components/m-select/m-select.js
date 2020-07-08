// components/m-select/m-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changecount(count){
      this.setData({
        count: this.data.count += count
      })
    }
  }
})
