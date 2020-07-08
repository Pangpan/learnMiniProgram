// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是prop默认的标题',
      observer(newv, oldv){    //观察器，可以观察新值和默认的值
        console.log(newv, oldv)
      }
    },
    content: {
      type: String,
      value: '我是prop默认的内容'
    }
  },

  // 写入从外界（页面）传来的样式
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
