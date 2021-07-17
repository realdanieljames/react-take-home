function CampaignBlock({data}) {

  return (
    <div>
      {/* ======== Campaign Heading ===================== */}
      <div>
        {/* ==== Campaign Icon ================ */}
        <div>
            <img src={data.campaign_icon_url} alt="" />
        </div>

        {/* ====== Campaign Name =========== */}
        <div></div>

        {/* ===== Campaign Pay Per Install */}
        <div></div>
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
