import { StudenteTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-5">Lista de alunos</h1>
      <StudenteTable students ={students}/>
    </div>
  );
};

export default page;