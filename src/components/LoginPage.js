import { RiShieldUserFill } from "react-icons/ri";

const LoginPage = ({setLogBtn, show, setShow}) => {
  return (
    <div>
      <div
        className={`
          z-10
          w-full h-full
          fixed top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 
          backdrop-blur-sm transition-all duration-100
          ${show? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <div
        className={`
          z-10
          w-[400px] h-[500px]
          fixed top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 
          p-20 bg-[#0f0f0f] rounded-xl shadow-xl transition-all duration-500
          ${show? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <div className="ml-[17vh] px-[1vh] py-[13vh]">
        <RiShieldUserFill className="text-[#c32929] scale-[1000%]"/>
        </div>
        <div className="relative w-[100vh] h-24 mt-7">
          <input className="name border-1 left-[0vh] absolute  bg-[#545454] border-gray-600 rounded-sm w-2xs  pl-1" placeholder="YOUR NAME"></input>
          <button className="bg-[#c32929] left-[34vh] px-1 absolute rounded-sm cursor-pointer w-2xs h-auto text-amber-50 font-medium " onClick={()=>{
            localStorage.setItem("username",document.querySelector(".name").value);
            setLogBtn(document.querySelector(".name").value);
             setShow(!show);
            }}>Login</button> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
