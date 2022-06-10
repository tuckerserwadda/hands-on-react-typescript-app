
export interface IProjectPageProps{
    name:string,
    frameWork:string,
    number:number
}

export  const ProjectPage=({
    name,
    frameWork,
    number
}: IProjectPageProps) =>{
    return(
        <>
        <h1>my first Project</h1>
      
      <div>
          <p>name of project: {name}</p>
          <p>framework used: {frameWork}</p>
          <p>number of developers {number}</p>
      </div>
        </>

    )
}
