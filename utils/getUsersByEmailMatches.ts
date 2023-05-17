import { IUsersNames, IUsersNumbers, IUsers } from "@/types/IUsers"

export const getUsersByEmailMatches = (arr1: IUsersNames[], arr2: IUsersNumbers[]): IUsers[] => {
    const arrMatches: IUsers[] = [];

    arr1.forEach((item: IUsersNames) => {
        const objMatch = arr2.find((element: IUsersNumbers) => element.email === item.email);

        if (objMatch?.cc_number) {
            const { cc_number } = objMatch;

            arrMatches.push({...item, cc_number});
        }
    });
    
    return arrMatches;
};