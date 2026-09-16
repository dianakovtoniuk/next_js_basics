import prisma from "@/lib/prisma";

const UserTable = async () => {
    const users = await prisma.user.findMany();

    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2 pr-4">Followers</th>
                    <th className="py-2">Active</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="border-b">
                        <td className="py-2 pr-4">{user.name}</td>
                        <td className="py-2 pr-4">{user.email}</td>
                        <td className="py-2 pr-4">{user.followers}</td>
                        <td className="py-2">{user.isActive ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
