{
  let Draggie = {}
  Draggie.install = function (Vue, options) {
    const dragEl = {}
    const dropEl = {}
    let {effect, start ,enter} = options ? options : {effect: 'none', start: null, enter: null}
    Vue.directive('draggie', {
      bind: function (el, binding) {
        let {swap, id} = binding.value ? binding.value : {swap: function () {}, id: null}
        function handleDragStart (e) {
          [dragEl.el, dragEl.id, e.dataTransfer.effectAllowed] = [this, id, effect]
          this.classList.add(start)
        }
        function handleDragEnter (e) {
          this.classList.add(enter)
        }
        function handleDragOver (e) {
          if (e.preventDefault()) {
            e.preventDefault()
          }
          e.dataTransfer.dropEffect = effect
          return false
        }
        function handleDragLeave (e) {
          this.classList.remove(enter)
        }
        function handleDragEnd (e) {
          this.classList.remove(start)
        }
        function handleDrop (e) {
          [dropEl.el, dropEl.id] = [this, id]
          if (e.stopPropagation()) {
            e.stopPropagation()
          }
          if (dragEl != dropEl) {
            swap(dragEl, dropEl)
          }
          this.classList.remove(enter)
          return false
        }
        el.addEventListener('dragstart', handleDragStart, false)
        el.addEventListener('dragenter', handleDragEnter, false)
        el.addEventListener('dragover', handleDragOver, false)
        el.addEventListener('dragleave', handleDragLeave, false)
        el.addEventListener('dragend', handleDragEnd, false)
        el.addEventListener('drop', handleDrop, false)
      },
      unbind: function () {
        el.removeEventListener('dragstart', handleDragStart, false)
        el.removeEventListener('dragenter', handleDragEnter, false)
        el.removeEventListener('dragover', handleDragOver, false)
        el.removeEventListener('dragleave', handleDragLeave, false)
        el.removeEventListener('dragend', handleDragEnd, false)
        el.removeEventListener('drop', handleDrop, false)
      }
    })
  }
  if (typeof exports == "object") {
    module.exports = Draggie
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return Draggie })
  } else if (window.Vue) {
    window.Draggie = Draggie
    Vue.use(Draggie)
  }
}
