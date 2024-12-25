import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Profile{
    id:number;
    name:string;
    age:number;
    gender:string;
    religion:string;
    location:string;
    maritalStatus:string;
    familyStatus:string;
    familyType:string;
    education:string;
    employedIn:string;
    occupation:string;
    createdAt:string
}

export const useProfiles=()=>{
    const [loading, setLoading] = useState(true);
    const [profiles, setProfiles] =useState<Profile[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/profile/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response =>{
                const sortedProfiles=response.data.profiles.sort((a:Profile, b:Profile)=>{
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
                setProfiles(sortedProfiles);
                setLoading(false);
            })
    },[])

    return {
        loading,
        profiles,
        setProfiles
    }
}