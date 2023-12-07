import { useEffect, useState } from "react";
import { data } from './data';
import { Case, Group } from "../types";

export function useTestGroups(){

    const [groups, setGroups] = useState<Group[]>([])

    useEffect(()=> {
             setGroups(data)       
    },[])
    
    const openInEditor = (testCase:Case) => {
       const { filePath } = testCase
       // TODO
       console.log(filePath);
       
    }

    return [groups, {
        openInEditor,
    }] as const
}