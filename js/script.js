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
const ulElement = document.getElementById('member-list')

teamMembers.forEach(element => {
  const currentMemberName = element.memberName
  const currentBusinessRole = element.businessRole
  const currentMemberPhoto = element.photo
  const cardHTML =`
  <li class="mt-5 bg-light border">
    <h3>Nome membro: ${ currentMemberName}</h3>
    <h4>Ruolo membro: ${ currentBusinessRole}</h4>
    <a href="${ currentMemberPhoto}" target="_blank">
      foto ${ currentMemberName}
    </a>
  </li>
  `

  ulElement.innerHTML += cardHTML
})
