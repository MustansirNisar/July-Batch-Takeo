import Contact from "./Contact"


export default function About({details:{name, empId, salary}}){
    // const[first, second, third, fourth, fifth] = fNames;
    return(
        <>
        <h1>This is the About Section</h1>
        <h4>Name: {name}</h4>
        <h4>Emp Id: {empId}</h4>
        <h4>Salary: {salary}</h4>
        </>
    )
}



