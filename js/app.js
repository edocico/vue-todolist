const { createApp } = Vue

  createApp({
    data() {
      return {
        list: [
            {
                text: 'fare la spesa',
                done: false
            },
        ]
      }
    }
  }).mount('#app')