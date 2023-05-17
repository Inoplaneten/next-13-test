import fsPromises from 'fs/promises';
import path from 'path'

import { IUsersNames, IUsersNumbers } from '@/types/IUsers';

export const UsersAPI = {
    async getNames(): Promise<IUsersNames[]> {
        const filePath = path.join(process.cwd(), "json/email-names.json");
        
        const jsonData = await fsPromises.readFile(filePath);

        const data = JSON.parse(jsonData.toString());

        return data;
    },
    async getNumbers(): Promise<IUsersNumbers[]> {
        const filePath = path.join(process.cwd(), "json/email-numbers.json");

        const jsonData = await fsPromises.readFile(filePath);

        const data = JSON.parse(jsonData.toString());

        return data;
    }
};