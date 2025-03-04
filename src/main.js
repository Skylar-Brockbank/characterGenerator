import './style.css'
// import appLogo from '/Icon.svg'
import { initPWA } from './pwa.js'

import { NameGenerator, NpcBuilder } from './npcGen'
import data from "./assets"

const firstNameGenerator= new NameGenerator(data.firstNames,3);
const lastNameGenerator= new NameGenerator(data.lastNames,3)
const npcName =firstNameGenerator.generateName(0)+" "+lastNameGenerator.generateName(0);

const npcService = new NpcBuilder();

const npc=npcService.buildNpc();

const hasSiblings = npc.Family.Siblings.length>0;

let appAnchor = document.getElementById('app');

class DomBuilder{
  buildElement(obj){
    const temp = document.createElement(obj.element);
    temp.id=obj.id;
    for(let i in obj.properties){
      temp[obj.properties[i].key]=obj.properties[i].value;
    }
    for(let j in obj.children){
      temp.appendChild(this.buildElement(obj.children[j]));
    }
    return temp;
  }
}
const layout={
  element:'div',
  id:'npc',
  properties:[],
  children:[
    {
      element:'h2',
      id:'name',
      properties:[
        {
          key:'innerText',
          value:npcName
        }
      ],
      children:[]
    },
    {
      element:'p',
      id:'age',
      properties:[
        {
          key:'innerText',
          value:"age: "+npc.Character.Age
        }
      ],
      children:[]
    },
    {
      element:'p',
      id:'npc_class',
      properties:[
        {
          key:'innerText',
          value:"class: "+npc.Character.Class
        }
      ],
      children:[]
    },
    {
      element:'div',
      id:'family',
      properties:[
      ],
      children:[
        //family h3
        {
          element:'h3',
          id:'family_title',
          properties:[
            {
              key:'innerText',
              value:"Family"
            }
          ],
          children:[]
        },
        {
          element:'div',
          id:'father',
          properties:[
          ],
          children:[
            {
              element:'h4',
              id:'father_label',
              properties:[
                {
                  key:'innerText',
                  value:"Father"
                }
              ],
              children:[]
            },
            {
              element:'p',
              id:'father_class',
              properties:[
                {
                  key:'innerText',
                  value:"Class: "+npc.Family.Parents[0].Class
                }
              ],
              children:[]
            },
            {
              element:'p',
              id:'father_status',
              properties:[
                {
                  key:'innerText',
                  value:"Status: "+npc.Family.Parents[0].Living
                }
              ],
              children:[]
            },
          ]
        },
        {
          element:'div',
          id:'mother',
          properties:[
          ],
          children:[
            {
              element:'h4',
              id:'mother_label',
              properties:[
                {
                  key:'innerText',
                  value:"Mother"
                }
              ],
              children:[]
            },
            {
              element:'p',
              id:'mother_class',
              properties:[
                {
                  key:'innerText',
                  value:"Class: "+npc.Family.Parents[1].Class
                }
              ],
              children:[]
            },
            {
              element:'p',
              id:'mother_status',
              properties:[
                {
                  key:'innerText',
                  value:"Status: "+npc.Family.Parents[1].Living
                }
              ],
              children:[]
            },
          ]
        },
      ]
    },
    {
      element:'div',
      id:'enneagram',
      properties:[
      ],
      children:[
        
      ]
    },
  ]
}

if(hasSiblings){
  for(let i in npc.Family.Siblings){
    const tempSib ={
      element:'div',
      id:'sibling_'+i,
      properties:[
      ],
      children:[
        {
          element:'h4',
          id:'sibling_'+i+'title',
          properties:[
            {
              key:'innerText',
              value:npc.Family.Siblings[i].Age+" "+npc.Family.Siblings[i].Gender
            }
          ],
          children:[]
        },
        {
          element:'p',
          id:'sibling_'+i+'class',
          properties:[
            {
              key:'innerText',
              value:"Class: "+npc.Family.Siblings[i].Class
            }
          ],
          children:[]
        },
        {
          element:'p',
          id:'sibling_'+i+'class',
          properties:[
            {
              key:'innerText',
              value:"Status: "+npc.Family.Siblings[i].Living
            }
          ],
          children:[]
        },
      ]
    };
    layout.children[3].children.push(tempSib);
  }
}
for(let i in npc.Character.Types){

  const tempDescription ={
    element:'div',
    id:'type_'+npc.Character.Types[i],
    properties:[
    ],
    children:[
      {
        element:'h4',
        id:'type_'+npc.Character.Types[i]+'_title',
        properties:[
          {
            key:'innerText',
            value:'Type '+npc.Character.Types[i]
          }
        ],
        children:[]
      },
      {
        element:'p',
        id:'type_'+npc.Character.Types[i]+"_description",
        properties:[
          {
            key:'innerText',
            value:npc.Character.TypeDescriptions[i]
          }
        ],
        children:[]
      }
    ]
  };
  layout.children[4].children.push(tempDescription);
}
const builder = new DomBuilder();
const divLayout = builder.buildElement(layout);

let characterText=`
  Age: ${npc.Character.Age}\n
  Class: ${npc.Character.Class}\n
  ___ \n
\`\`\`\nFamily \n
    Father \n
        Class: ${npc.Family.Parents[0].Class} \n
        Status: ${npc.Family.Parents[0].Living} \n
    Mother \n
        Class: ${npc.Family.Parents[1].Class} \n
        Status: ${npc.Family.Parents[1].Living} \n
`

if(hasSiblings){
  for(let i in npc.Family.Siblings){
    const target =npc.Family.Siblings[i]
    characterText = characterText+`    ${target.Age} ${target.Gender} \n\n        Class: ${target.Class} \n\n        Status: ${target.Living} \n\n`
  }
}
characterText=characterText+`\`\`\`\n___`
for(let i in npc.Character.Types){
  characterText = characterText+`\n Type ${npc.Character.Types[i]} \n${npc.Character.TypeDescriptions[i]}\n\n`
}

let downloadBlob = new Blob([characterText],{type:'text/plain'});
const blobURL = URL.createObjectURL(downloadBlob);
let downloadButton = document.getElementById('download');
downloadButton['href']=blobURL;
downloadButton.download=`${npcName}.md`

appAnchor.appendChild(divLayout)
initPWA(appAnchor)