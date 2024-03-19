import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export function attemps_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Numbers(result,answers,point){
    return result.map((element,i) => answers[i] == element).filter(i=>i).map(i=>point).reduce((prev,curr) => prev + curr,0);

}

export function flagResult(totalPoints,earnPoints){
    return (totalPoints*50/100)<earnPoints;// earn 50 marks

}

//check user auth
export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace = {true}></Navigate>
}
