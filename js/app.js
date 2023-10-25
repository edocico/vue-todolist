const { createApp } = Vue

  createApp({
    data() {
      return {
        list: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'andare al supermercato',
                done: false
            }
        ]
      }
    }
  }).mount('#app')