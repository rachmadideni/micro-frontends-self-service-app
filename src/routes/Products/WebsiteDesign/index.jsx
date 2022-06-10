import { Router } from "@reach/router";
import React from "react";
import Review from "../../Review";
import ThankYou from "../../ThankYou";
import LoginPrompt from "../../LoginPrompt";
import BasicInfo from "../components/BasicInfo";
import config from "../../../../config";
import DataExplorationIcon from "../../../assets/images/data-exploration-icon.svg";
import HelpBanner from "components/HelpBanner";
import FeaturedWorkTypeBanner from "../../../components/Banners/FeaturedWorkTypeBanner";
import { webWorkTypes } from "../../../constants/index";
import { WorkType } from "../../../../src-ts/lib";

export default function WebsiteDesign({ isLoggedIn }) {
  const websiteDesign = webWorkTypes.find(
    (workType) => workType.type === WorkType.design
  );

  const { title, subTitle, helperBannerTitle, helperBannerContent } =
    websiteDesign;

  return (
    <Router>
      <BasicInfo
        path="/basic-info"
        isLoggedIn={isLoggedIn}
        bannerData={websiteDesign}
      />
      <LoginPrompt
        path="/login-prompt"
        isLoggedIn={isLoggedIn}
        previousPageUrl="/self-service/work/new/website-design-new/basic-info"
        nextPageUrl="/self-service/work/new/website-design-new/review"
      />
      <Review
        banner={<FeaturedWorkTypeBanner title="REVIEW & PAYMENT" subTitle={title} workType={title} />}
        secondaryBanner={
          <HelpBanner defaultOpen title={helperBannerTitle} styles={["gray"]}>
            {helperBannerContent}
          </HelpBanner>
        }
        path="/review"
        previousPageUrl="/self-service/work/new/website-design-new/basic-info"
        nextPageUrl={
          isLoggedIn
            ? "/self-service/work/new/website-design-new/thank-you"
            : config.SIGN_IN_URL
        }
        icon={<DataExplorationIcon />}
        showIcon
        bannerData={websiteDesign}
      />
      <ThankYou path="/thank-you" />
    </Router>
  );
}
