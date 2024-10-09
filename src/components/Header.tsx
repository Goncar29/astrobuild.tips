import React from "react";

interface Props {
    title: string;
}

export const Header = ({ title }: Props) => {
    return (
        <div className="mx-auto p-4 py-8 dark:bg-gray-900">
            <h1 className="mx-4">
                <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    {title}
                </span>
            </h1>
        </div>
    );
};

