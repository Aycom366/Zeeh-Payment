import SectionBanner from "../shared/SectionBanner";

import Auth from "../../images/Authentication.png";

const Authentication = () => {
  return (
    <SectionBanner
      bannerImage={Auth}
      bannerAlt="Zeeh Authentication"
      bgColor="brandGrey.100"
      headerText="Get swift access to your bank accounts"
      HeaderSize="48px"
      sectionText="Customers can use their internet or mobile banking credentials to connect their bank accounts directly to financial applications, making onboarding faster and safer."
      isButton
      isPadding
    />
  );
};

export default Authentication;
