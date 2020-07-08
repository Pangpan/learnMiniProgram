// components/m-navbar/m-navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navarr: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changebar(e){
      const index = e.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('changebar', { index })
    }
  }
})
