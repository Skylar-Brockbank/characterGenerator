const npcGenTable={  
  "setting": [
    "sci-fi ",
    "fantasy",
    "historical",
    "realistic"
  ],
  
  "gender": [
    "Male",
    "Female"
  ],
  "sibGender":[
    "Brother",
    "Sister"
  ],
  "ageRelation":[
    "older",
    "older",
    "older",
    "younger",
    "younger",
    "younger",
    "twin"
  ],
  "startingAge": [
    "5-10",
    "10-15",
    "15-20",
    "20-25",
    "20-25",
    "25-30",
    "25-30",
    "30-35",
    "30-35",
    "35-40",
    "40-45",
    "45-50",
    "50-55",
    "55-60",
    "60+"
  ],
  
  "storyTrend": [
    "comedy",
    "tragedy"
  ],
  
  "characterClasses":[
    "Wizard",
    "Bard",
    "Druid",
    "Warlock",
    "Sorcerer",
    "Cleric",
    "Fighter",
    "Barbarian",
    "Paladin",
    "Ranger",
    "Rogue"
  ],
  
  "living":[
    "alive",
    "dead",
    "other"
  ]
}
const enneagram={
  1:"Responds to discomfort by adhearing to the rules. They feel wronged, taken advantage of, or vulnerable and fight back using laws, rules, and regulations.",
  2:"Responds to low self esteem by taking care of others. They feel that they must have value if they are providing value to others",
  3:"Responds to low self esteem by pursuing high achievement. They feel like they can't be worthless if they're the best at something",
  4:"Responds to low self esteem by highlighting their imperfections as a way of reaffirming their individuality",
  5:"Responds to fear of the world by learning and creating a system of understanding. The world is less scary if you know why things are this way and what is probably coming next",
  6:"Responds to fear of the world by identifying danger and finding saftey. This character will always make the safe choice even if it means giving up individuality to get saftey in numbers",
  7:"Responds to fear of the world by distracting themself. Often engages in vice or fixation to tune out all of the uncomfortable stuff",
  8:"Responds to discomfort by asserting dominance. They are compelled to be stronger than everyone around them because they can't handle feeling vulnerable",
  9:"Responds to discomfort by convincing themself that their situation is fine or that it is what it is."
}
  
