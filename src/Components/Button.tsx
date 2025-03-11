
export default function Button({text, goToSection,specificPart}:{text:string, goToSection:any,specificPart:string}) {
  return (
    <button onClick={()=>goToSection(specificPart)} className="hover:text-green-700 duration-300">{text}</button>
  )
}
