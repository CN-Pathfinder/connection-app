
export default{
    login : user =>{
        return fetch('/login', {
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data);
    },
    register : user =>{
        return fetch('/register', {
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data);
    },
    logout : ()=>{
        return fetch('/getprofile/logout')
        .then(res=> res.json())
        .then(data => data);
    },
    isAuthenticated : ()=>{
        return fetch('/login/authenticated')
        .then(res=>{
            if(res.status !== 401)
            return res.json().then(data => data);
            else
            return { isAuthenticated : false, user : {username: "", role: ""}};
        });
    },

    profileInformation: ()=>{
        //console.log(user.email)
        return fetch('/getprofile').then(res=>{
            return res.json().then(data => data);
        });
        // , {
        //     method : "get",
        //     body : JSON.stringify(user.email),
        //     headers : {
        //         'Content-Type' : 'application/json'
        //     }
            // .then(res =>{
            //     if(res.status !== 500){
            //         return res.json().then(data => data);
            //     }else 
            //         return{ message: 'Error has occurred'}
            // })
    
        //}
    }, 
    
    userLocation : location =>{
        return fetch('/getprofile/location', {
            method : "post",
            body : JSON.stringify(location),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res =>{
            if(res.status !==500){
                return res.json().then(data => data)
            } else
                return({ message: 'Error has occured'})
            })
         

        },
        userLocation: (location)=>{
            //console.log(user.email)
            return fetch('/getprofile/location').then(res=>{
                return res.json().then(data => data);
            });
        }

}








    // userLocation : location =>{
    //     return fetch('/getprofile/location', {
    //         method : "post",
    //         body : JSON.stringify(location),
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         }
    //     }).then(res =>{
    //         if(res.status !==500){
    //             return res.json().then(data => data)
    //         } else
    //             return({ message: 'Error has occured'})
    //         })

    //     }


    // userLocation: ()=>{
    //     return fetch('/getprofile/location').then(res=>{
    //         return res.json().then(data=>data); 
    //     })
    //    }




    // deleteUser : (user) => {
    //     return fetch('profile/delete', {
    //         method : "post",
    //         body : JSON.stringify(user),
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         }
    //     }).then(response=>{
    //         if(response.status !== 401){
    //             return "Successfully deleted the user.";
    //         }
    //         else {
    //             return {message: 'error'};
    //         } 
    //     });
    // },