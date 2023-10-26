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
            const textInput = this.newText.trim()
            if (textInput.length >= 5) {
                const newTask = {
                    text: textInput,
                    done: false
                }
                this.list.unshift(newTask);
            }
            this.newText = ''
            
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