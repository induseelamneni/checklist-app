import { useEffect, useState } from "react";
// import axios from 'axios'

const Home = () =>  {
    const [userData,setUserData] = useState([])
    const [testPassed , setTestPassed] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(()=>{
        getData()
        
    },[])

    const getData = async() => {
        let data = await fetch("http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639")
        let applicationData = await data.json()
        setUserData(applicationData)
        console.log(applicationData)
 
    }

    const applyCheckList = (userData) => {
        let ValueOfLtv = userData.ltv.slice(0, -1);
        let LTV = parseInt(ValueOfLtv)
         setIsChecked(true)

        if(userData.isValuationFeePaid == true && userData.isUkResident == true && userData.riskRating == "Medium" && LTV < 60 ) {
            setTestPassed(true) 
        }else{
            setTestPassed(false)
        }
       
    return testPassed
        
    }

    // const handleAdd = () => {
    //     axios.post('http://localhost:3001/add',{userData : userData})
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err))

    // }

  const onCheck = () => {
    applyCheckList(userData)
    
  }
        return (
            <div>
                {/* <button onClick={handleAdd}>addData</button> */}
                <button onClick={onCheck}>Check List</button>
                {isChecked && (<>
                <h1>{userData.isValuationFeePaid == true ? "Valuation Fee Paid: Check List Passed" :" Valuation Fee Paid: Check List Failed" }</h1>
                <br/>
                <h1>{userData.isUkResident == true ?"UK Resident: Check List Passed" :" UK Resident: Check List Failed"}</h1>
                <br/>
                <h1>Risk Rating: {userData.riskRating == "Medium" ? "Check List Passed":"Check List Failed"}</h1>
                <br/>
                <h1>LTV is {userData.ltv}</h1>
                <br/>
                {testPassed ? <p>All Conditions Passed</p>:<p>Not All Conditions Passed</p>}
                </>)}
            </div>
        );
}

export default Home;