const data=["Everhart", "Whitaker", "Stark", "Blackwood", "Davenport","Ashford", "Fairchild", "Hawthorne", "Montgomery", "Lancaster","Winters", "Beaumont", "Rutherford", "Kingsley", "Wellington","Hartley", "Fitzgerald", "Pendleton", "Ainsworth", "Ellington","Holliday", "Grantham", "Lockhart", "Bradshaw", "Sinclair","Winslow", "Harrington", "Middleton", "Langston", "Huntington","Crawford", "Fairfax", "Preston", "Chandler", "Harrison","Aldridge", "Templeton", "Summers", "Fitzpatrick", "Waverly","Delaney", "Stratford", "Hamilton", "Dunhill", "Pembroke","Wentworth",'Aethonwy', 'Blackwood', 'Brindlemark', 'Cairnshadow', 'Darkfire', 'Darksong', 'Dawnrunner', 'Earthhaven', 'Emberfell', 'Evernight', 'Fablewood', 'Fellstrike', 'Fenrisson', 'Fireraven', 'Frostbite', 'Galeforce', 'Glimmerglow', 'Goblinshield', 'Goldenleaf', 'Grimclaw', 'Havensong', 'Hawkwind', 'Hollowstone', 'Ironfist', 'Jaguarclaw', 'Journeyend', 'Keeneye', 'Larkspur', 'Lavendermist', 'Lionheart', 'Moonwhisper', 'Nightwalker', 'Northstar', 'Oceanbreeze', 'Onyxshadow', 'Pebblebrook', 'Phoenixfire', 'Ravenwood', 'Redblade', 'Ridgewalker', 'Riverwind', 'Runekeeper', 'Sandstorm', 'Sapphirewing', 'Shadowglow', 'Silkstrand', 'Silvermist', 'Skydancer', 'Snowflake', 'Sparrowhawk', 'Starlight', 'Steelforge', 'Stormbringer', 'Sundancer', 'Sunshadow', 'Talonclaw', 'Tigerlily', 'Trickster', 'Valkyrie', 'Violetmist', 'Warriorborn', 'Wavecrest', 'Whisperwind', 'Wildflower', 'Windrunner', 'Winterfell', 'Wolfhaven', 'Wyvernwing', 'Xylara', 'Yewshield', 'Zephyrine', 'Asterion', 'Briarrose', 'Carnelian', 'Duskhaven', 'Eldrida', 'Frosthaven', 'Gwyneth', 'Hawthorne', 'Ivoryspire', 'Jaspera', 'Kestrel', 'Luminaria', 'Maren', 'Niamon', 'Opheliana', 'Paxton', 'Quinby', 'Reynolds', 'Sagebrush', 'Torrance', 'Umbra', 'Vespera', 'Waverley', 'Xanthe', 'Yorick', 'Zarael'];
const firstNames = ['Alexander', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Logan', 'Gabriel', 'Michael', 'Daniel', 'Anthony', 'Christopher', 'Joshua', 'Andrew', 'Matthew', 'Joseph', 'Samuel', 'Nicholas', 'Tyler', 'Brandon', 'Ryan', 'Eric', 'Kevin', 'Steven', 'Brian', 'Timothy', 'Justin', 'Edward', 'Austin', 'Christian', 'Robert', 'Charles', 'Thomas', 'Ronald', 'Richard', 'Donald', 'Frank', 'George', 'Harold', 'Gary', 'Larry', 'Jerry', 'Gerald', 'Keith', 'Roger', 'Arthur', 'Raymond', 'Francis', 'Gregory', 'Mark', 'Russell', 'Vincent', 'Philip', 'Stanley', 'Leonard', 'Ralph', 'Eugene', 'Carl', 'Paul', 'Clarence', 'Cecil', 'Duane', 'Lloyd', 'Dennis', 'Glenn', 'Randy', 'Terry', 'Dale', 'Wayne', 'Jeffrey', 'Leroy', 'Marvin', 'Melvin', 'Norman', 'Herman', 'Milton', 'Earl', 'Walter', 'Vernon', 'Bobby', 'Bruce', 'Billy', 'Dwight', 'Floyd', 'Alfred', 'Leslie', 'Weldon', 'Gordon', 'Roy', 'Ivan', 'Jesus', 'Troy', 'Curtis', 'Gilbert', 'Leland', 'Maurice', 'Orville', 'Wilbur', 'Warren', 'Ernest', 'Everett', 'Claude', 'Clifford', 'Sidney', 'Harrison', 'Victor', 'Elmer', 'Emmett', 'Bernard', 'Marshall', 'Stuart', 'Hubert', 'Sylvester', 'Roderick', 'Dominic', 'Frederick', 'Todd', 'Barry', 'Virgil', 'Craig', 'Alan', 'Dean', 'Joel', 'Kirk', 'Louis', 'Norm', 'Perry', 'Spencer', 'Wesley','Olivia', 'Emma', 'Ava', 'Sophia', 'Mia', 'Isabella', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Lily', 'Madison', 'Victoria', 'Jessica', 'Samantha', 'Avery', 'Riley', 'Zoe', 'Chloe', 'Hannah', 'Julia', 'Grace', 'Sadie', 'Piper', 'Mackenzie', 'Georgia', 'Aubrey', 'Scarlett', 'Taylor', 'Kayla', 'Hailey', 'Alexis', 'Jasmine', 'Gianna', 'Catherine', 'Elizabeth', 'Lila', 'Natalie', 'Leah', 'Faith', 'Ruby', 'Savannah', 'Reese', 'Rowan', 'Cecilia', 'Allison', 'Sylvie', 'Daphne', 'Ivy', 'Tessa', 'Quinn', 'Remi', 'Indigo', 'Willow', 'Ophelia', 'Marley', 'Cleo', 'Vivian', 'Peyton', 'Sasha', 'Luna', 'Aria', 'Penelope', 'Maeve', 'Wren', 'Lydia', 'Adeline', 'Josephine', 'Eleanor', 'Cora', 'Alice', 'Rachel', 'Nicole', 'Brielle', 'Lauren', 'Diana', 'Rebecca', 'Stella', 'Margaret', 'Nina', 'Paige', 'Gwen', 'Faye', 'Doris', 'Hazel', 'Irene', 'Mabel', 'Elsie', 'Vera', 'Gladys', 'Ruth', 'Beatrice', 'Esther', 'Josephina', 'Marilyn', 'Carmen', 'Lola', 'Violet', 'Heather', 'Danielle', 'Yvonne', 'Anita', 'Gina', 'Rosa', 'Lorraine', 'Marcia', 'Jacqueline', 'Tanya', 'Melissa', 'Shirley', 'Deborah', 'Helen', 'Carolyn', 'Kristen', 'Pamela', 'Katherine', 'Diane', 'Joan', 'Evelynne', 'Leslie', 'Kathryn', 'Gwendolyn', 'Judith', 'Christine', 'Sheila', 'Erin', 'Dawn', 'Linda', 'Gail', 'Sharon', 'Denise', 'Colleen', 'Donna', 'Marie', 'Paula', 'Annette', 'Judy', 'Carol', 'Sandra', 'Patricia', 'Brenda', 'Lori', 'Rhonda', 'Cindy', 'Lisa', 'Teresa', 'Debra', 'Michelle', 'Robyn', 'Laura', 'Andrea', 'Susan', 'Kathy', 'Theresa', 'Dorothy', 'Gloria', 'Eileen', 'Connie', 'Francine', 'Rita', 'Darlene', 'Charlene', 'Loretta', 'Marilynne', 'Shelly', 'Tracy', 'Stacie', 'Tonya', 'Wanda', 'Velma', 'Becky', 'Belinda', 'Patsy', 'Lola', 'Mattie', 'Nadine', 'Leona', 'Janelle', 'Elaine', 'Karin', 'Sherri', 'Roxanne', 'Cassandra', 'Tiffany', 'Cindy', 'Lynn', 'Tanisha', 'Margo', 'Mona', 'Naomi', 'Latoya', 'Althea', 'Renee', 'Yvette', 'Leticia', 'Kristina', 'Roxie', 'Shawna', 'Elisa', 'Carmela', 'Tanya', 'Lourdes', 'Yolanda', 'Alma', 'Greta', 'Diana', 'Luz', 'Sonia', 'Erika', 'Latasha', 'Malinda', 'Tonia', 'Mireya', 'Lidia', 'Aida', 'Ester', 'Nelda', 'Minerva', 'Elvira', 'Amada', 'Socorro', 'Rosie', 'Loraine', 'Jerri', 'Kelli', 'Loriann', 'Jenifer', 'Kymberly', 'Latonia', 'Shanta', 'Kisha', 'Lashonda', 'Leigh', 'Lakisha', 'Chasity', 'Tawnya', 'Shari', 'Katrice', 'Lavonne', 'Alissa', 'Tammer'];
const islands= ['Azura', 'Valtara', 'Seren', 'Coralia', 'Echoa', 'Calypso', 'Lumin', 'Maren', 'Zephyr', 'Elyria', 'Kairos', 'Serenya', 'Stellaluna', 'Aethere', 'Celestia', 'Ventri', 'Larkspur', 'Mirabel', 'Avalon', 'Elysia', 'Coralla', 'Havenhurst', 'Solara', 'Dreamia', 'Vespera', 'Luminia', 'Calanthe', 'Melodia', 'Celestine', 'Zaraea', 'Elyrian', 'Aria', 'Lumina', 'Sereni', 'Mariposa', 'Estrella', 'Coralline', 'Valtor', 'Luminar', 'Mirabell', 'Solaria', 'Aethon', 'Elysian', 'Ventria', 'Larkspur', 'Celestyn', 'Havenia', 'Stellara', 'Calypsa', 'Elysium', 'Coralia', 'Serenita', 'Zephyrine', 'Aria', 'Lumine', 'Mirabel', 'Estrella', 'Vesper', 'Luminaria', 'Celestia', 'Solara', 'Ventria', 'Larkspur', 'Elyria', 'Aethere', 'Calantha', 'Melodia', 'Coralla', 'Havenhurst', 'Zaraea', 'Elysia', 'Aria', 'Lumina', 'Sereni', 'Mariposa']
let words=['Amor', 'Veritas', 'Lumen', 'Vita', 'Mens', 'Spiritus', 'Cor', 'Anima', 'Natura', 'Scientia', 'Arts', 'Humanitas', 'Civitas', 'Libertas', 'Justitia', 'Pax', 'Felicitas', 'Salus', 'Fortitudo', 'Prudentia', 'Temperantia', ' Industria', 'Pietas', 'Fides', 'Spes', 'Caritas', 'Unitas', 'Disciplina', 'Perseverantia', 'Clementia', 'Magnanimitas', 'Autoritas', 'Dignitas', 'Virtus', 'Honor', 'Gloria', 'Fama', 'Nobilitas', 'Sapientia', 'Prudential', 'Aequitas', 'Benevolentia', 'Celeritas', 'Simplicitas', 'Sincerus', ' Vigor', 'Vitalis', 'Animus', 'Corpore', 'Mentis', 'Sui', 'Rex', 'Regnum', 'Imperium', 'Dominus', 'Potestas', 'Jus', 'Lex', 'Ordo', 'Patria', 'Respublica', 'Societas', 'Civis', 'Populus', 'Gens', 'Natio', 'Lingua', 'Cultura', 'Traditio', 'Hereditas', 'Memoria', 'Historia', 'Monumentum', 'Insignia', 'Symbolus', 'Axioma', 'Theoria', 'Hypothesis', 'Experimentum', 'Observatio', 'Conclusio', 'Demonstratio', 'Probatio', 'Argumentum', 'Ratiocinatio', 'Logica', 'Philosophia', 'Ethica', 'Physica', 'Biologia', 'Geologia', 'Astronomia', 'Mathematica', 'Mechanica', 'Architectura', 'Ingenium', 'Ars', 'Artifex', 'Opus', 'Creatio', 'Inventio', 'Innovatio', 'Progressio', 'Evolutio', 'Mutatio', 'Renovatio', 'Restauratio', 'Conservatio', 'Protectio', 'Salus', 'Sanitas', 'Medicina', 'Chirurgia', 'Pharmacia', 'Nutritio', 'Hygieine', 'Sanatio', 'Cura', 'Therapia', 'Remedium', 'Poenitentia', 'Redemptio', 'Absolutio', 'Indulgentia', 'Clementia', 'Misericordia', 'Pietas', 'Religio', 'Sacramentum', 'Ritus', 'Ceremonia', 'Liturgy', 'Sacrificium', 'Votum', 'Oblatio', 'Donum', 'Munus', 'Officium', 'Beneficium', 'Charitas', 'Eleemosyna', 'Pauper', 'Mendicus', 'Egena', 'Suffragium', 'Patrocinium', 'Tutela', 'Custodia', 'Protegio', 'Defensio', 'Praesidium', 'Munitio', 'Securitas', 'Tutus', 'Incolumis', 'Integritas', 'Castitas', 'Pudicitia', 'Modestia', 'Humilitas', 'Obedientia', 'Submissio', 'Devotio', 'Dedicatio', 'Consecratio', 'Sacrarium', 'Fanum', 'Templum', 'Aedes', 'Delubrum', 'Sacellum', 'Oraculum', 'Augurium', 'Omen', 'Portentum', 'Prodigium', 'Miraculum', 'Signum', 'Indicium', 'Ostentum', 'Apparitio', 'Revelatio', 'Visio', 'Oratio', 'Precatio', 'Votum', 'Invocatio', 'Supplicatio', 'Petitio', 'Postulatio', 'Intercessio', 'Mediatio', 'Interventio', 'Auxilium', 'Succursus', 'Subventio', 'Adiutorium', 'Opitulatio', 'Praesidium']



