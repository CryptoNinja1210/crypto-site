import Layout from "../../components/Layout";

export default function Term() {
  return (
    <Layout>
      <div className="bg-gradient-to-tr to-blue-300 via-blue-400 from-blue-700 w-full flex justify-center">
        {/* <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full flex justify-center"> */}
        <div className="my-24 lg:mx-0 mx-8 lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
          <p className="font-[Playfair] text-[2.5rem] pt-10 pb-5 text-white">
            Terms of Use
          </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center">
        <div className="py-16  px-4 text-3xl w-full lg:w-[1170px]">
          <p className="text-lg">Last updated: October 22, 2021</p>
          <div className="text-sm text-gray-500">
            <p className="py-2">
              AS USED HEREIN, THE TERMS “YOU” AND “USER” SHALL MEAN ANY VISITOR
              TO THE WEBSITE.
            </p>
            <p className="py-2">
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY ACCESSING
              THIS WEBSITE YOU AGREE TO ABIDE BY THE TERMS AND CONDITIONS BELOW.
              These Terms of Use govern your use of and interaction with the
              Website. COBAN CAPITAL , reserve the right, in its sole
              discretion, to change, modify, add or remove any portion of this
              Website, including the Terms and condition, in whole or in part,
              at any time, with or without notice to you. WE WILL NOTIFY YOU OF
              AMENDMENTS TO THESE TERMS AND CONDITIONS BY POSTING THEM TO THIS
              WEBSITE. IF YOU DO NOT ABIDE BY THESE TERMS AND CONDITIONS, PLEASE
              DO NOT ACCESS THIS WEBSITE.
            </p>
            <p className="py-1 text-[13px]">
              If your use of this Website gives rise to any third party claim
              against you or any Coban Capital Party, you agree to (i) indemnify
              and hold harmless the Coban Capital Parties with respect to any
              such claim, (ii) release the Coban Capital Parties from any such
              claim and (iii) waive all laws that may limit the efficacy of such
              release.
            </p>
            <p className="py-1 text-[13px]">
              If any part of the Terms of Use is unlawful, void or
              unenforceable, that part will be deemed severable and will not
              affect the validity and enforceability of any remaining
              provisions. The Terms of Use, together with the Privacy Policy,
              constitute the entire agreement between you and Coban Capital
              relating to your use of the Site. References to “Coban Capital,”
              &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; are references
              to Coban Capital.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
