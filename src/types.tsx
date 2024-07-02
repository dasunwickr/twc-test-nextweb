export type AuthCredentials = {
    email: string;
    password: string;
}

export type AuthResponse = {
    message: string;
    token?: string;
}

export type LayoutPageProps = {
    children: React.ReactNode

}
