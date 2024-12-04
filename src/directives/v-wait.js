export default {
    beforeMount(el, binding) {
      const delay = binding.value || 0; 
      el.style.opacity = '0'; 
  
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s'; 
        el.style.opacity = '1';
      }, delay * 1000); 
    },
  };