export interface IUser {
    id: string,
    name: string,
    DOB: Date,
    createAt: Date,
    updateAt: Date,
}

export interface IAuth {
    accessToken: string,
    refreshToken: string
}