export class NpcBuilder{
  choose=(list)=>{
    const choice = Math.floor(Math.random()*list.length);
    return list[choice];
  }
  buildNpc=()=>{
    const genCharacter=(base)=>{
      const output ={
        Age:this.choose(npcGenTable.startingAge),
        Class:this.choose(npcGenTable.characterClasses),
        Gender:this.choose(npcGenTable.gender),
        Living:this.choose(npcGenTable.living)
      }
      return({...output,...base})
    }
    const output={Character:genCharacter({Living:'Alive'}),
      Family:{
        Parents:[genCharacter({Gender:'Male'}),genCharacter({Gender:'Female'})],
        Siblings:[]
      }
    }
    if(this.choose([true,true,false])){
      let qty=this.choose([1,2,3]);
      for(let i=0;i<qty;i++){
        let temp=genCharacter();
        if(temp.Gender=='Male'){
          temp.Gender='brother';
        }else{
          temp.Gender='sister';
        }
        temp.Age=this.choose(npcGenTable.ageRelation);
        output.Family.Siblings.push(temp);
      }
    }
    output.Character.Name="";
    output.Character.Notes="";
    output.Character.Types=[this.choose([1,8,9]),this.choose([2,3,4]),this.choose([5,6,7])];
    output.Character.TypeDescriptions=[];
    for(let i in output.Character.Types){
      output.Character.TypeDescriptions.push(enneagram[output.Character.Types[i]]);
    }
    return(output);
  }
}

