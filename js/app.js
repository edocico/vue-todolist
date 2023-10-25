const { createApp } = Vue

  createApp({
    data() {
      return {
        newText: '',
        list: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'andare al supermercato',
                done: false
            },
        ],
        activeTask: 0,
      }
    },
    methods: {
        addNewTask() {
            if (this.newText.length >= 5) {
                const newTask = {
                    text: this.newText,
                    done: false
                }
                this.list.unshift(newTask);
                this.newText = ''
            }
            
        },
        deleteTask(taskIndex) {
            this.list.splice(taskIndex, 1)
        }
    },
    mounted() {
        console.log('ok')
        console.log(this.list.length)
        console.log(this.newTask.text)
    }
  }).mount('#app')