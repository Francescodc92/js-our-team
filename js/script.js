/*
Dati: 
Nome           | Ruolo                 | Immagine
-------------- | --------------------- | ------------- 
Wayne Barnett  | Founder & CEO         | wayne-barnett-founder-ceo.jpg
Angela Caroll  | Chief Editor          | angela-caroll-chief-editor.jpg
Walter Gordon  | Office Manager        | walter-gordon-office-manager.jpg
Angela Lopez   | Social Media Manager  | angela-lopez-social-media-manager.jpg
Scott Estrada  | Developer             | scott-estrada-developer.jpg
Barbara Ramos  | Graphic Designer      | barbara-ramos-graphic-designer.jpg

- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

  - MILESTONE 0 :
    - Creare l'array di oggetti con le informazioni fornite.

  - MILESTONE 1 :
    - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

  - MILESTONE 2
    - Stampare le stesse informazioni su DOM sottoforma di stringhe

RAGIONAMENTO BASE MILESTONE 0
1 reare un array di oggetti , ogni oggetto si riferirà a uno degli lementi del team

RAGIONAMENTO BASE MILESTONE 1
1 creare un ciclo per percorrere l'array
  - prendere le informazioni del membro del team contenute nell'oggetto nella posizione corrente dell'array
    - stampare in console le informazioni  


RAGIONAMENTO BASE MILESTONE 2
1 creare degli elementi html che conterranno le info di ogni membro
  - creare l'html e inserire le informazioni al posto giusto
  - popolare l'html con gli elementi creati
*/
/*-------------- 
Data members
--------------*/
const teamMembers = [
  {
    memberName: 'Wayne Barnett',
    businessRole: 'Founder & CEO',
    photo: './img/wayne-barnett-founder-ceo.jpg',
  },
  {
    memberName: 'Angela Caroll',
    businessRole: 'Chief Editor',
    photo: './img/angela-caroll-chief-editor.jpg',
  },
  {
    memberName: 'Walter Gordon',
    businessRole: 'Office Manager',
    photo: './img/walter-gordon-office-manager.jpg',
  },
  {
    memberName: 'Angela Lopez',
    businessRole: 'Social Media Manager',
    photo: './img/angela-lopez-social-media-manager.jpg',
  },
  {
    memberName: 'Scott Estrada',
    businessRole: 'Developer',
    photo: './img/scott-estrada-developer.jpg',
  },
  {
    memberName: 'Barbara Ramos',
    businessRole: 'Graphic Designer',
    photo: './img/barbara-ramos-graphic-designer.jpg',
  }
];
/*-------------- 
Elements HTML
--------------*/
const rowElement = document.querySelector('.row')
const openModalButton = document.getElementById('open-modal')
const closeModalButton = document.getElementById('close-modal')
const bodyElement = document.querySelector('body')
const formElement = document.getElementById('add-new-member')
const inputFullName = document.getElementById('member-name')
const inputRole = document.getElementById('member-role')
const inputPhoto = document.getElementById('member-photo')
/*-----------
app functions
------------*/
const appLoad = ()=> {
  rowElement.innerHTML = ''
  teamMembers.forEach(element => {
   const currentMemberName = element.memberName
   const currentBusinessRole = element.businessRole
   const currentMemberPhoto = element.photo
   const cardHTML = createHTML(currentMemberName, currentBusinessRole, currentMemberPhoto)
   renderHTML(cardHTML, rowElement )
 })
}

const createHTML = (name, role, photo)=> {
  const html = `
    <div class=" col-sm-6 col-lg-4 mt-2">
      <div class="card">
          <img src="${photo}"
            class="card-img-top img-fluid"
            alt="foto ${name}"
          >

          <div class="card-body text-center">
            <h5 class="card-title text-capitalize">${name}</h5>
            <p class="card-text text-capitalize">${role}</p>
            <a href="${photo}" class="btn btn-primary">
              foto ${name}
            </a>
          </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
  `
  return html
}

const renderHTML = (element, target)=> {
  target.innerHTML += element
}
const getDataNewMember = ()=> {
  const newMemberName = inputFullName.value
  const newMemberRole = inputRole.value
  const newMemberPhoto = inputPhoto.value
  
  return { 
    newMemberName,
    newMemberRole,
    newMemberPhoto
  }
}

const isertNewData = data=>{
  console.log(teamMembers)
  teamMembers.push(
    {
      memberName: data.newMemberName,
      businessRole: data.newMemberRole,
      photo: data.newMemberPhoto,
    }
    )
    console.log(teamMembers)
}

const clearFields = () => {
  inputFullName.value = ""
  inputRole.value = ""
  inputPhoto.value = ""
}

closeModalButton.addEventListener('click', ()=> {
  bodyElement.classList.remove('active')
})

openModalButton.addEventListener('click', ()=> {
  window.scroll({
    top: 0,
  })
  bodyElement.classList.add('active')
})

formElement.addEventListener('submit', (e)=> {
  e.preventDefault()
  isertNewData(getDataNewMember())
  bodyElement.classList.remove('active')
  clearFields()
  appLoad()
})

appLoad()



