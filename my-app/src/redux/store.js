export let Store = {

	_State: {
		//это метод - убираем лет, равно и стрелку
		_callSubscriber() {
			console.log('state changed ')
		},
		Massage: {
			newMesText: 'aaaa',
			makeArr: [
				{
					id: 1,
					name: 'Katya',
					time: '12:20',
					massage: 'YO',
				},
				{
					id: 2,
					name: 'TASHA',
					time: '12:23',
					massage: 'ьц',
				},
			],
			MyMassage: [

				{ massage: 'hahhaha' },
				{ massage: 'yoyo' },
			]
		},
		Profile: {
			newPostText: '',
			massageData: [

				{
					id: 1,
					message: 'mmmmm',
				},
				{
					id: 2,
					message: 'lorem',
				},
				{
					id: 3,
					message: 'lorem',
				},
				{
					id: 4,
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
				{
					id: 5,
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
				{
					id: 6,
					message: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
				},
			],
		},
	},
	getState() {
		// debugger
		return this._State;
	},
	//=======================================================

	// window.State = State

	AddPost(newtext) {

		let newP = {
			message: newtext
		}
		this._State.Profile.massageData.push(newP)
		this._callSubscriber(this._State)
	},


	updateNewPostText(newtext) {
		this._State.Profile.newPostText = newtext;
		this._callSubscriber(this._State)
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	// updateNewPostText('iwi')
	// console.log(State.Profile.newPostText),

	//я хочу чтобы получился круг - 
	//сейчас валью считывает что находится здесь, но это нужно в конце
	//нужно чтобы символ считывался , приходил в стейт, и потом уже отображался в строке ввода
	//символ считывается, это говорит нам консоль лог, но он не приходит новый, значит дерево не обновляется, которая находится в апдейт
	//почему-то апдейт не функция
	//решить позже



	// debugger
	AddMassage(message) {
		let newM = {
			massage: message,
		};
		this._State.Massage.MyMassage.push(newM)
		this._callSubscriber(this._State)
	},

	updateMesText(newtext) {
		this._State.Massage.newMesText = newtext;
		this._callSubscriber(this._State)
	},

}
window.Store = Store