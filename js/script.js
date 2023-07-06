/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue 

createApp({
    data(){
        return{
            checkEmails :[],
            emailList : []

        }
    },
    created(){
    
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log('prova', response.data.response)
                this.checkEmails.push(
                    response.data.response,
                )
                if(this.checkEmails.length == 10){
                    console.log('finito')
                    
                        this.checkEmails == [...this.emailList]

                    
                }
            });
        }
    
       
    }
    
}).mount('#app')
