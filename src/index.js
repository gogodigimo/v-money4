import Money4 from './component'
import VMoney4 from './directive'
import options from './options'

export {
  Money4,
  VMoney4,
  options,
  VERSION
}

function install (Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function(key){
      options[key] = globalOptions[key]
    })
  }
  Vue.directive('money4', VMoney4)
  Vue.component('money4', Money4)
}

export default install

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
