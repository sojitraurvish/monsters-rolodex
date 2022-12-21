import './search-box.styles.css';

import { ChangeEventHandler } from 'react';

const myString:string="fsddfsdfsfsd";

const tsrs:(a:string,b:number,c:boolean)=>boolean=(a,b,c)=>{return true;}
const tsrn:(a:string,b:number,c:boolean)=>void=(a,b,c)=>{}

// interface IChangeHandlerProps{
//   onChangeHandler:(a:string)=>void
// }
// interface ISearchBoxProps extends IChangeHandlerProps{
//   className:string;
//   placeholder?:string | null;//if it's an optional property you can put question mark before colon
// }

interface IChangeHandlerProps{
  onChangeHandler:(a:string)=>void
}
interface IChangeHandlerProps {//overloading interface
  className:string;
  placeholder?:string | null;//if it's an optional property you can put question mark before colon
}

//Note interface bring two advantage which is it's gives us to an ability to extend and overloading 

type SearchBoxProps={
  className:string;
  placeholder?:string;
  onChangeHandler:ChangeEventHandler;
}

const SearchBox = ({ className, placeholder, onChangeHandler }:SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e)=>onChangeHandler}
  />
);

export default SearchBox;



//Note : what advantages types bring it gives us to union type

type CanadianAddress={
  street:string;
  province:string;
}

type USAAddress={
  street:string;
  state:string;
}

type ItalianAddress={
  street:string;
  region:string;
}

type Address=CanadianAddress | USAAddress | ItalianAddress;

const Address:Address={
  street:"dsf",
  state:"fdsfs",
  province:"fsfsdf",
  region:"fdsfds"
}


