import Vue from 'vue';
import Vuex from 'vuex';

//npm install --save vuex@3.0.0    نسخه 3 باید در ویو 2 نصب شود
Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {  // یک سری متغییرهایی که در پروژه استفاده می کنیم اینجا ذخیره می کنیم
    counter: 0,
    name:'AliAkbar'
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
      //  فقط متغییر ذخیره می شود و ما بعدا برای تغییرش از چند جا باید در همه  state برای این است که ما کد تکراری ننویسیم چون در
      // آن مکان ها ، کد ها را بنویسیم ولی با استفاده از بالا فقط در یک جا می نویسیم و در همه جا استفاده می کنیم
    },
    stringCounter(state){
      return state.counter +' clicks';
    },
    getName(state){
      return state.name;
    }
  },
  mutations: { // یعنی اینجا می توانیم تعداد دهیم زمانی که استفاده می کنیم - state اگر زمانی خواستیم تغییر ایجاد کنیم در
    // استفاده کنیم setTimeOut کدهایی که اینجا قرار می گیرند در لحظه باید اجرا شوند مثلا نمی توانیم
    increment(state, time) {
      return state.counter += time;
    },
    decrement(state, time) {
      return state.counter -= time;
    },
    changeName(state,newName){
      state.name=newName;
    }
  },
  actions: { // در این قسمت می توانیم
    increment(context, time) {
      //console.log(context);
      context.commit('increment', time);  //  یعنی اونجا دنبالش می گرده . mutations بر می گردد به  increment
    },
    decrement(context, time) {
      context.commit('decrement', time);
    },
    asyncIncrement(context, data) { //asyncIncrement({time:50,duration:1500})  در واقع یک آبجکت است که برایش فرستادیم data
      setTimeout(() => {
        context.commit('increment', data.time);
      }, data.duration);
    },
    asyncDecrement(context, data) {
      setTimeout(() => {
        context.commit('decrement', data.time);
      }, data.duration);
    },
    changeName(context,newName){
      context.commit('changeName',newName)
    }
  }
});





