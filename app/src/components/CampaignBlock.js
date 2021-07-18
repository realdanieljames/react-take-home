function CampaignBlock({ data }) {
  return (
    <div>
      {/* ======== Campaign Heading ===================== */}
      <div className="grid grid-cols-4 m-10">
        {/* ==== Campaign Icon ================ */}
        <div className="pl-5 h-32" >
          <img className="rounded-3xl" src={data.campaign_icon_url} alt="" />
        </div>

        {/* ==== Campaign Heading Text ======= */}
        <div className="grid grid-rows-2 col-span-3 pl-10 ">
          {/* ====== Campaign Name =========== */}
          <div className="text-4xl w-auto row-start-1 pt-3">
            {data.campaign_name}
          </div>

          {/* ===== Campaign Pay Per Install */}
          <div className="text-2xl row-start-2 pt-8 font-semibold text-green-700">
            <p>
                
                {data.pay_per_install} per install
                </p>
                
          </div>
        </div>
      </div>

      {/* ====== Campaign Scrollable Media List ================== */}
      <div>
        {/* ============== Campaign Media Cover Photo ============== */}
        <div></div>

        {/* ====== Campaign Media Copy Button =========== */}
        <div></div>

        {/* ======== Campaign Media Download Button =========== */}
        <div></div>
      </div>
    </div>
  );
}

export default CampaignBlock;
