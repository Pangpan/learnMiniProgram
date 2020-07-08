// components/m-mslot/m-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  // 让使用者可以给组件传入数据
  properties: {

  },

  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 可以监听properties/data的改变
  observers: {
    // 监听组件data里的count属性
    count(newval){
      console.log()
    }
  },

  // ----- 组件中监听生命周期函数 -------
  // 1、监听所在页面的生命周期
  pageLifetimes: {
    show(){
      console.log('监听组件所在页面显示出来时');
    },
    hide(){
      console.log('监听组件所在页面隐藏起来时');
    },
    resize(){
      console.log('监听组件所在页面尺寸发生改变时')
    }
  },

  // 2、监听组件本身的生命周期
  lifetimes: {
    created(){
      console.log('组件被创建出来的时候')
    },
    attached(){
      console.log('组件被添加到页面中的时候')
    },
    ready(){
      console.log('组件被渲染出来的时候')
    },
    moved(){
      console.log('组件被移动到另外一个节点的时候')
    },
    detached(){
      console.log('组件被移除掉的时候')
    }

  }
  
})
