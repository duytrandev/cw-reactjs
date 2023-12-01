export interface IUser {
    _id: string,
    username: string,
    dob: Date,
    lastName: string,
    updatedAt: Date,
    email: string,
    phone: [object & {
        phoneNumber: string
    }],
    address: [object & {
        city: string
    }],
    roles: [string],
    stn: object & {
        status: string,
        levelId: string
    },
    status: string
}

export interface IAuth {
    accessToken: string,
    refreshToken: string,
    expiresIn: string
}

export interface IFacility {
    _id: string,
    name: string
}