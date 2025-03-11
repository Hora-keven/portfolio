import { SiGithub } from "react-icons/si";

export default function ProjectsCard({ image, title, content, rigth = true, link }: { image: any, title: string, content: string, rigth?: boolean, link: string }) {
    return (

        rigth ? (
            <div className=" w-full flex flex-row justify-between p-2">
                <div className="w-[35rem]">
                    <img src={image} alt="" />
                </div>
                <div className="w-[50%] flex justify-center flex-col gap-3">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm">{content}</p>
                    <a href={link}><span><SiGithub size={30} /></span></a>
                </div>
            </div>
        )
 :
            <div className=" w-full flex flex-row justify-between p-2">
                <div className="w-[50%] flex justify-center flex-col gap-3">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm">{content}</p>
                    <a  href={link}><span><SiGithub size={30} /></span></a>
                </div>
                <div className="w-[35rem] relative">
                    <img src={image} alt="" className="object-cover" />
                </div>
            </div>
    )
}
