/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue 
console.log(createApp)

createApp({
    data(){
        return{
            mailApi: {
                text: ''
            }

        }
    },
    methods: {
        created(){
            for(let i = 0; i > 10; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log('prova', response.data)
                    this.todoList.push({
                        text: response.data,
                    })
                });
            }
        }
    }
}).mount('#app')