import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default  function post(){
    const router = useRouter();
    const {id} = router.query;

    const data = useSelector(state => state.CORS[id]);


    if (data){
        return (
            <>
                <div>{data.title}</div>
            </>
        )
    } else {
        console.log('로딩중')
    }


}