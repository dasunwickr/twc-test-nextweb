export type AuthCredentials = {
    email: string;
    password: string;
}

export type AuthResponse = {
    message: string;
    token?: string;
}


export type Contact = {
    id: number;
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
}


export type LayoutPageProps = {
    children: React.ReactNode

}
