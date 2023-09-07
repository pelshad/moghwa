export interface Login {
    userId: string;
    userPw: string;
}

export interface Signup extends Login {
    userTel: string;
    userEmail: string;
}
