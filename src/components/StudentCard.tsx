type Props = {
    avatar: string;
    name: string;
    email: string;
}

export const StudentCard = ({ avatar, name, email }: Props) => {
    return (
        <div className="flex p-3 text-left">
            <div>
                <img className="hidden w-12 h-12 rounded-full mr-3 md:inline" src={avatar} alt={name} />
            </div>
            <div>
                <h1 className="text-gray-700 font-bold">{name}</h1>
                <p className="hidden text-gray-600 md:inline">{email}</p>
            </div>
        </div>
    );
}