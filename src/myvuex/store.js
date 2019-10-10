// 实例是否是  this.state
export class Store {
    constructor(options, Vue) {
      // console.log(options);
      // 让this.$store 
      // 找到.state
      this.options = options
      this.getters = {}
      // 扩展vue
      // new Vue({
      //   store
      // })
      Vue.mixin({
        beforeCreate: vuexInit
      })
      forEachValue(options.getters,(getterfn,getterName) => {
        //  console.log(getterFn,getterName);
        registerGetter(this,getterName,getterfn);
      })
    }
    // this.$store.state.count 
    // 在获取的同时还可以做其他的事情
    get state() {
        console.log('get 获取属性');
      return this.options.state;
    }
    // set state(val){
    //     throw new Error('不可以直接修改属性,请通过mutations');
    // }
  }
  // this.$store
  function vuexInit() {
    // console.log('实例化之前');this
    // this -> vue 
    const options = this.$options;
    console.log(this, this.$options);
    if (options.store) { //已有
      // this指向vue
      this.$store = typeof options.store === 'function'?options.store():options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }

  function registerGetter(store,getterName,getterFn){
       Object.defineProperty(store.getters,getterName,{
           get:() =>{
               return getterFn(store.state)
           }
       })
  }
  
function forEachValue(obj,fn){
    // console.log(obj,fn);
    // obj 所有的方法遍历一下 fn(name,func)
    Object.keys(obj).forEach(key => fn(obj[key],key));
}
  