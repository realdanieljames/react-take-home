function Campaign() {

    const GetCampaignData = ()=>{
        fetch('https://www.plugco.in/public/take_home_sample_feed')
        .then((response) => response.json())
        .then((json)=>{
            console.log(json)
        })
        
    }
    GetCampaignData()

    return (
        <div>
            {/* ======== Campaign Heading ===================== */}
            <div>

                {/* ==== Campaign Icon ================ */}
                <div>

                </div>
                
                {/* ====== Campaign Name =========== */}
                <div>

                </div>

                {/* ===== Campaign Pay Per Install */}
                <div>

                </div>
            </div>

            {/* ====== Campaign Scrollable Media List ================== */}
            <div>

                {/* ============== Campaign Media Cover Photo ============== */}
                <div>

                </div>

                {/* ====== Campaign Media Copy Button =========== */}
                <div>

                </div>

                {/* ======== Campaign Media Download Button =========== */}
                <div>

                </div>

            </div>



        </div>
    )
}

export default Campaign
