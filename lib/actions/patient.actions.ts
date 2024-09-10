import { ID, users } from '../appwrite.config';
import { Query } from 'node-appwrite';

export const createUser = async (user : CreateUserParams) => {

    try {

        const newUser = await users.create(ID.unique(), user.email);

    }catch(error:any) {
        if(error && error?.code === 409){
            const exitingUser = await users.list([
                Query.equal('email', [user.email])
            ])

            return exitingUser?.users[0];
        }
    }

}

//time 1.19.22
//link https://www.youtube.com/watch?v=lEflo_sc82g&t=2424s