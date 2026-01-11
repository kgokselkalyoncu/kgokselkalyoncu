import BoxTitle from "./BoxTitle";

const Box = () => {
  return (
    <>
      <div className='box-content size-64 border-4 p-4 rounded-4xl '>
        {/* <BoxTitle type="h1" className="text-2xl font-bold text-sky-500 bg-orange-600" >Başlık</BoxTitle> */}
        <BoxTitle type="h1" size="2xl" weight="bold" color="yellow-500" bgcolor="blue-600" >Başlık</BoxTitle>
      </div>
    </>
  )
}

export default Box;