module.exports = {
	api(url){
		return 'http://localhost:4000'.concat(url); 
	},

  login(email, pass) {
	let data = {
				  email: email,
				  password: pass
				  };
    fetch(this.api('/users/login'), {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
		}).then(status)
		.then((response) => response.json())
		.then(json => {
			console.log(json);
			if (json.result === 0) {
				 localStorage.token = json.usertoken;
				 location.reload();
			}
			else {
			  alert('Unable to login with the given credentials. Please try again');
			}
		})
  },
  register(firstname,lastname,email,pass) {
	   let data = {
		  firstname: firstname,
		  lastname: lastname,
		  email: email,
		  password: pass
	   };
	   let head = {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
	   };
	   let requestParams = {
		  method: 'POST',
		  headers: head,
		  body: JSON.stringify(data)
	   };
	   fetch(this.api('/users/signup'), requestParams)
		  .then(status)
		  .then((response) => response.json())
		  .then(json => {
	 		console.log(json);
			if (json.result === 0) {
				localStorage.token = json.token;
				location.replace("/");
			}
			else {
			  alert('Unable to register with the given credentials. Please try again');
			}
		}) 
  },

	getAccountInfo(){
		let data = {
		  userToken: this.getToken() 
	   }
		let head = {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
	   };
		let requestParams = {
		  method: 'POST',
		  headers: head,
		  body: JSON.stringify(data)
	   };
		 return fetch(this.api('/users/account'), requestParams)
		  .then(status)
			.then((response) => response.json())
		  .then(json => {
				return json
			})
			
	},




  getToken() {
    return localStorage.token
  },

  logout() {
		delete localStorage.token;
		location.reload();
  },

  loggedIn() {
		//return true
    return !!localStorage.token
  },
}

