// import app from './firebase/app.js'
import {getHellfireClubSubscriptions, subscribeToHellfireClub} from './firebase/hellfire-clube.js'

// console.log(app)

// const txtName = document.getElementById('txtName')

// Macete debugger para manipular os codigos

// manipular o DOM - converte o documento em um objeto
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name: txtName.value, 
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no banco de dados 
    // console.log(subscription)
    const subscriptionId = await subscribeToHellfireClub(subscription)
    

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Inscrito com sucesso: ${subscriptionId}`)
})

// APARECE OS REGISTROS TESTE
// async function loadData () {
//     const subscriptions = await getHellfireClubSubscriptions()

//     subscriptionsList.innerHTML = subscriptions.map(sub => `
//         <li>
//         ${sub.name}
//         </li>
//     `).join('')
//     console.log(subscriptions)
// }

// loadData()


// arrow fuction reduz a sintaxe ->  function salvar(){}
// const salvar() => {} / não tem escopoj
