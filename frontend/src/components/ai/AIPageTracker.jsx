// ===============================================
// PBODY FULLSTACK ACADEMY
// AI PAGE TRACKER
// ===============================================

import { useEffect, useRef } from "react";

import useAI from "../../ai/useAI";


// ===============================================
// AI PAGE TRACKER
// ===============================================

export default function AIPageTracker({
  page = ""
}) {

  const { setPage } = useAI();

  const lastPage = useRef("");


  useEffect(() => {

    const normalizedPage =
      typeof page === "string"
        ? page.trim()
        : "";

    if (!normalizedPage) {
      return;
    }

    if (lastPage.current === normalizedPage) {
      return;
    }

    lastPage.current = normalizedPage;

    setPage(normalizedPage);

  }, [page, setPage]);


  return null;

}