import Vue from 'vue'
import App from './App.vue'
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'
//import VueKatex from 'vue-katex';
//import 'katex/dist/katex.min.css';
import Md_Katex from '@iktakahiro/markdown-it-katex'



//Vue.use(VueKatex)
//Vue.config.productionTip = false
Vue.use(mavonEditor)


mavonEditor.markdownIt.set({}).use(Md_Katex);
new Vue({
  render: h => h(App),
}).$mount('#app')
