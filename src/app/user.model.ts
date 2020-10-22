export class User{
    private uid: string;
    private email: string; 
    private displayName: string; 
    private photoURL: string;
    private lastLoggedIn?: Date;

    constructor(data){
        this.uid = data.uid;
        this.email = data.email;
        this.displayName = data.displayName;
        this.photoURL = data.photoURL;
    }

    getId(){
        return this.uid;
    }

    isAuthorized(){
        return this.uid == "A4nOa6rPYfTci86v3gdShxlLaPx1";
    }
}