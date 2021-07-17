import {useState, useEffect} from 'react'
import CampaignBlock from './CampaignBlock'

// ===========================================================================================//
// ===========================================================================================//



function Campaign() {

    const [campaignData, setCampaignData]= useState([])

// ===========================================================================================//
// ======== grab data from API Endpoint 'https://www.plugco.in/public/take_home_sample_feed' ============== //
    const GetCampaignData = ()=>{
        fetch('https://www.plugco.in/public/take_home_sample_feed')
        .then((response) => response.json())
        .then((json)=>{
            console.log(json)
            setCampaignData(json.campaigns)
        })
        
    }

// ===========================================================================================//
// ========= UseEffect to run getCampaignData Function on app start/refresh ============ //
    useEffect(()=>{
    
        GetCampaignData()
    },[])
// ===========================================================================================//


    return (
        <div>
            {campaignData.map((data)=>(
                <CampaignBlock data={data} key={data.id}/>
            ))}
        </div>
    )
}

export default Campaign
