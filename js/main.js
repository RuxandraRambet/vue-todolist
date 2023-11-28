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
        ]
        
      };
    },
 
  }).mount('#app');