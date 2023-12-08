import { useEffect, useState } from "react";
import { Case, Group } from "../types";

const endPoint = 'http://localhost:9999'

export function useTestGroups(){

    const [groups, setGroups] = useState<Group[]>([])

    useEffect(()=> {

        const es = new EventSource(`${endPoint}/stream`);

        es.onmessage = function (event) {
            try {
                console.log(JSON.parse(event.data));
                setGroups(JSON.parse(event.data))
            } catch {
                setGroups([])
            }
        };

        es.onerror = function () {
            es.close();
        };
      
        return () => {
            es.close();
        }
    },[])
    
    const openInEditor = (testCase:Case) => {
       const { filePath } = testCase
       const url = `${endPoint}/__open-in-editor?file=${filePath}`
       fetch(url) 
    }

    return [groups, {
        openInEditor,
    }] as const
}