export interface UserType {
  email: string | null;
  password: string | null;
  name?: string | null;
  avatar?: string | null;
  role?: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface UserData {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

//   export const Users = {
//     id: 1,
//     email": "john@mail.com",
//     "password": "changeme",
//     "name": "Jhon",
//     "role": "customer",
//     "avatar": "https://i.imgur.com/LDOO4Qs.jpg"
//   }
