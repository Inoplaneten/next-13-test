import { FC } from "react";

import { IUserCard } from "./types";

const UserCard: FC<IUserCard> = ({ firstName, lastName, email, ccNumber }) => (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`text-2xl font-semibold`}>
            <span  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {firstName}
            </span>
            &nbsp;
            <span  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {lastName}
            </span>
        </h2>
        <a href={`mailto:${email}`}>
            {email}
        </a>
        <p className={`max-w-[30ch] text-sm opacity-50`}>
            {ccNumber}
        </p>
    </div>
);

export { UserCard };