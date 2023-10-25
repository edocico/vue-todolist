const { createApp } = Vue

  createApp({
    data() {
      return {
        newText: '',
        list: [
            
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
        },
        taskDone(taskIndex) {
            if (this.list[taskIndex].done === false) {
                this.list[taskIndex].done = true
            } else {
                this.list[taskIndex].done = false
            }
        }
    },
    mounted() {
        console.log('ok')
        console.log(this.list.length)
        
    }
  }).mount('#app')