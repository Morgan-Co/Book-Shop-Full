export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: string
	email: string
	description: string
	password: string
	name: string
}

export interface IAuthResponse {
	refreshToken: string
	user: IUser
}

export interface IEditProfile {
	email: string
	name: string
	description: string
}

// export type TypeUserForm = Omit<IUser, 'id'> & { password: string }
