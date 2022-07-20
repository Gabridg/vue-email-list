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
        mails: [],
        numberOfMail: 10
    },
    methods: {
        getRandomMail() {
            for (let i = 1; i <= this.numberOfMail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    const email = res.data.response;
                    this.mails.push(email);
                })
            }
        }
    },
})
