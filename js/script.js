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

RAGIONAMENTO BASE MILESTONE 0
1 reare un array di oggetti , ogni oggetto si riferirà a uno degli lementi del team

RAGIONAMENTO BASE MILESTONE 1
1 creare un ciclo per percorrere l'array
  - prendere le informazioni del membro del team contenute nell'oggetto nella posizione corrente dell'array
    - stampare in console le informazioni  
*/

const teamMembers = [
  {
    memberName: 'Wayne Barnett',
    businessRole: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    memberName: 'Angela Caroll',
    businessRole: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',
  },
  {
    memberName: 'Walter Gordon',
    businessRole: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg',
  },
  {
    memberName: 'Angela Lopez',
    businessRole: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',
  },
  {
    memberName: 'Scott Estrada',
    businessRole: 'Developer',
    photo: 'scott-estrada-developer.jpg',
  },
  {
    memberName: 'Barbara Ramos',
    businessRole: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
  }
];

teamMembers.forEach(element => {
  const currentMemberName = element.memberName
  const currentBusinessRole = element.businessRole
  const currentMemberPhoto = element.photo

  console.log('Nome membro: ' + currentMemberName, 'Ruolo membro: ' + currentBusinessRole,'link foto : ' +  currentMemberPhoto)
})