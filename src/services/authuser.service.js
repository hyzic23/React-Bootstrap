import http from '../http-common'

class AuthuserService {   

    getAllAuthUsers(){
        return http.get("http://localhost:5148/api/Auth/get-all-authusers");
    }

    getAllAuthUsersById(id){
        return http.get(`http://localhost:5148/api/Auth/get-authuser/${id}`);
    }

    createAuthUser(data){       
        return http.post("http://localhost:5148/api/Auth/add-authuser/", data);
    }

    authenticateAuthUser(data){       
        return http.post("http://localhost:5148/api/Auth/authenticate-user", data);
    }

    updateAuthUser(id){       
        return http.put(`http://localhost:5148/api/Auth/update-authuser/${id}`);
    }

    deleteAuthUser(id){       
        return http.delete(`http://localhost:5148/api/Auth/delete-authuser/${id}`);
    }

}

export default new AuthuserService()