// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const STORAGE_KEY = 'vue-todo'
export  default {
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items){
      window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
