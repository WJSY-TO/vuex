- vuex 数据管理
组件 +　共享数据
1.　共享状态   
-  this.$store
   Vue.use(Vuex) Vue.$store
- this.$store.state
  new Vue({
      store
  }) 
  state = new Vuex.$store({
      state,
      ...
  })

   myVuex Vue.use()
   new myVuex.Store(options)
   options 四大

- es6 的模块化机制
export default xxx
index.js Vuex{ Store,}

- class get 方法
Store是一个类 四大(state,mutation,getters,actions)是他的属性
this.$state 对vue.prototype扩展后，所有的组件都可以调用
Vue 钩子函数，beforeCreated
除了它该做的，再做下vuex的初始化

Vue.mixin({
    beforeCreate:
})
- 让唯一的store对象，state是属性
beforeCreated vue 该怎样，再多this.$store = 
this Vue单例 根组件
beforeCreated  Vue.mixin()实现复用 之前的代码也要运行
通过源码 认识到 所有组件都可以访问$store,是因为它已经为vue 单例加入了这个属性
每个组件里的this -> 本组件 -> prototype -> vue单例


- this.$store.getters.xxxx
跟state不一样的地方 是方法
会返回根据state的新的值
Object.defineProperty(this.$store.getters,xxxx,{
    get(){
       数据劫持
       return store.options.getters[xxxx]
       return getterFn(store.state);
    }
}) 数据劫持

defineProperty 是一个个属性定义
[key,fn]
forEachVal()
registerGetters(this,key,fn);