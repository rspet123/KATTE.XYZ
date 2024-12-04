export default {
    beforeMount(el, binding) {
      let {text, seconds} = binding.value;
      let i = 0;
      el.innerHTML = '';
  
      function type() {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          let charTiming = (seconds*1000)/text.length
          setTimeout(type, charTiming);
        }
      }
  
      type();
    },
  };