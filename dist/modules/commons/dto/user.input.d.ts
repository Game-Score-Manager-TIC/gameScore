export declare class UserDto {
    readonly username: string;
    readonly name: string;
    readonly email: number;
    readonly role: 'admin' | 'user';
    readonly status: 'enabled' | 'blocked' | 'deleted';
    readonly avatar?: string;
}
