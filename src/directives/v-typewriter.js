export default {
  beforeMount(el, binding) {
    startTyping(el, binding.value);
  },
  updated(el, binding) {
    startTyping(el, binding.value);
  },
};

function startTyping(el, { text, seconds }) {
  let i = 0;
  el.innerHTML = '';

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      let charTiming = (seconds * 1000) / text.length;
      setTimeout(type, charTiming);
    }
  }

  type();
}