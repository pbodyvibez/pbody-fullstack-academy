import {
createContext,
useContext,
useEffect,
useState
} from "react";


const ThemeContext = createContext();



export function ThemeProvider({children}){


const [theme,setTheme] = useState(()=>{


return localStorage.getItem("pbody_theme") || "dark";


});




useEffect(()=>{


document.documentElement.setAttribute(

"data-theme",

theme

);



localStorage.setItem(

"pbody_theme",

theme

);


},[theme]);





const toggleTheme=()=>{


setTheme((current)=>{


if(current==="dark"){

return "light";

}


return "dark";


});


};






return(


<ThemeContext.Provider

value={{

theme,

setTheme,

toggleTheme

}}

>


{children}


</ThemeContext.Provider>


);


}




export function useTheme(){


return useContext(ThemeContext);


}