console.log('JS OK');
/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const app = new Vue({
    el: '#root',
    data: {
        mail: '',
    },
    methods: {},
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            console.log(res.data.response);
            this.mail = res.data.response
        })
    }
})
