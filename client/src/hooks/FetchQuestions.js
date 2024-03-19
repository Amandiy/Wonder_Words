import { useEffect, useState } from "react"
import data , {answers} from "../database/data"
import Questions from "../components/Questions"
import { useDispatch } from "react-redux"

//redux actions
import * as Action from '../redux/question_reducer'


// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dipatch = useDispatch();
    const [getData,setGetData] = useState({isLoading : false , apiData : [], serverError :null})

    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));

        //async function fetch backend data
        (async ()=>{
            try{
                let question = await data; 

                if(question.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:{question,answers}}));

                    //dipatch an action
                    dipatch(Action.startExamAction({question,answers}))
                }else{
                    throw new Error("No Question Available");
                }

            } catch (error){
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }

        })();
    },[dipatch]);

    return [getData,setGetData];

}

//moveAction Dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction());//increace trace by 1


    } catch (error){
        console.log(error)
    }
}

//prevAction Dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePrevAction());//decreace trace by 1


    } catch (error){
        console.log(error)
    }
}