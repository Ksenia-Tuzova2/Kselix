// import { renderEntireTree } from "../render";

//  renderEntireTree(State)

  export let State={
	 Massage:{
	makeArr: [
		{
			name: 'Katya',
			time: '12:20',
			massage: 'YO',
		},
		{
			name: 'TASHA',
			time: '12:23',
			massage: 'ьц',
		},
	],
	 },

Profile:{
	massageData :[
		{
			massage: 'mmmmm',
		},
		{
			massage: 'lorem',
		},
		{
			massage: 'lorem',
		},
		{
			massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
		},
		{
			massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
		},
		{
			massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
		},
	],
}
}
// debugger
 export let AddMassage=(newMassage)=>{
	let newMas={massage:newMassage};

State.Massage.makeArr.push(newMas)
}

// debugger
export let AddPost=(newPost)=>{
	let newP={massage:newPost,}

	State.Profile.massageData.push(newP)
}
AddPost('ggggg')