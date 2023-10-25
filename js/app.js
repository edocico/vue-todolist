const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask: {
            text: '',
            done: false
        },
        list: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'andare al supermercato',
                done: false
            },
        ]
      }
    },
    methods: {
        addNewTask() {
            if (this.newTask.text.length > 0) {
                this.list.unshift(this.newTask);
            }
            //this.newTask.text = '';
        }
    },
    mounted() {
        console.log('ok')
        console.log(this.list.length)
        console.log(this.newTask.text)
    }
  }).mount('#app')