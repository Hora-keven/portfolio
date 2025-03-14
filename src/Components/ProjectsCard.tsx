import { SiGithub } from "react-icons/si";

export default function ProjectsCard({ image, title, content, rigth = true, link }: { image: any, title: string, content: string, rigth?: boolean, link: string }) {
    return (

        rigth ? (
            <div className="w-full flex flex-col md:flex-row gap-4 justify-between p-2">
            <div className="w-full md:w-[97rem]">
                <img src={image} alt="" />
            </div>
            <div className="flex justify-center flex-col gap-3">
                <h3 className="font-bold text-[#00df9a]">{title}</h3>
                <p className="text-sm">{content}</p>
                <a href={link}><span><SiGithub size={30} /></span></a>
            </div>
        </div>
        
        )
 :
 <div className="w-full flex flex-col md:flex-row gap-4 justify-between p-2">
 <div className="w-full md:w-[50%] flex justify-center flex-col gap-3 order-2 md:order-1">
     <h3 className="font-bold text-[#00df9a]">{title}</h3>
     <p className="text-sm">{content}</p>
     <a href={link}><span><SiGithub size={30} /></span></a>
 </div>
 <div className="w-full md:w-[35rem] order-1 md:order-2">
     <img src={image} alt="" className="object-cover w-full" />
 </div>
</div>

    )
}