const printNpc=(npc)=>{
  console.log("Age: ")
  console.log("Class:",npc.Character.Class)
  console.log("___")
  console.log("### Family")
  console.log("```")
  console.log("Parents:")
  console.log("    Father:")
  console.log("        Class:",npc.Family.Parents[0].Class)
  console.log("        Status:",npc.Family.Parents[0].Living)
  console.log("    Mother:")
  console.log("        Class:",npc.Family.Parents[1].Class)
  console.log("        Status:",npc.Family.Parents[1].Living)
  if(npc.Family.Siblings.length>0){
    console.log("Siblings:")
    for(let i in npc.Family.Siblings){
      const target = npc.Family.Siblings[i]
      console.log("    ",target.Age, target.Gender)
      console.log("        Class:",target.Class)
      console.log("        Status:",target.Living)
    }
  }
  console.log("```")
  console.log("___")
  console.log("Enneagram Types:",JSON.stringify(npc.Character.Types))
  for(let i in npc.Character.TypeDescriptions){
    console.log(npc.Character.Types[i])
    console.log(npc.Character.TypeDescriptions[i])
  }
  console.log("___")
}

export class NameGenerator{
	constructor(names,order){
		this.order=order;
		this.lookupTable={}
		this.startingFragments=[];
		
		names.forEach(name=>{
			let paddedName= "~".repeat(order)+name+"~";
			for(let i=1;i<=name.length;i++){
				const token=paddedName.slice(i,i+this.order);
				const nextLetter=paddedName[i+this.order];
				if(!this.lookupTable[token]){
					this.lookupTable[token]={};
				}
				if(!this.lookupTable[token][nextLetter]){
					this.lookupTable[token][nextLetter]=1
				}else{
					this.lookupTable[token][nextLetter]++
				}
				if(i===1){
					this.startingFragments.push(token);
				}
			}
		})
	}
	choose(array){
		const value=Math.floor(Math.random()*array.length)
		return(array[value])
	}
	makeWeightedArray(table,temperature){
		let weightedString='';
		let test=Object.keys(table)
		test.forEach(k=>{	weightedString=weightedString+k.repeat(table[k]+temperature);
		})
		return weightedString.split('');
         
	}
	generateName(temp){
		
		let currentToken=this.choose(this.startingFragments);
		let outputName=currentToken;
		while(true){
			const nextChar=this.choose(this.makeWeightedArray(this.lookupTable[currentToken],temp));
			if(nextChar==='~'){
				break
			}
			outputName=outputName+nextChar;
			currentToken=currentToken.slice(1)+nextChar;
		}
		return outputName.slice(this.order-1)
	}
}

	
	
// const genny= new NameGenerator(firstNames,3);
// const jennay= new NameGenerator(data,3)
// const npcName =genny.generateName(0)+" "+jennay.generateName(0);


// const test = new NpcBuilder();

// const npc = test.buildNpc()

// console.log(npcName)
// printNpc(npc);