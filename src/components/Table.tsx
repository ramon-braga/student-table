import { StudentCard } from "./StudentCard";
import { students } from "@/data/students";

export const Table = () => {
    return (
        <div>
            <table className="w-full text-center bg-slate-400 rounded-md">
                <tr className="bg-gray-800 h-16 text-sm md:text-base">
                    <th className="text-left px-4">Name</th>
                    <th>Status</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th> Final Grade</th>
                </tr>

                {
                    students.map(student => 

                    <tr className="border-b-2 border-gray-500">
                        <td>
                            <StudentCard
                                avatar = {student.avatar}
                                name = {student.name}
                                email = {student.email}
                            />
                        </td>
                        <td>
                            <div className="rounded-md">
                                {student.active ? <p className="inline bg-green-600 text-sm rounded-md p-2">Active</p> : <p className="inline bg-red-600 text-sm rounded-md p-2">Inactive</p>}
                            </div>
                        </td>
                        <td className="text-gray-800">{
                            student.grade1
                        }</td>
                        <td className="text-gray-800">{
                            student.grade2
                        }</td>
                        <td className="text-gray-800">{
                            student.active ? ((student.grade1 + student.grade2) / 2).toFixed(1) : '--'
                        }</td>
                    </tr>
                    
                    )
                }

            </table>
        </div>
    );
}