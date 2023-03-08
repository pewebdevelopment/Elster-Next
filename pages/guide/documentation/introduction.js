import dynamic from "next/dynamic";
import React from "react";

const Documentations = dynamic(
  () => import("components/docs/Documentations/index"),
  {
    ssr: false,
  }
);

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Documentations />
      </Layout>
    </>
  );
};

export default Index;
