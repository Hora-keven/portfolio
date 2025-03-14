
export default function Button({text, goToSection,specificPart}:{text:string, goToSection:any,specificPart:string}) {
  return (
    <button onClick={()=>goToSection(specificPart)} className="hover:text-[#00df9a] duration-300">{text}</button>
  )
}
