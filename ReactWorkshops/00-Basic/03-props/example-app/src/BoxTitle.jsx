import clsx from "clsx";

const BoxTitle = ({type, size, weight, color, bgcolor, ...props}) => {

  const titleType = type; //props.type;
  const fontSize = size;//props.size;
  const fontWeight = weight;//props.weight;
  const fontColor = color;//props.color;
  const bgColor = bgcolor;//props.bgColor;

  const className = "text-2xl font-bold text-yellow-500 bg-blue-600";//+bgcolor;

  //const className = `text-${fontSize} font-${fontWeight} text-${fontColor} bg-${bgColor}`;

  switch(titleType)
  {
    case "h1":
      return <h1 className={className}>{props.children}</h1>
    case "h2":
      return <h2 className={className}>{props.children}</h2>
    case "h3":
      return <h3 className={className}>{props.children}</h3>
    case "h4":
      return <h4 className={className}>{props.children}</h4>
    case "h5":
      return <h5 className={className}>{props.children}</h5>
    case "h6":
      return <h6 className={className}>{props.children}</h6>
    default:
      return <h1>test</h1>
  }

}

export default BoxTitle;