'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
        toDos: [
            {
                text: 'pranzare',
                done: 'true',
            },
            {
                text: 'studiare',
                done: 'true',
            },
            {
                text: 'leggere un libro',
                done: 'false',
            },
            {
                text: 'fare la spesa',
                done: 'true',
            },
            {
                text: 'mangiare una pizza',
                done: 'false',
            },
            {
                text: 'guardare un film',
                done: 'false',
            },
        ],
        newToDo: '',
        
      };
    },
    methods: {
        removeToDo(index){
            this.toDos.splice(index, 1);
        },
        addToDo(){
            // console.log('nuovo to do');
            if(this.newToDo.trim() !== ''){
                this.toDos.push({
                    text: this.newToDo,
                    done: false,
                });
                this.newToDo = '';
            }
        },
    }
  }).mount('#app');